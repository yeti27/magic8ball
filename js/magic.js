let answers =  ['It is certain', 'It is decidedly so', 'Without a doubt', 'Yes -- definitely', 'You may rely on it', 'As I see it, yes', 'Most likely', 'Outlook good', 'Yes, Signs point to yes', 'Reply hazy', 'try again', 'Ask again later', 'Better not tell you now', 'Cannot predict now', 'Concentrate and ask again', 'Dont count on it', 'My reply is no', 'My sources say no', 'Outlook not so good', 'Very doubtful'];


window.onload = function() {
let eight = document.getElementById("eight");
let answer = document.getElementById("answer");
let ask = document.getElementById("Ask");
let question = document.getElementById("question");


ask.addEventListener("click", function() {
if (question.value.length == 0) {
alert('Enter a question!');
    }
 else {
    eight.innerText = "";
    let num = Math.floor(Math.random() * Math.floor(answers.length));
    answer.innerText = answers[num];
    
     }
  });
};


 