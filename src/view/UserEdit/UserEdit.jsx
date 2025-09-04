import React, { useEffect, useState } from "react";
import "./UserEdit.css";
import axios from "axios";
import { useParams } from "react-router";
const UserEdit = () => {
  const { ID } = useParams();
  const [edituser, setEditUser] = useState({
    firstName: "",
    middleName: "",
    lastName: "",
    gender: "",
    email: "",
    Contactnumber: "",
    Address: "",
    Specialization: "",
    Experience: "",
  });
  const Register = async () => {
    const response = await axios.put(
      `${import.meta.env.VITE_API_URL}/registeredusers/${ID}/`,
      edituser
    );
    if (response) {
      alert(response.data.message);
    }
    setTimeout(() => {
      window.location.href = "/";
    }, 2000);
  };

  const Loaduser = async (ID) => {
    if (!ID) return;

    const response = await axios.get(
      `${import.meta.env.VITE_API_URL}/registeredusers/${ID}`
    );
    const userdetails = response.data.data;
    setEditUser({
      firstName: userdetails.firstName,
      middleName: userdetails.middleName,
      lastName: userdetails.lastName,
      gender: userdetails.gender,
      email: userdetails.email,
      Contactnumber: userdetails.Contactnumber,
      Address: userdetails.Address,
      Specialization: userdetails.Specialization,
      Experience: userdetails.Experience,
    });
  };
  useEffect(() => {
    Loaduser(ID);
  }, [ID]);
  return (
    <>
      <div className="registration-container">
        <h1>Edit User</h1>
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
            value={edituser.firstName}
            required
            onChange={(e) =>
              setEditUser({ ...edituser, firstName: e.target.value })
            }
          />
          <label> Middle Name :</label>
          <input
            type="text"
            name="middleName"
            value={edituser.middleName}
            required
            onChange={(e) =>
              setEditUser({ ...edituser, middleName: e.target.value })
            }
          />
          <label> Last Name :</label>
          <input
            type="text"
            name="lastName"
            value={edituser.lastName}
            required
            onChange={(e) =>
              setEditUser({ ...edituser, lastName: e.target.value })
            }
          />
          <label> Gender :</label>

          <select
            name="gender"
            value={edituser.gender}
            required
            onChange={(e) =>
              setEditUser({ ...edituser, gender: e.target.value })
            }
          >
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
          <label> Email :</label>
          <input
            type="text"
            name="email"
            value={edituser.email}
            required
            onChange={(e) =>
              setEditUser({ ...edituser, email: e.target.value })
            }
          />
          <label> Contact Number :</label>
          <input
            type="number"
            name="Contactnumber"
            value={edituser.Contactnumber}
            required
            onChange={(e) =>
              setEditUser({ ...edituser, Contactnumber: e.target.value })
            }
          />
          <label> Address :</label>
          <input
            type="text"
            name="Address"
            value={edituser.Address}
            required
            onChange={(e) =>
              setEditUser({ ...edituser, Address: e.target.value })
            }
          />
          <label> Specialization :</label>
          <input
            type="text"
            name="Specialization"
            required
            value={edituser.Specialization}
            onChange={(e) =>
              setEditUser({ ...edituser, Specialization: e.target.value })
            }
          />
          <label> Experience :</label>
          <input
            type="text"
            name="Experience"
            required
            value={edituser.Experience}
            onChange={(e) =>
              setEditUser({ ...edituser, Experience: e.target.value })
            }
          />
          <button type="submit">Update</button>
        </form>
      </div>
    </>
  );
};

export default UserEdit;
