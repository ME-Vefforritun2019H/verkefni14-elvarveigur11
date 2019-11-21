let greeting    = "Howdy ";
let name        = "Molly";
let message     = ", please check your order:";
let welcome     = greeting + name + message;

let sign        = "Montague House"; // 14 á lengdina
let tiles       = sign.length; // lengdin á sign
let subTotal    = tiles * 5;
let shipping    = 7;
let grandTotal  = subTotal + shipping;

let el          = document.getElementById("greeting");
el.textContent  = welcome;

let elSign      = document.getElementById("userSign");
elSign.textContent = sign;

let eltiles     = document.getElementById("tiles");
eltiles.textContent = tiles;

let elsubTotal  = document.getElementById("subTotal");
elsubTotal.textContent = "$" + subTotal;

let elshipping  = document.getElementById("shipping");
elshipping.textContent = "$" + shipping;

let elgrandTotal = document.getElementById("grandTotal");
elgrandTotal.textContent = "$" + grandTotal;


