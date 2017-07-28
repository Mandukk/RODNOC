const INITIAL_STATE = {
    question: '',
    questions: []
};

export default (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case 'QUESTION_TEXT_UPDATE':
            return { ...state, question: action.payload }
        case 'QUESTIONS_SEARCHED':
            return { ...state, questions: action.payload.questions }
        case 'QUESTION_CLEAR':
            return { ...state, question: ''}
        default:
            return state
    }
}