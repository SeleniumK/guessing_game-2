var totalCorrectAnswers = 0;

var q1 = {
  question:'Q1: Is Dave bearded? (answer \'[y]es\' or \'[n]o\')',
  correctAnswer:'yes',
  submittedAnswer:'',
  answeredCorrectly:false,
  responseCorrect:'A1: Correct! You guessed that Dave is bearded. This is indeed (currently) true. <br /> <img src="img/beard.jpg">',
  responseIncorrect:'A1 Incorrect! You guessed that Dave is not bearded. This is (currently) not true.',
  answer: document.getElementById('a1')
};

var q2 = {
  question:'Q2: Is Dave, or has he ever been, a librarian? (answer \'[y]es\' or \'[n]o\')',
  correctAnswer1:'y',
  correctAnswer2:'yes',
  submittedAnswer:'',
  answeredCorrectly:false,
  responseCorrect:'A2: Correct! You guessed that Dave is or was a librarian. This is indeed true. The subject of who is or is not a librarian is one of much debate amongst librarian people. This is indicative of one of the reasons Dave no longer works as a librarian. He does, however, still consider himself to be one. He did, beyond any shadow of a doubt, used to be one. <br /> <img src="img/librarian.jpg">',
  responseIncorrect:'A2 Incorrect! You guessed that Dave is not, and has never been, a librarian. Dave was in fact a librarian and still considers himself one.',
  answer: document.getElementById('a2')
};

var q3 = {
  question:'Q3: Does Dave have cats? (answer \'[y]es\' or \'[n]o\')',
  correctAnswer1:'no',
  correctAnswer2:'n',
  submittedAnswer:'',
  answeredCorrectly:false,
  responseCorrect:'A3: Correct! You guessed that Dave does not have cats. This is true. He previously had cats, but is on a cat hiatus. Due to allergies, it\'s uncertain whether this will change. He does still indulge in the occassional cat pic. <br /> <img src="img/cat.jpg">',
  responseIncorrect:'A3: Incorrect! You guessed that Dave has cats. This is not currently true. He previously had cats, but is on a cat hiatus. Due to allergies, it\'s uncertain whether this will change.',
  answer: document.getElementById('a3')
};

var q4 = {
  question:'Q4: How old is Dave? (answer in the form of an integer)',
  correctAnswer: 43,
  submittedAnswer:'',
  answeredHighLowCorrect: '',
  responseCorrect:'A4: Correct! You guessed Dave is 43. That is correct. Sadly, 42 did not yield Dave the answer to Life, the Universe, & Everything <br /> <img src="img/oldman.jpg">',
  responseLow:'. Kind of you to say, but you have guessed low.',
  responseHigh:'. Seriously?!? You guessed high. Thanks for that. :-p',
  answer: document.getElementById('a4')
};

var q5 = {
  question:'Q5: Was Dave born in Washington? (answer \'[y]es\' or \'[n]o\')',
  correctAnswer1:'no',
  correctAnswer2:'n',
  submittedAnswer:'',
  answeredCorrectly:false,
  responseCorrect:'A5: Correct! You guessed that Dave was not born in Washington. This is true. Dave was born in New Jersey and grew up in Colorado. <br /> <img src="img/mapNJCO.png">',
  responseIncorrect:'A5! Incorrect: You guessed that Dave was born in Washington. This is not true. He was born in New Jersey, but grew up in Colorado.',
  answer: document.getElementById('a5')
};

var q6 = {
  question:'Q6: How many states has Dave lived in? (answer in the form of an integer)',
  correctAnswer: 6,
  submittedAnswer:'',
  answeredHighLowCorrect: '',
  responseCorrect:'A6: Correct! You guessed 6 states. That is correct. Dave has lived in NY, NJ, CO, CA, HI, & WA <br /> <img src="img/mapStates.png">',
  responseLow:' states. You have guessed low.',
  responseHigh:' states. You guessed high.',
  answer: document.getElementById('a6')
};

//Begin Q1 logic
var question1 = function() {
  do {
    q1.submittedAnswer = prompt(q1.question).toLowerCase();
    console.log('q1.submittedAnswer made lower case is:' + q1.submittedAnswer);
  }
  while (q1.submittedAnswer !== "y" && q1.submittedAnswer !== "yes" && q1.submittedAnswer !== "n" && q1.submittedAnswer !== "no");
  if (q1.submittedAnswer === q1.correctAnswer || q1.submittedAnswer === q1.correctAnswer.substring(0,1)) {
    q1.answeredCorrectly = true;
  }

  if (q1.answeredCorrectly) {
    totalCorrectAnswers += 1;
  }
  console.log('Q1 totalCorrectAnswers: ' + totalCorrectAnswers);
  if (q1.answeredCorrectly) {
    q1.answer.className = "correct";
    q1.answer.innerHTML = q1.responseCorrect;
  } else {
    q1.answer.className = "incorrect";
    q1.answer.innerHTML = q1.responseIncorrect;
  }
}
//End Q1 logic.

// //Begin Q2 logic
var question2 = function() {
  do {
    q2.submittedAnswer = prompt(q2.question);
    console.log('q2.submittedAnswer is:' + q2.submittedAnswer);
    q2.submittedAnswer = q2.submittedAnswer.toLowerCase();
    console.log('q2.submittedAnswer made lower case is:' + q2.submittedAnswer);
  }
  while (q2.submittedAnswer !== "y" && q2.submittedAnswer !== "yes" && q2.submittedAnswer !== "n" && q2.submittedAnswer !== "no");

  if (q2.submittedAnswer === q2.correctAnswer1 || q2.submittedAnswer === q2.correctAnswer2) {
    q2.answeredCorrectly = true;
  }

  if (q2.answeredCorrectly) {
    totalCorrectAnswers = totalCorrectAnswers + 1;
  }
  console.log('Q2 totalCorrectAnswers: ' + totalCorrectAnswers);
  if (q2.answeredCorrectly) {
    q2.answer.className = "correct";
    q2.answer.innerHTML = q2.responseCorrect;
  } else {
    q2.answer.className = "incorrect";
    q2.answer.innerHTML = q2.responseIncorrect;
  }
}
// //End Q2 logic.

// // //Begin Q3 logic
question3 = function() {
  do {
    q3.submittedAnswer = prompt(q3.question);
    console.log('q3.submittedAnswer is:' + q3.submittedAnswer);
    q3.submittedAnswer = q3.submittedAnswer.toLowerCase();
    console.log('q3.submittedAnswer made lower case is:' + q3.submittedAnswer);
  }
  while (q3.submittedAnswer !== "y" && q3.submittedAnswer !== "yes" && q3.submittedAnswer !== "n" && q3.submittedAnswer !== "no");

  if (q3.submittedAnswer === q3.correctAnswer1 || q3.submittedAnswer === q3.correctAnswer2) {
    q3.answeredCorrectly = true;
  }

  if (q3.answeredCorrectly) {
    totalCorrectAnswers = totalCorrectAnswers + 1;
  }
  console.log('Q3 totalCorrectAnswers: ' + totalCorrectAnswers);
  if (q3.answeredCorrectly) {
    q3.answer.className = "correct";
    q3.answer.innerHTML = q3.responseCorrect;
  } else {
    q3.answer.className = "incorrect";
    q3.answer.innerHTML = q3.responseIncorrect;
  }
}
// // //End Q3 logic.

// // //Begin Q4 logic
question4 = function() {
  do {
    q4.submittedAnswer = prompt(q4.question);
    console.log('q4.submittedAnswer is:' + q4.submittedAnswer);
    q4.submittedAnswer = parseInt(q4.submittedAnswer, 10)
    console.log('ParseInt of q4.submittedAnswer is: ' + q4.submittedAnswer)
  }
  while (isNaN(q4.submittedAnswer) === true);

  if (q4.submittedAnswer === q4.correctAnswer) {
    q4.answeredHighLowCorrect = 'correct';
  } else if (q4.submittedAnswer < q4.correctAnswer) {
    q4.answeredHighLowCorrect = 'low';
  } else {
    q4.answeredHighLowCorrect = 'high';
  }

  if (q4.answeredHighLowCorrect === 'correct') {
    totalCorrectAnswers = totalCorrectAnswers + 1;
  }
  console.log('Q4 totalCorrectAnswers: ' + totalCorrectAnswers);
  if (q4.answeredHighLowCorrect === 'correct') {
    q4.answer.className = "correct";
    q4.answer.innerHTML = q4.responseCorrect;
  } else if (q4.answeredHighLowCorrect === 'low') {
    q4.answer.className = "incorrect";
    q4.answer.innerHTML = 'A4: Low! You guessed that Dave is ' + q4.submittedAnswer + q4.responseLow;
  } else {
    q4.answer.className = "incorrect";
    q4.answer.innerHTML = 'A4: High! You guessed that Dave is ' + q4.submittedAnswer + q4.responseHigh;
  }
}
// // //End Q4 logic.

// // //Begin Q5 logic
question5 = function() {do {
    q5.submittedAnswer = prompt(q5.question);
    console.log('q5.submittedAnswer is:' + q5.submittedAnswer);
    q5.submittedAnswer = q5.submittedAnswer.toLowerCase();
    console.log('q5.submittedAnswer made lower case is:' + q5.submittedAnswer);
  }
  while (q5.submittedAnswer !== "y" && q5.submittedAnswer !== "yes" && q5.submittedAnswer !== "n" && q5.submittedAnswer !== "no");
  if (q5.submittedAnswer === q5.correctAnswer1 || q5.submittedAnswer === q5.correctAnswer2) {
    q5.answeredCorrectly = true;
  }

  if (q5.answeredCorrectly) {
    totalCorrectAnswers = totalCorrectAnswers + 1;
  }
  console.log('Q5 totalCorrectAnswers: ' + totalCorrectAnswers);
  if (q5.answeredCorrectly) {
    q5.answer.className = "correct";
    q5.answer.innerHTML = q5.responseCorrect;
  } else {
    q5.answer.className = "incorrect";
    q5.answer.innerHTML = q5.responseIncorrect;
  }
  }
// // //End Q5 logic.

// // //Begin Q6 logic
question6 = function() {
  do {
    q6.submittedAnswer = prompt(q6.question);
    console.log('q6.submittedAnswer is:' + q6.submittedAnswer);
    q6.submittedAnswer = parseInt(q6.submittedAnswer, 10);
    console.log('ParseInt of q6.submittedAnswer is: ' + q6.submittedAnswer)
  }
  while (isNaN(q6.submittedAnswer) === true);

  if (q6.submittedAnswer === q6.correctAnswer) {
    q6.answeredHighLowCorrect = 'correct';
  } else if (q6.submittedAnswer < q6.correctAnswer) {
    q6.answeredHighLowCorrect = 'low';
  } else {
    q6.answeredHighLowCorrect = 'high';
  }
  console.log('q6.answeredHighLowCorrect:' + q6.answeredHighLowCorrect);

  if (q6.answeredHighLowCorrect === 'correct') {
    totalCorrectAnswers = totalCorrectAnswers + 1;
  }
  console.log('Q6 totalCorrectAnswers: ' + totalCorrectAnswers);
  if (q6.answeredHighLowCorrect === 'correct') {
    q6.answer.className = "correct";
    q6.answer.innerHTML = q6.responseCorrect;
  } else if (q6.answeredHighLowCorrect === 'low') {
    q6.answer.className = "incorrect";
    q6.answer.innerHTML = 'A6: Low! You guessed that Dave has lived in ' + q6.submittedAnswer + q6.responseLow;
  } else {
    q6.answer.className = "incorrect";
    q6.answer.innerHTML = 'A6: High! You guessed that Dave has lived in ' + q6.submittedAnswer + q6.responseHigh;
  }
var correct = document.getElementById('correct');
correct.innerHTML = 'You got ' + totalCorrectAnswers + ' of 6 questions correct.';
}
// // //End Q6 logic.


question1();
setTimeout(question2, 1000);
setTimeout(question3, 1100);
setTimeout(question4, 1200);
setTimeout(question5, 1300);
setTimeout(question6, 1400);

