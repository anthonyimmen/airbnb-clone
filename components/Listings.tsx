import { View, Text, FlatList, ListRenderItem, StyleSheet, TouchableOpacity, Image } from "react-native";
import React, { useEffect, useRef, useState } from "react";
import { defaultStyles } from "@/constants/Styles";
import { Link } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

interface Props {
  listings: any[];
  category: string;
}

const Listings = ({ listings: items, category }: Props) => {
  const [loading, setLoading] = useState(false);
  const listRef = useRef<FlatList>(null);

  useEffect(() => {
    // We want to reload the listings shown in this view each time a new category is selected
    console.log("Reload Listings", items.length);
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 200);
  }, [category]);

  const renderRow: ListRenderItem<any> = ({ item }) => (
    <Link href={`/listing/${item.id}`} asChild>
        <TouchableOpacity>
            <View style={styles.listing}>
                <Image source={{uri: item.medium_url}} style={styles.image}/>
                <TouchableOpacity style={{ position: 'absolute', right: 30, top: 30 }}>
                <Ionicons name="heart-outline" size={24} color="#000"/>
          </TouchableOpacity>
            </View>
        </TouchableOpacity>
    </Link>
  );

  return (
    <View style={defaultStyles.container}>
      <FlatList ref={listRef} data={loading ? [] : items} renderItem={renderRow}/>
    </View>
  );
};

const styles = StyleSheet.create({
    listing: {
        padding: 16
    },
    image: {
        width: '100%',
        height: 300,
        borderRadius: 10
    }
});

export default Listings;
