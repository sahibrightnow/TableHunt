import MapView from 'react-native-maps'
import { Dimensions, Image } from 'react-native'
import SvgUri from 'react-native-svg-uri'
import FindLocationIcon from '../assets/iconComponents/FindLocationIcon'
import { Pressable } from 'native-base'

const MapInput = ({ navigation, nearbyPlaces, location, getLocation, mapRef }) => {
  return (
    <MapView
      ref={mapRef}
      flex={1}
      height={Dimensions.get('window').height}
      loadingEnabled={true}
      showsUserLocation={true}
      showsMyLocationButton={true}
      region={{
        latitude: location ? location.latitude : 49.246292,
        longitude: location ? location.longitude : -123.116226,
        latitudeDelta: 0.015,
        longitudeDelta: 0.0121,
      }}
    >
      <Pressable onPress={getLocation} style={{
        width: 40, height: 40, padding: 8,
        position: "absolute", bottom: 20, right: 20, borderRadius: 30, backgroundColor: "#6A994E"
      }}>
        <SvgUri source={require('../assets/findLocation.svg')} />
        {/* <FindLocationIcon /> */}

      </Pressable>

      {
        nearbyPlaces && nearbyPlaces.map((el, index) => (
          <MapView.Marker
            key={index}
            coordinate={{
              latitude: el.geometry.location.lat,
              longitude: el.geometry.location.lng
            }}
            title={el.name}
            description={`${el.vicinity}`}
          >
            <Image source={require('../assets/locationMarker.png')} style={{ height: 35, width: 28 }} />
          </MapView.Marker>
        ))
      }
    </MapView>
  )
}

export default MapInput
