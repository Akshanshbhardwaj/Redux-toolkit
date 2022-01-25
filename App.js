import React from 'react';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import {configureStore} from '@reduxjs/toolkit'
import { Provider } from 'react-redux';
import Profile from './components/Profile';
import userReducer from './components/reducers/userReducer';

const initialState = {
    name:'Akshansh',
    age:20,
    email:'abc@abc'
}

const store = configureStore({
  reducer:userReducer

 
})

const App=()=>{
  return(
    <Provider store={store}>
    <View>
      <Profile/>
    </View>
    </Provider>
  )
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
