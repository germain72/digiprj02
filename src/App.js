import { Route,Link,Routes} from "react-router-dom";
import CompClient from "./composants/CompClient";

/**
 * TP02 : CompClients : route fille pour pouvoir saisir des clients
 * Je vais aussi vous mettre une gestion globale de liste Clients avec 
 * le LocalStorage
 * Tout sera dans le dossier composants
 * 
 * CG : 27/07/2024
 */

const Home = () => (
  <div>
    <h2>Home</h2>
  </div>
)
 const Airport = () => (
  <div>
    <ul>
      <li>Jomo Kenyatta</li>
      <li>Tambo</li>
      <li>Med Mùs</li>
    </ul>
  </div>
 )



 const Cities = () => (
    <div>
      <ul>
        <li>Paris</li>
        <li>Montréal</li>
        <li>Rabat</li>
      </ul>
    </div>
 )
/**
 * Courses est un composant avec un sous menu (c'est un route fille)
 * Je suis obligé maintenant de mettre juste le mot du route fille (pour nous techno) (le route parent /cos)
 * @param {*} param0 
 * @returns 
 */
 const Courses = ({match}) => (
  <div>
    <ul>
      <li><Link to="/cos/techno">Technology</Link></li>
      <li><Link to="/cos/bio">Biologie</Link></li>
      <li><Link to="/cos/meca">Mécanique</Link></li>
    </ul>
    <Routes>
      <Route path="techno" element={<div>Ce sont les Technos</div>} exact/>
      <Route path="bio" element={<div>C'est Bio !'</div>} />
      <Route path="meca" element={<div>Mécanique</div>} />
    </Routes>
  </div>
)
/**
 *  <Route path="/cos/*" Component={Courses}/> /cos/* pour donner les droits d'accés aux "routes filles"
 * @returns 
 */
function App() {
  return (
    <div>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/cos">Courses</Link></li>
        <li><Link to="/airports">Aéroports</Link></li>
        <li><Link to="/cities">Villes</Link></li>
        <li><Link to="/clients">Clients</Link></li>
      </ul>
      <Routes>
        <Route path="/" Component={Home} exact/>
        <Route path="/airports" 
          element=
          {<div><b>Aéroports</b><Airport/></div>}
        />
        <Route path="/cities" Component={Cities}/>
        <Route path="/cos/*" Component={Courses}/>
        <Route path="/clients/*" Component={CompClient}/>
      </Routes>
    </div>
  );
}
/**
 * 
 * @returns <Route path="/airports" Component={Airport}/>
 */
export default App;
