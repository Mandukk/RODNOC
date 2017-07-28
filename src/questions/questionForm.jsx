import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Grid from '../template/grid';

import { changeQuestion, add } from './questionsActions.js';

class QuestionForm extends Component {
    constructor(props) {
        super(props);
    }

    render(){
        return (
            <div role='form'>
                <h1>Q-A!</h1>
                <div className='row'>
                    <Grid cols='10 10 8 8'>
                        <textarea className='txtareaQuestion col-lg-12 col-md-12 col-sm-12 col-xs-12'
                            value={this.props.question}
                            onChange={this.props.changeQuestion}
                            placeholder='Insert a question'
                        />
                    </Grid>
                </div>
                <div className='row'>     
                    <Grid cols='10 10 8 8'>                   
                        <button className='btnSendQuestion col-lg-2 col-lg-offset-10 col-md-2 col-md-offset-10 col-sm-2 col-sm-offset-10 col-xs-4 col-xs-offset-8'
                            onClick={() => this.props.add(this.props.question)} >Send</button>
                    </Grid>
                </div>
                
            </div>
        )
    }
}

const mapStateToProps = state => ({ question: state.questions.question });
const mapDispatchToProps = dispatch => bindActionCreators({ changeQuestion, add }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(QuestionForm);