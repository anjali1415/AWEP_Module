function chat()
{
    var inputele=document.querySelector('#userip').value;
    var cloneele=document.querySelector('#showip').cloneNode(true);
    cloneele.removeAttribute('#id');
     
    cloneele.textContent=inputele;
    cloneele.style.fontsize="30px";
    var comment=document.querySelector('#c2');
    
    //comment.insertBefore(cloneele,comment.firstChild);
    comment.appendChild(cloneele);
}