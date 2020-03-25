import React from 'react'
import {connect} from 'react-redux'
import CategoryForm from './CategoryForm'

function CategoryList(props){
        return(
            <div className='container'>
        
                <h2 className='display-5'>Category List -{props.categories.length}</h2>
                <ul className='list-group mb-5' >
                    {
                        props.categories.map(category=>{
                            return <li key={category._id} className={'list-group-item'}>{category.name}</li>
                        })
                    }
                </ul>
                

                <CategoryForm/>
            </div>
        )
    }

const mapStateToProps=(state)=>{
    console.log(state)
    return{
        categories:state.categories
    }
}
export default connect(mapStateToProps)(CategoryList)