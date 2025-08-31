import React, { useState } from "react";
import "./Registration.css";
import axios from "axios";
const Registration = () => {
  const [newuser, setNewUser] = useState({
    firstName: "",
    middleName: "",
    lastName: "",
    gender: "",
    DoB: "",
    email: "",
    Contactnumber: "",
    Address: "",
    Whoareyou: "",
    Licenseproof: "",
    MLN: "",
    Specialization: "",
    Experience: "",
    HCname: "",
  });
  const Register = async () => {
    const response = await axios.post(
      "http://localhost:8080/registeredusers",
      newuser
    );
    if (response) {
      alert(response.data.message);
    }
    setTimeout(() => {
      window.location.href = "/";
    }, 2000);
  };

  return (
    <>
      <div className="registration-container">
        <h1>Registration</h1>
        <h2>Please fill in the details below:</h2>
        <form
          className="registration-form"
          onSubmit={(e) => {
            e.preventDefault();
            Register();
          }}
        >
          <label> First Name:</label>
          <input
            type="text"
            name="firstName"
            value={newuser.firstName}
            required
            onChange={(e) =>
              setNewUser({ ...newuser, firstName: e.target.value })
            }
          />
          <label> Middle Name :</label>
          <input
            type="text"
            name="middleName"
            value={newuser.middleName}
            required
            onChange={(e) =>
              setNewUser({ ...newuser, middleName: e.target.value })
            }
          />
          <label> Last Name :</label>
          <input
            type="text"
            name="lastName"
            value={newuser.lastName}
            required
            onChange={(e) =>
              setNewUser({ ...newuser, lastName: e.target.value })
            }
          />
          <label> Gender :</label>

          <select
            name="gender"
            value={newuser.gender}
            required
            onChange={(e) => setNewUser({ ...newuser, gender: e.target.value })}
          >
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
          <label> Date of Birth :</label>
          <input
            type="date"
            name="DoB"
            value={newuser.DoB}
            required
            onChange={(e) => setNewUser({ ...newuser, DoB: e.target.value })}
          />
          <label> Email :</label>
          <input
            type="text"
            name="email"
            value={newuser.email}
            required
            onChange={(e) => setNewUser({ ...newuser, email: e.target.value })}
          />
          <label> Contact Number :</label>
          <input
            type="number"
            name="Contactnumber"
            value={newuser.Contactnumber}
            required
            onChange={(e) =>
              setNewUser({ ...newuser, Contactnumber: e.target.value })
            }
          />
          <label> Address :</label>
          <input
            type="text"
            name="Address"
            value={newuser.Address}
            required
            onChange={(e) =>
              setNewUser({ ...newuser, Address: e.target.value })
            }
          />
          <label> Who are you? :</label>

          <select
            name="Whoareyou"
            value={newuser.Whoareyou}
            required
            onChange={(e) =>
              setNewUser({ ...newuser, Whoareyou: e.target.value })
            }
          >
            <option value="">Select</option>
            <option value="doctor">Doctor</option>
            <option value="nurse">Nurse</option>
            <option value="admin">Admin</option>
          </select>
          <label> License Proof :</label>
          <input
            type="text"
            name="Licenseproof"
            value={newuser.Licenseproof}
            required
            onChange={(e) =>
              setNewUser({ ...newuser, Licenseproof: e.target.value })
            }
          />
          <label> MLN :</label>
          <input
            type="text"
            name="MLN"
            required
            value={newuser.MLN}
            onChange={(e) => setNewUser({ ...newuser, MLN: e.target.value })}
          />
          <label> Specialization :</label>
          <input
            type="text"
            name="Specialization"
            required
            value={newuser.Specialization}
            onChange={(e) =>
              setNewUser({ ...newuser, Specialization: e.target.value })
            }
          />
          <label> Experience :</label>
          <input
            type="text"
            name="Experience"
            required
            value={newuser.Experience}
            onChange={(e) =>
              setNewUser({ ...newuser, Experience: e.target.value })
            }
          />
          <label> Healthcare Name :</label>
          <input
            type="text"
            name="HCname"
            required
            value={newuser.HCname}
            onChange={(e) => setNewUser({ ...newuser, HCname: e.target.value })}
          />
          <button type="submit">Register</button>
        </form>
      </div>
    </>
  );
};

export default Registration;
