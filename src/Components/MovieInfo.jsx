import React from 'react'
import { Link } from 'react-router-dom'

export default function MovieInfo(props) {
    return (
        <div>
            <div className="demo4 lf">
                <div>
                <img src={props.item.imgUrl} className="demo2" alt="MOVIE POSTER"/>
                </div>
            <div>
                <h4>Movie Info - </h4>
                <div>Name: {props.item.Name}</div>
                <div>Genre: {props.item.Genre}</div>
                <div>Length (Minutes): {props.item.Length}</div>
                <div>Production Year: {props.item.Year}</div>
            </div>
            <div>
                <h4>Theater Info - </h4>
                <div>Date: {props.item.Date}</div>
                <div>Time: {props.item.Time}</div>
                <div>Seats Available: {props.item.Seats}</div>
                <div>Ticket Price: {props.item.Price}</div>
            </div>

            </div>
            
            <div className="btm demo7">
                <h4>Your Order - </h4>
                <div className="demo6">
                    <div className="mrt">Selected Movie: </div>
                    <input type="text" value={props.item.Name}/>
                </div>
                <div className="demo6">
                    <div className="mrt">Number Of Seats: </div>
                    <input type="text" placeholder="How Many Seats To Order?"/>
                </div>
                
                <div><button>Submit & Order</button></div>
                <div>
                    <Link to= {{
                        pathname:"/orderSummary/" }}>submit</Link>
                </div>
                
            </div>
            
        </div>
    )
}
