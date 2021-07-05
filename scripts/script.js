//Add  key-value pairs according to need
const myMap = {
    "ques1":"yourname" ,
    "ques2":"ans2"
}

function checkAnswer(user_ans ,true_ans) {
    if( true_ans === user_ans) {
        document.getElementById("result_p").innerHTML = "Correct! You can advance to the next level";
        document.getElementById("next").disabled = false;
    } else {
        document.getElementById("result_p").innerHTML = "Try again!";
    }  

}

function ques1() {
    var user_ans = document.getElementById("ans1").value;
    var true_ans = myMap.ques1; //edit here
    checkAnswer(user_ans , true_ans);
     
}

function ques2() { //edit here
    var user_ans = document.getElementById("ans2").value; //edit here
    var true_ans = myMap.ques2
    checkAnswer(user_ans,true_ans); //edit here
}