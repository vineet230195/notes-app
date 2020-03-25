import React from 'react'
import {connect} from 'react-redux'
import {userLogout} from '../../action/userAction'
function Logout(props){

    const redirect=()=>{
        return props.history.push('/')

    }

    props.dispatch(userLogout(redirect))
        return(
            <div>
                
            </div>
        )
    }


export default connect()(Logout)