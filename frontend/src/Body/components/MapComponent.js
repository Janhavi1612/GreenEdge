import React from 'react'
import {GoogleMap, useJsApiLoader, Circle, MarkerF} from '@react-google-maps/api';
import env from "react-dotenv";
import getDatapoint from "./locations"

const containerStyle = {
  width: '1200px',
  height: '700px'
};

//define later
const center = {
  lat: -3.745,
  lng: -38.523
};


function createCircle(metadata, prop){
    const onCircleHover = (metadata) => {
      prop.setText(metadata.values)
    }

    const onMouseUpCircle = () => {
      prop.setText('')
    }

    return(<Circle
    center={metadata.center}
    options={{fillColor: metadata.color, strokeColor:metadata.color, strokeOpacity: 0.5, fillOpacity: 0.5 , radius: 600}}
    onMouseOver={() => onCircleHover(metadata)}
    onMouseOut={() => onMouseUpCircle()}
  />
    )
}

function createMarker(metadata, prop){
    const onMarkerHover = (metadata) => {
        prop.setText(metadata.values)
    }

    const onMouseUpMarker = () => {
        prop.setText('')
    }

    return(
      <MarkerF
          position={metadata.center}
          onMouseOver={() => onMarkerHover(metadata)}
          onMouseOut={() => onMouseUpMarker()}
      />
    )
}

function createPolygon(point, prop) {
    if (point.color == '#000000') {

        return createMarker(point, prop)
    } else {
        return createCircle(point, prop)
    }
}

function MyComponent(prop) {
  console.log("API")
  console.log(process.env.REACT_APP_GOOGLE_MAPS_API_KEY)
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: env.REACT_APP_GOOGLE_MAPS_API_KEY
  })
 

  const center = {lat: 40.443439,
    lng: -79.984177}


  let datapoints = getDatapoint(prop.filterData)

  let metadata = []
  for(let i=0; i< datapoints.length;i++){
    datapoints[i].centers.map(point => (metadata.push({center:point.center, color: datapoints[i].color, values:JSON.stringify(point.values)})))
  }
 

  return isLoaded ? (
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={13}
      >
        {metadata.map((point)=> createPolygon(point, prop))}

      </GoogleMap>
  ) : <></>
}


export default React.memo(MyComponent)


