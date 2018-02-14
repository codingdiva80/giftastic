import React, { Component } from 'react';

export default class ButtonList extends Component {
    constructor(){
        super();
        this.state = {
            buttons : [
                
            ]
        }
    }

    componentDidMount(){
        this.setState({
            buttons: this.props.buttonList
        });
    }

    componentWillUpdate(prevState){
        if(prevState.buttonList != this.props.buttonList){
            this.setState({
                buttons: prevState.buttonList
            });
        }
    }

    updateMovieList = (event) => {
        this.props.clickHandler(event.currentTarget.textContent);
    }

    render() {
        return(
            <div>
                <section id="buttonList">
                    {
                        this.state.buttons.map((movieTitle, i) => {
                            return (
                                <button key={`button-${i}`} onClick={ this.updateMovieList }>{movieTitle}</button>
                            );
                        })
                    }
                </section>
            </div>
        )
    }
} 