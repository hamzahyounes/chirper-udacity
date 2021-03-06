import { getInitialData } from "../utils/api";
import { receiveUsers } from "./users";
import { receiveTweets } from "./tweets";
import { setAuthedUser } from "./authedUser";
import { showLoading, hideLoading } from "react-redux-loading"; //Action creators

export function handleInitialData() {
    const AUTHED_ID = "hamzayounes"
    return dispatch => {
        dispatch(showLoading());
        return getInitialData()
            .then(({ users, tweets}) => {
                dispatch(receiveUsers(users))
                dispatch(receiveTweets(tweets))
                dispatch(setAuthedUser(AUTHED_ID))
                dispatch(hideLoading())
            } )
    }
}