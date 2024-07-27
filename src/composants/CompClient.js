import { Route,Link,Routes} from "react-router-dom";
import CompFormClient from "./CompFormClient";
import CompListClients from "./CompListClients";

const CompClient = ({request}) => (
    <div>
      <ul>
        <li><Link to='/clients/add'>Saisie de Clients</Link></li>
        <li><Link to='/clients/list'>Liste des Clients</Link></li>
      </ul>
      <Routes>
        <Route path="add" Component={CompFormClient} exact/>
        <Route path="list" element={<div><CompListClients/></div>} />
      </Routes>
    </div>
  )
export default CompClient;