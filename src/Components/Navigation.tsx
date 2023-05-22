import { BrowserRouter, Route, Routes } from "react-router-dom"
import Profile from "./Views/Profile"

export const Navigation = () =>{
    return(
        <BrowserRouter>
        <Routes >
            <Route path="/profile" element={<Profile />} />
        </Routes>
        </BrowserRouter>
    )
}