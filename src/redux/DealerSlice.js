import { createSlice } from "@reduxjs/toolkit";
import Dealer from "../components/models/Dealer";

// step 3 for redux - create slices for each components 
const DealerSlice = createSlice({

    name: 'dealer',

    initialState: {
        // empState: {
        //     eid: 101,
        //     firstName: 'Sonu',
        //     salary: 10.5
        // }

        dealerState: new Dealer(),
        dealerList: []


    },

    reducers: {

        getDealer: (state, action) => {
            console.log('dealer slice reducer');
            state.dealerState = action.payload;
        },

        getAllDealers: (state, action) => {
            console.log('dealer Slice reducers getAllfarmer');
            state.dealerList = action.payload;
        },
        deleteDealer: (state, action) => {
            console.log('farmSlice reducers deleteFarmerById');
            state.dealerList = action.payload;
        },
        

    
    }
});

export const {getDealer , getAllDealers, deleteDealer} = DealerSlice.actions;

export default DealerSlice.reducer;