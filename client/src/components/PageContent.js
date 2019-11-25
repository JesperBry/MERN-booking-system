import React from "react";
import Typography from "@material-ui/core/Typography";

import DateField from "./DateField";
import TimeField from "./TimeField";
import ContactForm from "./ContactForm";

class PageContent extends React.Component {
  render() {
    switch (this.props.step) {
      case 0:
        return <DateField />;
      case 1:
        return <TimeField />;
      case 2:
        return <ContactForm />;
      default:
        return;
    }
  }
}

export default PageContent;
