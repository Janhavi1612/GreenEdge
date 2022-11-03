import React from 'react'
import { GoogleMap, useJsApiLoader,Circle } from '@react-google-maps/api';
import getDatapoint from "./locations"

const containerStyle = {
  width: '1200px',
  height: '800px'
};

const center = {
  lat: -3.745,
  lng: -38.523
};


const onLoad = circle => {
  circle.fillColor = '#FF0000'
  console.log('Circle onLoad circle: ', circle)
}

const onUnmount = circle => {
  console.log('Circle onUnmount circle: ', circle)
}

const options = {
    strokeColor: '#FF0000',
    strokeOpacity: 0.8,
    strokeWeight: 0.1,
    fillColor: '#FF0000',
    fillOpacity: 0.35,
    clickable: false,
    radius: 800,
  }

function createCircle(metadata){
  let op = options
  op.fillColor = metadata.color
  op.strokeColor = metadata.color
  console.log(op)
   console.log(metadata)
  return(<Circle
    
    
    center={metadata.center}
    options={metadata.options}
    onLoad={onLoad}
    onUnmount={onUnmount}
  />)
}

function MyComponent() {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: 'AIzaSyD5ernPUMCOp0QHET9gPW5XPyHVKpHVn5E'
  })

  const [map, setMap] = React.useState(null)
 
  const center = {lat: 40.0146129,
    lng: -77.0916161}
    
  
  let datapoints = getDatapoint()
  
  return isLoaded ? (
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={10}
      >
{datapoints.map((point)=> createCircle(point))}
      </GoogleMap>
  ) : <></>
}

export default React.memo(MyComponent)



//{centers.map((cent)=> createCircle(cent))}