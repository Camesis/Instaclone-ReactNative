
import React, { useState, useEffect } from 'react'
import { firebase }  from '../../data/Firebase'
import { SignedInStack, SignedOutStack } from '../routes'

const AuthNavigation = () => {
    const [currentUser, setCurrentUser] = useState(null)
    const userHandler = user => user ? setCurrentUser(user) : setCurrentUser(null)

    useEffect(() => {
         firebase.auth().onAuthStateChanged(user => userHandler(user))

    }, [])
  return <>{currentUser ? <SignedInStack /> : <SignedOutStack />}</>
}

export default AuthNavigation