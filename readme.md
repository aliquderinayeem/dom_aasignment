#
1. What is the difference between **getElementById, getElementsByClassName, and querySelector / querySelectorAll**?
=>
[getElementById, getElementsByClassName]
First of all #id can be set only for one element and multiple element can bear same class.
getElementById=>gives only one element with the given Id
getElementsByClassName=>gives an array like object of elements with given className

querySelector / querySelectorAll
=>
querySelector provides the first element which contains the provided className or IDName(CSS selector)
querySelectorAll provides all elements which contains the provided className or IDName(CSS selector)

2. How do you **create and insert a new element into the DOM**?
=>
First we create an elememt using .createElement()
such as,p=document.createElement('li')
Then,we append that to parent class
such as,parent.appendChild(p)
3. What is **Event Bubbling** and how does it work?

4. What is **Event Delegation** in JavaScript? Why is it useful?

5. What is the difference between **preventDefault() and stopPropagation()** methods?
