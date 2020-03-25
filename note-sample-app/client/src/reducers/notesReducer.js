const initialState=[]

const notesReducer=(state=initialState,action)=>{
    switch(action.type){
        case 'SET_NOTES':{
            return [...action.payload]
            
        }
        case 'ADD_NOTE':{
            return [...state,action.payload]
        }
        default:{
            return [...state]
        }
    }
}

export default notesReducer