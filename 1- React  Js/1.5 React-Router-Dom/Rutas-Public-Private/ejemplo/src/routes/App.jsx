import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "../Components/Login";
import Register from "../Components/Register";
import { AuthContext } from "../context/AuthContext";
import { useReducer } from "react";
import reducersUser from "../reducers/reducers/reducersUser";
import PublicRouter from "./PublicRouter";
import PrivateRouter from "./PrivateRouter";
import DashboardRouter from "./DashboardRouter";


const init = () => {
  return { logged: false };
};
function App() {
  const [state, dispatch] = useReducer(reducersUser, {}, init);

  return (
    <AuthContext.Provider value={{ state, dispatch }}>
      <BrowserRouter>
        <Routes>
          {/* Rutas Públicas  */}
          <Route
            path="/login"
            element={
              <PublicRouter>
                <Login />
              </PublicRouter>
            }
          />

          <Route
            path="/register"
            element={
              <PublicRouter>
                <Register />
              </PublicRouter>
            }
          />

          {/* Rutas Privadas */}
          <Route
            path="/*"
            element={
              <PrivateRouter>
                <DashboardRouter/>
              </PrivateRouter>
            }
          />
        </Routes>
      </BrowserRouter>
    </AuthContext.Provider>
  );
}

export default App;
