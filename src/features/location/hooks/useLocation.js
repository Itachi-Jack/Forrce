import { useState } from "react";
import Geolocation from "react-native-geolocation-service";
import { requestLocationPermission } from "../utils/locationHelper";


export default function useLocation(){
    const [location, setLocation] = useState(null);
    const [loading, setLoading] = useState(false);

    const getLocation = async () => {
        console.log("getLocation called");
        const hasPermission = await requestLocationPermission();
        console.log("Permission:", hasPermission);

        if(!hasPermission){
            alert("Location Permission Denied");
            return;
        }
        setLoading(true);
        Geolocation.getCurrentPosition(
            (position) => {
                const {latitude , longitude } = position.coords;
                setLocation({latitude , longitude});
                setLoading(false);
            },
            (error) => {
                console.log(error);
                alert(JSON.stringify(error));
                setLoading(false);
            },
            {
                enableHighAccuracy : true,
                timeout: 15000,
                maximumAge : 10000,
            }
        );
    };
    return {location , loading , getLocation};
}