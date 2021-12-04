function score(){

    var q1 = document.triviaq.q1.value;
    var q2 = document.triviaq.q2.value;
    var q3 = document.triviaq.q3.value;
    var q4 = document.triviaq.q4.value;
    var q5 = document.triviaq.q5.value;
    var correct = 0;
    
    
    if (q1 == "C") {
        correct++;
    }
    if (q2 == "B") {
        correct++
    }
    if (q3 == "A") {
        correct++
    }
    if (q4 == "B") {
        correct++
    }
    if (q5 == "D") {
        correct++
    }
    
    document.getElementById("submit").style.visibility = "visible";
    document.getElementById("correct").innerHTML = "You got" + " " + correct + " " + "correct.";
    }


