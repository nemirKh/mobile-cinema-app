import React, { Component } from 'react'
import TopHeader from '../Elements/TopHeader'
import Movies from '../Components/Movies'
import { withRouter } from 'react-router-dom'
import  '../StyleSheets/Demo.css'
import ManagerMovies from '../Components/ManagerMovies'

const subHeader = <h3 className="hdr">Home Page - Available Movies</h3>
const movieSubHeader = <h3 className="hdr">Available Movies - For Details And Purcahse Click On Order </h3>

const apiUrl = "http://proj.ruppin.ac.il/bgroup22/prod/api/movie"

class HomePage extends Component {
    constructor(props) {
        super(props); 
        this.state = {}
        this.fetchMovies()
    }

    go2MyOrders = () => {
        let user = localStorage.getItem("user")
        let userObj = JSON.parse(user)
        localStorage.setItem("userId", userObj.UserId)
        window.location.href = "/myOrders"
    }

    go2NewMovie = () => {
        window.location.href = "/newMovie"
    }

    myProps = () => {
        let user = localStorage.getItem("user")
        let userObj = JSON.parse(user)
        if (userObj.IsManager === true) {
            const btnsMineAdd =  <div className="demo10">
            <div> <button className="demo8 demo5" onClick={this.go2MyOrders}>My Orders</button></div>
            <div><button className="demo8a demo5" onClick={this.go2NewMovie}>+ New Movie</button></div>
            </div>
            return btnsMineAdd
        }
        else {
            const btnMyOrders = <div className="demo10">
                   <div> <button className="demo8 demo5" onClick={this.go2MyOrders}>My Orders</button></div>
                </div>
        
            return btnMyOrders
        }
        
    }
    fetchMovies = () => {
        console.log('start');
        fetch(apiUrl,
            {
            method: 'GET',
            headers: new Headers({
                'Content-Type': 'application/json; charset=UTF-8',
                'Accept': 'application/json; charset=UTF-8',
            })
            })
            .then(res => {
            console.log('res=', res);
            console.log('res.status', res.status);
            console.log('res.ok', res.ok);
            return res.json()
            })
            .then(
            (result) => {
                console.log("fetch movies = ", result);
                result.map(m => console.log(m.MovieName));
                this.setState({moviesArr: result})
            },
            (error) => {
                console.log("err post=", error);
            });
    
        console.log('end');
    }
    getMovies = () => {
        if(this.state.moviesArr !== undefined) {
            let user = localStorage.getItem("user")
            let userObj = JSON.parse(user)
            if (userObj.IsManager === true) {
                let mngMovies = <ManagerMovies movies={this.state.moviesArr} sendIdToHome={this.getIdFromMngMovies}/>
                return mngMovies
            }
            else {
                let userMovies = <Movies movies = {this.state.moviesArr} />
                return userMovies
            }
        }
    }

        

    getIdFromMngMovies = (id) => {
        let newMoviesArr = this.state.moviesArr.filter(item => item.MovieId !== id);
        this.setState({ 
            moviesArr: newMoviesArr,
        });
    }

    
    render() {
        return (
            <div className="bgc">
                {TopHeader}
                {subHeader} 
                {this.myProps()}
                {movieSubHeader}
                {this.getMovies()}
                
            </div>
        )
    }
}

export default withRouter(HomePage)
