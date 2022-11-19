import React from 'react'
import {GoogleMap, useJsApiLoader, Circle, MarkerF, InfoWindow, CircleF} from '@react-google-maps/api';
import getDatapoint from "./locations"
import getMarkers from "./getMarkerPoints"

const containerStyle = {
  width: '1200px',
  height: '700px'
// =======
//   width: '1600px',
//   height: '1200px'
// >>>>>>> 86fa3394eb88e11aeabcf88db1e5f7672f6f1c8f
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
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: 'AIzaSyD5ernPUMCOp0QHET9gPW5XPyHVKpHVn5E'
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


