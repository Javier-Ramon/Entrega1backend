import express from 'express';
import { ProductManager } from './ProductManager.js';
import {productsRouter } from './routes/products.routes.js';
import { cart } from './carts.js';
import { productsRouter } from './routes/products.routes.js';
import { cartRouter } from './routes/carts_routes.js';

const PORT=8080

const app= express();

export  const productManager = new ProductManager ;
export const cart = new cart;

app.use(express,json())
app.use('/api/products', productsRouter)
app.use('/api/carts', cartRouter )


app.listen(PORT, (req, res) => {
    console.log('Servidor escuchando en el puerto ${PORT}')
})