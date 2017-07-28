import axios from 'axios';

const URL = 'http://localhost:3000/ask'

export const search = () => {
    return dispatch => {
        axios.get(URL).then(res => dispatch({ type: 'QUESTIONS_SEARCHED', payload: res.data }))
    }
}

export const add = (question) => {
    return dispatch => {
        axios.post(URL, {question})
            .then(res => dispatch(search()))
            .then(res => dispatch(clear()))
    }
}

export const addAnswer = (question, answer) => {
    return dispatch => {
        axios.patch(`${URL}/${question._id}`, {answer})
            .then(res => dispatch(search()))
    }
}

export const clear = () => {
    return { type: 'QUESTION_CLEAR' }
}

export const changeQuestion = event => {
    return { type: 'QUESTION_TEXT_UPDATE', payload: event.target.value }
}