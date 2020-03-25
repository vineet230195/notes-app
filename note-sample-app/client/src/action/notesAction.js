import axios from '../config/axios'

export const setNotes=(notes)=>{
    return{
        type:'SET_NOTES',
        payload:notes
    }
}

export const addNote=(note)=>{
    return {
        type:'ADD_NOTE',
        payload:note
    }
}
export const startGetNotes=()=>{
    return(dispatch)=>{
        axios.get(`/notes`,{
            headers:{
                'x-auth':localStorage.getItem('authToken')
            }
        })
        .then(response =>{
            if(response.data.hasOwnProperty('errors')) {
                alert(response.data.message)
            }else{
                const notes=response.data
                dispatch(setNotes(notes))
            }

        })
    }
}

export const postNote=(formdata)=>{
    return (dispatch)=>{
        axios.post(`/notes`,formdata,{
            headers:{
                'x-auth':localStorage.getItem('authToken')
            }
        })
        .then(response=>{
            if(response.data.hasOwnProperty('errors')) {
                alert(response.data.message)
            }else{
            const note=response.data
            dispatch(addNote(note))
            }
        })
    }
}
