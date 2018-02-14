import React, { Component } from 'react';
import AddMovie from './AddMovie';
import ButtonList from './ButtonList';
import MovieImageList from './MovieImageList';

export default class Homepage extends Component {
    constructor(){
        super();
        this.state = {
            buttonList : [],
            movieTitle: ''
        }
    }

    componentDidMount(){
        this.setState({
            buttonList: [
                "Forrest Gump",
                "Pulp Fiction",
                "Titanic"
            ]
        });
    }

    imageButtonHandler = (movieTitle) => {
        let newMovieButton = <button>{movieTitle}</button>
        this.setState({
            buttonList: [...this.state.buttonList, movieTitle]
        });
    }

    movieButtonHandler = (movieTitle) => {
        this.setState({ movieTitle });
    }

    render() {
        return(
            <div className="main">
                <section id="showcase">
                    <div className="showcase-container">
                        <div className="showcase-content">
                            <h1>Iconic Movies of the <span className="primary-text">'90s</span></h1>
                        </div>
                    </div>
                </section>
                <AddMovie newButton = {this.imageButtonHandler}/>
                <ButtonList 
                    buttonList={this.state.buttonList} 
                    clickHandler={ this.movieButtonHandler }
                />
                <MovieImageList movieTitle={this.state.movieTitle}/>
            </div>
        )
    }
} 