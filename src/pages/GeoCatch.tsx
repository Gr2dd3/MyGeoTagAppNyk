import { useState } from "react";
import { Link } from "react-router-dom";
import mapPoints from "../Data/mappoints.json";

export default function GeoCatch() {

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [allMapPoints, setAllMapPoints] = useState(mapPoints)

    const location = allMapPoints.map((place) => {

        let distanceFromTarget = 9052;
        let direction = "nordväst";

        return (
            <div className="geocatch-directions-wrapper">
                <Link className="geocatch-directions-link" to={"/Locations/" + place.id}>
                    <p className="geocatch-direction border-boxshadow">Du är {distanceFromTarget} meter från {place.title} [Riktning: {direction}]</p>
                </Link>
            </div>
        )
    })

    let proximityPrecision = 45;

    return (
        <div className="geocatch-container">
            <h1 className="geocatch-header border-boxshadow">Du är inom {proximityPrecision} meter från denna position</h1>
            <div className="geocatch-map-wrapper border-boxshadow">
                <img className="geocatch-image-map" alt="map" src={"../images/karta.jpg"}></img>
            </div>
            <div>
                <p className="geocatch-points border-boxshadow">Du har 0 poäng</p>
            </div>
            {location}
        </div>
    )
}