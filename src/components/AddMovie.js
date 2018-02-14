import React, { Component } from 'react';

export default class AddMovie extends Component {
    constructor(){
        super();
        this.state = {
            currentMovieTitle: ""
        }
    }
    movieTitleHandler = (e) => {
        this.setState({
            currentMovieTitle : e.currentTarget.value
        });
    }

    updateNewMovie = () => {
        this.props.newButton(this.state.currentMovieTitle);
        this.setState({
            currentMovieTitle: ""
        })
    }
    render() {
        return(
            <div>
                <section id="features">
                    <div className="features-container">
                        <div className="features-content"> 
                            <h1>Add a New Movie</h1>
                            <input type="text" id="movie-input" placeholder="Movie Title" onChange={this.movieTitleHandler} value={this.state.currentMovieTitle}/>
                            <button id="add-movie" onClick={this.updateNewMovie} >Submit!</button>
                            <div></div>
                        </div>
                    </div> 
                </section>
            </div>
        )
    }
} 