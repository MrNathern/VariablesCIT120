var inputbill=Number(prompt("What is your bill?"));
var taxAmount=inputbill*.07;
var taxTotalBill=inputbill+taxAmount;
var tipAmount=taxTotalBill*.05;
var total=taxTotalBill+tipAmount;

var element=document.body.querySelector(".box");

element.innerHTML=total;