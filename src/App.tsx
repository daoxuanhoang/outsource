import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Login } from "./pages/auth/Login";
import { PrivateRoute } from "./components/common/PrivateRoute";
import Dashboard from "./pages/Dashboard/DashBoard";
import { IRoute } from "./types";
import { routers } from "./utils";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/login" index={true} element={<Login />} />
          <Route path={"/"} element={<PrivateRoute />}>
            {showContentMenu(routers)}
          </Route>
        </Routes>
      </div>
    </Router>
  );
}

const showContentMenu = (routers: any) => {
  var result = null;

  if (routers) {
    result = routers.map((route: IRoute, index: number) => {
      return (
        <Route
          key={index}
          path={route.path}
          index={route.exact}
          element={<route.main />}
        />
      );
    });
  }
  return result;
};

export default App;
