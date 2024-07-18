import './App.css'
import {Route, BrowserRouter as Router, Routes} from "react-router-dom";
import Home from "./components/page/product/Home.jsx";
import InsertForm from "./components/InsertForm.jsx";
import Detail from "./components/Detail.jsx";
import JoinForm from "./components/JoinForm.jsx";
import LoginForm from "./components/LoginForm.jsx";
import UpdateForm from "./components/UpdateForm.jsx";
import Header from "./components/Header.jsx";

function App() {

    return (
        <div>
            <Router>
            <Header />
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/insertForm" element={<InsertForm/>}/>
                    <Route path="/detail/:productId" element={<Detail/>}/>
                    <Route path="/joinForm" element={<JoinForm/>}/>
                    <Route path="/loginForm" element={<LoginForm/>}/>
                    <Route path="/updateForm" element={<UpdateForm/>}/>
                </Routes>
            </Router>
        </div>
    )
}

export default App
