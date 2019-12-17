import React from "reactn";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import StepContent from "@material-ui/core/StepContent";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";

import PageContent from "./PageContent";

import "../styles/Appointment.css";

class Appointment extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      first_name: "",
      last_name: "",
      email: "",
      phone: "",
      schedule: [],
      appointments: [],
      confirmation: false,
      dateSelected: false,
      finished: false,
      stepIndex: 0
    };
  }

  // componentWillMount() {
  //   fetch("http://localhost:5000/api/timeslots").then(res =>
  //     res
  //       .json()
  //       .then(data =>
  //         this.setState({
  //           appointments: data
  //         })
  //       )
  //       .catch(error => {
  //         console.log(error);
  //       })
  //   );
  // }

  getSteps = () => {
    return [
      "Choose an available day for your appointment",
      "Choose an available time for your appointment",
      "Contact information"
    ];
  };

  stepForward = () => {
    const { stepIndex } = this.state;
    // Handle finish:
    if (this.state.stepIndex === this.getSteps().length - 1) {
      console.log(this.global);
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
              <Typography component="h4" variant="h2">
                You have a 1 hour appointment on ... at ...
              </Typography>
            </Paper>
          </div>
        )}
      </div>
    );
  }
}

export default Appointment;
