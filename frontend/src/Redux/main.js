import {createStore,combineReducers} from 'redux';
import fetchReducer from './reducers/fetchPolls';
import fetchWeather from './reducers/fetchWeather';
import { connectRouter } from 'connected-react-router';



const reducer =(history)=> combineReducers({
  router: connectRouter(history),
  polls : fetchReducer,
  currentWeather:fetchWeather,
});

  
//    let initialState=[
//     {
//         "_id": "YRveH27",
//         "options": [
//             "a",
//             "b"
//         ],
//         "vote": [
//             0,
//             1
//         ],
//         "voted": [
//             {
//                 "casted": "no"
//             },
//             {
//                 "casted": "Omer Sayem"
//             }
//         ],
//         "username": "Omer Sayem",
//         "userId": "nbDmkEh",
//         "title": "test1",
//         "__v": 0
//     }
//    ]
  
  
  const redux  = { createStore , reducer } ;
  
  
  export default redux;