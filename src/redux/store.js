import dealerReducer from './DealerSlice';
import { configureStore } from "@reduxjs/toolkit";
console.log('store');
const store = configureStore(
    {
        reducer: {
            
               dealer: dealerReducer
            
        
        }
    }
);

export default store;