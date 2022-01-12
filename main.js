var ul = document.querySelector('.content')
var input = document.querySelector('input')

var tags = ['nodejs','reactjs']

function createTag(){
    ul.innerHTML=''
    tags.forEach(function(tag,index){
        var liTag = '<li>'
        +tag+'<i class="fas fa-times" onclick = "removeTag(this,'+index+')</i>'+
        '</li>'
        ul.innerHTML+=liTag
    })
    ul.appendChild(input)
    input.focus()
}
createTag()

function removeTag(element,index){
    tags.splice(index,1)
    element.parentElement.remove()
    input.focus()
}

function addTag(){
    input.addEventListener('keyup',function(e){
        if(e.which===13){
            var tag = input.value.trim()
            if(tag !='' && !tags.includes(tag)){
                tags.push(tag)
                createTag()
            }
            input.value=''
        }
           
    })
}
addTag()
btn=document.querySelector('.btn').addEventListener('click',function(){
    tags.length = 0;
    createTag()
})