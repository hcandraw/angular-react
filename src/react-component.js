import React from 'react';
import PropTypes from 'prop-types';

export class ReactComponent extends React.Component {
    constructor() {
        super();
        this.state = {
            weather: null,
            error: null
        }
    }

    getWeather = () => {
        fetch(`https://api.apixu.com/v1/current.json?key=b9c100058d60458da18122335182010&q=${this.props.city}`)
            .then(resp => {
                if (resp.ok) {
                    return resp.json();
                }
                return resp.json().then(body => {throw new Error(body.error.message)})
            })
            .then(data => this.setState({ weather: data }))
            .catch(error => this.setState({error: error}));
    }

    renderWeather = () => {
        if (this.state.weather) {
            return (
                <ul>
                    <li>localtime: {this.state.weather.location.localtime}</li>
                    <li>condition: {this.state.weather.current.condition.text}&nbsp;
                        <img alt={this.state.weather.current.condition.text} src={this.state.weather.current.condition.icon} height="20" width="20"/></li>
                    <li>temperature: {this.state.weather.current.temp_c}c</li>
                </ul>
            );
        } else if (this.state.error) {
            return (
                <p>{this.state.error.message}</p>
            );
        }
        return "";
    }

    render() {
        return (
            <div id="react-component">
                <h1>React</h1>
                <p>City entered: {this.props.city}</p>
                <button onClick={this.getWeather}>Get weather</button>
                {this.renderWeather()}
            </div>
        );
    }
}

ReactComponent.propTypes = {
    city: PropTypes.string
};

export default ReactComponent;

