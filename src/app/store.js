import {configureStore} from '@reduxjs/toolkit'
import authReducer from '../features/auth/authSlice';
import customerReducer from '../features/customers/CustomerSlice';
import productReducer from '../features/product/ProductSlice';
import brandReducer from '../features/brand/BrandSlice';
import productCatReducer from '../features/product-category/ProductCatSlice'

export const store = configureStore({
    reducer: {
        auth: authReducer,
        customer: customerReducer,
        product : productReducer,
        brand: brandReducer,
        productcat: productCatReducer,
        // add your reducers for the store here
    }
})