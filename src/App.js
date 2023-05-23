import React from "react";

//Router
import { Routes, Route } from "react-router-dom";

//All Routes
import { authRoutes } from "./routes/allRoutes";

//styles
import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/scss/app.scss";

function App() {
  return (
    <div>
      <Routes>
        {authRoutes.map((route, id) => (
          <Route key={id} path={route.path} element={route.element}></Route>
        ))}
      </Routes>
    </div>
  );
}

export default App;
