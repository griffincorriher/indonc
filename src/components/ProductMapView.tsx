import React from "react";
import GoogleMapReact from 'google-map-react';
import Link from 'next/link'

const AnyReactComponent = ({ text }) => <div>{text}</div>;

export default function ProductMapView(){
  const defaultProps = {
    center: {
      lat: 35.2271,
      lng: -80.8431,
    },
    zoom: 10
  };

  return (
    // Important! Always set the container height explicitly
    //<div style={{ height: '400px', width: '800px' }}>
    <div className="w-full h-96 md:h-[38rem] ">
      <GoogleMapReact
        bootstrapURLKeys={{ key: "" }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      >
        <AnyReactComponent
          lat={59.955413}
          lng={30.337844}
          text="My Marker"
        />
      </GoogleMapReact>
    </div>
  );
}