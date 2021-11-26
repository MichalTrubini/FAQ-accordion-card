let cardQuestion = $('.item__wrapper');
let cardAnswer = $('.answer__body');

cardAnswer.hide();

cardQuestion.on('click', function(event){
    event.preventDefault();

    cardAnswer.hide();
    cardQuestion.css('font-weight', 400)
    $(this).css('font-weight', 700).next().toggle();
})

console.log(cardQuestion);