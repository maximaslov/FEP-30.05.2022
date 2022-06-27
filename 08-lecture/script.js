// Реализовать опросник для пользователя,
// Задать ему, с помощью модальных окон, несколько вопросов и оценить его ответы.
// За правильный ответ начисляется 10 очков, за неправильный или отказ от ответа - 0.
// После прохода всех вопросов вывести, с помощью alert, результат.

// 'Сколько будет 2+2?'
// 'Солнце встает на востоке?'
// 'Сколько будет 5 / 0?' - ответ Infinity
// 'Какого цвета небо?' - ответ голубого
// 'Как правильный ответ на «Главный вопрос жизни, вселенной и всего такого»' - ответ 42

const RIGHT_ANSWER = 1;
const WRONG_ANSWER = 0;
const quiz = [
    {
        question: 'Сколько будет 2+2?',
        answer: '4',
        getAnswer: getStringAnswer,
    },
    {
        question: 'Солнце встает на востоке?',
        answer: true,
        getAnswer: getBooleanAnswer,
    },
];

console.log(runQuiz(quiz));





function runQuiz(quiz) {
    let score = 0;

    for (const quizItem of quiz) {
      score += getAnswer(quizItem) === quizItem.answer ? RIGHT_ANSWER : WRONG_ANSWER;
    }
  
    return score;
}

function getAnswer(quizItem) {
    return quizItem.getAnswer(quizItem.question);
}

function getStringAnswer(question) {
    const answer = prompt(question);

    return answer ? answer.toLowerCase() : '';
}

function getBooleanAnswer(question) {
    return confirm(question);
}