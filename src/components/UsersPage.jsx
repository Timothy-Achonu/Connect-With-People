import { Route, Routes, NavLink } from "react-router-dom";


const UsersPage = ({ data, id }) => {
  // console.log('userpage :', data)
  let imgSrc = data.picture.medium;
  let fullname = `${data.name.title} ${data.name.first} ${data.name.last}`;
  let email = data.email
  let phone = data.phone
  let username = data.login.username
  // console.log('users', id)
  
  return (
    <div className="user">
      <figure>
        <img src={imgSrc} />
      </figure>
      <h3>{fullname}</h3>
      <h3>@{username}</h3>
      <div>
         <NavLink to={`${id+1}`} > view user details </NavLink>
      </div>
    </div>
  );
};
export default UsersPage;
