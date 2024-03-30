import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity} from 'react-native'
import React from 'react'
import { defaultStyles } from '@/constants/Styles';
import { useAuth } from '@clerk/clerk-expo';
import { Link } from 'expo-router';
import Colors from '@/constants/Colors';
import { useNavigation } from 'expo-router';

const Wishlists = () => {

  const { signOut, isSignedIn } = useAuth();

  const navigation = useNavigation();

  const handlePress = () => {
    navigation.navigate('(modals)/login');
  };

  return (
    <SafeAreaView style={defaultStyles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.header}>Wishlists</Text>
      </View>

      { isSignedIn ? 
        <View style={styles.container}>
            <Text>

            </Text>
        </View> :
        <View style={styles.container}>
          <View style={{gap: 8}}>
            <Text style={{fontFamily: 'mon-sb', fontSize: 20}}>
              Login to view your wishlists
            </Text>
            <Text style={{fontFamily: 'mon', fontSize: 15}}>
              You can create, view, or edit wishlists once you've logged in.
            </Text>
          </View>
            <TouchableOpacity 
              style={[defaultStyles.btn, {width: 125}]}
              onPress={handlePress}
            >
              <Text style={[defaultStyles.btnText]}>
                Log In
              </Text>
            </TouchableOpacity>
        </View>
      
      }
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 30,
    paddingBottom: 16
  },
  header: {
    fontFamily: 'mon-sb',
    fontSize: 30,
  },
  container: {
    backgroundColor: '#fff',
    paddingVertical: 0,
    paddingHorizontal: 34,
    marginHorizontal: 20,
    marginTop: 24,
    gap: 60,
    textAlign: 'left',
    marginBottom: 24,
  }
});

export default Wishlists