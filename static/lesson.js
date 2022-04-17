function displayLesson(){
    //empty old data
    $("#lessonCont").empty()

    //insert all new data
    let nextButton='<button type="button" id="nextBtn" class="btn btn-primary">Next: Quiz</button>'
    $("#lessonCont").append(nextButton)
        

   
    
}

$(document).ready(function(){
    displayLesson()
    //also handler for button click //
    $("#lessonCont").on("click", "#nextBtn", function(){
        window.location.href = "/quiz"
    })

})
