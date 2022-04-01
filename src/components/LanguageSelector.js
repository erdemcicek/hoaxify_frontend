import React from "react";
import { withTranslation } from "react-i18next";
import { changeLanguage } from "../api/apiCalls";

const LanguageSelector = (props) => {
  const onChangeLanguage = (language) => {
    const { i18n } = props;
    i18n.changeLanguage(language);
    changeLanguage(language);
  };

  return (
    <div className="container">
      <img
        src="https://icons.iconarchive.com/icons/wikipedia/flags/48/TR-Turkey-Flag-icon.png"
        onClick={() => onChangeLanguage("tr")}
        style={{ cursor: "pointer" }}
      />
      <img
        src="https://icons.iconarchive.com/icons/wikipedia/flags/48/US-United-States-Flag-icon.png"
        onClick={() => onChangeLanguage("en")}
        style={{ cursor: "pointer" }}
      />
    </div>
  );
};

export default withTranslation()(LanguageSelector);
