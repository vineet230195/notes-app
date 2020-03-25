import axios from '../config/axios'

export const setCategories=(categories)=>{
    return{
        type:'SET_CATEGORIES',
        payload:categories
    }
}

export const addCategory=(name)=>{
    return {
        type:'ADD_CATEGORY',
        payload:name
    }
}
export const startGetCategories=()=>{
    return(dispatch)=>{
        axios.get(`/categories`,{
            headers:{
                'x-auth':localStorage.getItem('authToken')
            }
        })
        .then(response =>{
            const categories=response.data
            dispatch(setCategories(categories))
        })
    }
}

export const postCategory=(formdata)=>{
    return (dispatch)=>{
        axios.post(`/categories`,formdata,{
            headers:{
                'x-auth':localStorage.getItem('authToken')
            }
        })
        .then(response=>{
            if(response.data.hasOwnProperty('errors')) {
                alert(response.data.message)
            }else{
            const category=response.data
            dispatch(addCategory(category))
            }
        })
    }
}