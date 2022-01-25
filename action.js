// export default (status)=>{
//     return{
//         type:'UPDATE_STATUS',
//         payload:status
//     }
// }

import { createAction } from "@reduxjs/toolkit";


export const fetchName =()=>{
    return async (dispatch)=>{
        const res = await fetch('https://jsonplaceholder.typicode.com/users')
        const result = await res.json()
        dispatch({type:'UPDATE_NAME', payload:result[1].name})
    }
}
export const fetchmail =()=>{
    return async (dispatch)=>{
        const res = await fetch('https://jsonplaceholder.typicode.com/users')
        const result = await res.json()
        dispatch({type:'UPDATE_MAIL', payload:result[0].email})
    }
}

