import React, { setGlobal } from "reactn";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Radio from "@material-ui/core/Radio";
import moment from "moment";

class TimeField extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      unavailableSlots: [],
    };

    setGlobal({
      stepperDisabled: true,
    });
  }

  // set the state of the appointmentSlot field.
  handleSetAppointmentSlot = (slot) => {
    this.setState({ appointmentSlot: slot });
  };

  UNSAFE_componentWillMount() {
    fetch(
      `${process.env.REACT_APP_DOMAIN}/api/timeslots/${moment(
        this.global.selectedDate
      ).format("YYYY-MM-DD")}`
    ).then((res) =>
      res
        .json()
        .then((data) =>
          this.setState({
            unavailableSlots: data,
          })
        )
        .catch((error) => {
          console.log(error);
        })
    );
  }

  handleDisabled = (value) => {
    if (
      moment(this.global.selectedDate).day() === 0 || // Sunday
      moment(this.global.selectedDate).day() === 6 || // Saturday
      this.state.unavailableSlots.some((slot) => slot.time === value)
    ) {
      return true;
    }
    return false;
  };

  handelChecked = (event) => {
    if (event.target.checked) {
      this.setGlobal({ timeSlot: event.target.value, stepperDisabled: false });
    }
  };

  render() {
    const workHours = [
      { slot: "08:00 - 09:00", value: "1", disabled: this.handleDisabled("1") },
      { slot: "09:00 - 10:00", value: "2", disabled: this.handleDisabled("2") },
      { slot: "10:00 - 11:00", value: "3", disabled: this.handleDisabled("3") },
      { slot: "11:00 - 12:00", value: "4", disabled: this.handleDisabled("4") },
      { slot: "Lunch break", value: " ", disabled: true },
      { slot: "13:00 - 14:00", value: "5", disabled: this.handleDisabled("5") },
      { slot: "14:00 - 15:00", value: "6", disabled: this.handleDisabled("6") },
      { slot: "15:00 - 16:00", value: "7", disabled: this.handleDisabled("7") },
    ];

    let timeList = workHours.map((slot, i) => {
      return (
        <FormControlLabel
          key={i}
          value={slot.value}
          control={<Radio color="primary" />}
          label={slot.slot}
          disabled={slot.disabled}
          onChange={this.handelChecked}
        />
      );
    });

    return (
      <div>
        <RadioGroup
          style={{
            marginTop: "1.6rem",
            marginLeft: "1.6rem",
          }}
          name="appointmentTimes"
          //defaultSelected={data.appointmentSlot}
          onChange={(evt, val) => this.handleSetAppointmentSlot(val)}
        >
          {timeList}
        </RadioGroup>
      </div>
    );
  }
}

export default TimeField;
