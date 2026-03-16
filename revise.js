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