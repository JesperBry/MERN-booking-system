import React from "reactn";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import StepContent from "@material-ui/core/StepContent";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import moment from "moment";

import PageContent from "./PageContent";

import timeToDisplay from "./utils/TimeToDisplay";

import "../styles/Appointment.css";

class Appointment extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      finished: false,
      stepIndex: 0
    };
  }

  getSteps = () => {
    return [
      "Choose an available day for your appointment",
      "Choose an available time for your appointment",
      "Contact information"
    ];
  };

  handleFinish = () => {
    fetch("http://localhost:5000/api/appointments/add/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name: `${this.global.firstName} ${this.global.lastName}`,
        email: this.global.email,
        phone: this.global.phone,
        slot: {
          time: this.global.timeSlot,
          date: moment(this.global.selectedDate).format("YYYY-MM-DD")
        }
      })
    }).catch(error => {
      console.log(error);
    });
  };

  stepForward = () => {
    const { stepIndex } = this.state;
    // Handle finish:
    if (this.state.stepIndex === this.getSteps().length - 1) {
      this.handleFinish();
    }
    this.setState({
      stepIndex: stepIndex + 1,
      finished: stepIndex >= 2
    });
  };

  stepBackward = () => {
    const { stepIndex } = this.state;
    if (stepIndex > 0) {
      this.setState({
        stepIndex: stepIndex - 1
      });
    }
  };

  render() {
    const steps = this.getSteps();

    return (
      <div>
        <div className="formStepper">
          <Stepper
            activeStep={this.state.stepIndex}
            orientation="vertical"
            className="stepper"
          >
            {steps.map((label, index) => (
              <Step key={label} className="step">
                <StepLabel>{label}</StepLabel>
                <StepContent>
                  <div>
                    <PageContent step={index} />
                    <div className="buttonContainer">
                      <Button
                        disabled={this.state.stepIndex === 0}
                        onClick={this.stepBackward}
                      >
                        Back
                      </Button>
                      <Button
                        variant="contained"
                        color="primary"
                        onClick={this.stepForward}
                      >
                        {this.state.stepIndex === steps.length - 1
                          ? "Finish"
                          : "Next"}
                      </Button>
                    </div>
                  </div>
                </StepContent>
              </Step>
            ))}
          </Stepper>
        </div>
        {this.state.stepIndex === steps.length && (
          <div className="finishText">
            <Paper square elevation={0}>
              <Typography component="h6" variant="h4">
                You have an appointment on{" "}
                {moment(this.global.selectedDate).format("ddd")}{" "}
                {moment(this.global.selectedDate).format("Do")} at{" "}
                {timeToDisplay(this.global.timeSlot)}
              </Typography>
            </Paper>
          </div>
        )}
      </div>
    );
  }
}

export default Appointment;
