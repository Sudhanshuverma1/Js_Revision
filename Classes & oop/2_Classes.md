# JavaScript And Classes

Imagine you're building a Neighborhood instead of desigining each house from scratch, You create a 
```blueprint```  that defines : "Every house should have a front door,windows, a roof, and an address." 
Then you use this blueprint tp build many similar houses, each with its own unique address and color.

```
Classes work the same way . A class is a template that defines what properties (data) and methods 
(functions)objects should have. Then you can create many Objects form the template
```

``` An object is an instance of a class. For example, the animal type Dog is a class, while a particular dog named Tommy is an object of the Dog class.```

### # Why classes solve real Problems
#### Before classes, creating similar objects was messay
```1. Lots of repeated code```

```2. Easy to forget important properties ```

```3. Hard to maintain when requirements to change```

```4. No clear organization```

```Classes solves these problems by providing a clean, organized way to create objects```


```javascript
class Dog {
    constructor(name, breed) {
      
        // instance property  
        this.name = name;   
        this.breed = breed; 
    }

    // defining method
    bark() {
        console.log(`${this.name} says woof!`);
    }
}

// creating an object (instance)
const myDog = new Dog("Rayne", "Husky");
myDog.bark();
```

#### Output

``` Rayne says woof! ```