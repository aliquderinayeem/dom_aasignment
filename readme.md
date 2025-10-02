1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?<br>
[getElementById, getElementsByClassName]<br>
First of all #id can be set only for one element and multiple elements can bear the same class.<br>
getElementById => gives only one element with the given Id<br>
getElementsByClassName => gives an array-like object of elements with the given className<br>
<br>
querySelector / querySelectorAll<br>
querySelector provides the first element which matches the provided CSS selector (class, id, tag, etc.)<br>
querySelectorAll provides all elements which match the provided CSS selector<br>
<br><br>

2. How do you create and insert a new element into the DOM?<br>
First we create an element using .createElement()<br>
Example: p = document.createElement('li')<br>
Secondly, we change content using innerText = "" or innerHTML = ``<br>
Then, we append that child to a parent element<br>
Example: parent.appendChild(p)<br>
<br><br>

3. What is Event Bubbling and how does it work?<br>
Let’s say I click an element on a webpage. The event mechanism will search for that element starting from the deepest node in the hierarchy.<br>
If found, it will then propagate upward in reverse order through its ancestors.<br>
Example: child3 is inside child2, which is inside child1, which is inside Parent.<br>
If we add an eventListener to child3, it will also trigger listeners on child2, child1, and Parent.<br>
This is called event bubbling.<br>
<br><br>

4. What is Event Delegation in JavaScript? Why is it useful?<br>
Event Delegation uses the concept of event bubbling.<br>
Instead of adding eventListeners to multiple child elements, we add one listener to a common parent.<br>
When an event occurs on any child, it bubbles up and is caught by the parent’s listener.<br>
Why Is It Useful:<br>
Performance: Fewer listeners = faster DOM<br>
Less memory usage and easier maintenance<br>
<br><br>

5. What is the difference between preventDefault() and stopPropagation() methods?<br>
preventDefault():<br>
Prevents the default action of an element (e.g., stops a form from submitting)<br>
stopPropagation():<br>
Stops the event from bubbling up to parent elements (e.g., prevents a link from triggering parent listeners)<br>
