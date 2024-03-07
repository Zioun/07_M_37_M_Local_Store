const buyProduct = () =>{
    const product = document.getElementById("product");
    const productValue = product.value;
    const price = document.getElementById("price");
    const priceValue = price.value;

    if(product && price){
        localStorage.setItem(productValue, priceValue);
    }
    product.value = "";
    price.value = "";
}