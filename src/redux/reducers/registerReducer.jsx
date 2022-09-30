import { createSlice } from "@reduxjs/toolkit";

import axios from "axios";
import { http } from "../../utils/tools";
import { history } from '../../index';
import { getProfileAPI } from "./userReducer";
import {
  ACCESS_TOKEN,
  getStoreJson,
  setStore,
  USER_LOGIN,
} from "../../utils/tools";
const initialState = {
  eyeIcon: { status: true, passwordType: "password" },
  userLogin: getStoreJson(USER_LOGIN) 
};
{
  /* <FontAwesomeIcon icon="fa-solid fa-eye" />  */
}

const registerReducer = createSlice({
  name: "registerReducer",
  initialState,
  reducers: {
    changeEyeIcon: (state, action) => {
      const newIcon = action.payload;
      state.eyeIcon = newIcon;
      //   state.openedEye = true
      return state;
    },
    getProfileAction: (state,action)=>{
        state.userLogin = action.payload
    }
  },
});

export const { changeEyeIcon, getProfileAction } = registerReducer.actions;

export default registerReducer.reducer;

export const registerAPI = (userLogin) => {
    let {gender} = userLogin
    if(gender==="male"){
        userLogin = {...userLogin, gender:true}
    }else{
        userLogin = {...userLogin, gender:false}
    }
  return async (dispatch) => {
    try {
      const result = await http.post('/Users/signup', userLogin);
      console.log(result);
      let {message}  = result.data
      alert(message);
      console.log(result.data);
      setStore(ACCESS_TOKEN, result.data.content.accessToken)
      history.push("/");
      dispatch(getProfileAPI());
    } catch (err) {
      history.push("/home");
      console.log(err);
    }
  };
};
