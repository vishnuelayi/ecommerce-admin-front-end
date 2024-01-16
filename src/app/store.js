import {configureStore} from '@reduxjs/toolkit'
import authReducer from '../features/auth/authSlice';
import customerReducer from '../features/customers/CustomerSlice';

export const store = configureStore({
    reducer: {
        auth: authReducer,
        customer: customerReducer,
        // add your reducers for the store here
    }
})