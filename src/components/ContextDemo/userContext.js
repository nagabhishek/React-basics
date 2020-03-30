import React from 'react'

const UserContext = React.createContext('Initial Hi!!!');

const UserProvider = UserContext.Provider
const UserConsumer = UserContext.Consumer

export default UserContext;