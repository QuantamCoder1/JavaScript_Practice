/**Optional and Readonly Properties
- Create an interface Product.
- productId – readonly.
- productName – required.
- price – required.
- discount – optional.
- Create product objects.
- Calculate final price after discount. */

interface Product{
    readonly productId: number,
    productName: string,
    price: number,
    discount?:number   //? this means this property is optional

}
//creating objects
const p1: Product = {productId:1,productName:"Laptop",price:80000,discount:10};
const p2: Product ={productId:2,productName:"Mouse",price:800,discount:10};

function finalPrice(product:Product):number{
    if(product.discount){
        return product.price - (product.price*product.discount/100);
        
    }
    return product.price;
    
}
console.log(finalPrice(p1));
console.log(finalPrice(p2));