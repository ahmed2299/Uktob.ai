from package import app
from flask import request
import json

class SaveData():
    user_data={}
    def save_to_json(self):
        with open("user_data.json", "w") as file:
            json.dump(self.user_data, file)
    def read_data(self):
        try:
            f = open('user_data.json')
            data = json.load(f)
            return data
        except Exception as e:
            return None

@app.route('/register',methods=['GET','POST'])
def register():
    if request.method=='POST':
        keys = list(request.json.keys())
        print(keys)
        if "username" in keys and "password" in keys:
            save_data=SaveData()
            username=request.json['username']
            password=request.json['password']
            save_data.user_data={'username':username,'password':password}
            save_data.save_to_json()
            return 'Registered successfully'
        else:
            return 'The two key should be named with "username" and "password"'
    return "Try to register"

@app.route('/login',methods=['GET','POST'])
def login():
    if request.method=='POST':
        keys = list(request.json.keys())
        print(keys)
        if "username" in keys and "password" in keys:
            save_data=SaveData()
            data=save_data.read_data()
            if data==None:return "You should register first"
            if data["username"]==request.json['username'] and data["password"]==request.json['password']: return "Access Granted"
            else: return "Access Denied"
        else:
            return 'The two key should be named with "username" and "password"'