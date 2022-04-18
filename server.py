from flask import Flask
from flask import render_template
from flask import Response, request, jsonify
app = Flask(__name__)


#LESSON TEMPLATE DATA

#LESSON USER DATA

# ---------------------------created by Tianzhi Huang Start----------------------------------------------

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

# ---------------------------created by Tianzhi Huang End----------------------------------------------


# ROUTES
@app.route('/', methods=['GET','POST'])
def welcome(): 
    return render_template('welcome.html') #insert var here if needed


@app.route('/lesson')
def lesson():
    return render_template('lesson.html')




# ---------------------------created by Tianzhi Huang Start----------------------------------------------

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

# ---------------------------created by Tianzhi Huang End----------------------------------------------


if __name__ == '__main__':
   app.run(debug = True)




