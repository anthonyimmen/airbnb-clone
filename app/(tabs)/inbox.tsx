import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity} from 'react-native'
import React from 'react'
import { defaultStyles } from '@/constants/Styles';
import { useAuth } from '@clerk/clerk-expo';
import { Link } from 'expo-router';
import Colors from '@/constants/Colors';
import { useNavigation } from 'expo-router';

const Inbox = () => {

  const { signOut, isSignedIn } = useAuth();

  const navigation = useNavigation();

  const handlePress = () => {
    navigation.navigate('(modals)/login');
  };

  return (
    <SafeAreaView style={defaultStyles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.header}>Inbox</Text>
      </View>

      { isSignedIn ? 
        <View style={styles.container}>
        <View style={{gap: 8}}>
          <Text style={{fontFamily: 'mon-sb', fontSize: 20}}>
            No new messages
          </Text>
          <Text style={{fontFamily: 'mon', fontSize: 15}}>
            When you contact a Host or send a reservation request, you'll see your messages here.
          </Text>
        </View>
      </View> :
        <View style={styles.container}>
          <View style={{gap: 8}}>
            <Text style={{fontFamily: 'mon-sb', fontSize: 20}}>
              Log in to see messages
            </Text>
            <Text style={{fontFamily: 'mon', fontSize: 15}}>
              Once you login, you'll find messages from hosts here.
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

export default Inbox