var count = 0;
function HandleLike() {
    var inputele = document.querySelector('#likeid');
    count++;
    if (count >= 0) {
        inputele.innerHTML = "like" + count;
    }

}
var count1 = 0;
function handledislike() {
    var disele1 = document.querySelector('#dislikeid');
    // count--;
    // if (count >= 0) {
    //     disele1.innerHTML = "like " + count;
    // }
    count1++;
    disele1.innerHTML = "Dislike " + count1;

}
function Handlecomments() {
    var useripele = document.querySelector('#inputid').value;

    const clonele = document.querySelector('#ref').cloneNode(true);
    clonele.removeAttribute('#id');
    if (useripele === "") {
        var validaate = document.querySelector('#i2');
        validaate.style.color = "red";
        validaate.innerHTML = "Plase enter value";
        var commet = document.querySelector('#i1');
        commet.appendChild(validaate);

    }
    else {
        clonele.children[0].innerHTML = useripele;

        clonele.style.visibility = "visible";
        var commentdiv = document.querySelector('#commentbox');
        commentdiv.insertBefore(clonele, commentdiv.firstChild);
        document.querySelector('#inputid').value = "";
        //commentdiv.appendChild(useripele);
    }

}

function HandleDelete(delele) {
    delele.parentElement.remove();
}