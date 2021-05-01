import { withRouter } from 'react-router-dom'
import React, { Component } from 'react'
import TopHeader from '../Elements/TopHeader'

const subHeader = <h3 className="hdr demo5">Single Order Page - Order Details</h3>


class MoreOnOrderPage extends Component {
    constructor(props) {
        super(props); 
        this.state = {
            singlePurchase: this.props.location.state.singlePurchase
        }
    }

    back = () => {
        this.props.history.goBack()
    }

    orderImage = () => {
        const oImg = <div>
                <img src={this.state.singlePurchase.ImgUrl} className="demo2" alt="MOVIE POSTER"/>
            </div>
        return oImg
    }
    shortDate = (d) => {
        let date = new Date(d)
        let shortdate = date.getDate() + '-' + (date.getMonth() + 1) + '-' + date.getFullYear()
        return shortdate
    }
    orderDetails = () => {
        let playDt = this.shortDate(this.state.singlePurchase.MovieDate)
        let purchaseDt = this.shortDate(this.state.singlePurchase.PurchaseDate)
        const oDets = <div>
        <div><span>Name:</span> {this.state.singlePurchase.MovieName}</div>
        <div><span>Genre: </span> {this.state.singlePurchase.Genre}</div>
        <div><span>Length (Minutes): </span>{this.state.singlePurchase.LengthMinutes}</div>
        <div><span>Production Year: </span>{this.state.singlePurchase.ProductionYear}</div>
        <div><span>Play Date: </span>{playDt}</div>
        <div><span>Play Time: </span>{this.state.singlePurchase.MovieTime}</div>
        <div><span>Ticket Price: </span>{this.state.singlePurchase.Price}</div>
        <div><span>Number Of Tickets: </span>{this.state.singlePurchase.NumOfSeats}</div>
        <div><span>Cost: </span>{this.state.singlePurchase.TotalCost}</div>
        <div><span>Purchase Date: </span>{purchaseDt}</div>
        <div><span>Purcahse Time: </span>{this.state.singlePurchase.PurchaseTime}</div>
        </div>
        return oDets
    }

    btnBack = () => {
        const homeButton = <div className="cen"> 
                <button onClick={this.back}>Back To My Orders</button>
            </div>
        return homeButton
    }
    render() {
        return (
            <div className="bgc">
               
                {TopHeader}
                {subHeader}
                
                <div className="lf">
                {this.orderImage()}
                {this.orderDetails()}
                </div>
                
                {this.btnBack()}

            </div>
        )
    }
}

export default withRouter(MoreOnOrderPage)

