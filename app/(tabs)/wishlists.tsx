import { View, Text, StyleSheet, SafeAreaView } from 'react-native'
import React from 'react'
import { defaultStyles } from '@/constants/Styles';

const Wishlists = () => {
  return (
    <SafeAreaView style={defaultStyles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.header}>Wishlists</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 24,
  },
  header: {
    fontFamily: 'mon-b',
    fontSize: 24,
  },
});

export default Wishlists