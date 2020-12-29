import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import '../styles/fentity.css'


class Fentity extends Component {
    render() {
        const {fentities,name} = this.props.match.params
        const state = this.props.state
        const fentity = state[fentities].find(t => t.name === name)
        return (
            <React.Fragment>
                {!fentity ? <Redirect to="./" /> : (
                        <div id="creature-container">
                            <Link to={`/directory/${fentities}`}>Back</Link>
                            <h1>{fentity.name}</h1>
                            <img src={fentity.imgUrl} alt=""/>
                            <div className="title">Power:</div>
                            <div className="power text"> {fentity.power}</div>
                            <div className="other text">{fentity.other}</div>
                        </div>
                    )
                }
            </React.Fragment>
        )
    }
}

export default Fentity;
