import { useLoaderData } from "react-router-dom";
import { useState } from "react";
import AuthContext from "../../context/AuthContext";
import { loginUser, getUser, logoutUser, updateUser, updateImageUser, updatePasswordUser } from "../../apis/user";


function AuthProvider({ children }) {
    let initialUser = useLoaderData();
   
    if(initialUser.detail === "Token non valide.") {
        initialUser = null
    }
    const [user, setUser] = useState(initialUser);
    // console.log("user : ", user)

    async function login(data) {
        await loginUser(data)
        const newUser = await getUser();
        setUser(newUser)
    }

    async function logout() {
        await logoutUser();
        localStorage.removeItem('token');
        setUser(null);
    }

    async function update(data) {
        const newUser = await updateUser(data);
        setUser(newUser)
    }

    async function updateImage(data) {
        const newUser = await updateImageUser(data)
        setUser(newUser);
    }

    async function updatePassword(data) {
        await updatePasswordUser(data);
        await logout();
    }

    return <AuthContext.Provider value={{user, login, logout, update, updateImage, updatePassword }}>{ children }</AuthContext.Provider>
}

export default AuthProvider;