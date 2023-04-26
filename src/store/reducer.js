import { createStore } from "redux";

const intialState = {
    'users':[],
    'loggedinUser':null,
    'loginClicked':false
}

const reducer = (state = intialState,action)=>{
    switch(action.type){
        case 'REGISTER':
            return {
                ...state,
                'users':[...state.users, action.payload]
            }
        case 'LOGIN':
            return {
                ...state,
                loggedinUser: action.payload
            }
        case 'HEADER':
            return {
                 ...state,
                loginClicked: action.payload
            }
        default:
            return state;
    }
}

export default createStore(reducer);