import React, { useEffect, useRef, useState } from "react";

function DropUsAMessage() {
  const [nameError, setNameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [messageError, setMessageError] = useState(false);
  const [validForm, setValidForm] = useState(false);
  const [confirmationMsg, setConfirmationMsg] = useState(false);
  const nameRef = useRef();
  const emailRef = useRef();
  const messageRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    const nameValue = nameRef.current.value;
    const emailValue = emailRef.current.value;
    const messageValue = messageRef.current.value;

    const isNameError = nameValue === "";
    const isEmailError = !/^\S+@\S+\.\S+$/.test(emailValue);
    const isMessageError = messageValue === "";

    setNameError(isNameError);
    setEmailError(isEmailError);
    setMessageError(isMessageError);

    if (!isNameError && !isEmailError && !isMessageError) {
      setValidForm(true);
      setTimeout(() => setConfirmationMsg(true), 2500);
      setTimeout(() => {
        setValidForm(false);
        setConfirmationMsg(false);
      }, 9000);
    } else setValidForm(false), setConfirmationMsg(false);
  };

  const ErrorMessage = (setError, timeout) => {
    useEffect(() => {
      const timeoutId = setTimeout(() => {
        setError(false);
      }, timeout);

      return () => {
        clearTimeout(timeoutId);
      };
    }, [setError, timeout]);
  };

  ErrorMessage(() => setNameError(false), 2000);
  ErrorMessage(() => setEmailError(false), 2000);
  ErrorMessage(() => setMessageError(false), 2000);

  return (
    <>
      {!confirmationMsg ? (
        <div className="drop-a-message-container">
          <h2>Drop us a Message</h2>
          <form onSubmit={handleSubmit}>
            <input
              className={nameError ? "error-placeholder" : ""}
              name="name"
              autoComplete="name"
              style={{
                color: nameError && "#FF7F7F",
                borderBottomColor: nameError && "#FF7F7F",
              }}
              type="text"
              placeholder="Name"
              ref={nameRef}
            />
            <input
              className={nameError ? "error-placeholder" : ""}
              name="email"
              autoComplete="email"
              style={{
                color: emailError && "#FF7F7F",
                borderBottomColor: emailError && "#FF7F7F",
              }}
              type="text"
              placeholder="Email"
              ref={emailRef}
            />
            <textarea
              className={messageError ? "error-placeholder" : ""}
              style={{
                color: messageError && "#FF7F7F",
                borderBottomColor: messageError && "#FF7F7F",
                resize: "none",
              }}
              name="message"
              cols="30"
              rows="3"
              placeholder="Message"
              ref={messageRef}
            ></textarea>
            <button>{validForm ? "Submiting..." : "Submit"}</button>
          </form>
        </div>
      ) : (
        <div className="drop-a-message-confirmation">
          <h2 className="drop-us-a-msg">Drop us a Message</h2>
          <p>
            Thanks for contacting us! <br /> We will be in touch with you
            shortly
          </p>
        </div>
      )}
    </>
  );
}

export default DropUsAMessage;
