//selections
const mainHeader = document.querySelector('#main-heading');
const para1 = document.querySelector('#para1');
const para2 = document.querySelector('#para2');
const para3 = document.querySelector('#para3');
const para4 = document.querySelector('#para4');
const btn = document.querySelector("#btn");
const red = document.querySelector('#red div');
const blue = document.querySelector("#blue div");
const yellow = document.querySelector('#yellow div');
const green = document.querySelector('#green div');
const black = document.querySelector('#black div');


//manipulations
mainHeader.textContent = 'New DOM Layout';
mainHeader.classList.add('bg-success');
para1.textContent = 'The Document Object Model (DOM) is a cross-platform and language-independent interface that treats an XML or HTML document as a tree structure';
para2.textContent = 'The Document Object Model (DOM) is a programming interface for HTML and XML documents. It represents the page so that programs can change the document structure, style, and content. The DOM represents the document as nodes and objects. That way, programming languages can connect to the page.'
btn. addEventListener('click', function(){
    const p = document. createElement('p');
    para4.append(p);
    para4.append('The Document Object Model is a cross-platform and language-independent interface that treats an XML or HTML document as a tree structure wherein each node is an object representing a part of the document.');
})

red.classList.add('bg-danger');
blue.classList.add('bg-primary');
yellow.classList.add('bg-warning');
green.classList.add('bg-success');
black.classList.add('bg-dark');
black.style.color = 'white';
