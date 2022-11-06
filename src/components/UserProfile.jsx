import { useParams } from "react-router-dom";
import { useEffect } from "react";

const UserProfile = () => {
  useEffect(() => {
    window.scrollTo({ behavior: "smooth", top: "0" });
  }, []);

  const users = JSON.parse(localStorage.getItem("users"));
  let { id } = useParams();
  let index = Number(id);
  let currentUser = users[index - 1];
  let imgSrc;
  let fullname;
  let email;
  let phone;
  if (currentUser !== undefined) {
    imgSrc = currentUser.picture.medium;
    fullname = `${currentUser.name.title} ${currentUser.name.first} ${currentUser.name.last}`;
    email = currentUser.email;
    phone = currentUser.phone;
  }

  const dateJoined = currentUser.registered.date.substring(0,10);
  const dateOfBirth = currentUser.dob.date.substring(0,10);


  return (
  <div>

    {
      Number(index) + 1 > 1 ? 
    <div className="user-profile">
      <div className="details-connect">
        <h2>User details</h2>
        <h2 className="connect">Connect</h2>
      </div>

      <div className="username">
        <div>
          <figure>
            <img src={imgSrc} />
          </figure>
          <div className="name">
            <span> {currentUser.name.first} </span>
            <span> @{currentUser.login.username} </span>
          </div>
        </div>
        <div>
          <span>Date Joined : {dateJoined}</span>
        </div>
      </div>
      <div className="personal-info">
        <h2>Personal Information</h2>
        <div>
          <h3>Name :</h3>
          <p> {fullname}</p>
        </div>
        <div>
          <h3>Gender :</h3>
          <p> {currentUser.gender}</p>
        </div>
        <div>
          <h3>Email : </h3>
          <p> {email}</p>
        </div>
        <div>
          <h3>Date of birth : </h3>
          <p> {dateOfBirth} </p>
        </div>
        <div>
          <h3>Nationality : </h3>
          <p> {currentUser.location.country} </p>
        </div>
        <div>
          <h3>Address : </h3>
          <p>
            {" "}
            {currentUser.location.street.number + " "}
            {currentUser.location.street.name + " " + "street"},
            {"  " + currentUser.location.city + " "},
            {"  " + currentUser.location.state + " "}
            {currentUser.location.country + " "}.
          </p>
        </div>
      </div>
    </div>
    : <h1>Page Not Found</h1>
      }
  </div>
  )
};
export default UserProfile;
