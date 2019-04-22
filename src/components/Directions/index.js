import React from 'react';
import MapViewDirections from 'react-native-maps-directions';

const Directions = ({ destination, origin, onReady}) => (
    <MapViewDirections 
        destination={destination}
        origin={origin}
        onReady={onReady}
        apikey="AIzaSyAVsd5suO7iX1EyC_Ck56yEnewi1vUEJoQ"
        strokeWidth={3}
        strokeColor="#222"

    />
);

export default Directions;