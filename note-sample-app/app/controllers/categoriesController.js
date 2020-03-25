const Category = require('../models/category')
const Note = require('../models/note')

module.exports.list = (req, res) => {
    Category.find({user:req.user._id})
        .then(categories => {
            if(categories){
                res.json(categories)
            }else{
                res.json({})
            }
        })
        .catch(err => {
            res.json(err)
        })
}

module.exports.create = (req, res) => {
    const body = req.body
    const category = new Category(body)
    category.user=req.user._id
    category.save()
        .then(category => {
            res.json(category)
        })
        .catch(err => {
            res.json(err)
        })
}

module.exports.show = (req, res) => {
    const id = req.params.id
    Promise.all([Category.findById(id), Note.find({ category: id })])
        .then(values => {
            const [category, notes] = values

            res.json({
                category,
                notes
            })
  })
}