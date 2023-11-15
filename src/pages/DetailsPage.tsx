import { useState } from "react";
import { useParams } from "react-router-dom";
import mapPoints from "../Data/mappoints.json";

export default function DetailsPage() {
    const params = useParams()
    const paramString: string = params.id !== undefined ? params.id : "";
    let id: number = paramString !== "" ? +paramString : -1;
    const [location] = useState(mapPoints[id])

    return (
        <div className="details-container">
            <div className="details-wrapper">
                <img className="details-image" alt={location.title} src={`../images/${location.image}`}></img>
                {location.visited && <h3 className="details-p-visited">Du har besökt denna plats</h3>}
            </div>
            <div className="details-text-section border-boxshadow">
                <h1 className="details-header">{location.title}</h1>
                <p className="details-text">{location.info}</p>
            </div>
        </div>
    )
}