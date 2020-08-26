
import React, { useState } from 'react';
import Home from './Home';

const UserLocation = () => {

    const [geo, setGeo] = useState({
        latitude: 19.471035,
        longitude: -99.0453629
    });

    const apiKey = 'AIzaSyAJad0umGwSsH1UFdUzZEDCJ0BycOUOpbE';

    const getLocation = async () => {
        if (navigator.geolocation) {
            await navigator.geolocation.getCurrentPosition(showPosition, handleError);
        } else {
            console.log("Geolocation is not supported by this browser.");
        }
    };

    const showPosition = (position) => {
        console.log(position);
        setGeo({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude
        });
        return console.log(geo, 'coordenadas');
    };

    const handleError = error => {
        switch (error.code) {
            case error.PERMISSION_DENIED:
                alert("User denied the request for Geolocation.");
                break;
            case error.POSITION_UNAVAILABLE:
                alert("Location information is unavailable.");
                break;
            case error.TIMEOUT:
                alert("The request to get user location timed out.");
                break;
            case error.UNKNOWN_ERROR:
                alert("An unknown error occurred.");
                break;
        }
    };


    return (
        <div>
            <div>
                <h2>
                    React geolocation Example
                </h2>
                <button onClick={getLocation}>
                    Get coordinates
                </button>
                <h4>Coordenadas</h4>
                <p>Latitude: {geo.latitude}</p>
                <p>Longitude: {geo.longitude}</p>
                <p>Adress: {geo.userAdress}</p>
                <div style={{ margin: '100px' }}>
                    <img src={`https://maps.googleapis.com/maps/api/staticmap?center=Williamsburg,Brooklyn,NY&zoom=13&size=400x400&
markers=color:blue%7Clabel:S%7C11211%7C11206%7C11222&key=AIzaSyAJad0umGwSsH1UFdUzZEDCJ0BycOUOpbE`} alt='mapa' />
                </div>

            </div>
        </div>
    );
};

export default UserLocation;

/* import React from 'react';
import { } from 'mapbox-gl'

const UserLocation = () => {

    mapboxgl.accessToken = 'pk.eyJ1IjoiYnJlZW5ubiIsImEiOiJja2U5MjR2NGIxYW82MnlyM3MyYmpyN3cyIn0.hXSL9VZGYuQPhN_GhoAi7Q';
    var map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/streets-v11',
        center: [19.471035, -99.0453629],
        zoom: 15
    });
    return (
        <div id='map'>
            mapa
        </div>
    );
};

export default UserLocation;


/* import React, { useState } from 'react';
import ReactMapboxGl, { Layer, Feature } from 'react-mapbox-gl';

const Map = ReactMapboxGl({
    accessToken:
        'pk.eyJ1IjoiYnJlZW5ubiIsImEiOiJja2U5MjR2NGIxYW82MnlyM3MyYmpyN3cyIn0.hXSL9VZGYuQPhN_GhoAi7Q'
});

const UserLocation = () => {

    const [geo, setGeo] = useState({
        latitude: 19.4319716,
        longitude: -99.1356141
    });

    const getLocation = async () => {
        if (navigator.geolocation) {
            await navigator.geolocation.getCurrentPosition(showPosition, handleError);
        } else {
            console.log("Geolocation is not supported by this browser.");
        }
    };

    const showPosition = (position) => {
        console.log(position);
        setGeo({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude
        });
        return console.log(geo, 'coordenadas');
    };

    const handleError = error => {
        switch (error.code) {
            case error.PERMISSION_DENIED:
                alert("User denied the request for Geolocation.");
                break;
            case error.POSITION_UNAVAILABLE:
                alert("Location information is unavailable.");
                break;
            case error.TIMEOUT:
                alert("The request to get user location timed out.");
                break;
            case error.UNKNOWN_ERROR:
                alert("An unknown error occurred.");
                break;
        }
    };

    return (
        <div>
            mapaaaa
            <Map
                style="mapbox://styles/mapbox/streets-v9"
                containerStyle={{
                    height: '70vh',
                    width: '70vw'
                }}
            >
                <Layer type="symbol" id="marker" layout={{ 'icon-image': 'marker-15' }}>
                    <Feature coordinates={[19.4319716, -99.1356141]} />
                </Layer>
            </Map>;
        </div>
    );
};

export default UserLocation; */
