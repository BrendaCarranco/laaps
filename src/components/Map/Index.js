/* import React, { Component } from 'react';
import ReactMapGL, { Marker } from "react-map-gl";

export default class Index extends Component {
    state = {
        viewport: {
            width: "100vw",
            height: "100vh",
            latitude: 42.430472,
            longitude: -123.334102,
            zoom: 16
        },
        userLocation: {}
    };

    setUserLocation = () => {
        navigator.geolocation.getCurrentPosition(position => {
            let setUserLocation = {
                lat: position.coords.latitude,
                long: position.coords.longitude
            };
            let newViewport = {
                height: "100vh",
                width: "100vw",
                latitude: position.coords.latitude,
                longitude: position.coords.longitude,
                zoom: 10
            };
            this.setState({
                viewport: newViewport,
                userLocation: setUserLocation
            });
        });
    };
    render() {
        console.log(this.state.userLocation);
        return (

            <div>
                <button onClick={this.setUserLocation}>
                    My location
            </button>
                <ReactMapGL
                    {...this.state.viewport}
                    mapStyle="mapbox://styles/mapbox/outdoors-v11"
                    onViewportChange={viewport => this.setState({ viewport })}
                    mapboxApiAccessToken="your token"
                >
                    <Marker>I'm Here!!!</Marker>
                </ReactMapGL>
            </div>
        );
    }

} */