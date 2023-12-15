import React, { Component } from 'react';
function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
} 
class Content extends Component {
    constructor(props) {
        super(props);
        this.state = {
            color1: '',
            color2: ''
        };
    }
    toggle1 = (e) => {
        
        this.setState({
            color1: getRandomColor(),
        
        });
    }
    toggle2 = (e) => {
        e.stopPropagation()
        this.setState({
            color2: getRandomColor(),
        });
    }
    componentDidUpdate () {
        console.log(this.state.color)
    }
    

    render() {
        return (
            <div
                id={'general-info'}
                style={{backgroundColor: this.state.color1}}
                onClick={this.toggle1}>
                <div className="info">
                <h3>Місце народження: </h3>
                <p>м. Умань</p>
            </div>
            <div className="info" style={{backgroundColor: this.state.color2}} onClick={this.toggle2}>
                <h3>Освіта: </h3>
                <p>Бабанська ЗОШ І-ІІІ ступенів</p>
                <p>НТУУ "КПІ"</p>
            </div>
            <div className="info lists">
                <h3>Хоббі:</h3>
                <ul>
                    <li>Футбол</li>
                    <li>Настільний теніс</li>
                    <li>Баскетбол</li>
                </ul>
            </div>
            <div className="info lists">
                <h3>Улюблені фільми</h3>
                <ol>
                    <li>Початок (2010)</li>
                    <li>Інтерсталлар</li>
                    <li>Оппенгеймер</li>
                </ol>
            </div>
            </div>
        );
    }
}

export default Content;
