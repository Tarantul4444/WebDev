'use strict'

const input = document.getElementById('input')
const list = document.getElementById('todoList')

function addElement() {
    let val = input.value
    if(val == '') {
        alert('Add something!')
        return
    }
    input.value = ''
    let div = document.createElement('div')
    let div2 = document.createElement('div')
    div.className = 'main__todoList__element'
    div2.className = 'main__todoList__block'
    let check = document.createElement('input')
    check.type = 'checkbox'
    check.className = 'main__todoList__check'
    check.addEventListener('click', function() {
        if(check.checked) this.parentElement.style.textDecoration = 'line-through'
        else this.parentElement.style.textDecoration = 'none'
    })
    let span1 = document.createElement('span');
    let text = document.createTextNode(val)
    span1.className = 'main__todoList__text'
    span1.appendChild(text)
    div2.appendChild(check)
    div2.appendChild(span1)
    let span2 = document.createElement('span');
    let del = document.createTextNode('\u00D7')
    span2.className = 'main__todoList__deletion'
    span2.addEventListener('click', function() {
        this.parentElement.remove()
    })
    span2.appendChild(del)
    div.appendChild(div2)
    div.appendChild(span2)
    list.appendChild(div)
}