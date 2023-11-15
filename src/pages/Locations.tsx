import { useState } from "react";
import { Link } from "react-router-dom";
import mapPoints from "../Data/mappoints.json";

export default function Home() {

    const [allMapPoints] = useState(mapPoints)

    const showMapPoints = allMapPoints.map(place => {
        return (
            <div key={place.id} className="card-container">
                <Link to={`/Locations/${place.id}`}>
                    <img className="card-image" alt={place.title} src={"../images/" + place.image}></img>
                    <div>
                        <h2 className="card-header">{place.title}</h2>
                    </div>
                </Link>
            </div>
        )
    })

    return (
        <div className="card-list-container">
            <div className="card-list">
                {showMapPoints}
            </div>
        </div>
    )
}