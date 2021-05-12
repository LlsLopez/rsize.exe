/*
var s1 = document.getElementById("s1");
var s2 = document.getElementById("s2");
var s3 = document.getElementById("s3");
var s4 = document.getElementById("s4");
var s5 = document.getElementById("s5");
var s6 = document.getElementById("s6");
var s7 = document.getElementById("s7");
var s8 = document.getElementById("s8");
var s9 = document.getElementById("s9");
var s10 = document.getElementById("s10");
var s11 = document.getElementById("s11");
var s12 = document.getElementById("s12");
var s13 = document.getElementById("s13");
var s14 = document.getElementById("s14");
var s15 = document.getElementById("s15");
var s16 = document.getElementById("s16");

exercises = ["empty","1","2","3","4","5","6","7","8","9","10",
"11","12","13","14","15","16","17"];


selectNum = 16;
pageNum = 0;

s1.innerHTML = exercises[pageNum * 16 + 1];
s2.innerHTML = exercises[pageNum * 16 + 2];
s3.innerHTML = exercises[pageNum * 16 + 3];
s4.innerHTML = exercises[pageNum * 16 + 4];
s5.innerHTML = exercises[pageNum * 16 + 5];
s6.innerHTML = exercises[pageNum * 16 + 6];
s7.innerHTML = exercises[pageNum * 16 + 7];
s8.innerHTML = exercises[pageNum * 16 + 8];
s9.innerHTML = exercises[pageNum * 16 + 9];
s10.innerHTML = exercises[pageNum * 16 + 10];
s11.innerHTML = exercises[pageNum * 16 + 11];
s12.innerHTML = exercises[pageNum * 16 + 12];
s13.innerHTML = exercises[pageNum * 16 + 13];
s14.innerHTML = exercises[pageNum * 16 + 14];
s15.innerHTML = exercises[pageNum * 16 + 15];
s16.innerHTML = exercises[pageNum * 16 + 16];
*/

const selectContainer = document.querySelector("#c2");
sChoice = "Core"; // test example , replace w/ selection box
let choices1 = [];
function fillSelections(doc)
{
    let choice = document.createElement('span');

    let name = document.createElement('span');

    choice.setAttribute("dataId",doc.id);
    name.textContent = doc.data().name;

    choice.appendChild(name);

    selectContainer.appendChild(choice);

    name.addEventListener('click',(event) => {
        event.stopPropagation();
        console.log(name.textContent);
        choices1.push(name.textContent);
        console.log(choices1);

        document.getElementById("status_details").innerHTML ="added " + name.textContent;
    })



}



db.collection('Exercises').get().then((snapshot)=>{
    snapshot.docs.forEach(doc => {

        if(sChoice == doc.data().type)
        {
            fillSelections(doc);
        }

    })
} );





