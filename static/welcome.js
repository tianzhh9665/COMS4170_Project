function displayWelcome(){
    //empty old data
    $("#welcomeCont").empty()

    //insert all new data


    let nextButton='<button type="button" id="nextBtn" class="btn btn-primary">Next: Lesson</button>'
    $("#welcomeCont").append(nextButton)
        

   
    
}

$(document).ready(function(){
    displayWelcome()
    //also handler for button click //
    $("#welcomeCont").on("click", "#nextBtn", function(){
        window.location.href = "/lesson"
    })

})
