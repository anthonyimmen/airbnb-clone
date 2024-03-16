import { View, Text} from 'react-native'
import React, { useMemo, useState } from 'react'
import { Link, Stack } from 'expo-router'
import ExploreHeader from '@/components/ExploreHeader'
import Listings from '@/components/Listings'
import listingsData from '@/assets/data/airbnb-listings.json'

const Page = () => {
  const items = useMemo(() => listingsData as any, []);
  const [category, setCategory] = useState("Tiny homes")
  const onDataChanged = (category: string) => {
    console.log("Changed: ", category)
    setCategory(category);
  }

  return (
    <View style={{flex: 1, marginTop: 100}}>
      <Stack.Screen options={{
        header: () => <ExploreHeader onCategoryChange={onDataChanged}/>
      }}/>
      <Listings listings={items} category={category}/>
    </View>
  )
}

export default Page