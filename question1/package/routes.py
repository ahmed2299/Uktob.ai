from package import app
from flask import request,jsonify

@app.route('/add_numbers',methods=['GET','POST'])
def add_numbers():
    if request.method=='POST':
        keys=list(request.json.keys())
        print(keys)
        if 'numbers' in keys:
            numbers=request.json['numbers']
            if type(numbers) == list:
                sum=0
                for i in numbers:
                    if type(i)!=int:
                        if type(i)!=float:return f'The value {i} is invalid'
                        else:
                            sum+=float(i)
                            continue
                    sum+=int(i)
                return jsonify({"Answer":sum})
            else:return 'The value you enter should be a list of numbers'
        else:return 'The key should be named with "numbers"'

@app.route('/concatenate_strings',methods=['GET','POST'])
def concatenate_strings():
    if request.method == 'POST':
        keys = list(request.json.keys())
        if 's1' in keys and 's2' in keys:
            s1=request.json['s1']
            s2=request.json['s2']
            if type(s1)==str and type(s2)==str:
                return jsonify({'Concatenated string':s1+s2})
            else:return 'values of s1 and s2 should be "strings"'
        else:return 'The two string keys should be named "s1" and "s2"'




