const API_URL = "https://neminounet.pythonanywhere.com"   

// Création d'un utilisateur :
// =============================

async function createUser(data) {
    const response = await fetch(`${API_URL}/user/create/`, {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
            "Content-Type": "application/json"
        }
    });
    const body = await response.json();
    if(response.ok) {
        return body;
    } else {
        if(body){
            throw body
        } else {
            throw new Error("Error API createUser")
        }
    }
}

// Connexion d'un utilisateur :
// =============================

async function loginUser(data) {
    const response = await fetch(`${API_URL}/user/login/`, {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
            "Content-Type": "application/json"
        }
    });
    const body = await response.json();

    // console.log(body);

    if(response.ok) {
        window.localStorage.setItem('token', body.token);
        return body;
    } else {
        if(body){
            throw body
        } else {
            throw new Error("Error API loginUser")
        }
    }
}

// Récupération de tous les users() :
// ====================================

async function getAllUsers() {
    const token = window.localStorage.getItem('token')
    const response = await fetch(`${API_URL}/user/list/`, {
        method: "GET", 
        headers: {
            "Content-Type":"application/json",
            "Authorization": `Token ${token}`
        }
    });
    const body = await response.json()
    if (response.ok) {
        return body
    } else {
        console.log(response.status, response.statusText)
    }
}


// Vérification du mot de passe pour renouvellement :
// =============================================

async function checkUser(data) {
    const token = window.localStorage.getItem('token')
    const response = await fetch(`${API_URL}/user/login/`, {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Token ${token}`
        }
    });
    if(response.ok) {
        const body = true
        return body;
    } else {
        console.log(response.status, response.statusText);
    }
}

// Récupérer l'utilisateur connecté:
// ===================================

async function getUser() {
    const token = window.localStorage.getItem('token')
    const response = await fetch(`${API_URL}/user/me/`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Token ${token}`
        }
    });
    const body = await response.json();
    if (!response.ok) {
      console.log("Erreur de la récupération du current User");
    }
    return body
}

// Deconnecte L'utilisateur connecté :
// ========================================

async function logoutUser() {
    const token = window.localStorage.getItem('token')
    await fetch(`${API_URL}/user/logout/`, {
        method: "POST",
        headers: {
            "Content-Type":"application/json",
            "Authorization": `Token ${token}`
        }
    });
}

// Met à jour une information de l'utilisateur : 
// ===========================================

async function updateUser(data) {
    const token = window.localStorage.getItem('token')
    const response = await fetch(`${API_URL}/user/me/`, {
        method: "PATCH",
        body: JSON.stringify(data),
        headers: {
            "Content-Type" : "application/json",
            // "Content-Type" : "multipart/form-data",
            "Authorization": `Token ${token}`
        }
    });
    const body = await response.json();
    if (!response.ok) {
      throw new Error("Erreur de mise à jour du profil");
    }
    return body
}

// Met à jour me password de l'utilisateur : 
// ===========================================

async function updatePasswordUser(data) {
    const token = window.localStorage.getItem('token')
    const response = await fetch(`${API_URL}/user/update-password/`, {
        method: "PATCH",
        body: JSON.stringify(data),
        headers: {
            "Content-Type" : "application/json",
            "Authorization": `Token ${token}`
        },
    });
    const body = await response.json();
    if (!response.ok) {
      throw new Error("Erreur de mise à jour du mot de passe");
    }
    return body
}

// Met à jour l'image d'un utilisateur :
// ===========================================

async function updateImageUser(data) {
    const token = window.localStorage.getItem('token')
    const response = await fetch(`${API_URL}/user/me/`, {
        method: "PATCH",
        body: data,
        headers: {
            "Authorization": `Token ${token}`
        }
    });
    const body = await response.json();
    if (!response.ok) {
        throw new Error("Erreur de mise à jour de l'image");
      }
    return body
}

// Supprimer un utilisateur: (sois-même)
// ============================

async function deleteUser() {
    const token = window.localStorage.getItem('token')

    try {
        const response = await fetch(`${API_URL}/user/me/`, {
            method: "DELETE",
            headers: {
                "Content-Type" : "application/json",
                "Authorization": `Token ${token}`
            },
        });

        if (!response.ok) {
            console.error(response.status, response.statusText);
            return { success: false, status: response.status };
        }
        return { success: true };
    } catch (error) {
        console.error("Error in deleteUser:", error);
        return { success: false, error: error };
    }
}

// Supprimer un utilisateur par superuser : 
// ============================

async function deleteUserSU(userID) {
    const token = window.localStorage.getItem('token')

    try {
        const response = await fetch(`${API_URL}/user/delete/${userID}`, {
            method: "DELETE",
            headers: {
                "Content-Type" : "application/json",
                "Authorization": `Token ${token}`
            },
        });
        if (!response.ok) {
            console.error(response.status, response.statusText);
            return { success: false, status: response.status };
        }
        return { success: true };
    } catch (error) {
        console.error("Error in deleteUser:", error);
        return { success: false, error: error };
    }
}


export { createUser, loginUser, getAllUsers, checkUser, getUser, logoutUser, updateUser, updateImageUser, updatePasswordUser, deleteUser, deleteUserSU };