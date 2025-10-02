#
1. What is the difference between **getElementById, getElementsByClassName, and querySelector / querySelectorAll**?
=><br>
[getElementById, getElementsByClassName]<br>
First of all #id can be set only for one element and multiple element can bear same class.<br>
getElementById=>gives only one element with the given Id<br>
getElementsByClassName=>gives an array like object of elements with given className<br>
<br>
querySelector / querySelectorAll <br>
=><br>
querySelector provides the first element which contains the provided className or IDName(CSS selector)<br>
querySelectorAll provides all elements which contains the provided className or IDName(CSS selector)<br>
<br><br>

2. How do you **create and insert a new element into the DOM**?
=><br>
First we create an elememt using .createElement()<br>
such as,p=document.createElement('li')
Secondly,we chage content using innerText="" or innerHTML=``
Then,we append that child to parent class
such as,parent.appendChild(p)


3. What is **Event Bubbling** and how does it work?
=>
Let,I have clicked an element in webpage then web-mechanism will search for that element by going upto the lowest node in the hierarchy.If found then it will come upward in the same way but in reverse direction.This is event bubbling.
Let child3 is a child of child2 and child2 is a child of child of child1.Finally child1 is a child of Parent.If we add a eventListener to child3 it will call child2,child1 and Parent's eventListener also.
This is called event bubbling
4. What is **Event Delegation** in JavaScript? Why is it useful?
=>Let,I have clicked an element in webpage then web-mechanism will search for that element by going upto the lowest node in the hierarchy.If found then it will come upward in the same way but in reverse direction.This is event bubbling.
Let child3 is a child of child2 and child2 is a child of child of child1.Finally child1 is a child of Parent.If we add a eventListener to parent and cause the event anywhere(any of the child or parent ) the eventListener will fire.
Why Is It Useful=>
Performance: Fewer listeners = faster DOM


5. What is the difference between **preventDefault() and stopPropagation()** methods?
=>
preventDefault()
Stop a form from submitting
stopPropagation()
Prevent a link from navigating