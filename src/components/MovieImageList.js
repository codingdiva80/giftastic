import React, { Component } from 'react';


export default class MovieImageList extends Component {
    constructor(){
        super();
        this.baseURL = "https://api.giphy.com/v1/gifs/search";
        this.APIkey = "a8761e066005497a87b6e979d453e4b9&limit=12";
        this.state = {
            movieTitle : "",
            movieImages : [],
            movieData: []
        }
    }
    
    /* 
        This function every time the parent receives a new movie title
        so if the movieTitle is different from the previous movie title, 
        we will fetch the new images AFTER we set the state
    */
    componentWillUpdate(currentState){
        if(currentState.movieTitle != this.state.movieTitle){
            this.setState({
                movieTitle : this.props.movieTitle
            }, ()=> { this.updateMovieImages()});
        }
    }


    /* in this function we would fetch the movie image data */
    updateMovieImages = () => {
        let apiURL = this.getURL();
        if(!apiURL) {
            return;
        }
        /* fetch the images and put them into an array */
        let returnedImages = [];
        fetch(apiURL)
            .then(d => d.json())
            .then(d => {
                
            this.setState({                
                movieData: d.data
            });  
        })
    }
    getURL = () => {
        return(
            `${this.baseURL}?q=${this.state.movieTitle}&api_key=${this.APIkey}` 
        )
    }

    render() {
        return(
            <div>
                <section id="movieImageList">
                    <div className="movieImageList-container">
                        <div className="movieImageList-content">
                            {
                                this.state.movieData.map((image, i) => {
                                    return (
                                        <div className="item">
                                            <img key={`image-${i}`} src={image.images.fixed_height.url} />
                                        </div>
                                    )
                                })
                            }
                        </div> 
                    </div>                                   
                </section>
            </div>
        )
    }
} 