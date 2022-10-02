import { createSlice } from '@reduxjs/toolkit'
import { ACCESS_TOKEN, getStore, getStoreJson, setStore, setStoreJson, USER_LOGIN } from '../../utils/tools';
import { history } from '../../index';
import { http } from '../../utils/tools';


const initialState = {
    userLogin: getStoreJson(USER_LOGIN) // có thể null hoặc object
}

const userReducer = createSlice({
  name: "userReducer",
  initialState,
  reducers: {
      getProfileAction: (state,action)=>{
          state.userLogin = action.payload
      }

  }
});
export const {getProfileAction} = userReducer.actions

export const {} = userReducer.actions

export default userReducer.reducer


export const logInAPI = (userLogin)=>{
    return async (dispatch) =>{
        try{
            const result = await http.post('/users/signin', userLogin);
            console.log(result)
            setStore(ACCESS_TOKEN, result.data.content.accessToken)
            history.push("/")
            dispatch(getProfileAPI())
            
        }catch(err){
            history.push("/")
            console.log(err)
        }

    }     
}

export const logOut = ()=>{
    localStorage.removeItem(USER_LOGIN)
    localStorage.removeItem(ACCESS_TOKEN)
    history.push("/")
    window.location.reload();
    
}


export const getProfileAPI = (accessToken = getStore(ACCESS_TOKEN)) => {
    return async dispatch => {
        try {
            const result = await http.post('users/getProfile')
            const action = getProfileAction(result.data.content);
            dispatch(action);
            setStoreJson(USER_LOGIN,result.data.content);

        }catch(err) {
            console.log(err);
        }
    }
}