import 'modules/bootstrap/dist/css/bootstrap.min.css'
import 'modules/font-awesome/css/font-awesome.min.css'
import './style.css'

import React from 'react';
import Questions from '../questions/questions';

export default props => (
    <div className='container'>
        <Questions />
    </div>
)