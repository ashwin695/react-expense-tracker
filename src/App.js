import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import Layout from "./Components/Layout";
import UserProfile from "./Components/Profile/UserProfile";
import AuthPage from "./Page/SignUp";
import HomePage from "./Page/Home";
import { AuthContextProvider } from "./Page/auth-context";
import AuthContext from "./Page/auth-context";
import { useContext } from "react";

function App() {
  const authCtx = useContext(AuthContext);

  return (
    <div>
      <AuthContextProvider>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<HomePage />} />
            {!authCtx.isLoggedIn && (
              <Route path="/signup" element={<AuthPage />} />
            )}
            {/* <Route path="/profile" element={<UserProfile />} /> */}
          </Routes>
        </Layout>
      </Router>
    </AuthContextProvider>
    </div>
  );
}

export default App;
