import React, { useState } from "react"
function CompFormClient() {
    const [client,setClient] = useState({nom:'',prenom:'',datenaissance:'1950-01-01'})
    
    const fcSubmit = (e) =>{
        e.preventDefault()
        let clients = JSON.parse(localStorage.getItem("Clients")) || []
        client.nom = e.target.nom.value
        client.prenom = e.target.nom.value
        client.datenaissance = e.target.datenaissance.value
        setClient(client)
        clients.push(client)
        localStorage.setItem("Clients",JSON.stringify(clients))
    }
    
    return (
    <div>
        <h1>Saisie des données client:</h1>
        <form onSubmit={fcSubmit}>
            <label htmlFor="nom">Nom</label>
            <input type='text'  pattern='[A-Za-z]{2,40}' title="Chiffres interdits" required max='40' min='2' name="nom"   />
            <label htmlFor="prenom">Prénom</label>
            <input type='text'  pattern='[A-Za-z]{2,30}' title="Chiffres interdits" required max='30' min='2' name="prenom"   />
            <label htmlFor="nom">Nom</label>
            <input type='date' min="1950-01-01" name="datenaissance" />
            <input type="submit"></input>
        </form>
    </div>
    );
}

export default CompFormClient;