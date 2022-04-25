from flask import Flask
from flask import render_template
from flask import Response, request, jsonify
app = Flask(__name__)


#LESSON TEMPLATE DATA
lesson_data = {
    "1": {
        "id": 1,
        "title": "Setup",
        "content": "Hands should be slightly outside shoulder-width apart at chest level. Feet should be hip-width apart and parallel to each other—not turned inward or outward. Hips should be in line with the shoulders, and the lower back should have a neutral curve—not completely flat, but not overly curved either. To assist with keeping proper lower back alignment, slim your waistline by trying to pull your belly button in and tightening your abdominal muscles. The head should be positioned so the ears are in line with the shoulders. They should not drop down toward the floor or looking up in front of the body."
    },
    "2": {
        "id": 2,
        "title": "Beginning",
        "content": "Engage the core (belly button to spine and tighten abdominals). Squeeze the glutes. Keeping pressure through the hands, bend the elbows to lower the chest, hips, and head toward the ground- together as one."
    },
    "3": {
        "id": 3,
        "title": "Middle",
        "content": "Get as close to the floor or wall as possible (nose, chest and belly button should be at the same level/height). Continue to squeeze the glutes and engage the core. Keep constant pressure through the hands into the floor."
    },
    "4": {
        "id": 4,
        "title": "End",
        "content": "Engage the pectorals and imagine you're pushing the ground away from you. Keep your energy focused in your core and NOT in your toes. Continue to push up, ending, and at available range of motion in the arms while engaging your triceps."
    }
}

# dict recording user's answer of each question
user_answers = {}

# quiz question detail information
quiz_data = {
    "1": {
        "id": 1,
        "content": "What do you notice is different about this and your pushup based on triceps?",
        "options": {1: "Shoulder and Elbow Angle", 2: "Feet", 3: "Stomach", 4: "Other"},
        "correct_answer": 1,
        "is_answered": 0,
        "user_answer": 0,
        "result": ""
    },
    "2": {
        "id": 2,
        "content": "What do you notice is different about this and your pushup based on delts?",
        "options": {1: "Shoulder Tension", 2: "Head Angle", 3: "Hand Angle", 4: "Other"},
        "correct_answer": 2,
        "is_answered": 0,
        "user_answer": 0,
        "result": ""
    },
    "3": {
        "id": 3,
        "content": "What do you notice is different about this and your pushup based on pecs?",
        "options": {1: "Shoulder and Elbow Angle", 2: "Hand Angle", 3: "Shoulder Tension", 4: "Other"},
        "correct_answer": 2,
        "is_answered": 0,
        "user_answer": 0,
        "result": ""
    }
}

# recording how many questions the user answers correctly
correct_answer_count = 0

# recording the pending quiz id
current_quiz_id = 1

# ROUTES
@app.route('/', methods=['GET','POST'])
def welcome(): 
    return render_template('welcome.html') #insert var here if needed
    
@app.route('/lesson/<id>')
def lesson(id=None):
    global lesson_data

    lesson = lesson_data[str(id)]


    return render_template('lesson.html', lesson = lesson)


# quiz home page route
@app.route('/quizhome')
def quiz_home():
    return render_template('quizhome.html')

# quiz page route
@app.route('/quiz/<id>')
def quiz(id=None):

    global quiz_data
    global correct_answer_count
    global current_quiz_id
    
    quiz = quiz_data[str(id)]
    total = len(quiz_data)
    
    return render_template('quiz.html',quiz=quiz, total=total)

# submit quiz answer and record the answer
@app.route('/grade', methods=['POST'])
def grade():
    global quiz_data
    global correct_answer_count
    global current_quiz_id
    global user_answers

    request_data = request.get_json()
    quiz_id = int(request_data["quiz_id"])
    user_answer = int(request_data["user_answer"])
    current_quiz_id = quiz_id + 1
    result = ""

    if user_answer == quiz_data[str(quiz_id)]["correct_answer"]:
        result = "Congratulation, You got the correct answer! Click next to proceed to the next question."
        quiz_data[str(quiz_id)]["result"] = result
        correct_answer_count += 1
    else:
        result = "You are almost there! The correct answer is [" + quiz_data[str(quiz_id)]["options"][quiz_data[str(quiz_id)]["correct_answer"]] + "]. Click next to proceed to the next question."
        quiz_data[str(quiz_id)]["result"] = result

    quiz_data[str(quiz_id)]["is_answered"] = 1
    quiz_data[str(quiz_id)]["user_answer"] = user_answer
    user_answers[str(quiz_id)] = user_answer

    return jsonify(result=result)

# restart the whole quiz
@app.route('/restart', methods=['GET'])
def restart():
    global quiz_data
    global correct_answer_count
    global current_quiz_id
    global user_answers

    correct_answer_count = 0
    current_quiz_id = 1
    user_answers.clear()
    for id, value in quiz_data.items():
        value["is_answered"] = 0
        value["user_answer"] = 0
        value["result"] = ""

    return jsonify(code=200)

# retrive the pending quiz id
@app.route('/getPendingQuizId', methods=['GET'])
def getPendingQuizId():
    
    global current_quiz_id
    global quiz_data

    if current_quiz_id > len(quiz_data):
        return jsonify(id=-1)

    return jsonify(id=current_quiz_id)

# retrive the overall score        
@app.route('/score')
def score():
    global quiz_data
    global correct_answer_count

    score = correct_answer_count
    total = len(quiz_data)
    
    return render_template('score.html',score=score, total=total) #insert var here if needed

if __name__ == '__main__':
   app.run(debug = True)


'''
UI HW12

1 Core https://youtu.be/yACNIpMQmSg 
other options: neck, glutes, tricep

2 Glutes https://youtu.be/OwW8XbO1sUg 
other options: hands, feet, shoulders, deltoids

3 Pectorals https://youtu.be/fUlbA4BzY-o 
other options: feet, shoulders, neck, hands

4 Hands https://youtu.be/6CvZttW86CU 
other options: shoulders, glutes, deltoids

Choosing wrong choice (just shows why it is not the answer, kinda)
-hands leads to: image popup (or anything similar, i put all these screenshots on imgur, but I’m not sure if you can jquery src using these url’s) https://imgur.com/a/MAjB6Sc 
-shoulders, abs, glutes lead to: https://imgur.com/a/9xAwVth 
-pectorals leads to: https://imgur.com/a/ZwT5PYf
The numbered ones are the correct answers, and it shows a video showing someone neglecting an issue there. 
The other options are the “multiple choice misdirection dud choices,” and to make it interactive, choosing t
he dud answers can lead to specific image links that are supposed to teach correctly. 
The simplest implementation would be just to turn the imgur links into popup ones. Hopefully you 
shouldn’t have to change much else
'''

