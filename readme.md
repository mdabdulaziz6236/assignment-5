1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?
   <!-- Answer -->

   getElementById : selects one element by its id.  
   getElementsByClassName : selects many elements by their class.  
   querySelector : selects the first element that matches a CSS selector.  
   querySelectorAll : selects all elements that match a CSS selector.

2. How do you create and insert a new element into the DOM?
   <!-- Answer  -->

   We can create a new element using document.createElement("tagName")
   and insert it using appendChild() .
   Example :  
   const newDiv = document.createElement("div");  
   newDiv.innerText = "Hello DOM";  
   document.body.appendChild(newDiv);

3. What is Event Bubbling and how does it work?
   <!-- Answer -->

   Event Bubbling : When an event happens on an element, it first runs on that element and then "bubbles up" to its parent elements automatically.

4. What is Event Delegation in JavaScript? Why is it useful?
   <!-- Answer -->

   Event Delegation : Instead of adding event listeners to many child elements, we add a single listener to their parent and handle events from its children using event.target. write it simply

5. What is the difference between preventDefault() and stopPropagation() methods?
   <!-- Answer -->
   preventDefault() : Stops the default browser action for an event (like form submission or link click).  
   stopPropagation() : Stops the event from bubbling up to parent elements.
