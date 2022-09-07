import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
    arrProduct: [],
    productDetail: {}
}

const productReducer = createSlice({
  name: "productReducer",
  initialState,
  reducers: {
    getProductAction: (state, action)=>{
        const arrProduct = action.payload
        state.arrProduct =  arrProduct
    }

  }
});

export const {getProductAction} = productReducer.actions

export default productReducer.reducer


// action API

export const getProductAPI = ()=>{
    return async (dispatch)=>{
      try{
        console.log(123)
        const result = await axios({
          url: "https://shop.cyberlearn.vn/api/Product",
          method:"GET"
        })
        // console.log(result.data.content)
        const action = getProductAction(result.data.content)
        dispatch(action)
      }catch(err){
        console.log(err)
      }
    }
  }