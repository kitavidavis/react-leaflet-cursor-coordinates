import { useState } from 'react';
import { useMapEvent } from "react-leaflet";

export default function CursorCoordinates() {
    const [coords, setCoords] = useState({});
    const mp = useMapEvent('mousemove', (e) => {
        setCoords({ lat: e.latlng.lat, lng: e.latlng.lng });
    })

    const { lat, lng } = coords;
    return (
        <div style={{position: 'absolute', bottom: 0, left: 0 }} >
            <p style={{fontSize: 13}}>{"Cursor:["+lat+","+lng+"]"}</p>
        </div>
    )
}