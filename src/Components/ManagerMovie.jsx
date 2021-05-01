import React from 'react'
import { Card } from 'react-bootstrap'
import { Link, withRouter } from 'react-router-dom'
import  '../StyleSheets/Demo.css'
import Popup from "reactjs-popup";

function ManagerMovie(props) {
    const apiUrl = "http://proj.ruppin.ac.il/bgroup22/prod/api/movie/"

    const btnDelete = () => {
        props.sendId2MngMovies(props.item.MovieId);
        console.log('start');
        let id = props.item.MovieId
        
        fetch(apiUrl + id,
        {
            method: 'DELETE',
            headers: new Headers({
            'Content-Type': 'application/json; charset=UTF-8',
            'Accept': 'application/json; charset=UTF-8',
            })
        })
        .then(res => {
            console.log('res=', res);
            console.log('res.status', res.status);
            console.log('res.ok', res.ok);
            
            if (res.ok)
            console.log('was deleted:)');
            else
            console.log('wasnt deleted:(');
        });

        console.log('end');
    }
    
    const verifyDelete = () => {
        let popDemo = <div>
            <Popup trigger={<button className="demo9"> Delete</button>} position="top center">
                    <div className="demo11" id="popUp">
                        <div className="demo12 bold">Delete Verfication!</div>
                        <div className="italic pad">Are You Sure You Want To <span> Delete The "{props.item.MovieName}" Movie ?</span></div>
                        <div className="italic pad">Press Anywhere Outside This Box <span>To Cancel.</span></div>
                        <div className="lf pad">
                            <div>
                                <button onClick={btnDelete} className="demo9 bold">DELETE PERMANENTLY</button>
                            </div>
                        </div>
                    </div>
            </Popup>
        </div>
        return popDemo
    }
   
    return (
    <div className="demo3">
        <Card style={{ width: '18rem' }}>
            <Card.Img className="demo2" variant="top" src={props.item.ImgUrl} />
            <Card.Body>
            <Card.Title>Name: {props.item.MovieName}</Card.Title>
            <Card.Text>
                Genre: {props.item.Genre}
            </Card.Text>
            <Card.Text>
                Seats Available: {props.item.SeatsAvailable}
            </Card.Text>
            <Link to={{
                pathname: "/singleOrder/" + props.item.MovieName,
                state: {data: props.item}
                }}>Order</Link>
            <div>
                {verifyDelete()}
            </div>
            </Card.Body>
        </Card>
    </div>
    )
}

export default withRouter(ManagerMovie)
