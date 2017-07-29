import React, {Component} from 'react';
import styled from 'styled-components';

import Grid from './grid';

const Menu = styled.nav`
    border-bottom: 2px solid #49882F;
    background: transparent;
`;

const NavBrand = styled.a`
    &:hover {
        color: #49882F;
    }
    color: green;
`;

const NavLink = styled.a`
    &:hover {
        border-bottom: 2px solid #49882F;
        text-decoration: none;
        color: #49882F;
    }
    transition: border-bottom 0.1s linear;
    color: green;
`;

export default class Navbar extends Component {
    render() {
        return (
            <Menu className='navbar navbar-toggleable-md '>
                <button className="navbar-toggler navbar-toggler-right"
                    type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <NavBrand className="navbar-brand" href="#">RODNOC</NavBrand>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                    <li className="nav-item">
                        <NavLink className="nav-link active" href="#">Inicio<span className="sr-only">(current)</span></NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" href="#">Notificacoes</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" href="#">Perguntas</NavLink>
                    </li>
                    </ul>
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <NavLink className="nav-link" href="#">Login</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" href="#">Register</NavLink>
                        </li>
                    </ul>
                    
                </div>
            </Menu>
        )
    }
}