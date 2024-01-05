import React, { useEffect, useRef, useState } from "react";

function BookATable(props, ref) {
  const [nameError, setNameError] = useState(false);
  const [phoneError, setPhoneError] = useState(false);
  const [numPersonsError, setNumPersonsError] = useState(false);
  const [reservationDayError, setReservationDayError] = useState(false);
  const [timeError, setTimeError] = useState(false);
  const [validForm, setValidForm] = useState(false);
  const [confirmationMsg, setConfirmationMsg] = useState(false);
  const nameRef = useRef();
  const phoneRef = useRef();
  const numPersonsRef = useRef();
  const reservationDayRef = useRef();
  const hourRef = useRef();
  //Submit form handeling

  const handleSubmit = (e) => {
    e.preventDefault();
    const nameValue = nameRef.current.value;
    const phoneValue = phoneRef.current.value;
    const numPersonsValue = numPersonsRef.current.value;
    const reservationDayValue = reservationDayRef.current.value;
    const hourValue = hourRef.current.value;

    const numberAndSymbolRegex = /[0-9!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]/;
    const letterRegex = /[^\d]/g;

    const isNameError =
      nameValue === "" || numberAndSymbolRegex.test(nameValue);
    const isPhoneError = phoneValue === "" || letterRegex.test(phoneValue);
    const isNumPersonsError =
      numPersonsValue === "" || letterRegex.test(numPersonsValue);
    const isReservationDayError = reservationDayValue === "reservation-day";
    const isTimeError = hourValue === "hour";

    setNameError(isNameError);
    setPhoneError(isPhoneError);
    setNumPersonsError(isNumPersonsError);
    setReservationDayError(isReservationDayError);
    setTimeError(isTimeError);

    if (
      !isNameError &&
      !isPhoneError &&
      !isNumPersonsError &&
      !isReservationDayError &&
      !isTimeError
    ) {
      setValidForm(true);
      setTimeout(() => {
        setConfirmationMsg(true);
      }, 2500);
      setTimeout(() => {
        setValidForm(false);
        setConfirmationMsg(false);
      }, 9000);
    } else {
      setValidForm(false);
      setConfirmationMsg(false);
    }
  };

  const useErrorTimeout = (setError, timeout) => {
    useEffect(() => {
      const timeoutId = setTimeout(() => {
        setError(false);
      }, timeout);

      return () => {
        clearTimeout(timeoutId);
      };
    }, [setError, timeout]);
  };

  // Usage:

  const clearErrors = () => {
    setNameError(false);
    setPhoneError(false);
    setNumPersonsError(false);
    setReservationDayError(false);
    setTimeError(false);
  };

  useErrorTimeout(() => clearErrors(), 2000);

  return (
    <>
      {!confirmationMsg ? (
        <div ref={ref} className="reservations-container">
          <div>
            <h1>Reservations</h1>
            <h2>BOOK A TABLE</h2>
          </div>
          <form onSubmit={handleSubmit} className="form">
            <input
              name="name-input"
              className={nameError ? "error-input" : "name-input"}
              style={{
                color: nameError && "#FF7F7F",
                borderBottomColor: nameError && "#FF7F7F",
              }}
              type="text"
              placeholder="NAME"
              ref={nameRef}
            />
            <input
              name="phone-input"
              className={phoneError ? "error-input" : "phone-input"}
              style={{
                color: phoneError && "#FF7F7F",
                borderBottomColor: phoneError && "#FF7F7F",
              }}
              type="text"
              placeholder="PHONE"
              ref={phoneRef}
            />
            <input
              name="number-ppl-input"
              className={numPersonsError ? "error-input" : "numPersons-input"}
              style={{
                color: numPersonsError && "#FF7F7F",
                borderBottomColor: numPersonsError && "#FF7F7F",
              }}
              type="text"
              placeholder="NUMBER OF PEOPLE"
              ref={numPersonsRef}
            />
            <select
              name="date-select"
              style={{
                color: reservationDayError && "#FF7F7F",
                borderBottomColor: reservationDayError && "#FF7F7F",
              }}
              ref={reservationDayRef}
              defaultValue={"reservation-day"}
            >
              <option value="reservation-day" disabled>
                RESERVATION DAY
              </option>
              <option value="monday">Monday</option>
              <option value="tuesday">Tuesday</option>
              <option value="wedensday">Wedensday</option>
              <option value="thursday">Thursday</option>
              <option value="friday">Friday</option>
              <option value="saturday">Saturday</option>
              <option value="sunday">Sunday</option>
            </select>
            <select
              name="time-select"
              style={{
                color: timeError && "#FF7F7F",
                borderBottomColor: timeError && "#FF7F7F",
              }}
              ref={hourRef}
              defaultValue={"hour"}
            >
              <option disabled value="hour">
                Hour
              </option>
              <option value="10am">10:00 am</option>
              <option value="11am">11:00 am</option>
              <option value="12pm">12:00 pm</option>
              <option value="1pm">1:00 pm</option>
              <option value="2pm">2:00 pm</option>
              <option value="3pm">3:00 pm</option>
              <option value="4pm">4:00 pm</option>
              <option value="5pm">5:00 pm</option>
              <option value="6pm">6:00 pm</option>
              <option value="7pm">7:00 pm</option>
              <option value="8pm">8:00 pm</option>
              <option value="9pm">9:00 pm</option>
            </select>
            <button>{validForm ? "Booking..." : "Book a table"}</button>
          </form>
        </div>
      ) : (
        <div className="confirmation-container">
          <div>
            <h1>Reservations</h1>
            <h2>BOOK A TABLE</h2>
          </div>
          <p>
            Thanks for contacting us! <br /> We will be in touch with you
            shortly.
          </p>
        </div>
      )}
    </>
  );
}

const ForwardedBookATable = React.forwardRef(BookATable);

export default ForwardedBookATable;
