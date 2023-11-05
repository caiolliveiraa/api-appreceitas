const express = require("express")
const mongoose = require('mongoose');
const app = express()
app.use(express.json())
const port = 3000


const Receitas = mongoose.model('Receitas', { 
    title: String,
    description: String,
    image_url: String,
 });

app.get("/", async (req, res) => {
    const receitas = await Receitas.find()
    return res.send(receitas)
})

app.delete("/:id", async(req, res) =>{
    const receitas = await Receitas.findByIdAndRemove(req.params.id)
    return res.send(receitas)
})

app.put("/:id", async(req, res) => {
    const receitas = await Receitas.findByIdAndUpdate(req, params.id, {
        title: req.body.title,
        description: req.body.description,
        image_url: req.body.image_url
    }, {
        new:true
    })

    return res.send(receitas)
})

app.post("/", async (req, res) => {
    const receitas = new Receitas({
        title: req.body.title,
        description: req.body.description,
        image_url: req.body.image_url
    })

   await receitas.save()
    return  res.send(receitas)
})

app.listen(port, () => {
    mongoose.connect('mongodb+srv://caiohenrique:qEQmnXxijZjcVFMa@api-receitas.eug3rkp.mongodb.net/?retryWrites=true&w=majority');
  console.log(`Loading ${port}`)
}) 