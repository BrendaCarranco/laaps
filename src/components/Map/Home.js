import React, { Component } from 'react';
import Map from './Map';

class Home extends Component {

    render() {
        return (
            <div style={{ margin: '1px' }}>
                <Map
                    google={this.props.google}
                    center={{ lat: 19.437578, lng: -99.194915 }}
                    height='335px'
                    zoom={14}
                />
            </div>
        );
    }
}

export default Home;


/* import * as React from 'react';
import { Component } from "react";
import ReactMapGL, { GeolocateControl, Marker } from "react-map-gl";

export default class Mapbox extends Component {
    state = {
        viewport: { longitude: -122.45, latitude: 37.78, zoom: 14 }
    };

    render() {
        const { viewport } = this.state;
        const MAPBOX_TOKEN = '////////////////';

        return (
            <ReactMapGL {...viewport}
                width="100vw"
                height="100vh"
                onViewportChange={viewport => this.setState({ viewport })}
                mapboxApiAccessToken={MAPBOX_TOKEN}>
                <GeolocateControl
                    positionOptions={{ enableHighAccuracy: true }}
                    trackUserLocation={true}

                />
                <Marker latitude={37.78} longitude={-122.41} offsetLeft={-20} offsetTop={-10}>
                    <div>You are here</div>
                </Marker>
            </ReactMapGL >
        );
    }
} */

