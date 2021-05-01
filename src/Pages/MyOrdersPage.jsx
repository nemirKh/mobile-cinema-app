import React, { Component } from 'react'
import TopHeader from '../Elements/TopHeader';
import { Link } from 'react-router-dom'


const subHeader = <h3 className="hdr demo5">My Orders Page - Order History </h3>
const apiUrl = "http://proj.ruppin.ac.il/bgroup22/prod/api/purchase/"

export default class MyOrdersPage extends Component {
    constructor(props) {
        super(props); 
        this.state = {}
        this.fetchPurchases()
    }

    fetchPurchases = () => {
        console.log('start');
        let id = localStorage.getItem("userId")

        fetch(apiUrl + id,
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
            console.log("fetch purchase history = ", result);
            this.setState({purchaseHistory: result})
            },
            (error) => {
            console.log("err post=", error);
            });

        console.log('end');
    }

    shortDate = (d) => {
        let date = new Date(d)
        let shortdate = date.getDate() + '-' + (date.getMonth() + 1) + '-' + date.getFullYear()
        return shortdate
    }

    getOrders = () => {
        if (this.state.purchaseHistory !== undefined) {
            let orderRows =  this.state.purchaseHistory.map(p => <tr key={p.PurchaseId} className="tbl">
            <td>{p.PurchaseId}</td>
            <td>{this.shortDate(p.PurchaseDate)}</td>
            <td>{p.MovieName}</td>
            <td>{p.TotalCost}</td>
            <td> <Link
             to= {{
                pathname: "/moreOnOrder",
                state: {singlePurchase: p}
             }}>More</Link></td>
            </tr>)
            return orderRows
        }
        
    }

    buildTable = () => {
        let tableDemo = <div className="try1">
        <table>
            <thead>
                <tr>
                    <th>Order No.</th>
                    <th>Order Date</th>
                    <th>Movie</th>
                    <th>Cost ($)</th>
                    <th>Options</th>
                </tr>
            </thead>
            <tbody>
                    {this.getOrders()}
            </tbody>
        </table>
        </div>
        return tableDemo
    }
    render() {
        return (
            <div className="bgc">
                {TopHeader}
                {subHeader}
                {this.buildTable()}
            </div>
        )
    }
}
