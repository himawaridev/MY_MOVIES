import { Route, Routes } from "react-router-dom"
import Home from "../Home/home"
import Blog from "../pages/Blog"
import Login from "../pages/Login"
import Banners from "../BANNERS/banners"
import Menu from "../Menu/menu"


const RouterCustom = () => {
    return (
        <Routes>
            <Route path="/" element={<Menu />}>
                <Route path="/" element={<Home />}></Route>
                <Route path="blog" element={<Blog />}></Route>
                <Route path="login" element={<Login />}></Route>
            </Route>
        </Routes>
    )
}

export default RouterCustom;