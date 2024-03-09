import { Router } from "express";
import { ProductManager, productManager } from "./Index.js";

const productsRouter = Router ()

productsRouter.get ('/', async(req,res) =>{
    try{
        const {Limit} =req.query;
        const products = await ProductManager.getProducts()

        if (Limit){
            const limiteProducts= products.slice(0,Limit)
            return res.json ( limiteProducts)
        }
    }catch (error) {
        console.log(error);
        res.send('ERROR AL INTENTAR RECIBIR LOS PRODUCTOS')
    }
})
productsRouter.get ('/:pid', async(req,res) =>{
    try{
    const {pid}  = req.params;
    const products = await ProductManager.getProductsById(pid)
    res.json(products)
    }catch (error) {
       console.log(error);
       res.send("ERROR AL INTENTAR RECIBIR LOS PRODUCTOS CON ID , ${pid}")
    }
})
productsRouter.post('/', async (req,res)=>{
    try{
        const {title, description,price,code,thumbnail,stock,status = true ,category} = req.body;
        const response = await productManager.addproduct({title, description,price,code,thumbnail,stock,status,category})
        res.json(response)
    }catch(error){
        console.log(error);
        res.send("ERROR AL  AGREGAR LOS PRODUCTOS  ")
    }
})
productsRouter.put('/:pid', async (req,res)=>{
     const{pid} = req.params
    try{
        const {title, description,price,code,thumbnail,stock,status = true ,category} = req.body;
        const response = await productManager.updateProduct(pid,{title, description,price,code,thumbnail,stock,status,category})
        res.json(response)
    }catch(error){
        console.log(error);
        res.send("ERROR AL  EDITAR LOS PRODUCTOS CON EL ID , ${pid}")
    }
})

productsRouter.delete('/:pid', async (req,res)=>{
    const{pid} = req.params
   try{
       await productManager.deleteProduct(pid)
       res.send('PRODUCTO ELIMINADO EXITOSAMENTE')
   }catch(error){
       console.log(error);
       res.send("ERROR AL  ELIMINAR LOS PRODUCTOS CON EL ID , ${pid}")
   }
})
export {productsRouter}