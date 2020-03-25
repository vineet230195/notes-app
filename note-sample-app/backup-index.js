const express=require('express')
const mongoose=require('mongoose')

const app=express()
const PORT=3034

//DB configuration

mongoose.connect('mongodb://localhost:27017/notes-app',{
    useNewUrlParser:true,
    useUnifiedTopology:true
})
.then(()=>{
    console.log('connected to db')
})
.catch((err)=>{
    console.log(err)
})

//New Schema
const Schema=mongoose.Schema
const noteSchema=new Schema({
    title:{
        type:String,
        required:true
    },
    body:{
        type:String
    },
    createdAt:{
        type:Date,
        required:true,
        default:Date.now()
    },
    category:{
        type:Schema.Types.ObjectId,
        required:true
    }
})

//Create Note Model
const Note=mongoose.model('Note',noteSchema)

//create a schema for category

const categorySchema=new Schema({
    name:{
        type:String,
        required:true
    }
})

const Category=mongoose.model('Category',categorySchema)


app.get('/',(req,res)=>{
    res.send('Welcome to the Website')
})
//To get all Notes
app.get('/notes',(req,res)=>{
    Note.find()
    .then((notes)=>{
        res.json(notes)
    })
    .catch((err)=>{
        res.json(err)
    })
})
//to get all categories
app.get('/categories',(req,res)=>{
    Category.find()
    .then(categories=>{
        res.json(categories)
    })
    .catch(err=>{
        res.json(err)
    })

})


app.post('/notes',(req,res)=>{
    const body=req.body
    const note=new Note(body)
    note.save()
    .then((note)=>{
        res.json(note)
    })
    .catch((err)=>{
        res.json(err)
    })
})

app.post('/categories',(req,res)=>{
    const body=req.body
    const category=new Category(body)
    category.save()
    .then(category=>{
        res.json(category)
    })
    .catch(err=>{
        res.json(err)
    })
})

//GEt localhost:3034/notes/:id
app.get('/notes/:id',(req,res)=>{
    const id=req.params.id
    Note.findById(id)
    .then((note)=>{
        res.json(note)
    })
    .catch((err)=>{
        res.json(err)
    })
})

app.get('/categories/:id',(req,res)=>{
    const id=req.params.id
    Promise.all([Category.findById(id),Note.find({category:id})])
    .then(values=>{
        const [category,notes]=values
        res.json({
            category,
            notes
        })

        //const newCategory=category.toObject()
        //newCategory.notes=notes
        //res.json(newCategory)
    })
})

//Put localhost:3034/notes/:id
app.put('/notes/:id',(req,res)=>{
    const id=req.params.id
    const body=req.body
    Note.findByIdAndUpdate(id,body,{new:true,runValidators:true})
    .then(note=>{
        res.json(note)
    })
    .catch((err)=>{
        res.json(err)
    })
})

//delete localhost :3034/notes/:id
app.delete('/notes/:id',(req,res)=>{
    const id=req.params.id
    Note.findByIdAndDelete(id)
    .then((note)=>{
        if(note){
            res.json(note)
        }else{
            res.json({})
        }
    })
    .catch(err=>{
        res.json(err)
    })
})
app.listen(PORT,()=>{
    console.log('listing on porty',PORT)
})