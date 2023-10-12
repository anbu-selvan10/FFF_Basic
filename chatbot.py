import json
import random
import pickle
import numpy as np

import nltk
nltk.download('punkt')
nltk.download('wordnet')
from nltk.stem import WordNetLemmatizer

from keras.models import load_model

from flask import Flask, request, jsonify
from flask_cors import CORS

lemmatizer = WordNetLemmatizer()

with open('D:/FFF_Final/FFF/intents.json', 'r') as file:
    intents = json.load(file)

app = Flask(__name__)
CORS(app)

words = pickle.load(open('D:/FFF_Final/word.pkl', 'rb'))
classes = pickle.load(open('D:/FFF_Final/classes.pkl', 'rb'))
model = load_model('D:/FFF_Final/chatbotmodel.keras')

def cleanup(sentence):
    sentence_words = nltk.word_tokenize(sentence)
    sentence_words = [lemmatizer.lemmatize(word) for word in sentence_words]
    return sentence_words

def bag(sentence):
    sentence_words = cleanup(sentence)
    bag = [0]*len(words)
    for w in sentence_words:
        for i,e in enumerate(words):
            if(e == w):
                bag[i] = 1
    return np.array(bag)

def predict(sentence):
    bow = bag(sentence)
    res = model.predict(np.array([bow]))[0]
    ERROR = 0.25
    results = [[i,r] for i,r in enumerate(res) if r > ERROR]
    results.sort(key=lambda x:x[1], reverse=True)
    return_list = []
    for r in results:
        return_list.append({'intent': classes[r[0]], 'prob' : str(r[1])})
    return return_list

def getResponse(intents_list, intents_json):
    tag = intents_list[0]['intent']
    listIntents = intents_json['intents']
    for i in listIntents:
        if i['tag'] == tag:
            result = random.choice(i['responses'])
            break
    return result

@app.route('/chat', methods=['POST'])
def chat():
    user_message = request.json.get('message')
    if user_message:
        ints = predict(user_message)
        bot_response = getResponse(ints, intents)
        response = {"message": bot_response}
        return jsonify(response)
    else:
        return jsonify({"error": "Invalid request"}), 400

'''
print("Lets Go")

while True:
    message = input("")
    ints = predict(message)
    res = getResponse(ints, intents)
    print(res)
'''

if __name__ == '__main__':
    app.run(debug=True, port=4000)