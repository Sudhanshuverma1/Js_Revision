# Project 02
## BMI Calculator

### Java Script


```javascript
const form = document.querySelector('form');
form.addEventListener('submit', function (e) {
    e.preventDefault();

    const height = parseInt(document.querySelector('#height').value);
    const weight = parseInt(document.querySelector('#weight').value);
    const results = document.querySelector('#results');

    if ( height === '' || height <0 || isNaN(height)) {
        results.innerHTML=`Please give a valid Height ${height}`;
    }
    else if (weight === '' || weight < 0 || isNaN(weight)) {
        results.innerHTML=`Please give a valid weight ${weight}`;
    }
    else{
        const bmi = (weight / ((height * height) / 10000)).toFixed(2);
        //results.innerHTML = `<span>${bmi}</span>`;
        let category = '';

        if (bmi < 18.6) {
        category = 'Under Weight';
        } else if (bmi >= 18.6 && bmi <= 24.9) {
        category = 'Normal Range';
        } else {
        category = 'Overweight';
        }

    results.innerHTML = `
        <h3>Your BMI: ${bmi}</h3>
        <h4>Category: ${category}</h4>

        <div style="margin-top:15px; font-size:14px;">
            <p><strong>BMI Weight Guide</strong></p>
            <p>Under Weight = Less than 18.6</p>
            <p>Normal Range = 18.6 and 24.9</p>
            <p>Overweight = Greater than 24.9</p>
        </div>
    `;
}
        
    }
);
```

### HTML
```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <link rel="stylesheet" href="DOM_PRO.CSS" />
    <!-- <link rel="stylesheet" href="../styles.css" /> -->
    <title>BMI Calculator</title>
  </head>
  <body>
    <nav>
      <a href="/" aria-current="page">Home</a>
      <a target="_blank" href="https://www.youtube.com"
        >GOOGLE</a
      >
    </nav>
    <div class="container">
      <h1>BMI Calculator</h1>
      <form>
        <p><label>Height in CM: </label><input type="text" id="height" /></p>
        <p><label>Weight in KG: </label><input type="text" id="weight" /></p>
        <button>Calculate</button>
        <div id="results"></div>
        <!-- <div id="weight-guide">
          <h3>BMI Weight Guide</h3>
          <p>Under Weight = Less than 18.6</p>
          <p>Normal Range = 18.6 and 24.9</p>
          <p>Overweight = Greater than 24.9</p>
        </div> -->
      </form>
    </div>
     <script src="DOM_PRO.js"></script>
  </body>
 
</html>
```
### CSS
```CSS
/* Reset */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

/* Body */
body {
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  background: linear-gradient(135deg, #667eea, #764ba2);
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

/* Main Container */
.container {
  width: 400px;
  padding: 30px;
  border-radius: 15px;
  background: #ffffff;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
  text-align: center;
}

/* Heading */
h1 {
  margin-bottom: 20px;
  color: #333;
}

/* Input Fields */
#height,
#weight {
  width: 100%;
  height: 40px;
  margin-top: 15px;
  padding: 8px;
  border-radius: 8px;
  border: 1px solid #ccc;
  font-size: 16px;
  transition: 0.3s;
}

#height:focus,
#weight:focus {
  border-color: #667eea;
  outline: none;
  box-shadow: 0 0 5px rgba(102, 126, 234, 0.5);
}

/* Button */
button {
  width: 100%;
  height: 45px;
  margin-top: 20px;
  background: #667eea;
  border: none;
  border-radius: 8px;
  color: white;
  font-size: 18px;
  cursor: pointer;
  transition: 0.3s;
}

button:hover {
  background: #5a67d8;
  transform: scale(1.05);
}

/* Result Text */
#results {
  font-size: 28px;
  margin-top: 20px;
  color: #333;
  font-weight: bold;
}

/* Guide Section */
#weight-guide {
  margin-top: 20px;
  text-align: left;
  font-size: 14px;
  color: #555;
}

/* Responsive */
@media (max-width: 500px) {
  .container {
    width: 90%;
  }
}

nav {
  position: fixed;   /* sticks it to screen */
  top: 0;            /* top position */
  left: 0;
  width: 100%;       /* full width */
  background-color: #222;
  padding: 15px 0;
  text-align: center;
  z-index: 1000;     /* keeps it above other elements */
}

/* Navbar links */
nav a {
  color: white;
  text-decoration: none;
  margin: 0 20px;
  font-size: 18px;
  font-weight: bold;
}

nav a:hover {
  color: #667eea;
}
```