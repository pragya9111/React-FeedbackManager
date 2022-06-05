const initialState = {
    feedback: []
}

const feedbackReducer = (state = initialState, action) => {
    switch (action.type) {
        case "Addfeedback":
            console.log("Add")
            return {
                ...state,
                feedback: [...state.feedback, action.payload]
            }

        case "Deletefeedback":
            return {
                ...state,
                feedback: action.payload
            }

        default:
            return state;
    }
}

export default feedbackReducer;

