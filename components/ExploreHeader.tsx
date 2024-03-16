import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native'
import React, { useRef, useState } from 'react'
import { Ionicons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Link } from 'expo-router';
import Colors from '@/constants/Colors';
import * as Haptics from 'expo-haptics';

const categories = [
    {
      name: 'Tiny homes',
      icon: 'home',
    },
    {
      name: 'Cabins',
      icon: 'house-siding',
    },
    {
      name: 'Trending',
      icon: 'local-fire-department',
    },
    {
      name: 'Play',
      icon: 'videogame-asset',
    },
    {
      name: 'City',
      icon: 'apartment',
    },
    {
      name: 'Beachfront',
      icon: 'beach-access',
    },
    {
      name: 'Countryside',
      icon: 'nature-people',
    },
  ];
  
interface Props {
    onCategoryChange: (category: string) => void
}

const ExploreHeader = ( {onCategoryChange}: Props) => {
    const scrollRef = useRef<ScrollView>(null);
    const itemsRef = useRef<Array<TouchableOpacity | null>>([]);
    const [activeIndex, setActiveIndex] = useState(0);
    const selectCategory = (index: number) => {
        const selected = itemsRef.current[index];
        selected?.measure((x) => {
            // We have the -16 to reflect the padding
            scrollRef.current?.scrollTo({x: x - 20, y: 0, animated: true})
        })
        setActiveIndex(index);
        Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
        onCategoryChange(categories[index].name);
    }
    return (
        <SafeAreaView style={{flex: 1, backgroundColor: "#fff"}}>
            <View style={styles.container}>
                <View style={styles.actionRow}>
                    <Link href={'/(modals)/booking'} asChild>
                        <TouchableOpacity style={styles.searchBtn}>
                            <Ionicons name='search' size={24} />
                            <View style={{flexDirection: 'column'}}>
                                <Text style={{fontFamily: 'mon-sb', fontSize: 14}}> Where to? </Text>
                                <Text style={{fontFamily: 'mon', color: Colors.grey, fontSize: 12}}> Anywhere · Any week · Add guests </Text>
                            </View>
                        </TouchableOpacity>
                    </Link>
                    <TouchableOpacity style={styles.filterBtn}>
                        <Ionicons name='options-outline' size={24}/>
                    </TouchableOpacity>
                </View>
                <ScrollView 
                    horizontal 
                    ref={scrollRef}
                    showsHorizontalScrollIndicator={false}
                    contentContainerStyle={{
                        alignItems: 'center',
                        gap: 30,
                        paddingHorizontal: 20
                    }}
                >
                {categories.map((item, index) => (
                    <TouchableOpacity 
                        key={index}
                        ref={(el) => itemsRef.current[index] = el}
                        style={activeIndex === index ? styles.categoriesBtnActive : styles.categoriesBtn}
                        onPress={() => selectCategory(index)}
                    >
                        <MaterialIcons size={24} name={item.icon as any} color={activeIndex === index ? "#000" : Colors.grey}/>
                        <Text style={activeIndex === index ? styles.categoryTextActive : styles.categoryText}>{item.name}</Text>
                    </TouchableOpacity>
                ))}
                </ScrollView>
            </View>
        </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        height: 130,
        borderColor: "#000",
        borderBottomWidth: StyleSheet.hairlineWidth
    }, 
    actionRow: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        paddingBottom: 15,
        gap: 10
    }, 
    filterBtn: {
        padding: 10,
        borderWidth: 1,
        borderColor: Colors.grey,
        borderRadius: 24
    },
    searchBtn: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10,
        borderColor: '#c2c2c2',
        borderWidth: StyleSheet.hairlineWidth,
        flex: 1,
        padding: 15,
        borderRadius: 30,
        backgroundColor: '#fff',
        elevation: 2,
        shadowColor: '#000',
        shadowOpacity: 0.12,
        shadowRadius: 8,
        shadowOffset: {
            width: 1,
            height: 1
        }
    },
    categoryText: {
        fontSize: 14,
        fontFamily: 'mon-sb',
        color: Colors.grey
    },
    categoryTextActive: {
        fontSize: 14,
        fontFamily: 'mon-sb',
        color: '#000'
    },
    categoriesBtn: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingBottom: 8,
    },
      categoriesBtnActive: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        borderBottomColor: '#000',
        borderBottomWidth: 2,
        paddingBottom: 8,
    },
})

export default ExploreHeader