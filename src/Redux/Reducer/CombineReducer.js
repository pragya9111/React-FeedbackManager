import { combineReducers } from "redux"

import feedbackReducer from "./Reducer"

const reducers= combineReducers({
    feedback:feedbackReducer
})

export default reducers;