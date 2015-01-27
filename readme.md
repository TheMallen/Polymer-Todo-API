POLYMER TODO:
=============

A Polymer todo app built on top of a node.js api.

Made for learning! :)

Maybe I'll make a tutorial later.


WHAT WORKS
-----------
- api works
- todo-service element grabs json from api
- todo-list grabs json data from todo-service
- Can create new TODOs and mark them as done
- Can delete TODOS

Installing
-----------
- install nodejs, npm, git, bower
    - if you want to have an easy time installing this stuff try [Chocolatey](https://chocolatey.org/). 
    - if you have chocolatey just use `choco install git`, `choco install nodejs`, `choco install npm`, `choco install git`, `npm install -g bower`
    - alternatively you can try [OneGet](https://github.com/OneGet/oneget), which will be a standard windows service as of windows 10. 
- clone the repository
- run `npm install` and `bower install` on your console in the cloned directory
- run `npm run start` 
- navigate to `http://localhost:3000` to use the app's front end
- use postman to interact with the api at `http://localhost:3000/api/todoItems`

If any of that is confusing, let me know or do the googles. :)
