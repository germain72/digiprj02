import React from "react";
function CompListClients() {
    const [clients,setClients] = React.useState(JSON.parse(localStorage.getItem("Clients"))||[])
    console.log(clients)
    return (
        <div>
            <h1>Liste des clients</h1>
            <ul>
                {clients.map(client=><li>{client.nom+" "+client.prenom+" "+client.datenaissance}</li>)}
            </ul>
        </div>
      );
}

export default CompListClients;