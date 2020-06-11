# Add Bootstrap in Angular Project

### Process 01: Add as package

> #### Step 01
Run following commands in Terminal to add Jquery, Propper and Bootstrap in project
```javascript
- npm i jquery
- npm i popper.js@1.16.0 [This package is depriciated but Bootstrap (4.5) is using this package]
- npm i bootstrap
```
--or--
```javascript
- npm i jquery popper.js@1.16.0 bootstrap 
```

This will show "added 3 packages"
```js
+ bootstrap@4.5.0
+ jquery@3.5.1
+ popper.js@1.16.0
```

> #### Step 02
Go to **angular.json** in root directory and add following code under "build" & "serve" 
```javascript
"styles": [
    "node_modules/bootstrap/scss/bootstrap.scss",
    "src/styles.scss"
],
"scripts": [
    "node_modules/jquery/dist/jquery.js",
    "node_modules/popper.js/dist/umd/popper.js",
    "node_modules/bootstrap/dist/js/bootstrap.js"
]
```
> #### Step 03
Run the project
```js
ng serve --open
```

<br>

### Process 02: Add CDN link
Go to bootstrap site copy CDN link and add to index.html file
CDN link reference:

> **CSS:**
```html
<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css" integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk" crossorigin="anonymous">
```

> **JS**
```html
<script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossorigin="anonymous"></script>
<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js" integrity="sha384-OgVRvuATP1z7JjHLkuOU7Xw704+h835Lr+6QL9UvYjZE3Ipu6Tp75j7Bh/kR0JKI" crossorigin="anonymous"></script>
```