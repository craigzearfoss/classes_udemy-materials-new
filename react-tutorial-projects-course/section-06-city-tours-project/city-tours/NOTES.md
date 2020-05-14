# City Tours Project
```
create-react-app city-tours
cd city-tours
npm install node-sass --save
```
- Change .css files to .scss
- Go to https://fonts.google.com/ and get the link for Open Sans
```
<link href="https://fonts.googleapis.com/css?family=Open+Sans&display=swap" rel="stylesheet">
```

## Deployng to Netlify
### 1. Drag and Drop
```
npm run build
```
- Drag the build folder to Netlify.

### 2. Continuous Deploy
```
git init
git add .
git commit -m "initial commit"
#add remote url from github
git push -u origin master
```
- Login to Netlify and select the project from Github.