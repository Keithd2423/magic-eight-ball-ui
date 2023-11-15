//create event listener
document.getElementById('askButton').addEventListener('click,'function(){ //create
    let aanswer = '':
    // generate a random number between 0 and 4 (inclusive), rounded
    let randomIndex = Math.floor(math.random() * 5);

    // use if-else-if to provie an answer based on the randomIndex
    if (randomIndex === 0) {
        answer = "it is certain.";
    } else if (randomIndex === 1) {
        answer = "Ask again later.";
    } else if (randomIndex === 2) {
        answer = "yes, definitely.";
    } else if (randomIndex === 3) {
        answer = "My reply is no.";
    } else if (randomIndex === 4) {
        answer = "I cannot predict now.";
    } else {
        answer = "very doubtful.";
    }

    //Check if a question is asked, trim method checks for a blank input
    let question = document.getElementById('question').value;
    if (question.trim () === ''){
        alert("please enter a question.");
    } else{
        document.getElementById('answer').textContent = answer;
    }
});