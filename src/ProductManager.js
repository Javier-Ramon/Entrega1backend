import{promies as fs} from 'fs'
import {uid as uuidv4} from  'uuid'

export class ProductManager {
    constructor (){
        this.path = 'products.json';
        this.products = [];

    }
    addproduct = async ({title, description,price,code,thumbnail,stock,status,category})=>{
        const id=uuidvu()

        let newProduct = (id,title, description,price,code,thumbnail,stock,status,category )

        this.products= await this.getProducts()
        this.products.push (newProduct)

        await fs.writeFile(this.path,JSON.stringify(this.products))

    }
    getProducts = async () =>{

        const response= await fs.readFile(this.path, 'utf8')

        const responseJSON = JSON.parse(response)

        return responseJSON;
    }
    getProductsById = async (id) =>{
        const response=this.getProducts()

        const products = response.find(product => product.id ===id)

        if(product){
            return product
        } else {
            console.log('No se encuentra el producto');
        }
    }
     
    updateProduct = async( id, {...data} ) =>{
        const response = awaitthis.getProducts()
        const index = response.findIndex (product=> product.id ===id)

        if (index === -1){
            response[ index] = {id, ...data}
            await fs.writeFile(this.path, JSON.stringify(response))
            return response[index]

        }else {
            console.log('Producto no encontrado');
        }
    }
    deleteProduct = async (id) => {
        const product = await this.getProducts()
        const index = this.products.findIndex (product=>product.id=== id)

        if (index === -1){
           products.splice(index, 1)
           await fs.writeFile(this.path, JSON.stringify(products))
        }else {
            console.log('Producto no encontrado');
        }
    }
}