import numpy as np
import json
import random

from keras.models import Sequential
from keras.layers import Dense, Dropout
from keras.optimizers import SGD
import tensorflow as tf

import pickle

import nltk
nltk.download('punkt')
nltk.download('wordnet')
from nltk.stem import WordNetLemmatizer

lemmatizer = WordNetLemmatizer()

with open('D:/FFF/FFF/intents.json', 'r') as file:
    intents = json.load(file)

words = []
classes = []
documents = []
ignore = ['?', '!', ',', '.','What','How','what','how','tell','Tell','does','Does','of this app','the']

for intent in intents["intents"]:
    for pattern in intent["patterns"]:
        word_list = nltk.word_tokenize(pattern)
        words.extend(word_list)
        documents.append((word_list, intent["tag"]))
        if intent['tag'] not in classes:
            classes.append(intent['tag'])

words = [lemmatizer.lemmatize(word) for word in words if word not in ignore]
words = sorted(set(words))
classes = sorted(set(classes))

pickle.dump(words, open('D:/FFF/FFF/word.pkl', 'wb'))
pickle.dump(classes, open('D:/FFF/FFF/classes.pkl', 'wb'))

training = []
output_empty = [0]*len(classes)

for document in documents:
    bag = []
    word_patterns = document[0]
    word_patterns = [lemmatizer.lemmatize(word.lower()) for word in word_patterns]
    for word in words:
        bag.append(1 if word in word_patterns else 0) 
    
    output_row = list(output_empty)
    output_row[classes.index(document[1])] = 1
    training.append(bag + output_row)

random.shuffle(training)
training = np.array(training)

train_x = training[:,:len(words)]
train_y = training[:,len(words):]

model = Sequential()
model.add(Dense(128, input_shape=(len(train_x[0]),), activation='relu'))
model.add(Dropout(0.5))
model.add(Dense(64, activation='relu'))
model.add(Dropout(0.5))
model.add(Dense(len(train_y[0]), activation='softmax'))

sgd = SGD(learning_rate = 0.01, momentum=0.9, nesterov=True)
model.compile(loss='categorical_crossentropy', optimizer=sgd, metrics=['accuracy'])

hist = model.fit(np.array(train_x), np.array(train_y), epochs=200, batch_size=5, verbose=1)
model.save("D:/FFF/FFF/chatbotmodel.keras", hist)
print("Done")