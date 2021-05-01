import { withRouter } from 'react-router-dom'
import React, { Component } from 'react'
import TopHeader from '../Elements/TopHeader'

const subHeader = <h3 className="hdr demo5">New Movie Summary Page - New Movie Summary</h3>
const Success = <h2 className="blue italic">Movie Has Been Added Successfully!</h2>
const newMovie = localStorage.getItem("newMovie")


class newMovieSummary extends Component {
    constructor(props) {
        super(props); 
        this.state = {
            newMovie: JSON.parse(newMovie),
        }
    }

    home = () => {
        window.location.href = "/home"
    }

    newMovieImage = () => {
        const oImg = <div>
                <img src={this.state.newMovie.ImgUrl} className="demo2" alt="MOVIE POSTER"/>
            </div>
        return oImg
    }
    newMovieDetails = () => {
        let Genre = localStorage.getItem("genre")
        const oDets = <div>
        <div><span>Name:</span> {this.state.newMovie.MovieName}</div>
        <div><span>Genre: </span> {Genre}</div>
        <div><span>Length (Minutes): </span>{this.state.newMovie.LengthMinutes}</div>
        <div><span>Production Year: </span>{this.state.newMovie.ProductionYear}</div>
        <div><span>Play Date: </span>{this.state.newMovie.MovieDate}</div>
        <div><span>Play Time: </span>{this.state.newMovie.MovieTime}</div>
        <div><span>Ticket Price: </span>{this.state.newMovie.Price}</div>
        <div><span>Number Of Tickets: </span>{this.state.newMovie.SeatsAvailable}</div>
        </div>
        return oDets
    }

    btnHome = () => {
        const homeButton = <div className="cen"> 
                <button onClick={this.home}>Back To Home Page</button>
            </div>
        return homeButton
    }
    render() {
        return (
            <div className="bgc">
               
                {TopHeader}
                {subHeader}
                {Success}

                <div className="lf">
                {this.newMovieImage()}
                {this.newMovieDetails()}
                </div>
                
                {this.btnHome()}

            </div>
        )
    }
}

export default withRouter(newMovieSummary)

