// Bring in toggle buttons (querySelectorAll)
// const buttons = document.querySelectorAll('.fa-chevron-down')
// const question = document.querySelector('.fa-times')


// Loop through nodelist (forEach)
// Add click event (addEventListener)
// buttons.forEach (el => {
//     el.addEventListener ('click', () =>
//     question.querySelector ('.active').classList.remove('active')
//     el.classList.add('active'))
// })

// Toggle the active class on the parent node (.parentNode & classList.toggle())



//*************************************************************************

const toggles = document.querySelectorAll('.faq-toggle')

toggles.forEach(toggle => {
    toggle.addEventListener('click', () => {
        toggle.parentNode.classList.toggle('active')
    })
})