// import React from 'react'
// import { useMemo } from "react";
//
// import {GoogleMap, useJsApiLoader, KmlLayer, MarkerF} from '@react-google-maps/api';
// import GoogleMapReact from "google-map-react";
//
// import JsonExp from "../../DataService/JsonExperiment";
//
//
// const containerStyle = {
//   width: '400px',
//   height: '400px'
// };
//
// const center = { lat: -3.765, lng: -38.523 }
//
// const data = [
//   {
//     name: "asdfsadf",
//     description: "asdfasdf",
//     location: { lat: -1, lng: -38.523 },
//     state: "Seoul"
//   },
//   {
//     name: "rewt",
//     description: "asdfasdf",
//     location: { lat: -3.745, lng: -38.523 },
//     state: "Seoul2"
//   }
// ]
//
// function RenderMap() {
//   const { isLoaded } = useJsApiLoader({
//     id: 'google-map-script',
//     googleMapsApiKey: ''
//   })
//
//   const [map, setMap] = React.useState(null)
//
//   const onLoad = React.useCallback(function callback(map) {
//     const bounds = new window.google.maps.LatLngBounds(center);
//     map.fitBounds(bounds);
//     setMap(map)
//   }, [])
//
//   const onUnmount = React.useCallback(function callback(map) {
//     setMap(null)
//   }, [])
//
//
//
//   return isLoaded ? (
//       <GoogleMap
//         mapContainerStyle={containerStyle}
//         center={center}
//         zoom={10}
//         onLoad={onLoad}
//         onUnmount={onUnmount}
//       >
// {/*
//   <KmlLayer url='https://getcapstonebucket.s3.us-east-2.amazonaws.com/FolderTest.kml'/>
// */}
//         {/*<JsonExp />*/}
//         {
//           data.map(item => (
//               <MarkerF position={item.location}></MarkerF>
//           ))
//         }
//         {/*<MarkerF position={data[0].location}></MarkerF>*/}
//         </GoogleMap>
//   ) : <></>
// }
//
// export default React.memo(RenderMap)