import React from 'react';
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

const SimpleMap = () => {
  const defaultProps = {
    center: {
        lat: 10.99835602,
        lng: 77.01502627,
    },
    zoom: 11,
  };

  return (
    <div style={{height: '100%', width: '100%'}}>
        <GoogleMapReact 
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

export default SimpleMap