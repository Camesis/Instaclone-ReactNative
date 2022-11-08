import React from 'react'
import { View, Text, ScrollView, Image, StyleSheet } from 'react-native'
import { USERS } from '../../data/Users'

const Stories = () => {
  return (
  <View style={{marginBottom: 13}}>
    <ScrollView horizontal showsHorizontalScrollIndicator = {false}>
    {USERS.map((story, index) => (
        <View key={index} style={{alignItems: 'center'}}>
           <Image source={{uri: story.image}} style={styles.story}/> 
           <Text style={{color: 'white'}}>{
           story.user.length > 11 ? story.user.slice(0, 6).toLowerCase() + "..." : story.user.toLocaleLowerCase()
           }</Text>
        </View>
        ))}
    </ScrollView>
</View>
)
}

const styles = StyleSheet.create({
    story: {
        width: 70,
        height: 70,
        borderRadius: 50,
        marginLeft: 8,
        borderWidth: 2,
        borderColor: '#F3752B'
    }
})
 
export default Stories