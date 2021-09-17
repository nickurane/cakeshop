let username;
let password;
let cart=[];
let orders=[];
let products=[]
let sweets=[];
let currentuser;
let totalprice=0;


let user={
    "username":"nikhil",
    "password":1234,
    "cart":cart,
    "orders":orders,
    
};
sweets[0]={
    name:"cake1",
    type:"cake",
    img:"cake-1",
    price:"15"

}
sweets[1]={
    name:"cake2",
    type:"cake",
    img:"cake-2",
    price:"15"

}
sweets[2]={
    name:"cake3",
    type:"cake",
    img:"cake-3",
    price:"15"

}
sweets[3]={
    name:"cupcake",
    type:"cupcake",
    img:"cupcake-1",
    price:"15"

}
sweets[4]={
    name:"cupcake",
    type:"cupcake",
    img:"cupcake-2",
    price:"15"

}
sweets[5]={
    name:"cupcake",
    type:"cupcake",
    img:"cupcake-3",
    price:"15"

}
sweets[6]={
    name:"doughnut",
    type:"doughnut",
    img:"doughnut-1",
    price:"15"

}
sweets[7]={
    name:"doughnut",
    type:"doughnut",
    img:"doughnut-2",
    price:"15"

}
sweets[8]={
    name:"doughnut",
    type:"doughnut",
    img:"doughnut-3",
    price:"$15"

}
sweets[9]={
    name:"sweets",
    type:"sweets",
    img:"sweets-1",
    price:"15"

}
sweets[10]={
    name:"sweets",
    type:"sweets",
    img:"sweets-2",
    price:"15"

}
sweets[11]={
    name:"sweets",
    type:"sweets",
    img:"sweets-3",
    price:"15"

}

//authentication function

function auth()
{
    let username=document.getElementById('username');
    let password=document.getElementById('password');
    let login_div=document.getElementById('login-div');
    console.log(username.value);
    console.log(password.value);
    if(user.username==username.value && user.password==user.password)
    {
        console.log("correct password");
        login_div.innerHTML=`<h1> Hello ${user.username}</h1>`;
        currentuser=user.username;
        store(user.username)
      
        
    }
    else
    {
        console.log("wrong password"); 
        confirm("wrong password");
       
    }

}

// store viewing the item
function store(user)
{
  let order_detail=document.getElementById('orders');
  let total=document.getElementById('total_price');
  let b=document.getElementById('banner');
  order_detail.innerHTML="";
  total.innerHTML="";

    let login_div=document.getElementById('login-div');
    login_div.innerHTML=`<nav class="navbar navbar-expand-lg navbar-light bg-light">
    <a class="navbar-brand" href="#"><img src="./images/logo.svg" alt="Card image cap"  style="width: 5rem;" ></a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item active">
          <a class="nav-link" href="#" onclick="store('${currentuser}')">Home <span class="sr-only">(current)</span></a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#"  onclick="ordersview()">Purchased</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#" onclick="cartview()">Cart</a>
        </li>
        <li class="nav-item">
          <a class="nav-link disabled" href="#">Disabled</a>
        </li>
      </ul>
    </div>
  </nav>`;
  // banner-space for image
  b.innerHTML=`<div style='text-align:center;margin-left:auto;margin-right:auto;margin-bottom:3rem' ><img src='./images/headerBcg.jpeg' class="banner-img"/></div>`;
  let product_detail=document.getElementById('product_detail');
  let allsweets=sweets.map(i=>{
    return ` 
    <div class="col-sm-12 col-md-6 col-lg-4" style="max-width:400px; margin:auto">
    <div class="card" style="width: 18rem; margin-bottom:0.5rem; ">
    <img src="./images/${i.img}.jpeg" alt="Card image cap"  style="width: 18rem;" >
    <div class="card-body">
      <h5 class="card-title"> ${i.name} ${i.price}</h5>
      
   
      <a href="#" class="btn btn-sm btn-primary" onclick="buy('${i.name}')">Buy</a><a href="#" class="btn btn-sm btn-primary" onclick="itemcart('${i.name}')">AddtoCart</a>
    </div>
  </div>
  </div>
        
  `
  })
  joinallsweets=allsweets.join("")
  product_detail.innerHTML=joinallsweets;
}
// #buying item purchase of item
let item;
function buy(item)
{
    let citem=sweets.map( i=>{
        if(i.name==item)
        {
            user.orders.push(i);
          
           console.log(i.price)
            totalprice=totalprice+parseInt(i.price);;
            console.log(totalprice);

            alert("Product Purchase in Process");

        }
    })
    ordersview()
    
   
}

// item adding to the cart
function itemcart(item)
{

    let citem=sweets.map( i=>{
        if(i.name==item)
        {
            user.cart.push(i);
            alert("Product is added To The Cart");
        }
    })
    cartview();
}
// view the order details
function ordersview()
{
  let product_detail=document.getElementById('product_detail');
    let order_detail=document.getElementById('orders');
    let b=document.getElementById('banner');
    let total=document.getElementById('total_price');
    b.innerHTML="";
    product_detail.innerHTML=product_detail.innerHTML="<div style='text-align:center;margin-left:auto;margin-right:auto; font-family:italic;padding-top:3rem;padding-bottom:3rem;color:white' ><h4>ORDER DETAILS</h4></div>";
    let allsweets=orders.map(i=>{
      return ` 
      <div class="col-sm-12 col-md-6 col-lg-4" style="max-width:400px; margin:auto">
      <div class="card" style="width: 18rem; margin-bottom:0.5rem; ">
      <img src="./images/${i.img}.jpeg" alt="Card image cap"  style="width: 18rem;" >
      <div class="card-body">
        <h5 class="card-title"><b> ${i.name} ${i.price}</b></h5>
        
     
       
      </div>
    </div>
    </div>
          
    `
    })
    joinallsweets=allsweets.join("")
    order_detail.innerHTML=joinallsweets;
    total.innerHTML=`<small  style='color:white'>TotalPrice:${totalprice}<span> ₹ </span></small>`


}
function cartview()
{
  let product_detail=document.getElementById('product_detail');
  let order_detail=document.getElementById('orders');
  let total=document.getElementById('total_price');
  total.innerHTML="";
  let b=document.getElementById('banner');
  b.innerHTML="";
  product_detail.innerHTML="<div style='text-align:center;margin-left:auto;margin-right:auto; font-family:italic;padding-top:3rem;padding-bottom:3rem;color:white' ><h4>CART DETAILS</h4></div>";
  let allsweets=cart.map(i=>{
    return ` 
    <div class="col-sm-12 col-md-6 col-lg-4" style="max-width:400px; margin:auto">
    <div class="card" style="width: 18rem; margin-bottom:0.5rem; ">
    <img src="./images/${i.img}.jpeg" alt="Card image cap"  style="width: 18rem;" >
    <div class="card-body">
      <h5 class="card-title"> ${i.name} ${i.price}<span> ₹ </span></h5>
      
   
     
    </div>
  </div>
  </div>
        
  `
  })
  joinallsweets=allsweets.join("")
  order_detail.innerHTML=joinallsweets;
  



}