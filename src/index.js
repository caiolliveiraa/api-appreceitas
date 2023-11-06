const express = require("express")
const mongoose = require('mongoose');
const app = express()
app.use(express.json())
const port = 3000 || process.env.PORT;


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

const Usuarios = mongoose.model('Usuarios', { 
    nome: String,
    data_nascimento: Date,
    email: String
});

app.get("/usuarios", async (req, res) => {
    const usuarios = await Usuarios.find()
    return res.send(usuarios)
})

app.delete("/usuarios/:id", async(req, res) =>{
    const usuario = await Usuarios.findByIdAndDelete(req.params.id)
    return res.send(usuario)
})

app.put("/usuarios/:id", async(req, res) => {
    const usuario = await Usuarios.findByIdAndUpdate(req.params.id, {
        nome: req.body.nome,
        data_nascimento: req.body.data_nascimento,
        email: req.body.email
    }, {
        new:true
    })

    return res.send(usuario)
})

app.post("/usuarios", async (req, res) => {
    const usuario = new Usuarios({
        nome: req.body.nome,
        data_nascimento: req.body.data_nascimento,
        email: req.body.email
    })

    await usuario.save()
    return res.send(usuario)
})

