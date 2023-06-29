const API_URL = "https://neminounet.pythonanywhere.com"

// Récupérer tous les rdv :
// ============================

async function getAllRDV() {
    const token = window.localStorage.getItem('token')
    const response = await fetch(`${API_URL}/availability/rendezvous/`, {
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

// Récupérer un rdv : 
// =====================

async function getRDV(id) {
    const token = window.localStorage.getItem('token')
    const response = await fetch(`${API_URL}/availability/rendezvous/${id}`, {
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

// Récupérer un rendezvous à partir d'une disponibilité :
// ====================================

async function getRDVFromAvailability(id) {
    const token = window.localStorage.getItem('token')
    const response = await fetch(`${API_URL}/availability/rendezvous/?availability_id=${id}`, {
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


// Post un rdv :) 
// ====================

async function postRDV(value) {
    const token = window.localStorage.getItem('token')
        const response = await fetch(`${API_URL}/availability/rendezvous/`, {
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

// Supprimer un RDV :
// ======================

async function deleteRDV(id) {
    const token = window.localStorage.getItem('token')
    const response = await fetch(`${API_URL}/availability/rendezvous/${id}`, {
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

export { getAllRDV, getRDV, getRDVFromAvailability, postRDV, deleteRDV };