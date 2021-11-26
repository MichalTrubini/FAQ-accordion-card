(function () {
    let questionBlock = document.querySelectorAll('.card__item');
    questionBlock.forEach(toggleAnswer);
})();

function toggleAnswer(item) {

    item.addEventListener('click', function(){
        let answerThis = item.querySelector('.answer__body');
        let questionThis = item.querySelector('.question__body');
        let arrowThis = item.querySelector('.question__arrow');

        let answerAny = document.querySelector('.answer-visible');
        let questionAny = document.querySelector('.question-selected');
        let arrowAny = document.querySelector('.arrow-up');

        answerThis.classList.toggle('answer-visible');
        questionThis.classList.toggle('question-selected');
        arrowThis.classList.toggle('arrow-up');

        if(!answerAny === answerThis) answerAny.classList.remove('answer-visible');
/*         if (answerThis.classList.contains('answer-visible')) {
            answerThis.classList.remove('answer-visible');
            questionThis.classList.remove('question-selected');
            arrowThis.classList.remove('arrow-up');
            arrowThis.classList.add('arrow-down');
        }
        else {
            if (answerAny) answerAny.classList.remove('answer-visible');
            if (questionAny) questionAny.classList.remove('question-selected');
            if (arrowAny) arrowAny.classList.remove('arrow-up');

            answerThis.classList.add('answer-visible');
            questionThis.classList.add('question-selected');
            arrowThis.classList.remove('arrow-down');
            arrowThis.classList.add('arrow-up');
        }; */
    })
};

