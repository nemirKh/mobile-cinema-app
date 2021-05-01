import React, { Component } from 'react'
import { withRouter } from 'react-router-dom';
import MovieOrderDetails from '../Components/MovieOrderDetails';
import TopHeader from '../Elements/TopHeader'


const subHeader = <h3 className="hdr demo5">Order Page - Movie Order</h3>

class OrderPage extends Component {
    constructor(props) {
        super(props); 
        this.state = {
            movie: this.props.location.state.data
        }
    }
    render() {
        return (
            <div className="bgc">
                {TopHeader}
                {subHeader}
                <MovieOrderDetails item={this.state.movie} />
                {console.log(this.props.match.params.demo)}
                {console.log(this.props.location.state.data)}
            </div>
        )
    }
}
export default withRouter(OrderPage)
