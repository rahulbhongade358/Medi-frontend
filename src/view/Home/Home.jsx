import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router";
import "./Home.css";

const Home = () => {
  const [users, setUsers] = useState([]);
  const LoadUser = async () => {
    const userResponse = await axios.get(
      "http://localhost:8080/registeredusers"
    );
    setUsers(userResponse.data.data);
  };

  useEffect(() => {
    LoadUser();
  }, []);
  const deleteUser = async (ID) => {
    const response = await axios.delete(
      `http://localhost:8080/registeredusers/${ID}`
    );
    if (response) {
      alert(response.data.message);
      LoadUser();
    }
  };

  return (
    <div>
      <h1>Welcome to MEDI-FRONTEND</h1>
      <h2>Registered Users</h2>
      <div>
        {users.map((user) => {
          const {
            ID,
            firstName,
            middleName,
            lastName,
            gender,
            DoB,
            email,
            Contactnumber,
            Address,
            Whoareyou,
            Licenseproof,
            MLN,
            Specialization,
            Experience,
            HCname,
            isApproved,
            registeredAt,
          } = user;
          return (
            <div key={ID} className="user-card">
              <div className="user-info">
                <h2>
                  {firstName} {middleName} {lastName}
                </h2>
                <p className="user-info-item">Register For : {Whoareyou}</p>
                <p className="user-info-item">License Proof: {Licenseproof}</p>
                <p className="user-info-item">MLN: {MLN}</p>
                <p className="user-info-item">
                  Specialization: {Specialization}
                </p>
                <p className="user-info-item">Experience: {Experience}</p>
                <p className="user-info-item">Current Hospital: {HCname}</p>
                <p>Approved: {isApproved ? "Yes" : "No"}</p>
              </div>
              <div className="user-contact">
                <p>Gender: {gender}</p>
                <p>Date of Birth: {DoB}</p>
                <p>Email: {email}</p>
                <p>Contact Number: {Contactnumber}</p>
                <p>Address: {Address}</p>
                <p>
                  Registered On:{" "}
                  {registeredAt.replace("T", " ").substring(0, 19)}
                </p>
              </div>
              <div>
                <button onClick={() => deleteUser(ID)}>Delete</button>
              </div>
              <div className="user-actions">
                <button className="approve-button">Approve</button>
                <button className="reject-button">Reject</button>
              </div>
            </div>
          );
        })}
      </div>
      <Link to="/registration" className="fab">
        Register New User
      </Link>
    </div>
  );
};

export default Home;
