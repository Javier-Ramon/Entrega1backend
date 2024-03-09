import { Router } from "express";
import { cart } from "../Index";

const cartRouter = Router();

cartRouter.post ('/', async (req , res )=> {
    try{
        const response = await cart.newcart()
        res.json(response)
    }catch(error){
    res.send('Error al crear el carrito')
}})

cartRouter.post ('/:cid', async (req,res )=> {
    const {cid} = req.params;

    try{
        const response = await cart.getcartProducts(cid)
        res.json(response)
    }catch(error){
    res.send('Error al enviar productos a el carrito')
}})
cartRouter.post ('/:cid/products/:pid', async (req,res ) => {
    const {cid,pid }= req.params;
    try{
       await cart.addProductCart(cid,pid)
       res.send('Producto agregado exitosamente')
    }catch(error){
    res.send('Error al crear el carrito')
}})

export {cartRouter}