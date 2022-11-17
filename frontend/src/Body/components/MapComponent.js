import React from 'react'
import {GoogleMap, useJsApiLoader, Circle, MarkerF, InfoWindow} from '@react-google-maps/api';
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
  //circle.fillColor = '#FF0000'
  console.log('Circle onLoad circle: ', circle)
}

const onUnmount = circle => {
  console.log('Circle onUnmount circle: ', circle)
}

function createCircleOrMarker(metadata, prop){

    const onCircleHover = (metadata) => {
      prop.setText(metadata.data)
    }

    const onMouseUpCircle = (metadata) => {
      prop.setText('')
    }

    return(<Circle
    center={metadata.center}
    options={{fillColor: metadata.color, strokeColor:metadata.color, strokeOpacity: 0.5, fillOpacity: 0.5 , radius: 400}}
    onLoad={onLoad}
    onUnmount={onUnmount}
    onMouseOver={() => onCircleHover(metadata)}
    onMouseOut={() => onMouseUpCircle(metadata)}
  />
    )
}

function MyComponent(prop) {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: 'AIzaSyD5ernPUMCOp0QHET9gPW5XPyHVKpHVn5E'
  })


  const center = {lat: 40.0146129,
    lng: -77.0916161}
    

  let datapoints = getDatapoint(prop.filterData)
    console.log(datapoints)

    return isLoaded ? (
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={13}
      >
    {
        datapoints.map((point)=> createCircleOrMarker(point, prop))
    }
      </GoogleMap>
  ) : <></>
}


export default MyComponent


