import { useContext, useEffect, useState } from "react";
import { getAllUsers, deleteUserSU } from "../../../../apis/user";
import AuthContext from "../../../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import styles from "./UsersManager.module.css";

function UsersManager(){

    const {user, logout} = useContext(AuthContext);

    const [ userList, setUserList ] = useState([]);

    async function fetchAndSetUsers() {
        const fetchedUsers = await getAllUsers();
        if(fetchedUsers) {
            setUserList(fetchedUsers);
        } else {
            setUserList([])
        }
    } 
  

    useEffect(()=> {
        fetchAndSetUsers()
    }, [])

    async function handleClickDeleteUser(id) {
        const result = await deleteUserSU(id);
        if (result.success) {
            console.log(result.success)
            fetchAndSetUsers()
        } else {
            console.error("Could not delete user:", result.error || result.status);
        }
    }

    // console.log(userList);

    return (
        <div>
            <h3 className="pl-20 pt-20">Utilisateurs : {userList.length}</h3>
            <div className={styles.usersManagerContent}>
                {userList.map(u => {
                    return (
                        <div key={u.id} className={styles.id}>
                            <h4>{u.first_name} {u.last_name}</h4>
                            <p>Adresse email : {u.email}</p>
                            <p>Tel : { u.telephone }</p>
                            <p>Premium : {u.is_premium ? "Oui" : "Non"}</p>
                            {user.id !== u.id && 
                                <button onClick={()=>  handleClickDeleteUser(u.id) }>Supprimer Compte</button>
                            }
                        </div>
                    )
                })}
            </div>
        </div>
    );
}

export default UsersManager;