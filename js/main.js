// alert("this is an alert");
// let conf = confirm("are you sure??");
// console.log(conf);
// let myName = prompt("Enter Your Name:");
// console.log(myName);

// document.write("Hello My Dears ......");
// document.getElementById("main").innerHTML = "Hello My Dears....";

// const ff = (msg, id) => {
//   document.getElementById(id).innerHTML = msg;
// };

// ff("Hello", "main");

// let res = "";
// for (let i = 0; i <= 10000; i++) {
//   res += "<div>" + i + "</div>";
//   //   console.log(i);
// }
// document.getElementById("main").innerHTML = res;
// let myDiv = document.getElementById("main");
// let myDivs = document.getElementsByTagName("div");

// let qsDivs = document.querySelector("[my-name]");
// let qsAllDivs = document.querySelectorAll("#main");

// console.log(myDiv);
// console.log(myDivs);
// console.log(qsDivs);
// console.log(qsAllDivs);
const arr = [55, 90, 13];
let res = document.createElement("div");
res.style.display = "flex";
for (let i = 0; i < arr.length; i++) {
  let newElement = document.createElement("div");
  newElement.style.width = "30px";
  newElement.style.height = "30px";
  newElement.style.backgroundColor = "red";
  let newText = document.createTextNode(arr[i]);
  newElement.appendChild(newText);
  res.appendChild(newElement);
}

document.getElementById("main").appendChild(res);
