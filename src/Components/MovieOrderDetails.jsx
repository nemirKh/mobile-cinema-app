import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

const apiUrl = "http://proj.ruppin.ac.il/bgroup22/prod/api/Purchase"
const apiUrl1 = "http://proj.ruppin.ac.il/bgroup22/prod/api/MovieSeats"



class MovieOrderDetails extends Component {
    constructor(props) {
        super(props); 
        this.state = {
            disabled : false
        }
    }

    catchSeats = (s) => {
        this.setState({seats: s.target.value})
    }

    // Handler for on click
    handleClick = (event) => {
    if (this.state.disabled) {
        return;
    }
    this.setState({disabled: true});
    // Send     
    }

    postPurchase = async () => {
        let rndId = Math.floor(Math.random() * 50000) + 1
        let cost = this.state.seats * this.props.item.Price
        let today = new Date()
        let date = today.getDate() + '-' + (today.getMonth() + 1) + '-' + today.getFullYear()  
        let time = today.getHours() + ':' + today.getMinutes() + ':' + today.getSeconds()
        let user = localStorage.getItem("user")
        let userObj = JSON.parse(user)
        let userId = userObj.UserId
        let newPurchase = {
            PurchaseId: rndId,
            NumOfSeats: this.state.seats,
            TotalCost: cost,
            PurchaseDate: date,
            PurchaseTime: time,
            UserId: userId,
            MovieId: this.props.item.MovieId
        }
        await this.setState({purchaseToPost: newPurchase})
        localStorage.setItem("purchase", JSON.stringify(newPurchase))
        console.log(newPurchase)
        if (this.state.purchaseToPost !== undefined) {
            let np = this.state.purchaseToPost
            
            console.log('start');
            fetch(apiUrl,
            {
                method: 'POST',
                body: JSON.stringify(np),
                headers: new Headers({
                'Content-Type': 'application/json; charset=UTF-8',
                'Accept': 'application/json; charset=UTF-8',
                })
            })
            .then(res => {
                console.log('res=', res);
                console.log('res.status', res.status);
                console.log('res.ok', res.ok);
                //return res.json()
            })
            .then(
                (result) => {
                console.log("fetch New Purchase = ", result);
                },
                (error) => {
                console.log("err post=", error);
                });

            console.log('end');
        }
        
    }

    updateSeats = () => {
        console.log('start');
        
        let updatedMovieSeats =
        {
            MovieId: this.props.item.MovieId,
            NumOfSeats: this.state.seats
        }

        fetch(apiUrl1,
        {
            method: 'PUT',
            body: JSON.stringify(updatedMovieSeats),
            headers: new Headers({
            'Content-Type': 'application/json; charset=UTF-8',
            'Accept': 'application/json; charset=UTF-8',
            })
        })
        .then(res => {
            console.log('res=', res);
            console.log('res.status', res.status);
            console.log('res.ok', res.ok);
        })
        .then(
            (result) => {
            console.log("fetch updated movie seats= ", result);
            },
            (error) => {
            console.log("err post=", error);
            });
        console.log('end');
    }

    btnFinish = async () => {
        if (this.state.seats > this.props.item.SeatsAvailable || this.state.seats === undefined || this.state.seats === null || this.state.seats === "" || this.state.seats === "0" || isNaN(this.state.seats)) {
            alert("Seats ERROR - Seats Must Be A Number And Less Than " + this.props.item.SeatsAvailable)
        }
        else {
            localStorage.setItem("movie", JSON.stringify(this.props.item))
            this.handleClick()
            await this.postPurchase()
            this.updateSeats()
            //window.location.href = "/orderSummary"
        }
    }

    movieImage = () => {
        const mImg = <div>
        <img src={this.props.item.ImgUrl} className="demo2" alt="MOVIE POSTER"/>
        </div>
        return mImg
    }

    shortDate = (d) => {
        let date = new Date(d)
        let shortdate = date.getDate() + '-' + (date.getMonth() + 1) + '-' + date.getFullYear()
        return shortdate
    }

    movieInfo = () => {
        const mInfo = <div>
        <h4>Movie Info - </h4>
        <div><span>Name: </span>{this.props.item.MovieName}</div>
        <div><span>Genre: </span> {this.props.item.Genre}</div>
        <div><span>Length (Minutes): </span>{this.props.item.LengthMinutes}</div>
        <div><span>Production Year: </span>{this.props.item.ProductionYear}</div>
        </div>
        return mInfo
    }

    theaterInfo = () => {
        let movieDt = this.shortDate(this.props.item.MovieDate)
        const tInfo = <div>
        <h4>Theater Info - </h4>
        <div><span>Date: </span>{movieDt}</div>
        <div><span>Time: </span> {this.props.item.MovieTime}</div>
        <div><span>Seats Available: </span>{this.props.item.SeatsAvailable}</div>
        <div><span>Ticket Price: </span>{this.props.item.Price}</div>
        </div>
        return tInfo
    }

    orderBox = () => {
        let oBox = <div className="btm demo7">
        <h4>Your Order - </h4>
        <div className="demo6">
            <div className="mrt bold">Selected Movie: </div>
            <input type="text" value={this.props.item.MovieName} readOnly={true}/>
        </div>
        <div className="demo6">
            <div className="mrt bold">Number Of Seats: </div>
            <input type="text" placeholder="How Many Seats To Order?" onChange={this.catchSeats}/>
        </div>
        
        <div>
            <button onClick={this.btnFinish} disabled={this.state.disabled}> 
            {this.state.disabled ? 'Updating..' : 'Submit & Finish'} 
            </button>
        </div>
        </div>
        return oBox
    }
    
    render() {
        return (
            <div>
                <div className="demo4 lf">
                    {this.movieImage()}
                    {this.movieInfo()}
                    {this.theaterInfo()}
                </div>
            {this.orderBox()}
            </div>
        )
    }
}

export default withRouter(MovieOrderDetails)
