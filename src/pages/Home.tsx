import { Link } from "react-router-dom";

export default function Home() {


    return (
        <div className="home-container border-boxshadow">
            <h2 className="home-header">Välkommen till GeoCatching Nyköping.</h2>
            <ul className="home-ul-list">
                <li>När du kommer nära ett mål kommer du få mer information om platsen</li>
                <li>Du får även poäng när du kommer nära</li>
                <li><Link to="/Locations">Se platserna här</Link></li>
                <li>Klickar du på en plats kan du manuellt öppna upp mer info också.</li>
            </ul>
        </div>
    )
}