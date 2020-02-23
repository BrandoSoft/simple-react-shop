import React from 'react'
import { Route } from 'react-router-dom'
import '../styles/Footer.css';

const Footer = () => {
    return (
        <div>
            <h3>Stopka</h3>
            <Route path="/" exact render={() => {
                return (
                    <p>Jesteś na: <span>Strona główna</span></p>
                )
            }} />
            <Route path="/:page" exact render={(props) => {
                return (
                    <>
                        <p>Jesteś na: <span>{props.match.params.page}</span></p>
                        <p>Jesteś na: <span>{props.match.url}</span></p>
                        <p>Jesteś na: <span>{props.match.path}</span></p>
                    </>
                )
            }} />
            <Route path="/:page/:idProduct" render={(props) => {
                return (
                    <>
                        <p>Jesteś na: <span>{props.match.params.idProduct}</span></p>
                        <p>Jesteś na: <span>{props.match.url}</span></p>
                        <p>Jesteś na: <span>{props.match.path}</span></p>
                    </>
                )
            }} />
        </div>
    );
}

export default Footer; 