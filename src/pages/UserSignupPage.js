import React, { useState } from "react";
import { signUp } from "../api/apiCalls";
import Input from "../components/Input";
import { useTranslation } from "react-i18next";
import ButtonWithProgress from "../components/ButtonWithProgress";
import { useApiProgress } from "../shared/ApiProgress";
import { useDispatch } from "react-redux";
import { signupHandler } from "../redux/authActions";

const UserSignupPage = (props) => {
  const [form, setForm] = useState({
    username: null,
    displayName: null,
    password: null,
    passwordRepeat: null,
  });

  const [errors, setErrors] = useState({});
  const dispatch = useDispatch();

  const onChange = (event) => {
    const { name, value } = event.target;

    const errorsCopy = { ...errors };
    errorsCopy[name] = undefined;

    setErrors((previousError) => ({ ...previousError, [name]: undefined }));
    setForm((previousForm) => ({ ...previousForm, [name]: value }));
  };

  const onClickSignUp = async (event) => {
    event.preventDefault();

    const { history } = props;
    const { push } = history;

    const { username, displayName, password } = form;
    const body = {
      username,
      displayName,
      password,
    };
    //this.setState({ pendingApiCall: true });

    try {
      await dispatch(signupHandler(body));
      push("/");
    } catch (error) {
      if (error.response.data.validationErrors) {
        setErrors(error.response.data.validationErrors);
      }
    }

    //this.setState({ pendingApiCall: false });

    // signUp(body)
    //   .then((response) => {
    //     this.setState({ pendingApiCall: false });
    //   })
    //   .catch((error) => {
    //     this.setState({ pendingApiCall: false });
    //   });
  };

  const { t } = useTranslation();
  const {
    username: usernameError,
    displayName: displayNameError,
    password: passwordError,
  } = errors;
  const pendingApiCallSignup = useApiProgress("post", "/api/1.0/users");
  const pendingApiCallLogin = useApiProgress("post", "/api/1.0/auth");

  const pendingApiCall = pendingApiCallSignup || pendingApiCallLogin;

  let passwordRepeatError;
  if (form.password !== form.passwordRepeat) {
    passwordRepeatError = t("Password mismatch");
  }

  return (
    <div className="container">
      <form>
        <h1 className="text-center">{t("Sign Up")}</h1>
        <Input
          name="username"
          label={t("Username")}
          error={usernameError}
          onChange={onChange}
        />
        {/* <div className="form-group">
            <label>Username</label>
            <input
              className={username ? "form-control is-invalid" : "form-control"}
              name="username"
              onChange={this.onChange}
            />
            <div className="invalid-feedback">{username}</div>
          </div> */}
        <Input
          name="displayName"
          label={t("Display Name")}
          error={displayNameError}
          onChange={onChange}
        />

        <Input
          name="password"
          label={t("Password")}
          error={passwordError}
          onChange={onChange}
          type="password"
        />

        <Input
          name="passwordRepeat"
          label={t("Password Repeat")}
          error={passwordRepeatError}
          onChange={onChange}
          type="password"
        />

        <div className="text-center">
          <ButtonWithProgress
            onClick={onClickSignUp}
            disabled={pendingApiCall || passwordRepeatError !== undefined}
            pendingApiCall={pendingApiCall}
            text={t("Sign Up")}
          />
        </div>
      </form>
    </div>
  );
};

export default UserSignupPage;
