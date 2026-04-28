```plaintext
# What is Asynchronous JavaScript?
▫️ Asynchronous JavaScript allows tasks to run in the background without blocking the main execution of the program.

⚡ Simple Understanding

👉 JavaScript is single-threaded (one task at a time)
👉 But with async → it handles multiple tasks smartly

✔️ Doesn’t wait
✔️ Doesn’t block UI
✔️ Keeps app fast

------ Real-Life Example
👉 Ordering food

▫️You order → (request sent)
▫️You don’t stand in kitchen ❌
▫️You sit & do other work ✅
▫️Food arrives later

That’s async behavior
```
### Example -
```javascript
console.log("Start");

setTimeout(() => {
  console.log("Async Task");
}, 2000);

console.log("End");
```
### Output - 
```plaintext
Start
End
Async Task
```

### Synchronous ----
```plaintext
Synchronous = code runs line by line, one task at a time

✔️ Waits for each step to finish
❌ Can block execution
```
#### Example
```javascript
console.log("Start");

console.log("Task 1");

console.log("End");
```
#### Output
```plaintext
Start
Task 1
End
```
