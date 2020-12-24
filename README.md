# ExpressJS Starter App

This application intent is to be used during NGINX configuration on the server, it is quick and dirty and it is not ment to be changed of over time.

Following set of commands is used to create this repo. 

```bash
  $  npm init -f
  $  npm install express moment --save
  $  npm start
  $  npm start -- Zeka
  $  npm start -- Rabbit
  $  git init 
  $  git add .
  $  git commit -m "First and last commit"
  $  git remote add origin https://github.com/nicewaytodoit/expressjs-starter-app.git
  $  git push -u origin master
```

Check application with `http://localhost:3000/` in case application was run with `npm start -- Rabbit` result screen will show something like:

> Hello World ExpressJS: App **"Rabbit"** : 24/12/2020 17:26

This is useful for testing multiple configurations for `PM2` or `forever` continuous process manager runners.

## Ugh it it not last commit 
I need to commit these changes of README.md file. :)

Thank you,
