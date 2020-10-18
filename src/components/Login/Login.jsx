import React from "react";
import { Form, Field } from "react-final-form";
import styles from "./Login.module.css"

function LoginPage(props) {
  function checkData(values) {
    let errors = {};
    if (!values.emailField) errors.emailField = "Mail must be required";
    if (!values.passwordField) errors.passwordField =  "The password must be required";
    return errors;
  }

  function sendData(data) {
    props.loginUserThunk(data)
  }

  let isError = false
  if (props.errorsList.length > 0) isError = true

  return (
    <div className={styles.form__wrapper}>
      <h2>Log in to your account</h2>
      <div className={ styles.form }>
        <Form
          validate={(values) => checkData(values)}
          onSubmit={sendData}
          render={({ handleSubmit, form, submitting, pristine, value }) => (
            <form onSubmit={handleSubmit}>
              <Field name="emailField">
                {({ input, meta }) => (
                  <div className={ styles.form__input }>
                    <div>
                      <label>Email</label>
                      <input
                        {...input}
                        type="text"
                        placeholder="Input your email..."
                      />
                    </div>
                    { meta.error && meta.touched && <span className={styles.error}>{meta.error}</span> }
                  </div>
                )}
              </Field>
              <Field name="passwordField">
                {({ input, meta }) => (
                  <div className={ styles.form__input }>
                    <div>
                      <label>Password</label>
                      <input
                        {...input}
                        type="password"
                        placeholder="Input your password..."
                      />
                    </div>
                   { meta.error && meta.touched && <span className={styles.error}>{meta.error}</span> }
                  </div>
                )}
              </Field>
              <div className={styles.form__right}>
                <div className={styles.form__left}>
                  <div className={ styles.checkbox }>
                    <label htmlFor="inputCheckbox">Remember me</label>
                    <Field id="inputCheckbox" name="rememberMeField" component="input" type="checkbox" />
                  </div>
                  <button type="submit">Log in</button>
                </div>
                <div className={styles.errorsList}>
                  { 
                    isError ? props.errorsList.map(err => {
                      return <span key={err} className={styles.error}>{ err }</span>
                    }) : ""
                  }
                </div>
              </div>
            </form>
          )}
        />
      </div>
    </div>
  );
}

export default LoginPage;
