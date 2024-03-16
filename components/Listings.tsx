import { View, Text } from 'react-native'
import React, { useEffect } from 'react'

interface Props {
    listings: any[],
    category: string
}
const Listings = ({listings, category}: Props) => {

    useEffect(() => {
        // We want to reload the listings shown in this view
        // Each time a new category is selected
        console.log("Reload Listings")
    }, [category])

    return (
    <View>
        <Text>Listings</Text>
    </View>
    )
}

export default Listings