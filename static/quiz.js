function displayQuiz(){
    //empty old data
    $("#quizCont").empty()

    
    let nextButton='<button type="button" id="nextBtn" class="btn btn-primary">Next: Home</button>'
    $("#quizCont").append(nextButton)
    //^TURN THIS INTO SUBMIT BUTTON
    
    let triButton='<button type="button" id="triBtn" class="btn btn-outline-danger">Triceps</button>'
    $("#quizCont").append(triButton)

    let pecButton='<button type="button" id="pecBtn" class="btn btn-outline-danger">Pecs</button>'
    $("#quizCont").append(pecButton)

    let deltButton='<button type="button" id="deltBtn" class="btn btn-outline-danger">Chest</button>'
    $("#quizCont").append(deltButton)

   
    
}

$(document).ready(function(){
    displayQuiz()
    $("#quizCont").on("click", "#nextBtn", function(){
        window.location.href = "/"
    })

    $("#quizCont").on("click", "#pecBtn", function(){
        //store here in jquery or flask when submit ?
    })
    $("#quizCont").on("click", "#triBtn", function(){
        //store here in jquery or flask when submit ?
    })
    $("#quizCont").on("click", "#deltBtn", function(){
        //store here in jquery or flask when submit ?
    })

})
