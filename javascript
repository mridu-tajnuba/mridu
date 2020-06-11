var catImage = document.querySelector('img');
catImage.onclick = function () {
    'use strict';
    var myImages = catImage.getAtrribute('src');
    if (myImages === 'Images/puppy.jpg') {
        catImage.setAttribute('src', 'images/cat.jpg');
        
    } else {
        catImage.setAttribute('src', 'images/cat.jpg');
    }
    
};

var nameButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName() {
    'use strict';
    var myName = window.prompt('please enter ypur name.');
    localStorage.setItem('name', myName);
    myHeading.textContent = 'Have a nice day, ' + myName;
    
}
if (!localStorage.getItem('name')) {
    setUserName();
} else {
    var storedName = localStorage.getItem('name');
    myHeading.textContent = 'Have a nice day,' + storedName;
}
nameButton.onclick = function () {
    'use strict';
    setUserName();
};
