# For question1

1- Open the project and write in the terminal **"python run.py"**, it will run on "http://127.0.0.1:5000" by default

**_I created two endpoints which are ("/add_numbers","/concatenate_strings")_**

2- Open a tool to test API endpoints e.g. **"Postman"**

3- Create a **"POST"** request on **"http://127.0.0.1:5000/add_numbers"** with sending JSON object in the body its key is "**numbers**" and value should be list of "**numbers**"

for example:
**{
    "numbers":[1,2,3,4,5]
}**

And the respond for this example will be: 
**{
    "Answer": 15
}**


4- for second endpoint Create a **"POST"** request on **"http://127.0.0.1:5000/concatenate_strings"** with sending JSON object in the body its keys are "**s1**" and "**s2**" and the values should be "**strings**"

for example:
**{
    "s1":"ahmed",
    "s2":"hossam"
}**

And the respond for this example will be: 
**{
    "Concatenated string": "ahmedhossam"
}**


---------------------------------------------------------------------------------------------------------------------------

# For question2

1- Open the project and write in the terminal **"python run.py"**, it will run on "http://127.0.0.1:5000" by default

**_I created two endpoints which are ("/register","/login")_**

2- Open a tool to test API endpoints e.g. **"Postman"**

3- for second endpoint Create a **"POST"** request on **"http://127.0.0.1:5000/register"** with sending JSON object in the body its keys are "**username**" "**password**" and the values should be "**strings**"

for example:
**{
    "username":"ahmed",
    "password":"123"
}**

And the respond for this example will be: 
**"Registered successfully"**

4- for second endpoint Create a **"POST"** request on **"http://127.0.0.1:5000/login"** with sending JSON object in the body its keys are "**username**" "**password**" and the values should be "**strings**"

_if "**username**" and "**password**" in the body are the same as in the register endpoint the result will be **"Access Granted"**_

_else the result will be "**Access Denied"**_

---------------------------------------------------------------------------------------------------------------------------
# For question3

1- Open the project and write in the terminal **"npm start"**

2- Open the localhost and write in the text fields "**the input string**" and the "**number of repetition**" of that string

3- Click on **submit button**

4- The output will be displayed in a new paragraph below the form.

---------------------------------------------------------------------------------------------------------------------------
# For question4

1- Open the project and write in the terminal **"npm start"**

2- Open the localhost and write in the text field "**the item name**"

3- Click on **submit button**

4- The items of the **todolist** will be displayed under the submit button and beside it there will be a **Delete button** if you want to delete this item

---------------------------------------------------------------------------------------------------------------------------
## I Demonstrated error handling for invalid input in each project.



