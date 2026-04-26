# Project 01 Related To DOM

# On Click Color Change

### HTML
```HTML
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="DOM_PRO.CSS">
</head>
<div>
    <nav>
        <a href="/" aria-current="page">HOME</a>
        <a href="https://www.google.com" target="_blank">YOUTUBE CHANNEL</a>
    </nav>

<div class="canvas"></div>
    <h1> Color scheme swicher</h1>
    <span class = "button" id = "green"></span>
    <span class = "button" id = "grey"></span>
    <span class = "button" id = "red"></span>
    <span class = "button" id = "blue"></span>

    <h2>TRY CLICKING ON ONE OF THE COLORS ABOVE
    <span>to change the background color of this page! </span>
    </h2>

</div>
<script src="DOM_PRO.js"></script>
</body>
</html>
```
### CSS
```css
/* Reset default spacing */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

/* Body styling */
body {
    font-family: Arial, sans-serif;
    text-align: center;
    transition: background-color 0.3s ease;
}

/* Navbar */
nav {
    background-color: #222;
    padding: 15px;
}

nav a {
    color: white;
    text-decoration: none;
    margin: 0 15px;
    font-weight: bold;
}

nav a:hover {
    text-decoration: underline;
}

/* Main container */
div {
    margin-top: 40px;
}

/* Heading */
h1 {
    margin-bottom: 20px;
}

/* Color buttons container spacing */
.button {
    display: inline-block;
    width: 80px;
    height: 80px;
    margin: 10px;
    border-radius: 10px;
    cursor: pointer;
    border: 2px solid black;
}

/* Individual colors */
#green {
    background-color: green;
}

#grey {
    background-color: grey;
}

#red {
    background-color: red;
}

#blue {
    background-color: blue;
}

/* Hover effect */
.button:hover {
    transform: scale(1.1);
    transition: 0.2s;
}

/* Instruction text */
h2 {
    margin-top: 20px;
    font-size: 18px;
}

```

### JAVASCRIPT
```javascript
console.log("sudhanshu")
const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body')


buttons.forEach(function (button) {
    console.log(button);
    button.addEventListener('click', function (e){
        console.log(e);
        console.log(e.target);
        if (e.target.id === 'grey'){
            body.style.backgroundColor = e.target.id;
        }
        if (e.target.id === 'blue'){
            body.style.backgroundColor = e.target.id;
        }
        if (e.target.id === 'red'){
            body.style.backgroundColor = e.target.id;
        }
        if (e.target.id === 'green'){
            body.style.backgroundColor = e.target.id;
        }
        
    });
    
});
```