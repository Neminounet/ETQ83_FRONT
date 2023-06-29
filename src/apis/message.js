const API_URL = "https://neminounet.pythonanywhere.com"

//  Récupérer tous les messages :
// ================================

async function getAllmessages() {
    const token = window.localStorage.getItem('token')
    const response = await fetch(`${API_URL}/availability/messages/`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Token ${token}`
        }
    })
    if(response.ok) {
        const body = await response.json();
        return body
    } else {
        console.log(response.status, response.statusText);
    }
} 

// Récupérer des messages à partir d'une disponibilité :
// ====================================

async function getMessagesFromRDV(id) {
    const token = window.localStorage.getItem('token')
    const response = await fetch(`${API_URL}/availability/messages/?rdv_id=${id}`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Token ${token}`
        }
    })
    if(response.ok) {
        const body = await response.json();
        return body
    } else {
        console.log(response.status, response.statusText);
        return null;
    }
} 

// poster un message :
// =========================

async function postMessage(value) {
    const token = window.localStorage.getItem('token')
        const response = await fetch(`${API_URL}/availability/messages/`, {
            method:"POST",
            body: JSON.stringify(value),
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Token ${token}`
            }
        });
        if(response.ok) {
           const body = await response.json();
           console.log(body);
        } else {
            console.log(response.status, response.statusText)
        }
} 

// Supprimer un message : 
// =================================

async function deleteMessage(id) {
    const token = window.localStorage.getItem('token')
    const response = await fetch(`${API_URL}/availability/messages/${id}`, {
        method:"DELETE",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Token ${token}`
        }
    });
    if(!response.ok) {
        console.log(response.status, response.statusText)
    } 
}
export { getAllmessages, postMessage, getMessagesFromRDV, deleteMessage};