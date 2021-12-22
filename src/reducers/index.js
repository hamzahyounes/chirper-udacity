import { combineReducers } from 'redux';
import tweets from './tweets';
import { loadingBarReducer } from 'react-redux-loading';
import users from './users';
import authedUser from './authedUser'

export default combineReducers({
    authedUser,
    users,
    tweets,
    loadingBar: loadingBarReducer
})

//Note: in ES6 we don't repeat the value if it has the same name of the key -->
//so we didn't type "users: users" for example.