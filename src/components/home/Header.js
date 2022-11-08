import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  Platform,
} from "react-native";
import React from "react";
import  firebase   from '../../data/Firebase'

const handleSignout = async () => {
  try {
    await firebase.auth().signOut()
    console.log('Signed out successfully!')
  } catch(error){
    console.log(error)
  }
}
export default function Header({navigation}) {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={handleSignout}>
        <Image
          style={styles.logo}
          source={require("../../../assets/header-logo.png")}
        />
      </TouchableOpacity>
      <View style={styles.iconsContainer}>
        <TouchableOpacity onPress={() => navigation.push('NewPostScreen')}>
          <Image
            source={{
              uri: "https://img.icons8.com/material-outlined/60/ffffff/plus-2-math--v1.png",
            }}
            style={styles.icon}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image
            source={{
              uri: "https://img.icons8.com/ios-glyphs/60/ffffff/like--v2.png",
            }}
            style={styles.icon}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={styles.unreadBadge}>
            <Text style={styles.unreadBadgeText}>16</Text>
          </View>
          <Image
            source={{
              uri: "https://img.icons8.com/material-outlined/60/ffffff/facebook-messenger--v5.png",
            }}
            style={styles.icon}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    marginHorizontal: 20,
    marginTop: Platform.OS === "android" ? 35 : 0,
  },
  iconsContainer: {
    flexDirection: "row",
  },
  unreadBadge: {
    backgroundColor: "#FF3250",
    position: "absolute",
    left: 20,
    bottom: 18,
    width: 25,
    heiht: 18,
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
    zIndex: 100,
  },
  unreadBadgeText: {
    color: "white",
    fontWeight: "600",
  },
  icon: {
    width: 30,
    height: 30,
    marginLeft: 10,
    resizeMode: "contain",
  },
  logo: {
    width: 100,
    height: 50,
    resizeMode: "contain",
  },
});
