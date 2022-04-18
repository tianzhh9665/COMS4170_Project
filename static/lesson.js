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

   return next
    
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
})
