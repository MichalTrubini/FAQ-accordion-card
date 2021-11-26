/* let cardQuestion = $('.item__wrapper');
let cardAnswer = $('.answer__body');

cardAnswer.hide();

cardQuestion.on('click', function(event){
    event.preventDefault();

    cardAnswer.hide();
    cardQuestion.css('font-weight', 400)
    $(this).css('font-weight', 700).next().toggle();
})

console.log(cardQuestion); */

let questionBlock = document.querySelectorAll('.card__item');

questionBlock.forEach(toggleAnswer);

function toggleAnswer(item) {

    item.addEventListener('click', function(){
        let answerThis = item.querySelector('.answer__body');
        let questionThis = item.querySelector('.question__body');

        let answerAny = document.querySelector('.answer-visible');
        let questionAny = document.querySelector('.question-selected');

        if (answerAny) answerAny.classList.remove('answer-visible');
        if (questionAny) questionAny.classList.remove('question-selected');

        if (answerThis.classList.contains('answer-visible')) {
            answerThis.classList.remove('answer-visible');
            questionThis.classList.remove('question-selected');
        }
        else {
            answerThis.classList.add('answer-visible')
            questionThis.classList.add('question-selected');
        };
    })
};

