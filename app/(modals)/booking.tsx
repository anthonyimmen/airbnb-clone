import {View, Text, StyleSheet, TouchableOpacity } from 'react-native'; 
import React from 'react';
import { BlurView } from 'expo-blur';
import { defaultStyles } from '@/constants/Styles';
import Animated, { SlideInDown } from 'react-native-reanimated';
import { router } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

const Page = () => {

  const onClearAll = () => {
    return 0
  };

  return (
      <BlurView intensity={70} style={styles.container} tint="light">
        <Text>Book</Text>
        <Animated.View style={defaultStyles.footer} entering={SlideInDown.delay(200)}>
          <View
            style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
            <TouchableOpacity onPress={onClearAll} style={{justifyContent: 'center'}}>
              <Text style={{textDecorationLine: 'underline', fontFamily: 'mon-sb', fontSize: 16}}>Clear all</Text>
            </TouchableOpacity>
            <TouchableOpacity 
              style={[defaultStyles.btn, { paddingRight: 15, paddingLeft: 15, flexDirection: 'row', gap: 8 }]}
              onPress={() => router.back()}
            > 
              <Ionicons name='search' size={20} color='#fff'/>
              <Text style={defaultStyles.btnText}>Search</Text>
            </TouchableOpacity>
          </View>
        </Animated.View>
      </BlurView>
)};

const styles = StyleSheet.create({
  container: {
      flex: 1,
      paddingTop: 100
    },
  }
);

export default Page;