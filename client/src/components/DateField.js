import React, { setGlobal } from "reactn";
import MomentUtils from "@date-io/moment";
import {
  KeyboardDatePicker,
  MuiPickersUtilsProvider
} from "@material-ui/pickers";
import moment from "moment";

class DateField extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      schedule: []
    };

    setGlobal({
      selectedDate: null
    });
  }

  // set the state of the appointmentDate field.
  handleSetAppointmentDate = date => {
    this.setGlobal({ selectedDate: date, stepperDisabled: false });
  };

  // Check for diasble dates
  checkDisableDate = day => {
    const date = moment(day);
    return (
      this.state.schedule[date] === 0 ||
      moment(day)
        .startOf("day")
        .diff(moment().startOf("day")) < 0
    );
  };

  render() {
    return (
      <div>
        <MuiPickersUtilsProvider utils={MomentUtils}>
          <KeyboardDatePicker
            style={{
              marginTop: "1.6rem",
              marginLeft: "1.6rem"
            }}
            autoOk
            disableToolbar
            variant="inline"
            margin="normal"
            id="date-picker-inline"
            label="Select a date"
            format="DD/MM/YYYY"
            value={this.global.selectedDate}
            onChange={date => this.handleSetAppointmentDate(date)}
            shouldDisableDate={day => this.checkDisableDate(day)}
            disablePast
            KeyboardButtonProps={{
              "aria-label": "change date"
            }}
          />
        </MuiPickersUtilsProvider>
      </div>
    );
  }
}

export default DateField;
