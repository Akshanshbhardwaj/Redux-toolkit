import { act } from "@testing-library/react"
import { createReducer} from '@reduxjs/toolkit'
import { updateStatus } from '../../action'



const initialstate = {
    name: 'Akshansh',
    age: 28,
    status:'complicated'
}




export default createReducer(initialstate,(builder)=>{
    builder.addCase('UPDATE_AGE',(state,action)=>{
        state.age = action.payload
    })
    builder.addCase('UPDATE_NAME',(state,action)=>{
        state.name = action.payload
    })
    builder.addCase('UPDATE_MAIL',(state,action)=>{
        state.email = action.payload
    })
})