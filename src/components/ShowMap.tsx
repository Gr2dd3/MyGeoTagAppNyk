import { useEffect, useState } from "react";



export default function ShowMap() {

    const [coords, setCorrds] = useState({
        latitude: "",
        longitude: ""
    });

    const [name, setName] = useState();

    useEffect(() => {
        navigator.geolocation.getCurrentPosition(
            getCurrentLocation,
            error,
            options
        );
    }, []);

    function error(err: any) {
        if (
            err.code === 1 || //if user denied accessing the location
            err.code === 2 || //for any internal errors
            err.code === 3 //error due to timeout
        ) {
            alert(err.message);
        } else {
            alert(err);
        }
    }

    const options = {
        enableHighAccuracy: true,
        maximumAge: 30000,
        timeout: 27000
    };

    //get current location when the app loads for the first time
    function getCurrentLocation(position: any) {
        setCorrds({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude
        });

        let url = "https://nominatim.openstreetmap.org/reverse?format=jsonv2" +
            "&lat=" + coords.latitude + "&lon=" + coords.longitude;

        fetch(url, {
            method: "GET",
            mode: "cors",
            headers: {
                "Access-Control-Allow-Origin": "https://o2cj2q.csb.app"
            }
        })
            .then((response) => response.json())
            .then((data) => console.log("Visa namn: " + data.display_name));
    }
}