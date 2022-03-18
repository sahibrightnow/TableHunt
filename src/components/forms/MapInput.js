// import { MapView } from 'expo'
import MapView from 'react-native-maps'
import { Dimensions } from 'react-native'
import * as Location from 'expo-location'
import React, { useState, useEffect, createRef } from 'react'
import { TouchableOpacity, Image } from "react-native";
import SvgUri from 'react-native-svg-uri'


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
        // latitudeDelta: 0.0922,
        latitudeDelta: 0.015,
        // longitudeDelta: 0.0421,
        longitudeDelta: 0.0121,
      }}
    >
      <TouchableOpacity onPress={getLocation} style={{
        width: 40, height: 40,
        position: "absolute", bottom: 20, right: 20, borderRadius: 30, backgroundColor: "#d2d2d2"
      }}>
        <SvgUri source={require('../assets/findLocation.svg')} />

      </TouchableOpacity>


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
          />
        ))
      }

    </MapView>
  )
}

export default MapInput
