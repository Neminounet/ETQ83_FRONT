const API_URL = "https://neminounet.pythonanywhere.com"

async function getAvailabilitiesSuperUser() {
    const token = window.localStorage.getItem('token')
    const response = await fetch(`${API_URL}/availability/superuser/`, {
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

async function getAvailabilitiesUser() {
    const token = window.localStorage.getItem('token')
    const response = await fetch(`${API_URL}/availability/user/`, {
        method: "GET", 
        headers: {
            "Content-Type":"application/json",
            "Authorization": `Token ${token}`
        }
    });
    const body = await response.json()
    // console.log("body: ", body)
    if (response.ok) {
        return body
    } else {
        console.log(response.status, response.statusText)
    }
}

async function postAvailability(date, heure) {
    const token = window.localStorage.getItem('token')
        const response = await fetch(`${API_URL}/availability/superuser/`, {
            method:"POST",
            body: JSON.stringify({date: date, heure: heure}),
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Token ${token}`
            }
        });
        if(response.ok) {
            const avails = await getAvailabilitiesSuperUser();
            return avails
        } else {
            console.log(response.status, response.statusText)
        }
} 

async function deleteAvailability(id) {
    const token = window.localStorage.getItem('token')
    const response = await fetch(`${API_URL}/availability/superuser/${id}`, {
        method:"DELETE",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Token ${token}`
        }
    });
    if(response.ok) {
        const avails = await getAvailabilitiesSuperUser();
        return avails
    } else {
        console.log(response.status, response.statusText)
    }
}

export { getAvailabilitiesSuperUser, postAvailability, deleteAvailability, getAvailabilitiesUser }
