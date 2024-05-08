// Probably throwaway given time constraints, but worth checking time permitting
var btnGroup = Array.from(document.getElementsByClassName("btn"));
var imgGroup = Array.from(document.getElementsByClassName('img'));

imgGroup.forEach(function(img, idx) {
    btnGroup[idx].onclick = function() {
        img.classList.toggle('off');
    }
});