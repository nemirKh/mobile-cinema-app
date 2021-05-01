import React from 'react'
import { Card } from 'react-bootstrap'
import { Link, withRouter } from 'react-router-dom'
import  '../StyleSheets/Demo.css'


function Movie(props) {
   
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
            </Card.Body>
        </Card>
    </div>
    )
}

export default withRouter(Movie)
