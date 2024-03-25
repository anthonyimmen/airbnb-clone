import { StyleSheet, Text, View } from "react-native";
import React, { memo } from "react";
import { Marker, PROVIDER_GOOGLE } from "react-native-maps";
import { useRouter } from "expo-router";
import MapView from "react-native-map-clustering";

// If you want to deploy this, you'll need to get an API key
// Probably just going to link the project in my Github and add screenshots

interface Props {
  listings: any;
}

const INITIAL_REGION = {
  latitude: 52.52,
  longitude: 13.405,
  latitudeDelta: 4,
  longitudeDelta: 4,
};

// We memoize the whole component so that we do not need to re-render it, since
// it is not changing much in our implementation
const ListingsMap = memo(({ listings }: Props) => {

  const router = useRouter();
  
  const onMarkerSelected = (item: any) => {
    console.log(item);
    router.push(`/listing/${item.properties.id}`);
  };

  const renderCluster = (cluster: any) => {
    const { id, geometry, onPress, properties } = cluster;
    const points = properties.point_count;

    return (
      <Marker 
        key={`cluster-${id}`} 
        coordinate={{
          longitude: geometry.coordinates[0],
          latitude: geometry.coordinates[1],
        }}
        onPress={onPress}
      >
        <View style={styles.marker}>
          <Text
            style={{
              color: '#000',
              textAlign: 'center',
              fontFamily: 'mon-sb',
            }}>
            {points}
          </Text>
        </View>
      </Marker>
    )
  }

  return (
    <View style={styles.container}>
      <MapView
        animationEnabled={false}
        style={StyleSheet.absoluteFill}
        provider={PROVIDER_GOOGLE}
        showsUserLocation
        showsMyLocationButton
        initialRegion={INITIAL_REGION}
        clusterColor={"#fff"}
        clusterTextColor={"#000"}
        clusterFontFamily={"mon-sb"}
        renderCluster={renderCluster}
      >
        {listings.features.map((item: any) => (
          <Marker
            onPress={() => onMarkerSelected(item)}
            key={item.properties.id}
            coordinate={{
              longitude: +item.geometry.coordinates[0],
              latitude: +item.geometry.coordinates[1],
            }}
          >
            <View style={styles.marker}>
              <Text style={styles.markerText}>$ {item.properties.price}</Text>
            </View>
          </Marker>
        ))}
      </MapView>
    </View>
  );
});

export default ListingsMap;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: "100%",
    height: "100%",
  },
  marker: {
    padding: 8,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
    elevation: 5,
    borderRadius: 12,
    shadowColor: '#000',
    shadowRadius: 3.84,
    shadowOffset: {
      width: 10,
      height: 10,
    },
    shadowOpacity: 1,
    overflow: 'hidden', // Add this line to ensure the shadow is rounded
  },
  markerText: {
    fontSize: 14,
    fontFamily: 'mon-sb',
  },
});
