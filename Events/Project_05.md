# PROJECT 05
# COLOR CHANGING
### JavaScript
```javascript
//generate a random color

const randomColor = function(){
  const hex = "123456789ABCDEF"
  let color = '#'
  for(let i = 0; i<6; i++){
    color += hex[Math.floor(Math.random() * 16)];

  }
  return color;
};
//console.log(Math.floor(Math.random() * 16));
let intervalId
const startChangingColor =function(){
  if(!intervalId){
  intervalId = setInterval(chnageBgColor, 1000)
  }
   function chnageBgColor(){document.body.style.backgroundColor = randomColor();}
};

const stopChangingColor = function(){
  clearInterval(intervalId)
  intervalId = null;
}
document.querySelector('#start').addEventListener('click', startChangingColor);

document.querySelector('#stop').addEventListener('click', stopChangingColor);
```

### HTML
```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>Number Guessing Game</title>
  
  </head>
  <body style="background-color: #212121; color: #fff">
    <nav>
      <a href="/" aria-current="page">HOME</a>
      <a target="_blank" href="https://www.google.com"
        >GOOGLE</a
      >
    </nav>

    <h1>Start should change the Background color every second</h1>
    <button id="start">Start</button>
    <button id="stop">Stop</button>
    <script src="DOM_PRO.js"></script>
  </body>
</html>

```