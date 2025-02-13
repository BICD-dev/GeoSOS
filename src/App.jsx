import Navbar from "./components/Navbar";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Home from "./pages/Home";
import SignIn from "./pages/auth/SignIn";
import SignUp from "./pages/auth/SignUp";
import AuthLayout from "./Layout/AuthLayout";
import HelpPage from "./pages/HelpPage";
const App = () => {
  return (
    <div className="App">
      <Navbar />
      <div className="content">
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/help/:section" element={<HelpPage />} />
            
            {/* Auth Routes */}
            <Route path="/auth" element={<AuthLayout/>}>
              <Route index element={<Navigate to="sign-in" />} />
              <Route path="sign-in" element={<SignIn />} />
              <Route path="sign-up" element={<SignUp />} />
            </Route>

            {/* fallback */}
            <Route path="*" element={<Navigate to="/auth" />} />
          </Routes>
        </Router>
      </div>
    </div>
  );
};

export default App;
