import React from 'react';
import { GoogleMap, LoadScript } from '@react-google-maps/api';

const containerStyle = {
    width: '400px',
    height: '400px'
};

const center = {
    lat: 19.471035,
    lng: -99.0453629
};

function MyComponent() {
    const [map, setMap] = React.useState(null);

    const onLoad = React.useCallback(function callback(map) {
        const bounds = new window.google.maps.LatLngBounds();
        map.fitBounds(bounds);
        setMap(map);
    }, []);

    const onUnmount = React.useCallback(function callback(map) {
        setMap(null);
        console.log(map, 'mapa');
    }, []);

    console.log(map, 'mapa');

    return (
        <LoadScript
            googleMapsApiKey="AIzaSyAJad0umGwSsH1UFdUzZEDCJ0BycOUOpbE"
        >
            <GoogleMap
                mapContainerStyle={containerStyle}
                center={19.471035 - 99.0453629}
                zoom={15}
                onLoad={onLoad}
                onUnmount={onUnmount}
            >
                { /* Child components, such as markers, info windows, etc. */}
                <></>
            </GoogleMap>
        </LoadScript>
    );
}

export default React.memo(MyComponent);