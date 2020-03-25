import axios from '../config/axios'


export const getUser=(user)=>{
    return {
        type:'GET_USER',
        payload:user
    }
}

export const registerUser=(formdata,redirect)=>{
        return ()=>{
            axios.post(`/users/register`,formdata)
            .then(response=>{
                if(response.data.hasOwnProperty('errors')) {
                    alert(response.data.message)
                }else{
                    redirect()
                }
            })
            .catch(err=>{
                console.log(err)
            })
        }
    }
export const loginUser=(formData,redirect)=>{
    return()=>{
        axios.post('/users/login',formData)
        .then(response=>{
            console.log(response)
            if(response.data.hasOwnProperty('errors')){
                alert(response.data.errors.message)
            }else{
                const {token}=response.data
                localStorage.setItem('authToken',token)
                redirect()
                //alert('Sucessfully Logged In!')
                window.location.reload()
          }
        })
        .catch(err=>{
            console.log(err)
        })
    }
}

export const accountUser=()=>{
    return(dispatch)=>{
        axios.get('/users/account',{
            headers:{
                'x-auth':localStorage.getItem('authToken')
            }
        })
        .then(response=>{
            const user=response.data
            dispatch(getUser(user))
        })
        .catch(err=>{
            console.log(err)
        })
    }
}

export const userLogout=(redirect)=>{
    return()=>{
        axios.delete('/users/logout',{
            headers:{
                'x-auth':localStorage.getItem('authToken')
            }
        })
        .then(response=>{
            localStorage.removeItem('authToken')
            redirect()
            window.location.reload()
            alert(response.data.notice)
        })
        .catch(err=>{
            console.log(err)
        })
    }
}