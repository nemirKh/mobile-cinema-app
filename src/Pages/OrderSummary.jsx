import { withRouter } from 'react-router-dom'
import React, { Component } from 'react'
import TopHeader from '../Elements/TopHeader'

const subHeader = <h3 className="hdr demo5">Order Summary Page - Order Summary</h3>
const Success = <h2 className="blue italic">Order Succeeded!</h2>
const subSuccess = <h3 className="blue italic hdr">Thank You For Your Order From Cinema Center</h3>
const movie = localStorage.getItem("movie")
const purchase = localStorage.getItem("purchase")


class OrderSummary extends Component {
    constructor(props) {
        super(props); 
        this.state = {
            movie: JSON.parse(movie),
            purchase: JSON.parse(purchase)
        }
    }

    home = () => {
        window.location.href = "/home"
    }

    orderImage = () => {
        const oImg = <div>
                <img src={this.state.movie.ImgUrl} className="demo2" alt="MOVIE POSTER"/>
            </div>
        return oImg
    }

    shortDate = (d) => {
        let date = new Date(d)
        let shortdate = date.getDate() + '-' + (date.getMonth() + 1) + '-' + date.getFullYear()
        return shortdate
    }

    orderDetails = () => {
        let movieDate = this.shortDate(this.state.movie.MovieDate)
        const oDets = <div>
        <div><span>Name:</span> {this.state.movie.MovieName}</div>
        <div><span>Genre: </span> {this.state.movie.Genre}</div>
        <div><span>Length (Minutes): </span>{this.state.movie.LengthMinutes}</div>
        <div><span>Production Year: </span>{this.state.movie.ProductionYear}</div>
        <div><span>Play Date: </span>{movieDate}</div>
        <div><span>Play Time: </span>{this.state.movie.MovieTime}</div>
        <div><span>Ticket Price: </span>{this.state.movie.Price}</div>
        <div><span>Number Of Tickets: </span>{this.state.purchase.NumOfSeats}</div>
        <div><span>Cost: </span>{this.state.purchase.TotalCost}</div>
        <div><span>Purchase Date: </span>{this.state.purchase.PurchaseDate}</div>
        <div><span>Purcahse Time: </span>{this.state.purchase.PurchaseTime}</div>
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
                {subSuccess}

                <div className="lf">
                {this.orderImage()}
                {this.orderDetails()}
                </div>
                
                {this.btnHome()}

                {console.log(JSON.parse(movie))}
            </div>
        )
    }
}

export default withRouter(OrderSummary)

