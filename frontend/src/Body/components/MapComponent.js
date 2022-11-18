import React from 'react'
import {GoogleMap, useJsApiLoader, Circle, MarkerF, InfoWindow} from '@react-google-maps/api';
import getDatapoint from "./locations"
import getMarkers from "./getMarkerPoints"

const containerStyle = {
  width: '850px',
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


const onLoad = circle => {
  console.log('Circle onLoad circle: ', circle)
}

const onUnmount = circle => {
  console.log('Circle onUnmount circle: ', circle)
}
//
// let options = {
//     strokeColor: '#FF0000',
//     strokeOpacity: 0.8,
//     strokeWeight: 0.1,
//     fillColor: '#FF0000',
//     fillOpacity: 0.35,
//     clickable: false,
//     radius: 400,
//   }

function createCircle(metadata, prop){
/*
  let op = options
  op.fillColor = metadata.color
  op.strokeColor = metadata.color
*/
/*
    console.log('inside create circle')
    console.log(metadata.options)
    options.fillColor = metadata.color
    options.strokeColor = metadata.color

    metadata.options = options

    console.log(metadata)*/

    // console.log(center)
    const onCircleHover = (metadata) => {
      prop.setText(metadata.values)
    }

    const onMouseUpCircle = () => {
      prop.setText('')
    }

    return(<Circle
    center={metadata.center}
    options={{fillColor: metadata.color, strokeColor:metadata.color, strokeOpacity: 0.5, fillOpacity: 0.5 , radius: 400}}
    onLoad={onLoad}
    onUnmount={onUnmount}
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

  //const [map, setMap] = React.useState(null)
 
  const center = {lat: 40.0146129,
    lng: -77.0916161}


  let datapoints = getDatapoint(prop.filterData)
  // var markerpoints = getMarkers()
  //add condition for not found
  let metadata = []
  for(let i=0; i< datapoints.length;i++){
    datapoints[i].centers.map(point => (metadata.push({center:point.center, color: datapoints[i].color, isMarker:point.isMarker,values:JSON.stringify(point.values)})))
  }
 
  // var markerMetadata = []
  // for(var i=0; i< markerpoints.length;i++){
  //   markerpoints[i].centers.map(point => (markerMetadata.push({center:point.center,values:JSON.stringify(point.values)})))
  // }
  return isLoaded ? (
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={13}
      >
        {metadata.map((point)=> createPolygon(point, prop))}
        {/*{markerMetadata.map((point)=> createMarker(point, prop))}*/}

      </GoogleMap>
  ) : <></>
}

// export default React.memo(MyComponent)

export default MyComponent


//{centers.map((cent)=> createCircle(cent))}
