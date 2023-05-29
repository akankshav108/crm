import React, { useEffect } from "react";
import { useSelector } from "react-redux";

//React Router
import { Link } from "react-router-dom";

const Dashboard = () => {
  const token = useSelector((state) => state.auth.token);

  useEffect(() => {
    console.log(token);
  }, [token]);

  return (
    <React.Fragment>
      <div>Dashboard</div>
      <Link to={"/register"}>Register Vendor</Link>
    </React.Fragment>
  );
};

export default Dashboard;
