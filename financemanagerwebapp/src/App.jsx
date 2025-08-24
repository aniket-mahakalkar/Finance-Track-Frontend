import {BrowserRouter , Route, Routes} from "react-router-dom"
import Income from "./pages/Income";
import Expense from "./pages/Expense";
import Category from "./pages/Category";
import Filter from "./pages/Filter";
import Login from "./pages/login";
import Signup from "./pages/Signup";
import Home from "./pages/Home";
import { Toaster } from "react-hot-toast";
import LandingPage from "./pages/LandingPage.jsx";
import { Navigate } from "react-router-dom";


const App = () => {

  return (

    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Root />} />
        <Route path="/home" element={<LandingPage />} />
        <Route path="/dashboard" element={<Home />}/>
        <Route path="/income" element={<Income />}/>
        <Route path="/expense" element={<Expense />}/>
        <Route path="/category" element={<Category />}/>
        <Route path="/filter" element={<Filter />}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/signup" element={<Signup/>}/>
      </Routes>
    </BrowserRouter>
    <Toaster/>
    </>
  



  )
}

const Root = () => {
    const isAuthenticated = !!localStorage.getItem("token");
    return isAuthenticated ? (
        <Navigate to="/dashboard" />
    ) : (
      <Navigate to="/home" />
    );

}

export default App;