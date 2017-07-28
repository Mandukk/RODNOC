import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { search, addAnswer } from './questionsActions.js';

class QuestionList extends Component{
    constructor(props){
        super(props);
    }

    componentWillMount(){
        this.props.search();
    }

    renderAnswerOrForm(question) {
        if (question.answer) {
            return (
                <p className='txtAnswer'>{question.answer}</p>
            )
        } else {
            return (
                <div>
                <form onSubmit={(event) => {
                        event.preventDefault();
                        this.props.addAnswer(question, document.getElementById(question._id).value);
                    }}>
                    <textarea className='txtareaAnswer' cols='30' rows='3' id={question._id} style={{ resize:'none' }} />
                    <input type='submit' value='Answer' />
                </form>
                </div>
            )
        }
    }

    renderQuestions(){
        const questions = this.props.questions || [];
        return questions.map( question => (
            <div key={question._id} >
                <h2><strong>Fulano perguntou: </strong>{question.question}</h2>
                {this.renderAnswerOrForm(question)}
            </div>
        ))

    }

    render(){
        return (
            <div>
                <h1>Respostas</h1>
                {this.renderQuestions()}
            </div>
        )
    }
}

const mapStateToProps = state => ({ questions: state.questions.questions });
const mapDispatchToProps = dispatch => bindActionCreators({ search, addAnswer }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(QuestionList);