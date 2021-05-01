import React from 'react'
import LoginBox from '../Components/LoginBox'
import TopHeader from '../Elements/TopHeader'
import  '../StyleSheets/Demo.css'
import { withRouter } from 'react-router-dom'

const subHeader = <h3 className="hdr">LOGIN</h3>

function LoginPage()  {
    
    return (
        <div className="bgc">
            {TopHeader}
            {subHeader}
            <LoginBox/>
        </div>
    )
}

export default withRouter(LoginPage)
