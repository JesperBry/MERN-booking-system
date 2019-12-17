import React from "react";
import DateField from "./DateField";
import TimeField from "./TimeField";
import ContactForm from "./ContactForm";

const PageContent = props => {
  switch (props.step) {
    case 0:
      return <DateField />;
    case 1:
      return <TimeField />;
    case 2:
      return <ContactForm />;
    default:
      return;
  }
};

export default PageContent;
