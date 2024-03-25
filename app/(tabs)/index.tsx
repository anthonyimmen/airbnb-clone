import { View, Text} from 'react-native'
import React, { useMemo, useState } from 'react'
import { Link, Stack } from 'expo-router'
import ExploreHeader from '@/components/ExploreHeader'
import listingsData from '@/assets/data/airbnb-listings.json'
import listingsDataGeo from '@/assets/data/airbnb-listings.geo.json'
import ListingsMap from '@/components/ListingsMap'
import ListingsBottomSheet from '@/components/ListingsBottomSheet'
import { GestureHandlerRootView, NativeViewGestureHandler } from 'react-native-gesture-handler'

const Page = () => {
  const items = useMemo(() => listingsData as any, []);
  const geoItems = useMemo(() => listingsDataGeo, []);
  const [category, setCategory] = useState("Tiny homes")
  const onDataChanged = (category: string) => {
    console.log("Changed: ", category)
    setCategory(category);
  }

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
        <View style={{flex: 1, marginTop: 50}}>
          <Stack.Screen options={{
            header: () => <ExploreHeader onCategoryChange={onDataChanged}/>
          }}/>
          <ListingsMap listings={geoItems}/> 
          <ListingsBottomSheet listings={items} category={category} />
        </View>
    </GestureHandlerRootView>
  )
}

export default Page