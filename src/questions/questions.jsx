import React, {Component} from 'react';

import QuestionForm from './questionForm';
import QuestionList from './questionList';

export default class Questions extends Component {

    render(){
        return (
            <div className='container' >
                <QuestionForm />
                <QuestionList />
            </div>
        )
        
    }
}