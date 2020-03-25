import React from 'react'
import isEmpty from 'lodash/isEmpty'
import {connect} from 'react-redux'

function Account(props){
        return(
            <div className='container'>
                <h1 className='display-4'>Acount Information</h1>
         
            {
             isEmpty(props.user)?(
                 <div><p>loading...</p>
                  </div>   
             ):(
                 <div>
                    <h2 className='display-6'>username-{props.user.username}</h2>
                    <h2 className='display-6'>email-{props.user.email}</h2>
                </div>
             )

             } 

        </div>   
        )
}

const mapStateToProps=(state)=>{
    return{
        user:state.user
    }
}
export default connect(mapStateToProps)(Account)