import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { http } from '../../utils/tools';


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
    },
    getDetailProduct:(state,action)=>{
      // nhận được dữ liệu từ dispatch 2
      const productDetail = action.payload
      state.productDetail = productDetail
    }

  }
});

export const {getProductAction, getDetailProduct} = productReducer.actions

export default productReducer.reducer


// action API

export const getProductAPI = ()=>{
  return async (dispatch)=>{
    try{
      const result = await http.get('/product')
      const action = getProductAction(result.data.content)
      dispatch(action)
    }catch(err){
      console.log(err)
    }
  }
}


export const getProductDetailAPI = (params)=>{
  return async (dispatch)=>{
    // b2 thực thi thunk
    let {id} = params
    try{
      let result = await http.get(`/Product/getbyid?id=${id}`)
      // console.log(result.data.content)
      const action = getDetailProduct(result.data.content)
      //  sau khi lấy được dữ liệu
      // b3 dispatch thunk lần 2
      dispatch(action)
      }catch(err){
          console.log(err)
      }
  }
}