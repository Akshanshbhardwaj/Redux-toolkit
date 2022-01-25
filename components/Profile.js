import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import {useSelector, useDispatch} from 'react-redux'
import { fetchName, fetchmail} from '../action'
function Profile() {
    
    const dispatch = useDispatch()
    const updateAge=()=>{
        dispatch({type:'UPDATE_AGE',payload:40})
        

    }
    
  
    const updateName= async () =>{
   
        dispatch(fetchName())
    }
    
    const updateMail= async () =>{
        dispatch(fetchmail())

    }
   
    const {name, age, email}=useSelector((state)=>{
        return state
        // console.warn(state)
    })
    

  return (
    <View style={styles.con}>
        <Text style={styles.heading}>Redux toolkit</Text>
        <Text style={styles.text}>I am {name}</Text>
        <Text style={styles.text}>My age is {age} </Text>
        <Text style={styles.text}>and my email id is {email}  </Text>
        
        
        <Button title='Update Age' onPress={()=>updateAge()} ></Button>
        <Button title='Update Name' onPress={()=>updateName()}></Button>
        <Button title='Update Mail Id' onPress={()=>updateMail()}></Button>


    </View>
    )
}


const styles = StyleSheet.create({
    con: {

        height: '65%',
        justifyContent: 'space-around',
        marginHorizontal: 20,
        marginVertical:20


    },
    text: {
        fontSize: 24,
        textAlign: 'center',

    },
    heading: {
        fontSize: 40,
        textAlign: 'center',

    },
    textinp: {
        height: 50,
        borderColor: '#ff4081',
        borderWidth: 1
    },
    but: {
        borderRadius: 40
    }

})

export default Profile;
