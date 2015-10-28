  var totalCorrectAnswers = 0;

  var q1 = {
    question:'Is Dave bearded? (answer \'[y]es\' or \'[n]o\')',
    correctAnswer1:'y',
    correctAnswer2:'yes',
    submittedAnswer:'',
    answeredCorrectly:false,
    responseCorrect:'You guessed that Dave is bearded. This is indeed (currently) true.',
    responseIncorrect:'You guessed that Dave is not bearded. This is (currently) not true.'
  }

  var q2 = {
    question:'Is Dave, or has he ever been, a librarian? (answer \'[y]es\' or \'[n]o\')',
    correctAnswer1:'y',
    correctAnswer2:'yes',
    submittedAnswer:'',
    answeredCorrectly:false,
    responseCorrect:'You guessed that Dave is or was a librarian. This is indeed true. The subject of who is or is not a librarian is one of much debate amongst librarian people. This is indicative of one of the reasons Dave no longer works as a librarian. He does, however, still consider himself to be one. He did, beyond any shadow of a doubt, used to be one.',
    responseIncorrect:'You guessed that Dave is not, and has never been, a librarian. Dave was in fact a librarian and still considers himself one.'
  }

  var q3 = {
    question:'Does Dave have cats? (answer \'[y]es\' or \'[n]o\')',
    correctAnswer1:'no',
    correctAnswer2:'n',
    submittedAnswer:'',
    answeredCorrectly:false,
    responseCorrect:'You guessed that Dave does not have cats. This is true. He previously had cats, but is on a cat hiatus. Due to allergies, it\'s uncertain whether this will change. He does still indulge in the occassional cat pic.',
    responseIncorrect:'You guessed that Dave has cats. This is not currently true. He previously had cats, but is on a cat hiatus. Due to allergies, it\'s uncertain whether this will change.'
  }

  var q4 = {
    question:'How old is Dave? (answer in the form of an integer)',
    correctAnswer: 43,
    submittedAnswer:'',
    answeredHighLowCorrect: '',
    responseCorrect:'You guessed Dave is 43. That is correct. Sadly, 42 did not yield Dave the answer to Life, the Universe, & Everything',
    responseLow:'. Kind of you to say, but you have guessed low.',
    responseHigh:'. Seriously?!? You guessed high. Thanks for that. :-p'
  }

    var q5 = {
    question:'Was dave born in Washington? (answer \'[y]es\' or \'[n]o\')',
    correctAnswer1:'no',
    correctAnswer2:'n',
    submittedAnswer:'',
    answeredCorrectly:false,
    responseCorrect:'You guessed that Dave was not born in Washington. This is true. Dave was born in New Jersey and grew up in Colorado.',
    responseIncorrect:'You guessed that Dave was born in Washington. This is not true. He was born in New Jersey, but gre up in Colorado.'
  }

  //Begin Q1 logic
  //I really wanted to make the below a method of the q1 (and subsequent) object(s), but I've run out of mental energy for the evening.
  do {
    q1.submittedAnswer = prompt(q1.question);
    console.log('q1.submittedAnswer is:' + q1.submittedAnswer);
    q1.submittedAnswer = q1.submittedAnswer.toLowerCase();
    console.log('q1.submittedAnswer made lower case is:' + q1.submittedAnswer);
  }
  while (q1.submittedAnswer !== "y" && q1.submittedAnswer !== "yes" && q1.submittedAnswer !== "n" && q1.submittedAnswer !== "no");
  //while (q1.submittedAnswer.toLowerCase() !== ("yes" || "y" || "n" || "no");
  if (q1.submittedAnswer.toLowerCase() === q1.correctAnswer1 || q1.submittedAnswer.toLowerCase() === q1.correctAnswer2) {
    q1.answeredCorrectly = true;
  }

  if (q1.answeredCorrectly) {
    totalCorrectAnswers = totalCorrectAnswers + 1;
  }
  console.log('Q1 totalCorrectAnswers: ' + totalCorrectAnswers);

  //End Q1 logic. Begin the cutting and pasting, in lieu of a cool method.

  //Begin Q2 logic
  //Damn, I wish I'd had the energy to get jiggy with methods and loops
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

  //End Q2 logic.

  //Begin Q3 logic
  //Onward and upward!! I sense pizza, the couch, and the readings in my near future.
  do {
    q3.submittedAnswer = prompt(q3.question);
    console.log('q3.submittedAnswer is:' + q3.submittedAnswer);
    q3.submittedAnswer = q3.submittedAnswer.toLowerCase();
    console.log('q3.submittedAnswer made lower case is:' + q3.submittedAnswer);
  }
  while (q3.submittedAnswer !== "y" && q3.submittedAnswer !== "yes" && q3.submittedAnswer !== "n" && q3.submittedAnswer !== "no");

  if (q3.submittedAnswer === q3.correctAnswer1 || q3.correctAnswer2) {
    q3.answeredCorrectly = true;
  }

  if (q3.answeredCorrectly) {
    totalCorrectAnswers = totalCorrectAnswers + 1;
  }
  console.log('Q3 totalCorrectAnswers: ' + totalCorrectAnswers);

  //End Q3 logic.

  //Begin Q4 logic
  //And now it gets personal.
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

  //End Q4 logic.

  //Begin Q5 logic
  //Yeah... So, now I really wish I'd gone with putting my logic in a method, then just looped through it. C'est la vie... I'm go back and retrofit it, but I'm trying to maintain a life outside of CF. Trying...
  do {
    q5.submittedAnswer = prompt(q5.question);
    console.log('q5.submittedAnswer is:' + q5.submittedAnswer);
    q5.submittedAnswer = q5.submittedAnswer.toLowerCase();
    console.log('q5.submittedAnswer made lower case is:' + q5.submittedAnswer);
  }
  while (q5.submittedAnswer !== "y" && q5.submittedAnswer !== "yes" && q5.submittedAnswer !== "n" && q5.submittedAnswer !== "no");
  if (q5.submittedAnswer.toLowerCase() === q5.correctAnswer1 || q5.submittedAnswer.toLowerCase() === q5.correctAnswer2) {
    q5.answeredCorrectly = true;
  }

  if (q5.answeredCorrectly) {
    totalCorrectAnswers = totalCorrectAnswers + 1;
  }
  console.log('Q5 totalCorrectAnswers: ' + totalCorrectAnswers);
  //End Q5 logic. Begin the cutting and pasting, in lieu of a cool method.

  if (q1.answeredCorrectly) {
    alert(q1.responseCorrect);
  } else {
    alert(q1.responseIncorrect);
  }

  if (q2.answeredCorrectly) {
    alert(q2.responseCorrect);
  } else {
    alert(q2.responseIncorrect);
  }

  if (q3.answeredCorrectly) {
    alert(q3.responseCorrect);
  } else {
    alert(q3.responseIncorrect);
  }

  if (q4.answeredHighLowCorrect === 'correct') {
    alert(q4.responseCorrect);
  } else if (q4.answeredHighLowCorrect === 'low') {
    alert('You guessed that dave is ' + q4.submittedAnswer + q4.responseLow);
  } else {
    alert('You guessed that dave is ' + q4.submittedAnswer + q4.responseHigh);
  }

  if (q5.answeredCorrectly) {
    alert(q5.responseCorrect);
  } else {
    alert(q5.responseIncorrect);
  }

  alert('You got ' + totalCorrectAnswers + ' of 5 questions correct.');
