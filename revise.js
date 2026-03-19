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

//31.
// function dragstart(event){
//     event.dataTransfer.setData("text/plain",event.target.innerText);
// }
// const p1=document.getElementById("dragData");
// p1.addEventListener("dragstart",dragstart);
// const target=document.getElementById("target");
// target.addEventListener("dragover",(event)=>{
//     event.preventDefault();
// });
// target.addEventListener("drop",(event)=>{
//     event.preventDefault();
//     const data=event.dataTransfer.getData("text/plain");
//     event.target.append(data);
// });

//32.
// const list = document.querySelector('.list');
// let drag = null;
// list.addEventListener('dragstart', (e) => {
//     drag = e.target;
//     e.target.classList.add('dragging');
// });
// list.addEventListener('dragend', (e) => {
//     e.target.classList.remove('dragging');
//     document.querySelectorAll('sort')
//         .forEach(item => item.classList.remove('over'));
//     drag = null;
// });
// list.addEventListener('dragover', (e) => {
//     e.preventDefault();
//     const drageOver = getDrag(list, e.clientY);
//     document.querySelectorAll('sort').forEach
//         (item => itemm.classList.remove('over'));
//     if (drageOver) {
//         drageOver.classList.remove('over');
//         list.insertBefore(drag, drageOver);
//     } else {
//         list.appendChild(drag);
//     }
// });
// function getDrag(container, y) {
//     const dElements = [...container.querySelectorAll('.sort:not(.dragging)')];
//     return dElements.reduce((closest, child) => {
//         const box = child.getBoundingClientRect();
//         const offset = y - box.top - box.height / 2;
//         if (offset < 0 && offset > closest.offset) {
//             return { offset: offset, element: child };
//         } else {
//             return closest;
//         }
//     }, { offset: Number.NEGATIVE_INFINITY }).element;
// }

//33.
// const drop = document.getElementById('drop');
// const fileName = document.getElementById('file');
// ['dragenter', 'dragover', 'dragleave', 'drop'].forEach(eventName => {
//   drop.addEventListener(eventName, e => { 
//     e.preventDefault(); e.stopPropagation();
// }, false);
// });
// drop.addEventListener('drop', (e) => {
//   const file = e.dataTransfer.files[0];
//   if (file && file.type.startsWith('image/')) {
//     fileName.textContent = file.name; 
//   } else {
//     alert('Please drop an image file.');
//     fileName.textContent = 'None';
//   }
// });


//34.
// const columns = document.querySelectorAll(".task-column");
// const tasks = document.querySelectorAll(".task");

// tasks.forEach((task) => {
//   task.addEventListener("dragstart", (event) => {
//     task.id = "dragged-task";
//     event.dataTransfer.effectAllowed = "move";
//     event.dataTransfer.setData("task", "");
//   });

//   task.addEventListener("dragend", (event) => {
//     task.removeAttribute("id");
//   });
// });
// function makePlaceholder(draggedTask) {
//   const placeholder = document.createElement("li");
//   placeholder.classList.add("placeholder");
//   placeholder.style.height = `${draggedTask.offsetHeight}px`;
//   return placeholder;
// }
// function movePlaceholder(event) {
//   if (!event.dataTransfer.types.includes("task")) {
//     return;
//   }
//   event.preventDefault();
//   const draggedTask = document.getElementById("dragged-task");
//   const column = event.currentTarget;
//   const tasks = column.children[1];
//   const existingPlaceholder = column.querySelector(".placeholder");
// if (existingPlaceholder) {
//   const placeholderRect = existingPlaceholder.getBoundingClientRect();
//   if (
//     placeholderRect.top <= event.clientY &&
//     placeholderRect.bottom >= event.clientY
//   ) {
//     return;
//   }
// }
// for (const task of tasks.children) {
//   if (task.getBoundingClientRect().bottom >= event.clientY) {
//     if (task === existingPlaceholder) return;
//     existingPlaceholder?.remove();
//     if (task === draggedTask || task.previousElementSibling === draggedTask)
//       return;
//     tasks.insertBefore(
//       existingPlaceholder ?? makePlaceholder(draggedTask),
//       task,
//     );
//     return;
//   }
// }
//   existingPlaceholder?.remove();
//   if (tasks.lastElementChild === draggedTask) return;
//   tasks.append(existingPlaceholder ?? makePlaceholder(draggedTask));
// }
// columns.forEach((column) => {
//   column.addEventListener("dragover", movePlaceholder);
//   column.addEventListener("dragleave", (event) => {
//     if (column.contains(event.relatedTarget)) return;
//     const placeholder = column.querySelector(".placeholder");
//     placeholder?.remove();
//   });
//   column.addEventListener("drop", (event) => {
//     event.preventDefault();

//     const draggedTask = document.getElementById("dragged-task");
//     const placeholder = column.querySelector(".placeholder");
//     if (!placeholder) return;
//     draggedTask.remove();
//     column.children[1].insertBefore(draggedTask, placeholder);
//     placeholder.remove();
//   });
// });

// 35.
// const content = document.getElementById('content');
// const load = document.getElementById('load');
// let current = 1;
// const items = 10;
// let isLoading = false;
// async function loadItems() {
//     if (isLoading) return;
//     isLoading = true;
//         await new Promise(resolve => setTimeout(resolve, 1000));
//     for (let i = 0; i < items; i++) {
//         const item = document.createElement('div');
//         item.textContent = `Item ${(current - 1) * items + i + 1}`;
//         item.style.padding = '20px';
//         content.appendChild(item);
//     }
//     current++;
//     isLoading = false;
// }
// const observer = new IntersectionObserver((entries) => {
//     if (entries[0].isIntersecting) {
//         loadItems();
//     }
// }, { 
//     threshold: 1.0
//  });
// observer.observe(load);

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

//37.
// let current=1;
// let loading=false;
// const contentDiv=document.getElementById('content');
// const loadingDiv=document.getElementById('loading');
// const getPosts=async()=>{
//     try{
//         let response=await fetch("https://jsonplaceholder.typicode.com/users");
//         return await response.json();
//     }
//     catch(e){
//         throw new Error(e.message);
//     }
// }
// const appendData=(data)=>{
//     data.forEach(item=>{
//         const div=document.createElement('div');
// div.innerHTML=`<h3>Name: ${item.name} 
// Email: ${item.email}   
// Phone Number: ${item.phone}<br></h3>`;
// contentDiv.appendChild(div);
//     });
// }
// const observer=new IntersectionObserver(async(entries)=>{
//     if(entries[0].isIntersecting && !loading){
//         loading=true;
//         current++;
//         try{
//             const data=await getPosts(current);
//             appendData(data);
//         }catch(e){
//             console.log(e.message);
//         }
//         loading=false;
//     }
// },{threshold:1.0});
// observer.observe(loadingDiv);
// window.addEventListener('DOMContentLoaded',async()=>{
//     try{
//         const posts=await getPosts(current);
//         if(posts){
//             appendData(posts);
//         }else{
//             console.log("post not found");
//         }
//     }catch(e){
//         console.log(e.message);
//     }
// });


//38.
// function dbounce(func,delay=500){
//     let timeout;
//     return function(...args){
//         clearTimeout(timeout);
//         timeout=setTimeout(()=>{
//             func.apply(this,args);
//         },delay);
//     };
// }
// let searchBox=document.getElementById('datas');

// let a=document.getElementById('a');
// function data(){
// console.log("The value is ");
// a.innerHTML="the debounce is applied after 500ms",searchBox.value;
// }
// const change=dbounce(()=>data());

//39.
// function debounce(func, delay) {
//     let timeoutId;
//     return function(...args) {
//         clearTimeout(timeoutId);
//         timeoutId = setTimeout(() => {
//             func.apply(this, args);
//         }, delay);
//     };
// }

// const fetchname = async (query) => {
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users');
//         const users = await response.json(); 
//         const matching = users
//             .filter(user => user.name.toLowerCase().includes(query.toLowerCase()))
//             .map(user => user.name); 
//         const resultsDiv = document.getElementById('results');
//         resultsDiv.innerHTML = ''; 

//         if (matching.length > 0) {
//             const ul = document.createElement('ul');
//             matching.forEach(username => {
//                 const li = document.createElement('li');
//                 li.textContent = username;
//                 ul.appendChild(li);
//             });
//             resultsDiv.appendChild(ul);
//         } else {
//             resultsDiv.textContent = 'No matching users found.';
//         }

//     } catch (error) {
//         console.error('Error fetching data:', error);
//         document.getElementById('results').textContent = 'Error fetching data.';
//     }
// };

// const debounced = debounce(fetchname, 500);

// document.getElementById('searchInput').addEventListener('input', (event) => {
//     debounced(event.target.value);
// });

//40.
// const names=[
//     {name:"India"},
//     {name:"singapore"},
//     {name:"Indonesia"},
//     {name:"america"},
// ];
// function render(uNames){
//     let li="";
//     for(let i=0;i<uNames.length;i++){
//         li+=`<li> ${uNames[i].name}</li>`;
//     }
//     document.getElementById('list').innerHTML=li;
// }
// render(names);
// filter=(event)=>{
//     let search=event.target.value;
//     let filter=names.filter((v)=>{
//         return v.name.includes(search);
//     });
//     render(filter);
// }

//41.
// let slideIndex = 1;
// showSlides(slideIndex);
// function plusSlides(n) {
//     showSlides(slideIndex += n);
// }
// function showSlides(n) {
//     let slides = document.getElementsByClassName("slide");
//     if (n > slides.length) {
//         slideIndex = 1;
//     }
//     if (n < 1) {
//         slideIndex = slides.length;
//     }
//     for (let i = 0; i < slides.length; i++) {
//         slides[i].style.display = "none";
//     }
//     slides[slideIndex - 1].style.display = "block";

// }

//42.
// let slideIndex = 1;
// showSlides(slideIndex);
// function showSlides(n) {
//     let slides = document.getElementsByClassName("slide");

//     for (let i = 0; i < slides.length; i++) {
//         slides[i].style.display = "none";
//     }
//     slideIndex++;
//     if(slideIndex>slides.length){
//         slideIndex=1
//     }
// slides[slideIndex-1].style.display="block";
// setTimeout(showSlides,3000)
// }

//43.
// let slideIndex = 1;
// showSlides(slideIndex);
// function plusSlides(n){
//     showSlides(slideIndex+=n);
// }
// function currentSlide(n){
//     showSlides(slideIndex=n);
// }
// function showSlides(n) {
//     let dots = document.getElementById('dot');
//     let slides = document.getElementsByClassName("slide");
// if(n>slides.length){
//     slideIndex=1;
// }
// if(n<1){
//     slideIndex=slides.length;
// }
//  for (let i = 0; i < slides.length; i++) {
//         slides[i].style.display = "none";
//     }
//   for (let i = 0; i <dots.length; i++) {
//         dots[i].className = dots[i].className.replace("active", "");
//     }
//     slides[slideIndex-1].style.display="block";
//     dots[slideIndex - 1].className += "active";
// }

//44.
// const modal = document.getElementById('modal');
// const open = document.getElementById('open');
// const close = document.getElementById('close');
// function openModel(){
//     modal.classList.add("show");
// }
// function closeModal(){
//     modal.classList.remove("show");
// }
// open.addEventListener("click",openModel);
// close.addEventListener("click",closeModal);

//45.
// const modal = document.getElementById('modal');
// const open = document.getElementById('open');
// const close = document.getElementById('close');
// function openModel() {
//     modal.classList.add("show");
// }
// function closeModal() {
//     modal.classList.remove("show");
// }
// open.addEventListener("click", openModel);
// close.addEventListener("click", closeModal);
// //for outer the modal box
// modal.addEventListener("click", (event) => {
//     if (event.target === modal) {
//         closeModal();
//     }
// });
// //for escape button
// document.addEventListener("keydown", (event) => {
//     if (event.key === "Escape") {
//         closeModal();
//     }
// });

//46.
// const modal = document.getElementById('modal');
// const open = document.getElementById('login');
// const close = document.getElementById('close');
// function openModel() {
//     modal.classList.add("show");
// }
// function closeModal() {
//     let email = document.getElementById('mail').value;
//     let password = document.getElementById('pass').value;
//     const strong= new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})");

//     const pattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
//     if (pattern.test(email) && strong.test(password)) {
//         modal.innerHTML = "User logged in";
//     }
//     else {
//         modal.innerHTML = "Please enter the valid username or password";
//     }
//     // modal.classList.remove("show");
// }
// open.addEventListener("click", openModel);
// close.addEventListener("click", closeModal);

//47.
// const inputs=document.getElementById('inputs');
// inputs.addEventListener("input",function(e){
//     const target=e.target;
//     const val=target.value;
//     if(isNaN(val)){
//         target.value="";
//         return;
//     }
//     if(val!=""){
//         const next=target.nextElementSibling;
//         if(next){
//             next.focus();
//         }
//     }
// });
// inputs.addEventListener("keyup",function(e){
//     const target=e.target;
//     const key=e.key.toLowerCase();
//     if(key=="backspace" || key=="delete"){
//         target.value="";
//         const prev=target.previousElementSibling;
//         if(prev){
//             prev.focus();
//         }
//         return;
//     }
// });

//48.
// const inputs=document.querySelectorAll('.input');
// inputs.forEach((input)=>{
//     input.addEventListener("paste",(e)=>{
//         e.preventDefault();
//         const paste=e.clipboardData.getData("text").split("");
//         console.log(paste);
//         inputs.forEach((inputField,i)=>{
//             if(paste[i]){
//                 inputField.value=paste[i];
//                 if(i<inputs.length-1) inputs[i+1].focus();
//             }
//         });
//     });
// });

// //49.
// document.addEventListener('DOMContentLoaded',function(){
//     const items=[
//         {id:1,name:'Item 1'},
//         {id:2,name:'Item 2'},
//         {id:3,name:'Item 3'},
//         {id:4,name:'Item 4'},
//         {id:5,name:'Item 5'},
//         {id:6,name:'Item 1'},
//         {id:7,name:'Item 2'},
//         {id:8,name:'Item 3'},
//         {id:9,name:'Item 4'},
//         {id:10,name:'Item 10'},
//                 {id:1,name:' second Item 1'},
//         {id:2,name:'Item 2'},
//         {id:3,name:'Item 3'},
//         {id:4,name:'Item 4'},
//         {id:5,name:'Item 5'},
//         {id:6,name:'Item 1'},
//         {id:7,name:'Item 2'},
//         {id:8,name:'Item 3'},
//         {id:9,name:'Item 4'},
//         {id:10,name:'Item 10'},
//         {id:1,name:' third Item 1'},
//         {id:2,name:'Item 2'},
//         {id:3,name:'Item 3'},
//         {id:4,name:'Item 4'},
//         {id:5,name:'Item 5'},
//         {id:6,name:'Item 1'},
//         {id:7,name:'Item 2'},
//         {id:8,name:'Item 3'},
//         {id:9,name:'Item 4'},
//         {id:10,name:'Item 10'},


//     ];
//     const itemsPage=10;
//     let currentPage=1;
//     function render(){
//         const itemList=document.getElementById('itemsList');
//         const start=(currentPage-1)*itemsPage;
//         const end=start+itemsPage;
//         const display=items.slice(start,end);
//         itemList.innerHTML='';
//         display.forEach(item=>{
//             const listItem=document.createElement('li');
//             listItem.textContent=item.name;
//             itemList.appendChild(listItem);
//         });
//     }
//     function renderPage(){
//         const pagination=document.getElementById('pagination');
//         const pageCount=Math.ceil(items.length/itemsPage);
//         pagination.innerHTML='';
//         for(let i=1;i<=pageCount;i++){
//             const pageLink=document.createElement('li');
//             pageLink.textContent=i;
//             pageLink.addEventListener('click',function(){
//                 currentPage=i;
//                 render();
//                 renderPage();
//             });
//             if(i===currentPage){
//                 pageLink.classList.add("active");
//             }
//             pagination.appendChild(pageLink);
//         }
//     }
//     render();
//     renderPage();
// })

//50.



//51.
// function debounce(call,delay){
//     let timeout;
//     return function(...args){
//         if(timeout){
//             clearTimeout(timeout)
//         }
//         timeout=setTimeout(()=>{
//             call.apply(this,args);
//         },delay);
//     };
// };
// function throttle(func,delay){
//     let last=0;
//     return function(...args){
//         const now=new Date().getTime();
//         if(now-last>=delay){
//             last=now;
//             func.apply(this,args);
//         }
//     }
// }
// const handle=()=>{
//     console.log("Debounced function",window.scrollY);
// };
//     let scrolls=debounce(handle,1000);
//     window.addEventListener('scroll',scrolls);

//     const tHandle=()=>{
//         console.log("Throttle function",window.scrollY);
//     };
//     const throttles=throttle(tHandle,5000);
//     window.addEventListener('scroll',throttles);

// 52.
// const options={
//     root:null,
//     rootMargin:'0px',
//     threshold:0.2,
// };
// const lazyload=(entries,observer)=>{
//     entries.forEach((entry)=>{
//         if(entry.isIntersecting){
//             const lazyElement=entry.target;
//             lazyElement.src=lazyElement.dataset.src;
//             lazyElement.removeAttribute('data-src');
//             observer.unobserve(lazyElement);
//         }
//     });
// };
// const observer=new IntersectionObserver(lazyload,options);
// const lazyElements=document.querySelectorAll('[data-src]');
// lazyElements.forEach((element)=>{
//     observer.observe(element);
// });

//53.
