import React from 'react'
import { GoogleMap, useJsApiLoader,KmlLayer } from '@react-google-maps/api';

const containerStyle = {
  width: '400px',
  height: '400px'
};

const center = {
  lat: -3.745,
  lng: -38.523
};

function RenderMap() {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: 'AIzaSyD5ernPUMCOp0QHET9gPW5XPyHVKpHVn5E'
  })

  const [map, setMap] = React.useState(null)

  const onLoad = React.useCallback(function callback(map) {
    const bounds = new window.google.maps.LatLngBounds(center);
    map.fitBounds(bounds);
    setMap(map)
  }, [])

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null)
  }, [])

  return isLoaded ? (
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={10}
        onLoad={onLoad}
        onUnmount={onUnmount}
      >

  <KmlLayer url='https://getcapstonebucket.s3.us-east-2.amazonaws.com/westcampus.kml'/>
       
      </GoogleMap>
  ) : <></>
}

export default React.memo(RenderMap)