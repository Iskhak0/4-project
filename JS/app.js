// "use strict";

// const element = document.getElementById("cart-items");

// element.children[1].remove();

// const item = document.createElement("div");

// item.innerHTML = "canned fish <span class=qty> x 3</span>" 

// element.append(item);




// "use app";
// const createOrderDiv = (name, amount) =>{
//     const div = document.createElement('div');
//     div.innerHTML = `${name} : <b>x${amount}</b>`;
//     div.style.color = 'purpure';
//     return div;
// };








    // шахматные доски
// const getOptions = function(size, number){
//     let board = document.createElement('div');
//     for(let i = 1; i < number; i++){
//         const horizontal = document.createElement('div');
//     for(let j = 1; j < number; j++){
//         horizontal.style.display = 'flex';
//         const coll =document.createElement('div');
  
//     if(i % 2 == j % 2){ 
//         coll.style.backgroundColor = 'black';
//         coll.style.width = size + 'px';
//         coll.style.height = size + 'px';
//     }else{ 
//         coll.style.backgroundColor = 'white';
//         coll.style.width = size + 'px';
//         coll.style.height = size + 'px';
//     }
//     horizontal.append(coll);
// }
//     board.append(horizontal)

// }
// document.body.append(board)
// }






  




// const availableScreenWidth = window.screen.availWidth;  
// const availableScreenHeight = window.screen.availHeight; 
 
// const getRandomIndex = ["#00FDFF", "#FF41FF", "#0333FF", "#FF2600", "#FFD000", "#FFFB00", "#00FA00"]; 
 
// function getRandomSize(min, max){ 
//     return Math.random() *(max - min) + min; 
// } 
 
 
 
// const getStyleSize = function(){ 
//     const randomWords = Math.floor(Math.random() * getRandomIndex.length); 
//     const randomColor = getRandomIndex[randomWords]; 
 
//     const size = getRandomSize(20, 150); 
//     // const siz = getRandomSize(50, 400); 
 
 
//     const board = document.createElement('div'); 
 
//     board.style.backgroundColor = randomColor; 
//     board.style.width = size + 'px'; 
//     board.style.height = size + 'px'; 
//     board.style.borderRadius = '50%'; 
//     board.style.position = 'absolute'; 
//     // board.style.top = siz + 'px'; 
//     // board.style.marginLeft = siz + 'px'; 
//     board.style.top = getRandomSize(0, (availableScreenHeight - 300)) + 'px'; 
//     board.style.left = getRandomSize(0, (availableScreenWidth - 100)) + 'px'; 
 
 
 
//     document.body.append(board);  
 
// } 
 
 
 
// getNumberOfficial = function(num){ 
//     for(let i = 0; i < num; i++){ 
//         getStyleSize(); 
//     }  
// } 
 
 
// getNumberOfficial(20);




    



//      const  nameList = ['John', 'Jack', 'Harry', 'Mario', 'Link', 'Zelda', 'Bowser'];
//      const Host = {
//         gostiList: [],
//         setGuestList: function(name) {
//             for(let i = 0; name.length; i++){
//                 const getRandom = () => Math.floor(Math.random() *100 +1);
//                 if(getRandom() <= 80){
//                     Host.gostiList.push(name[i])
//                 }
//         }
//     }
// }
// Host.setGuestList(this.nameList);







    // синхронность

    // const  ShowMessage = () =>{
    //     alert('30 seconds have passed')
    // }
    // const time = setTimeout(ShowMessage, 5000);





    // const time = setTimeout(() =>{ // анонимна работает
    //     alert('30 seconds have passed');

    // }, 5000)




    // let counter = 0;
    // const interval = setInterval(() => {
    //     counter++;
    //     console.log(`Hello world ${counter}`);
    //     if(counter > 6){
    //         clearInterval(interval);
    //     }
    // }, 5000);





    // const time = setTimeout(() => {
    //     console.log('Hello apple')
    // }, 5000);
    // console.log('Hello samsung');







    // const btn = document.guerySelector('.btn');
    // btn.addEventListener('click', () =>{
    //     alert('Hello world');
    // });




    // const button =()=>{
    //     alert('Hello')
    // }









    // const btn = document.querySelector('.button');
    // const button =() =>{
    //     alert('Hello')
    // }