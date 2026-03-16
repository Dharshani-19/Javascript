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

