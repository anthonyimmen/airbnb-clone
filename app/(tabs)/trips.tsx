import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity} from 'react-native'
import React from 'react'
import { defaultStyles } from '@/constants/Styles';
import { useAuth } from '@clerk/clerk-expo';
import { Link } from 'expo-router';
import Colors from '@/constants/Colors';
import { useNavigation } from 'expo-router';

const Trips = () => {

  const { signOut, isSignedIn } = useAuth();

  const navigation = useNavigation();

  const handlePress = () => {
    navigation.navigate('(modals)/login');
  };

  return (
    <SafeAreaView style={defaultStyles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.header}>Trips</Text>
      </View>

      { isSignedIn ? 
        <View style={styles.container}>
            <Text>

            </Text>
        </View> :
        <View style={styles.container}>
          <View style={{gap: 8}}>
            <Text style={{fontFamily: 'mon-sb', fontSize: 20}}>
              No trips yet
            </Text>
            <Text style={{fontFamily: 'mon', fontSize: 15}}>
              When you're ready to plan your next trup, we're here to help.
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
    paddingHorizontal: 12,
    marginHorizontal: 20,
    marginTop: 24,
    gap: 60,
    textAlign: 'left',
    marginBottom: 24,
  }
});

export default Trips