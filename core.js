/**
 * Created by MyAIr on 14-6-29.
 */
var Tkquery = {};

Tkquery.list = function(el,data){
    var html = "";
    for(var i = 0;i<data.length;i++){
        html+= "<div>"+data[i]+"</div>";
    }
    el.innerHTML = html;
    el.className = "tklist";
    return el;
}

Tkquery.form = function(el){
    var html = "<div><div>Name</div><div><input type='text'></div>" +
        "<div>Name</div><div><input type='password'></div></div>";
    el.innerHTML=html;
    el.className="tkForm";
    return el;
}

Tkquery.button = function(el,name){
//    var html = "";
//    html
}

