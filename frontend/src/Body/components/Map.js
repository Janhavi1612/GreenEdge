 

import { useMemo } from "react";
import { GoogleMap, useLoadScript, MarkerF,KmlLayer } from "@react-google-maps/api";

const containerStyle = {
  width: '800px',
  height: '800px'
};
export default function RenderMap() {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: ''
  });

  if (!isLoaded) return <div>Loading...</div>;
  return <Map />;
}

function Map() {
  //return <div>Map</div>
   const center = useMemo(() => ({ lat: 44, lng: -80 }), []);
  // return (
  //   <GoogleMap zoom={10} center={center} mapContainerStyle={containerStyle}>
  //     <KmlLayer url='https://getcapstonebucket.s3.us-east-2.amazonaws.com/westcampus.kml'/>
  //   </GoogleMap>
  // );


  return (
    <GoogleMap zoom={10} center={center} mapContainerStyle={containerStyle}>
      <MarkerF position={center} />
    </GoogleMap>
  );

  
}

//import React, { Component } from 'react';
// import { withScriptjs, withGoogleMap, GoogleMap, Marker, KmlLayer } from "react-google-maps"

// const MyMapComponent = withScriptjs(withGoogleMap((props) =>
//   <GoogleMap
//     defaultZoom={8}
//     defaultCenter={{ lat: 50.5010789, lng: 4.4764595 }}
//   >
//     <KmlLayer 
//         url='https://getcapstonebucket.s3.us-east-2.amazonaws.com/westcampus.kml'
//         options={{ preserveViewport : false}}
//     />
//     {props.isMarkerShown && <Marker position={{ lat: 50.5010789, lng: 4.4764595 }} />}
//   </GoogleMap>
// ))

// export default class Map extends Component {
//   render(){
//       return( 
//         <div>
//         <p>Hello</p>

//           <MyMapComponent
//            containerElement={
//             <div style={{height: `1000px`, width: `1000px`}} />
//           }
    
//           mapElement={
//             <div style={{height: `1000px`, width: `1000px`}} />
//           }
    
//             isMarkerShown
//             googleMapURL="https://maps.googleapis.com/maps/api/js?key=&v=3.exp&libraries=geometry,drawing,places"
//             loadingElement={<div style={{ height: `100%` }} />}
//             //containerElement={<div style={{ height: `100%` }} />}
//             //mapElement={<div style={{ height: `100%` }} />}
//           />
//           </div>
          
//       )
//   }
// }

// // const Map = () => {
// //   return (
// //     <div style={{padding:"200px"}}>
// //       map-place-holder
// //     </div>
// //   )
// // }

// // export default Map
// //export default MyMapComponent