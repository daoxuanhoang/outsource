import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import { routers } from "./utils";
import { IRoute } from "./types/app";
import { useUser } from "./hooks/useUser";
import { Login } from "./pages/auth/Login";

function App() {
  const { checkAuth } = useUser();
  return (
    <Router>
      <div className="App">
        <Routes>
          {/* {localStorage.getItem("user") === null ? (
            <Route path="/login" index={true} element={<Login />} />
          ) : ( */}
            {showContentMenu(routers)}
          {/* )} */}
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
