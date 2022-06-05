import { Addfeedback, Deletefeedback } from "./ActionType";

export const addFeedback = (value) =>{
    return {
        type:Addfeedback,
        payload:value
    } 
}

export const deleteFeedback = (value)=> {
    return {
        type:Deletefeedback,
        payload:value
    }
}