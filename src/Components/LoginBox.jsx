import React, { Component } from 'react'
import  '../StyleSheets/Demo.css'
import { withRouter } from 'react-router-dom'

const poster = "https://cdn2.vectorstock.com/i/1000x1000/25/71/grunge-retro-cinema-poster-vector-1892571.jpg"
const apiUrl = "http://proj.ruppin.ac.il/bgroup22/prod/api/user"
class LoginBox extends Component {
    constructor(props) {
        super(props); 
            this.state = {
                usersArr: {}
            }
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
                    console.log("fetch users = ", result);
                    result.map(u => console.log(u.UserFullName));
                    this.state.usersArr = result
                },
                (error) => {
                    console.log("err post=", error);
                });
        
            console.log('end');
    }

    catchName = (name) => {
        this.setState({userName: name.target.value})
    }

    catchPass = (pass) => {
        this.setState({password: pass.target.value})
    }
    
    go2Home = async () => {
        let u = this.state.usersArr.find(user => user.UserName === this.state.userName && user.UserPassowrd === this.state.password)
        await this.setState({user: u})
        if (this.state.user !== undefined) {
            let userLogged = JSON.stringify(this.state.user)
            localStorage.setItem("user", userLogged)
            window.location.href = "/home"
        }
        else {
            alert('UserName / Password Is Incorrect!')
        }
    }

    inputSide = () => {
        let leftSide = <div className="container">
        <div className="demo bold">Please Log In To Continue</div>
        <div>
            <div className="demo italic">UserName:</div>
            <div><input type="text" onChange={this.catchName}/></div>
        </div>
        <div>
            <div className="demo italic">Password:</div>
            <div><input type="password" onChange={this.catchPass}/></div>
        </div>
        <div className="demo">
            <button onClick={this.go2Home}>Login</button> 
        </div>
        </div>
        return leftSide
    }

    imageSide = () => {
        const rightSide = <div>
        <img src={poster} className="demo2" alt="CINEMA POSTER"/>
        </div>
        return rightSide
    }
    render() {
        return (
        <div>
            <div className="lf">
                {this.inputSide()}
                {this.imageSide()}
            </div>
        </div>
    )
    }
}

export default withRouter(LoginBox)

