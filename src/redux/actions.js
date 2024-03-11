import axios from 'axios'
import { getProducts } from './reducers'

export const getProductsAction = (producto) =>async(dispatch)=>{
try {
    
    dispatch(getProducts(producto))
} catch (error) {
    console.log(error);
}

}