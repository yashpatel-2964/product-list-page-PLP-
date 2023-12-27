let productDiv=document.querySelector(".product");
var categoryListDiv = document.querySelector(".category-list");
categoryListDiv.innerHTML="";
let allCat=[];
let displayProduct=async (allCheckCat=[])=>{
    productDiv.innerHTML="";
    
    let product=await fetch('https://fakestoreapi.com/products');
    let finalProduct=await product.json();
    finalProduct.forEach(element => {
        //unique category pushing for checkbox
        if(!allCat.includes(element.category))
        {
            categoryListDiv.innerHTML+=
            `<label for="">
                <input type="checkbox" onclick='categoryFilter()' value="${element.category}"> ${element.category}
            </label>`
            allCat.push(element.category);
        }
        if(allCheckCat.length==0)
        {
            allCheckCat = allCat;
        }
        if(allCheckCat.includes(element.category))
        {
        //displaying all data into page
        productDiv.innerHTML+=
            `<div class="product-items">
                <img src="${element.image}" alt="">
                <h4> Category: ${element.category}</h4>
                <p>Price $. ${element.price} | Rating : ${element.rating.rate} </p>
                <h3>${element.title}</h3>
            </div>`
        }
    });
}
displayProduct();

let categoryFilter=()=>{
    let checkInput = document.querySelectorAll("input[type='checkbox']");
    let checkData = [];
    checkInput.forEach((e)=>{
        if(e.checked)
        {
            checkData.push(e.value);
        }
    });
    displayProduct(checkData);
}
