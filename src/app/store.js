import {configureStore} from '@reduxjs/toolkit'
import authReducer from '../features/auth/authSlice';
import customerReducer from '../features/customers/CustomerSlice';
import productReducer from '../features/product/ProductSlice';

export const store = configureStore({
    reducer: {
        auth: authReducer,
        customer: customerReducer,
        product : productReducer,
        // add your reducers for the store here
    }
})