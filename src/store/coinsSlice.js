import {createSlice} from '@reduxjs/toolkit'

const coinsSlice = createSlice({
    name:'coins',
    initialState:[],
    reducers:{
        setCoins(state,action){
            const coins = action.payload.coins
            return state=coins
        }
    }
})
export const coinsActions = coinsSlice.actions
export default coinsSlice