import React from "react";
import GoogleMapReact from 'google-map-react';
import Link from 'next/link'
import { SignUpButton } from "@clerk/nextjs";
import { useState } from "react";
import { LearnMoreModal } from "./LearnMoreModal";

const AnyReactComponent = ({ text }) => <div>{text}</div>;


export default function SignedOutProductMapView(){
  const defaultProps = {
    center: {
      lat: 35.2271,
      lng: -80.8431,
    },
    zoom: 10
  };

  const [showModal, setShowModal] = useState(false);

  const handleModalOpen = () => {
    setShowModal(true);
  }

  const handleModalClose = () => {
    setShowModal(false);
  }
  return (
    <>
    <div id="informational-banner" className="flex flex-col justify-between w-full p-4 border-b border-red-700 md:flex-row bg-gray-50 dark:bg-gray-700 dark:border-gray-600">
        <div className="mb-4 md:mb-0 md:mr-4">
            <h2 className="mb-1 text-base font-semibold text-gray-900 dark:text-white">Log in for a detailed view</h2>
            <p className="flex items-center text-sm font-normal text-gray-500 dark:text-gray-400">There are sellers across the state, log in to see where they are in your city!</p>
        </div>
        <div className="flex items-center flex-shrink-0">
            <button onClick={handleModalOpen} className="inline-flex items-center justify-center px-3 py-2 mr-3 text-xs font-medium text-gray-900 bg-white border border-gray-200 rounded-lg focus:outline-none hover:bg-gray-100 hover:text-red-700">
              <svg className="w-3 h-3 mr-2 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 18">
                <path d="M9 1.334C7.06.594 1.646-.84.293.653a1.158 1.158 0 0 0-.293.77v13.973c0 .193.046.383.134.55.088.167.214.306.366.403a.932.932 0 0 0 .5.147c.176 0 .348-.05.5-.147 1.059-.32 6.265.851 7.5 1.65V1.334ZM19.707.653C18.353-.84 12.94.593 11 1.333V18c1.234-.799 6.436-1.968 7.5-1.65a.931.931 0 0 0 .5.147.931.931 0 0 0 .5-.148c.152-.096.279-.235.366-.403.088-.167.134-.357.134-.55V1.423a1.158 1.158 0 0 0-.293-.77Z"/>
              </svg>
              Learn more
            </button>
            <SignUpButton mode="modal">
              <button className="inline-flex items-center justify-center px-3 py-2 mr-2 text-xs font-medium text-white bg-red-700 rounded-lg hover:bg-red-800 ">
                Sign Up
              </button>
            </SignUpButton>
        </div>
    </div>
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
    <LearnMoreModal isVisible={showModal} onClose={handleModalClose}/>
    </>
  );
}