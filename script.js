const myMap = {
    "ques1":"ans1" ,
    "ques2":"ans2"
}


function ques1() {
    var user_ans = document.getElementById("ans1").value;
    var true_ans = myMap.ques1;
    if( true_ans === user_ans) {
        document.getElementById("result_p").innerHTML = "Correct! You can advance to the next level";
        document.getElementById("next").disabled = false;
    } else {
        document.getElementById("result_p").innerHTML = "Try again!";
    }       
}