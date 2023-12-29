import { Route, Routes } from "react-router-dom"
import Home from "../Home/home"
import Menu from "../Menu/menu"
import Blog from "../pages/Blog/Blog"


const RouterCustom = () => {
    return (
        <Routes>
            <Route path="/" element={<Menu />}>
                <Route path="/" element={<Home />}></Route>
                <Route path="blog" element={<Blog />}></Route>
            </Route>
        </Routes>
    )
}

export default RouterCustom;