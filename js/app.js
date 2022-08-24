// build the nav
function Navigation(numOfSection) {
    var anchor = document.createElement('a');
    anchor.setAttribute('class', 'link');
    anchor.setAttribute('id', `section${numOfSection}_nav`);
    anchor.setAttribute('data-section', `section${numOfSection}`);
    anchor.textContent = `Section ${numOfSection}`;
    var listElement = document.createElement('li');
    listElement.appendChild(anchor);
    document.querySelector('#navbar__list').appendChild(listElement);

}

for (let k=0; k<3; k++) 
    {
        Navigation(k+1);
    }

document.querySelectorAll('.link').forEach(link => {
    link.addEventListener('click', function() {
        document.querySelector(`#${this.dataset.section}`).scrollIntoView(false);

    });
});


const addActive = (condition, elem) => {
    if (condition) {
        elem.classList.add('active');
    };
};

 const removeActive = (elem) => {
    elem.classList.remove('active');
};

// Get Position In page .. 
var getPosition = (sec) => {
    return Math.floor(sec.getBoundingClientRect().top);
};


var light = () => {

   var sections = document.querySelectorAll('section');
   var elements = document.querySelectorAll('.link');
   sections.forEach(section => {
     var position = getPosition(section);
    conditional = () => position < 200 && position >= -150;
    elements.forEach(element => {
        if (`${element.id}` === `${section.id}_nav`) {
            removeActive(element);
        };
      });
    addActive(conditional(), document.querySelector(`#${section.id}_nav`));
   });
};
window.addEventListener('scroll', light);