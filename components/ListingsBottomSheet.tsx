import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React, { useMemo, useRef, useState } from 'react'
import BottomSheet  from '@gorhom/bottom-sheet'
import Listings from '@/components/Listings';
import Colors from '@/constants/Colors';
import { Ionicons } from '@expo/vector-icons';
import { NativeViewGestureHandler } from 'react-native-gesture-handler';

interface Props {
  listings: any[],
  category: string,
}

const ListingsBottomSheet = ({ listings, category} : Props) => {

  const bottomSheetRef = useRef<BottomSheet>(null);
  const snapPoints = useMemo(() => ['10%', '100%'], []);
  const [refresh, setRefresh] = useState<number>(0);

  // Used to move scroll cursor back to top when bottomSheet is moved down
  const onShowMap = () => {
    bottomSheetRef.current?.collapse();
    setRefresh(refresh + 1);
  };


  return (
    <BottomSheet 
      ref={bottomSheetRef} 
      index={1}
      snapPoints={snapPoints}       
      enablePanDownToClose={false}
      handleIndicatorStyle={{backgroundColor: Colors.grey}}
      style={styles.sheetContainer}
    >
      <View style={styles.contentContainer}>
        <Listings listings={listings} category={category} refresh={refresh} />
        <View style={styles.absoluteView}>
        <TouchableOpacity style={styles.btn} onPress={onShowMap}>
            <Text style={{ fontFamily: 'mon-sb', color: '#fff' }}>Map</Text>
            <Ionicons name="map" size={20} style={{ marginLeft: 10 }} color={'#fff'} />
          </TouchableOpacity>
        </View>
      </View>
    </BottomSheet>
  )
}

export default ListingsBottomSheet

const styles = StyleSheet.create({
  contentContainer: {
    flex: 1,
  },
  absoluteView: {
    position: 'absolute',
    bottom: 30,
    width: '100%',
    alignItems: 'center',
  },
  btn: {
    backgroundColor: Colors.dark,
    padding: 14,
    height: 50,
    borderRadius: 30,
    flexDirection: 'row',
    marginHorizontal: 'auto',
    alignItems: 'center',
  },
  sheetContainer: {
    backgroundColor: '#fff',
    borderRadius: 10,
    elevation: 4,
    shadowColor: '#000',
    shadowOpacity: 0.3,
    shadowRadius: 4,
    shadowOffset: {
      width: 1,
      height: 1,
    },
  },
})