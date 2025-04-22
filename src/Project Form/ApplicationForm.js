import "./styleApForm.css";
import { useState } from "react";

export default function ApplicationForm() {
  const [AllInput, SetAllInput] = useState({
    name: "",
    phone: "",
    Age: "",
    mycheck: false,
    salaire: "",
  });
  function handleClick() {
    const myinput = { ...AllInput };
    let All = false;
    function iSTrue() {
      if (myinput.name.length > 7 || myinput.name.length < 3)
        return alert("please Check your Name");
      if (
        myinput.phone.length > 10 ||
        myinput.phone.length < 7 ||
        isNaN(myinput.phone)
      )
        return alert("please Check your number phone ");
      if (isNaN(myinput.Age) || myinput.Age > 90 || myinput.Age < 18)
        return alert("please Check your Age  ");
      return All=true;
    }
    iSTrue();
    if(All){
        alert("your inscription completed");
    }
  }
  return (
    <section>
      <form
        onSubmit={(event) => {
          event.preventDefault();
        }}
      >
        <h2
          style={{
            textTransform: "uppercase",
          }}
        >
          Requesting a Loan
        </h2>
        <hr
          style={{
            height: "2px",
            backgroundColor: "black",
            border: "none",
          }}
        />
        <div className="Name">
          <label>Your Name :</label>
          <input
            value={AllInput.name}
            onChange={(event) => {
              SetAllInput({ ...AllInput, name: event.target.value });
            }}
            type="text"
          />
        </div>
        <div className="Phone">
          <label>Phone Number :</label>
          <input
            value={AllInput.phone}
            onChange={(event) => {
              SetAllInput({ ...AllInput, phone: event.target.value });
            }}
            type="Phone"
          />
        </div>
        <div className="Age">
          <label>Age :</label>
          <input
            placeholder="Age > 10 "
            value={AllInput.Age}
            onChange={(event) => {
              SetAllInput({ ...AllInput, Age: event.target.value });
            }}
            type="number"
          />
        </div>
        <div className="checkbox">
          <label>Are you an Employee ?</label>
          <input
            style={{
              height: "18px",
            }}
            type="checkbox"
            onChange={(event) => {
              SetAllInput({ ...AllInput, mycheck: event.target.checked });
            }}
          />
        </div>
        <select
          value={AllInput.salaire}
          onChange={(event) => {
            SetAllInput({ ...AllInput, salaire: event.target.value });
          }}
        >
          <option>les than 500$</option>
          <option>Between 500$ and 2000$</option>
          <option>Above 2000$</option>
        </select>
        <div>
          <button
            style={{
              padding: "8px 25px",
              marginTop: "15px",
              fontWeight: "bold",
              color: "#000",
            }}
            onClick={() => {
              handleClick();
            }}
            disabled={
              AllInput.name !== "" &&
              AllInput.phone !== "" &&
              AllInput.Age !== ""
                ? false
                : true
            }
          >
            Submit
          </button>
        </div>
      </form>
    </section>
  );
}
