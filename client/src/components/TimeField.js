import React from "react";
import RadioGroup from "@material-ui/core/RadioGroup";

class TimeField extends React.Component {
  // set the state of the appointmentSlot field.
  handleSetAppointmentSlot = slot => {
    this.setState({ appointmentSlot: slot });
  };

  render() {
    return (
      <div>
        <RadioGroup
          style={{
            marginTop: "1.6rem",
            marginLeft: "1.6rem"
          }}
          name="appointmentTimes"
          //defaultSelected={data.appointmentSlot}
          onChange={(evt, val) => this.handleSetAppointmentSlot(val)}
        />
      </div>
    );
  }
}

export default TimeField;
