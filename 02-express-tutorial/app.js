const express= require('express')
const app = express()
const products = require('./data')

app.get('/', (req, res)=>{
    console.log("this is products")
    res.json(products)
})


app.get('/products/:productId', (req, res)=>{
    console.log("this is products")
    const {productId} = req.params;
    const singleProduct = products.products.find(
        (product) => Number(productId) === product.id)
    
    if (!singleProduct){
        return res.status(404).send("product does not exists")
    }
    return res.json(singleProduct)
})

app.listen(5000, ()=>{
    console.log('server is listening to port 5000....')
})

