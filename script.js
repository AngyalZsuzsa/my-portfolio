const sections = document.querySelectorAll('.section');
const sectionBtns = document.querySelectorAll('.controls');
const sectionBtn = document.querySelectorAll('.control');
const allSections = document.querySelector('.container');

let currentBtn = document.querySelectorAll('.active-btn');

function active() {
    for (let i = 0; i < sectionBtn.length; i++) {
        sectionBtn[i].addEventListener('click', function() {
            currentBtn[0].className = currentBtn[0].className.replace('active-btn', '');
            
            sectionBtn[i].className += ' active-btn';
            
        })
    } 

    allSections.addEventListener('click', (e) => {
        const id = e.target.dataset.id;
        if(id) {
            sectionBtns.forEach((btn) => {
                btn.classList.remove('active')
            })
            e.target.classList.add('active')

            sections.forEach((section) => {
                section.classList.remove('active')
            })

            const element = document.getElementById(id);
            element.classList.add('active')
        }
    })

    const toggleBtn = document.querySelector('.toggle-btn');
    toggleBtn.addEventListener('click', () => {
        let item = document.body;
        item.classList.toggle('light-mode')
    })
}

active();
