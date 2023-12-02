class ProductManager {
    constructor() {
    this.products = [];
  
    }
getProducts() {
    return this.products;
    }
addProducts(product){
  if (!product.title || !product.description || !product.price || !product.thumbnail || !product.code || !product.stock) 
{
  return "Todos los campos son obligatorios."
}

const searchCode = this.products.find (prod=> prod.code === product.code)
    if(searchCode) {
      return "hay un producto con el mismo repetido"
    }
    if (this.products.length === 0){
      product.id = 1
      this.products.push(product)
 } else{
      product.id = this.products.length +1
      this.products.push(product)}

      return "producto agregado"

    } 

    getProductById(id) {
    const searchCode=   this.products.find(prod=> prod.id === id)
  if(!searchCode){
    return "not found"
  }  
  return searchCode
  }
}



const product = new ProductManager();


console.log(product.addProducts({title: "remera", description: "remera con estampa blanca", price:4000, thumbnail: "remerafoto", stock: 30, code:"d345"}))
console.log(product.addProducts({title: "pantalon", description: "pantalon negro con brillos", price:12000, thumbnail: "pantalonfoto", stock: 40, code:"d343"}))
console.log(product.addProducts({title: "camisa", description: "camisa a cuadros", price:5000, thumbnail: "camisafoto", stock: 60, code:"f347"}))
console.log(product.getProductById(4)); 
console.log(product.getProducts());
