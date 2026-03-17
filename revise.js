//1.
// let largest1 = document.getElementById('result');
// let smallest1 = document.getElementById('result1');
// function largeAndSmall() {
//     const answer = document.getElementById('text').value;
//     console.log("2", answer);
//     console.log("1")
//     let words = answer.split('');
//     console.log("22",words,words.length);
//     if (words.length === 0) {
//         return {
//             smallest: "", largest: ""
//         };
//     }
//     let smallest = words[0];
//     let largest = words[0];
//     for (let i = 0; i < words.length; i++) {
//         let word = words[i];
//         if (word.length < smallest.length) {
//             smallest = word;
//         }
//         if (word.length > largest.length) {
//             largest = word;
//         }
//     }
//     console.log(smallest, largest);
//     largest1.innerHTML = "largest word"+largest;
//     smallest1.innerHTML ="smallest word"+smallest;
// }

//2.
// let res=document.getElementById('result');
// function toCheck(){
//     const character=document.getElementById('vowel').value;
//   if(character=='a'||character=='e'||character=='i'||character=='o'||character=='u'){
//     res.innerHTML="Vowel";
//   } else{
//     res.innerHTML="Not a Vowel";
//   }
// }

//3.
// let final=document.getElementById('check');
// function result(){
//     let value=document.getElementById('first').value;
// for(let i=0;i<value.length;i++){
//     if(value.charAt(0)===value.charAt(value.length-1)){
//         final.innerHTML="First and last characters are same";
//         alert("First and last characters are same")
//     }
//     else{
//         final.innerHTML="First and last characters are not same";
//     }
// }
// }

//4.
// let last=document.getElementById('check');
// function toReverse(){
//     let input=document.getElementById('rev').value;
// let answer=input.split("").reverse().join("");
// last.innerHTML="Reversed String is "+answer;
// }

//5.
// let answer = document.getElementById('result');
// function largest() {
//     let a = 0;
//     let result = document.getElementById('data').value;
//     console.log(typeof result);
//     // let values=Number (result);
//     //     console.log(values);
//     for (let i = 0; i < result.length; i++) {
//         console.log(result.charAt(i));
//         if (a < result.charAt(i)) {
//             a = i;
//         }
//     }
// answer.innerHTML="Largest number is "+a;
// }

//6.
// function check(){
// let input=document.querySelectorAll('#check');
// for(let i=0;i<input.length;i++){
//     input[i].checked=true;
// }
// }
// function unCheck(){
// let input=document.querySelectorAll('#check');
// for(let i=0;i<input.length;i++){
//     input[i].checked=false;
// }
// }
// function toggle(){
// let input=document.querySelectorAll('#check');
// input.checked=!input.checked;
// }


//7.
// let answer=document.getElementById('data');
// function sum(){
// let ans=document.getElementById('sum').value;
// const add=ans.split(',');
// const array=add.map(Number);
// const value=array.reduce((acc,current)=>acc+current,0)
// console.log(value);
// answer.innerHTML="Addition "+value

// }
// function multi(){
// let ans=document.getElementById('sum').value;
// const add=ans.split(',');
// const array=add.map(Number);
// const value=array.reduce((acc,current)=>acc*current,1)
// console.log(value);
// answer.innerHTML="Multiplication "+value
// }

//8.
// const answer = document.getElementById('replace');
// function replace() {
//     let ans = document.getElementById('res1').value;
//     const add = ans.split(',');
//     const array = add.map(Number);
//     console.log(array);
//  let index=document.getElementById('res2').value;
//  let repl=document.getElementById('res3').value;
//  array[index]=repl;
//  console.log(array);
//  answer.innerHTML="After replacing the element "+array;

// }

//9.
// let result=document.getElementById('result');
// function date(){
//     const date=new Date();
//     const date1=date.toLocaleString();
//     console.log(date1);
//     result.innerHTML="Current date and Time is: "+date1;
// }

//10.
// let answer = document.getElementById('result');
// function register() {
//     let fname = document.getElementById('fname').value;
//     let lname = document.getElementById('lname').value;
//     let email = document.getElementById('email').value;
//     let phone = document.getElementById('phone').value;
//     let zipcode = document.getElementById('zip').value;
//     let address = document.getElementById('add').value;
//     answer.innerHTML = ` FirstName ${fname}
//     lastName ${lname}
//     Email ${email}
//     Phone Number ${phone}
//     Zipcode ${zipcode}
//     Address ${address}`
// }

//11.
// function getUrl(){
//     let data=window.location.href;
//     let result=document.getElementById('result');
//     result.innerHTML="Getting the full url :"+ " "+data;
// }

//12.
// let answer = document.getElementById('result');
// function parameter() {
//     let url = "http://www.mitrahsoft.com?technology=coldfusion&people=veryNice";
//     let param = url.split('?')[1];
//     console.log("1",param);
//     answer.innerHTML=param;
//     let query = new URLSearchParams(param);
//     for (let a of query.entries()) {
//         answer.textContent =`${a[0]} : ${a[1]}`
//         console.log(a[0] + ":" + a[1]);
//     }
// }

//14.
// let answer=document.getElementById('count1');
// function count(){
//     let word=document.getElementById('count').value;
//     let words=word.trim().split(/\s+/).length;
//     console.log(words);
//     answer.innerHTML="The word count is "+words;
// }

// 15.
// let answer=document.getElementById('result');
// function palindrome(){
//     let data=document.getElementById('check').value;
//     let ans=data.split("").reverse().join("");
//     if(data===ans){
//         console.log("Palindrome");
// answer.innerHTML="The given string is palindrome"
//     }else{
//         console.log("Not a palindrome");
//         answer.innerHTML="The given string is not a palindrome"
//     }
// }

//16.
// let answer1 = document.getElementById('result1');
// let answer2 = document.getElementById('result2');
// let count1 = 0;
// let count2 = 0;
// function count() {
//     let input = document.getElementById('count').value.toLowerCase();
//     for (let i = 0; i < input.length; i++) {
//         if (input[i] == 'a' || input[i] == 'e' || input[i] == 'i' || input[i] == 'o' || input[i] == 'u') {
//             count1++;
//         } else {
//             count2++;
//         }

//     }
//     console.log(count1);
//     console.log(count2);
//     answer1.innerHTML = "The vowel count is " + count1;
//     answer2.innerHTML = "The consonants count is " + count2;

// }

// 17.
// let answer = document.getElementById('result');
// let answers=document.getElementById('previous');
// function duplicate() {
//     let data = document.getElementById('count').value;
//     const add = data.split(',');
//     const array = add.map(Number);
//     const result=new Set(array);
//     let a=[...result];
//     console.log(a);
//     answers.innerHTML="Before removing the duplicates "+array;
//     answer.innerHTML="After removing the duplicates "+a;
// }


// 18.
// let answer=document.getElementById('res');
// function click1(){
//     let data=document.getElementById('character').value;
//     console.log(data.length);
// answer.innerHTML="The character length of the sentence or word is "+data.length;
// }

//19.
// let answer=document.getElementById('result');
// let a=/^\d+$/;
// function data(){
//     let value=document.getElementById('number').value;
//     if(value===""){
//         answer.innerHTML="Please enter the value";
//     }
//     else{
//         if(value%2==0){
//             answer.innerHTML="The given value is even";
//         }
//         else{
//             answer.innerHTML="The given value is odd";
//         }
//     }
// }

//20.
// let answer=document.getElementById('result');
// function random(){
//     let min=document.getElementById('min').value;
//     let max=document.getElementById('max').value;

//  let min1=Number(min);
//  let max1=Number(max);
//   console.log(typeof min1);
//  console.log(typeof max1);
//  let value=Math.floor(Math.random() * (max1 - min1 + 1)) + min1;
//     answer.innerHTML="Generated Random number is "+value
// }

//21.
// let answer=document.getElementById('words');
// answer.addEventListener("input",function(){
//     let total=this.value.length;
//     document.getElementById('count').innerText=total+"/200";
//     if(total>200){
//         console.log("error");
//             document.getElementById('count').innerText="Words should be under 200 words";

//     }
// });

// 22.
// let answer=document.getElementById('pass1');
// function check(){
// let value=document.getElementById('pass').value;
// const minLen=/.{8,}/;
// const upper=/[A-Z]/;
// const lower=/[a-z]/;
// const digit=/\d/;
// const special=/[!@#$%^&*(),.?":{}|<>]/;
// if(!minLen.test(value)){
//     console.log("Minimum length 8 characters");
//     answer.innerHTML="Minimum length 8 characters" 
// }
// else if(!upper.test(value)){
//     console.log("uppercase wanted");
// answer.innerHTML="uppercase wanted"
// }
// else if(!lower.test(value)){
//     console.log("lower case letter need");
//     answer.innerHTML="lower case letter need"
// }
// else if(!digit.test(value)){
//     console.log("digit required");
//     answer.innerHTML="digit required"
// }
// else if(!special.test(value)){
//     console.log("special character wanted");
//     answer.innerHTML="special character wanted"
// }
// else{
//     if(value.length==8){
//         console.log("weak");
//         answer.innerHTML="weak"
//     }
//     else if(value.length>8 && value.length<10){
//         console.log("Medium");
//         answer.innerHTML="Medium"
//     }
//     else{
//         console.log("Strong password");
//         answer.innerHTML="Strong password"
//     }
// }
// }

//23.
// let answer=document.getElementById('result');
// let verify=/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

// function domain1(){
//     let email=document.getElementById('email').value;
//     if(verify.test(email)){
// let result=email.split('@')[1];
//     console.log(result);
//     answer.innerHTML="Extracted Domin "+result;
//     }else{
//         console.log("Please enter the valid email");
//         answer.innerHTML="Please enter the valid email";
//     }
    
// }

//24.
// let answer=document.getElementById('result');
// function fun(){
//     let value=document.getElementById('copy').value;
//     navigator.clipboard.writeText(value);
//     answer.innerHTML="The value inside the text field is copied ";
// }

//25.
// function check(){
//     let value=document.getElementById('password');
//     if(value.type==="password"){
//         value.type="text";
//     }
//     else{
//         value.type="password";
//     }
// }

//26.
// function func(){
// let input=document.getElementById('search').value.toUpperCase();
// let list=document.getElementById('list');
// let li=list.getElementsByTagName('li');
// for(let i=0;i<li.length;i++){
//     let a=li[i].getElementsByTagName("a")[0];
//     let textValue=a.textContent || a.innerText;
//     if(textValue.toUpperCase().indexOf(input)>-1){
//         li[i].style.display="";
//     }
//     else{
//         li[i].style.display="none";
//     }
// }

// }

//27.
// function addTable(){
//      let name=document.getElementById('name').value;
//     let age=document.getElementById('age').value;
//     let row=`
//     <tr>
//     <td>${name}</td>
//     <td>${age}</td>
//     </tr>
//     `
//     let data=document.getElementById('table');
//    data.innerHTML+=row;
// }

//28.
// function color(){
//     document.body.classList.toggle("dark-side");
// }

//29.
// let val=document.getElementById('upperCase');
// val.addEventListener("input", function(){
//     this.value=this.value.toUpperCase();
// })

//30.
// let answer=document.getElementById('result');
// function start(){
//     let cValue=document.getElementById('count').value;
//     let dTimer=setInterval(function(){
//         cValue--;
//         answer.innerHTML= "starting the count down "+cValue;
//         if(cValue<=0){
//             clearInterval(dTimer);
//             answer.innerHTML="CountDown stops"
//         }
//     },1000);
// }

//32.
// function getDragAfterElement(container,y){
//     const dElements=[...container.querySelectorAll('li:not(.dragging)')]
//     return dElements.reduce((closest,child)=>{
//         const box=child.getBoundingClientReact();
//         const offset=y-box.top-box.height/2;
//         if(offset<0 && offset>closest.offset){
//             return {offset:offset,element:child};
//         }else{
//             return closest;
//         }
//     },{offset:Number.NEGATIVE_INFINITY}).element;
// }
// const list=document.getElementById('list');
// let dragged=null;
// list.querySelectorAll('li').forEach(item=>{
//     item.addEventListener('dragstart',()=>{
//         dragged=item;
//         item.classList.add('dragging');
//     });
//     item.addEventListener('dragend',()=>{
//         dragged=null;
//         item.classList.remove('dragging');
//     })
// })
// list.addEventListener('dragover',e=>{
//     e.preventDefault();
//     const afterElement=getDragAfterElement(list,e.clientY);
//     if(afterElement==null){
//         list.appendChild(dragged);
//     }else{
//         list.insertBefore(dragged,afterElement);
//     }
// })

//33.
// document.querySelectorAll(".drop-zone__input").forEach((inputElement) => {
//   const dropZoneElement = inputElement.closest(".drop-zone");

//   dropZoneElement.addEventListener("click", (e) => {
//     inputElement.click();
//   });

//   inputElement.addEventListener("change", (e) => {
//     if (inputElement.files.length) {
//       updateThumbnail(dropZoneElement, inputElement.files[0]);
//     }
//   });

//   dropZoneElement.addEventListener("dragover", (e) => {
//     e.preventDefault();
//     dropZoneElement.classList.add("drop-zone--over");
//   });

//   ["dragleave", "dragend"].forEach((type) => {
//     dropZoneElement.addEventListener(type, (e) => {
//       dropZoneElement.classList.remove("drop-zone--over");
//     });
//   });

//   dropZoneElement.addEventListener("drop", (e) => {
//     e.preventDefault();

//     if (e.dataTransfer.files.length) {
//       inputElement.files = e.dataTransfer.files;
//       updateThumbnail(dropZoneElement, e.dataTransfer.files[0]);
//     }

//     dropZoneElement.classList.remove("drop-zone--over");
//   });
// });
// function updateThumbnail(dropZoneElement, file) {
//   let thumbnailElement = dropZoneElement.querySelector(".drop-zone__thumb");

//   if (dropZoneElement.querySelector(".drop-zone__prompt")) {
//     dropZoneElement.querySelector(".drop-zone__prompt").remove();
//   }

//   if (!thumbnailElement) {
//     thumbnailElement = document.createElement("div");
//     thumbnailElement.classList.add("drop-zone__thumb");
//     dropZoneElement.appendChild(thumbnailElement);
//   }

//   thumbnailElement.dataset.label = file.name;

//   if (file.type.startsWith("image/")) {
//     const reader = new FileReader();

//     reader.readAsDataURL(file);
//     reader.onload = () => {
//       thumbnailElement.style.backgroundImage = `url('${reader.result}')`;
//     };
//   } else {
//     thumbnailElement.style.backgroundImage = null;
//   }
// }

//36.
// const container=document.querySelector('.container');
// const URL='https://dog.ceo/api/breeds/image/random'
// function loadImag(num=10){
//     let i=0;
//     while(i<num){
//         fetch('https://dog.ceo/api/breeds/image/random')
//         .then(res=>res.json())
//         .then(data=>{
//             const img=document.createElement('img');
//             img.src=`${data.message}`
//             container.appendChild(img);
//         })
//         i++;
//     }
// }
// loadImag();
// window.addEventListener('scroll',()=>{
//     if(window.scrollY+window.innerHeight>=document.documentElement.scrollHeight){
//         loadImag();
//     }
// })

//38.
function dbounce(func,delay=500){
    let timeout;
    return function(...args){
        clearTimeout(timeout);
        timeout=setTimeout(()=>{
            func.apply(this,args);
        },delay);
    };
}
let searchBox=document.getElementById('datas');

let a=document.getElementById('a');
function data(){
console.log("The value is ");
a.innerHTML="the debounce is applied after 500ms",searchBox.value;
}
const change=dbounce(()=>data());

