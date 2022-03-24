var button_add = document.getElementById("add");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");

function elementcreating(){
    var li = document.createElement("li");
    var del = document.createElement("button");
    li.setAttribute('class','list_items');
    del.setAttribute('class','del_items');
    li.appendChild(document.createTextNode(input.value));
    del.textContent = "delete";
    ul.appendChild(li);
    li.appendChild(del);
    input.value="";
    del.addEventListener("click",function(event){
        var item = event.target.del;
        var del_par = del.parentNode;
        var del_par_par = del_par.parentNode;
        del_par_par.removeChild(del_par);
    })

}
button_add.addEventListener("click",function(){
    if(input.value.length>0){
        elementcreating();
    }
});
input.addEventListener("keypress",function(event){
    if(input.value.length>0 && event.which==13){
        elementcreating();
    }
});




