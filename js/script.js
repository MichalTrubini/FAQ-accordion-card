(function () {
    let questionBlock = document.querySelectorAll('.card__item');
    questionBlock.forEach(toggleAnswer);
})();

function toggleAnswer(item) {

    item.addEventListener('click', function(){

        let currentAnswer = item.querySelector('.answer__body');
        let currentQuestion = item.querySelector('.question__body');
        let currentArrow = item.querySelector('.question__arrow');

        let prevAnswerVisible = document.querySelector('.answer-visible');
        let prevQuestionVisible = document.querySelector('.question-selected');
        let prevArrow = document.querySelector('.arrow-up');
        
        if (prevAnswerVisible && (prevAnswerVisible.getAttribute('data-selected') !== currentAnswer.getAttribute('data-selected'))) {
            prevAnswerVisible.classList.remove('answer-visible');
            prevQuestionVisible.classList.remove('question-selected');
            prevArrow.classList.remove('arrow-up');
        }
        
        currentAnswer.classList.toggle('answer-visible');
        currentQuestion.classList.toggle('question-selected');
        currentArrow.classList.toggle('arrow-up');
    })
};

