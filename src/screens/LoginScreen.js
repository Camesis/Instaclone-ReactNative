import { View, StyleSheet, Image } from 'react-native'
import React from 'react'
import LoginForm from '../components/loginScreen/LoginForm'

const INSTAGRAM_LOGO = 'https://cdn2.iconfinder.com/data/icons/social-media-2285/512/1_Instagram_colored_svg_1-512.png'
const INSTAGRAM_LOGO_DARKLETTER = 'https://logosmarcas.net/wp-content/uploads/2020/04/Instagram-Logo.png'

const LoginScreen = ({navigation}) =>  (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image source={{uri: INSTAGRAM_LOGO, height: 100, width: 100}}/>
        <Image source={{uri: INSTAGRAM_LOGO_DARKLETTER, height: 100, width: 200}}/>
      </View>
      <View style={styles.logoContainer}>
      </View>
      <LoginForm navigation={navigation}/>
    </View> 
    
  )

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        paddingTop: 50,
        paddingHorizontal: 12
    },
    logoContainer: {
        alignItems: 'center',
        marginTop: 60
    }

})
export default LoginScreen