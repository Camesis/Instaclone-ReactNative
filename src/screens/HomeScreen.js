import { SafeAreaView, StyleSheet, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import Header from '../components/home/Header'
import Stories from '../components/home/Stories'
import Post from '../components/home/Post'
import { POSTS } from '../data/post'
import BottomTabs, { bottomTabIcons } from '../components/home/BottomTabs'
import { db } from '../Firebase'

export default function HomeScreen({navigation}) {
      const [posts, setPosts] = useState([])
    useEffect(() => {
      db.collectionGroup('posts').onSnapshot(snapshot => {
        setPosts(snapshot.docs.map(doc => doc.data()))
      })
    }, [])
  return (
    <SafeAreaView style={styles.container}>
     <Header navigation={navigation}/>
     <Stories />
     <ScrollView vertical showsVerticalScrollIndicator = {false}>
      {posts.map((post, index) => (
              <Post post={post} key={index}/>
      ))}
     </ScrollView>
     <BottomTabs icons={bottomTabIcons}/>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'black',
        flex: 1
    }
})