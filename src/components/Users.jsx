import UsersPage from "./UsersPage";
import Pagination from "./Pagination";
import { useState, useEffect, useContext } from "react";
import { Route, Routes, NavLink } from "react-router-dom";
import UserProfile from "./UserProfile";
import NotFound from "./NotFound";


const Users = () => {
  const [users, setUsers] = useState([]);
  // console.log(setUsers)
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch("https://randomuser.me/api/?results=100")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        //  console.log(data.results)
        setLoading(false);
        setUsers(data.results);
      });
  }, []);

  localStorage.setItem("users", JSON.stringify(users))

  return (
    <div>
    
       {loading ? (
        <h1 className="loading">Loading....</h1>
      ) : (
        <Pagination
          data={users}
          pageLimit={5}
          dataLimit={10}
          RenderComponent={UsersPage}
        />
      )} 
       
    </div>
  );
};
export default Users;
