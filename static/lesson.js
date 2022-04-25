function displayLesson(){
    //empty old data
    $("#lessonCont").empty()

    var lessonItem = lesson;

    var next = (parseInt(lessonItem["id"])) + 1

    

    //title of lesson content
    var title_text = document.createElement('p');
    title_text.style = "font-size: 35px";
    title_text.innerHTML = "Lesson " + lessonItem["id"] + ": " + lessonItem["title"];
    document.getElementById("lessonTitle").appendChild(title_text);

    //lesson content
    var quiz_content = document.getElementById("lessonContent");
    quiz_content.appendChild(document.createElement('br'));
    content_text = document.createElement('p');
    content_text.style = "font-size: 20px";
    content_text.innerHTML = lessonItem["content"];
    
    lessonContent.appendChild(content_text);
    
    //Hands Slider
    if(next == 2) {
        var range_bar = document.createElement('input')
        range_bar.type = "range"
        range_bar.min = "1"
        range_bar.max = "30"
        range_bar.value = "15"
        range_bar.id = "rangeHand"
        $("#handSlider").prepend(range_bar)
    }

    //Elbows Slider
    if(next == 2) {
        var range_bar2 = document.createElement('input')
        range_bar2.type = "range"
        range_bar2.min = "1"
        range_bar2.max = "30"
        range_bar2.value = "15"
        range_bar2.id = "rangeElbow"
        $("#elbowSlider").prepend(range_bar2)
    }

    //back slider
    if(next == 4) {
        var range_bar3 = document.createElement('input')
        range_bar3.type = "range"
        range_bar3.min = "1"
        range_bar3.max = "30"
        range_bar3.value = "15"
        range_bar3.id = "rangeBack"
        $("#backSlider").prepend(range_bar3)
    }

    //beginning pushup form 
    if (next == 3){
        let downBut ='<button type="button" id="downBtn" >Click to see pushup going down</button>'
        $("#begPushUp").prepend(downBut)

    }

    //ending pushup form
    if (next == 5){
        let upBut ='<button type="button" id="upBtn" >Click to see pushup going up</button>'
        $("#begPushDown").prepend(upBut)
    }

    return next
}

function displayPushupBeg(){
    $("#begPushUp").empty()
    
    var down = document.createElement('img')
    down.src = "https://media.giphy.com/media/5t9IcXiBCyw60XPpGu/giphy.gif"
    down.alt = "gif of pushing down"
    begPushUp.append(down)
    
}

function displayPushupEnd(){
    $("#begPushDown").empty()
    
    var up = document.createElement('img')
    up.src = "https://images.squarespace-cdn.com/content/v1/54f9e84de4b0d13f30bba4cb/1525880695362-HKA01C1JI6WX80TQ2BSH/push+ups.gif?format=750w"
    up.alt = "gif of pushing up"
    up.height = "200px"
    begPushUp.append(up)
    
}

function displayHands(value){

    if (parseInt(value) <= 10) {
        $("#handPicture").empty()
        var photo = document.createElement('img')
        photo.src = "../photos/wide_hands.jpg"
        photo.alt = "picture of wide hands"
        handPicture.appendChild(photo)
        var photo_text = document.createElement('p')
        photo_text.innerHTML = lesson_pics["hands"]["wide"]
        handPicture.appendChild(photo_text)
    }
    if ((parseInt(value) > 10) && (parseInt(value) <= 20)) {
        $("#handPicture").empty()
        var photo = document.createElement('img')
        photo.src = "../photos/neutral_hands.jpg"
        photo.alt = "picture of neutral hands"
        handPicture.appendChild(photo)
        var photo_text = document.createElement('p')
        photo_text.innerHTML = lesson_pics["hands"]["neutral"]
        handPicture.appendChild(photo_text)
    }
    if (parseInt(value) > 20) {
        $("#handPicture").empty()
        var photo = document.createElement('img')
        photo.src = "../photos/narrow_hands.jpg"
        photo.alt = "picture of narrow hands"
        handPicture.appendChild(photo)
        var photo_text = document.createElement('p')
        photo_text.innerHTML = lesson_pics["hands"]["narrow"]
        handPicture.appendChild(photo_text)
    }
}

function displayElbows(value){
    if (parseInt(value) <= 10) {
        $("#elbowPicture").empty()
        var photo = document.createElement('img')
        photo.src = "/photos/test.jpeg"
        photo.alt = "picture of test elbows"
        elbowPicture.appendChild(photo)
        var photo_text = document.createElement('p')
        photo_text.innerHTML = lesson_pics["elbows"]["normal"]
        elbowPicture.appendChild(photo_text)
    }
    if ((parseInt(value) > 10) && (parseInt(value) <= 20)) {
        $("#elbowPicture").empty()
        var photo = document.createElement('img')
        photo.src = "../photos/wide_elbows.jpg"
        photo.alt = "picture of wide elbows"
        elbowPicture.appendChild(photo)
        var photo_text = document.createElement('p')
        photo_text.innerHTML = lesson_pics["elbows"]["wide"]
        elbowPicture.appendChild(photo_text)
    }
    if (parseInt(value) > 20) {
        $("#elbowPicture").empty()
        var photo = document.createElement('img')
        photo.src = "../photos/extrawide_elbows.jpg"
        photo.alt = "picture of extra wide elbows"
        elbowPicture.appendChild(photo)
        var photo_text = document.createElement('p')
        photo_text.innerHTML = lesson_pics["elbows"]["extrawide"]
        elbowPicture.appendChild(photo_text)
    }

}

function displayBack(value) {
    if (parseInt(value) <= 10) {
        $("#backPicture").empty()
        var photo = document.createElement('img')
        photo.src = "/photos/test.jpeg"
        photo.alt = "picture of dip back"
        backPicture.appendChild(photo)
        var photo_text = document.createElement('p')
        photo_text.innerHTML = lesson_pics["back"]["dip"]
        backPicture.appendChild(photo_text)
    }
    if ((parseInt(value) > 10) && (parseInt(value) <= 20)) {
        $("#backPicture").empty()
        var photo = document.createElement('img')
        photo.src = "../photos/normal_back.jpg"
        photo.alt = "picture of normal back"
        backPicture.appendChild(photo)
        var photo_text = document.createElement('p')
        photo_text.innerHTML = lesson_pics["back"]["normal"]
        backPicture.appendChild(photo_text)
    }
    if (parseInt(value) > 20) {
        $("#backPicture").empty()
        var photo = document.createElement('img')
        photo.src = "../photos/arch_back.jpg"
        photo.alt = "picture of extra arch back"
        backPicture.appendChild(photo)
        var photo_text = document.createElement('p')
        photo_text.innerHTML = lesson_pics["back"]["arch"]
        backPicture.appendChild(photo_text)
    }

}

    


function displayMuscles() {

}

function displayButtons(next){
    var prev = next - 2

    if (next == 5){

        //go to previous lesson
        let prevBut ='<button type="button" id="prevBtn" class="btn btn-primary">Previous Lesson</button>'
        $("#prev_lesson").append(prevBut)

        $("#prev_lesson").on("click", "#prevBtn", function(){
            
            window.location.href = "/lesson/" + prev
        })
        
        //go to quiz
        let qButton='<button type="button" id="QBtn" class="btn btn-primary">Quiz</button>'
        $("#next_button").append(qButton)

        $("#next_button").on("click", "#QBtn", function(){
            
            window.location.href = "/quizhome"
        })
    }
    else{
        //prev button
        if(prev == 0){
            let prevBut ='<button type="button" id="prevBtn" class="btn btn-primary">Home</button>'
            $("#prev_lesson").append(prevBut)
            $("#prev_lesson").on("click", "#prevBtn", function(){
            
                window.location.href = "/"
            })
        }
        else{
            let prevBut ='<button type="button" id="prevBtn" class="btn btn-primary">Previous Lesson</button>'
            $("#prev_lesson").append(prevBut)
            $("#prev_lesson").on("click", "#prevBtn", function(){
            
                window.location.href = "/lesson/" + prev
            })
        }

        //go to next lesson
        let nextLes='<button type="button" id="nextLesBtn" class="btn btn-primary">Next Lesson</button>'
        $("#next_button").append(nextLes)

        $("#next_button").on("click", "#nextLesBtn", function(){
            
            window.location.href = "/lesson/" + next
        })

    }
}

$(document).ready(function(){
    next = displayLesson()
    displayButtons(next)
    $("#rangeHand").click(function() {
        displayHands(rangeHand.value)
    })
    $("#rangeElbow").click(function() {
        displayElbows(rangeElbow.value)
    })
    $("#rangeBack").click(function() {
        displayBack(rangeBack.value)
    })
    $("#downBtn").click(function() {
        displayPushupBeg()
    })
    $("#upBtn").click(function() {
        displayPushupEnd()
    })

})
