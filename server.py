from flask import Flask
from flask import render_template
from flask import Response, request, jsonify
app = Flask(__name__)


#LESSON TEMPLATE DATA

#LESSON USER DATA


#QUIZ TEMPLATE DATA
review_data = {'triceps':'triceps review','delts':'delts review','pecs':'pecs review'}

#QUIZ USER DATA
quiz_wrong_stack =[] #store here from grade_quiz




# ROUTES
@app.route('/', methods=['GET','POST'])
def welcome(): 
    return render_template('welcome.html') #insert var here if needed


@app.route('/lesson')
def lesson():
    return render_template('lesson.html')

@app.route('/quiz')
def quiz():
    return render_template('quiz.html') #insert var here if needed
#we need to keep track of what they clicked in the quiz, send to grade_quiz, which will..
#..redirect to review, which template will fill out with a quiz relevant to what they got..
#..wrong (in a stack fashion) and when they get it perfect or this quiz<->review happens..
#..3 times, we show scorescreen

@app.route('/review')
def review():
    return render_template('review.html') #insert var here if needed

@app.route('/grade_quiz', methods=['GET','POST'])
def grade_quiz(ID=None):
    '''
    global data
    json_data = request.get_json()   
    editEntry = json_data['data']
    editEntry['tags']=(editEntry['tags']).split(",")
    editEntry['similar']=(editEntry['similar']).split(",")
    i=0
    for dic in data:
        #print("check1 ", type(dic['id']), type(editEntry['id']))
        if dic['id'] == editEntry['id']:
            print(data)
            data[i] = editEntry
        i+=1
    return jsonify(data=data)
    '''
    pass

@app.route('/score')
def score():
    return render_template('score.html') #insert var here if needed


if __name__ == '__main__':
   app.run(debug = True)




