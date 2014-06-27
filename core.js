/**
 * Created by Administrator on 14-6-25.
 */
/**
* @type {Object} btn颜色 尺寸 数组
*/
var classNames ={
  TkBtn_Green:
    {"background":"#32cd32","color":"white"},
  TkBtn_Red:
    {"background":"#ff0000","color":"white"},
  Tkbtn_Blue:
    {"background":"#0000cd","color":"white"},
  Tkbtn_Big:
    {"height":"45px","borderRadius":"15px"},
  Tkbtn_Normal:
    {"height":"35px","borderRadius":"15px"},
  Tkbtn_Small:
    {"height":"25px","borderRadius":"15px"}
};

//width:65px;
//height:40px;
//background:#92B901;
//color:#ffffff;
//position:absolute;
//font-weight:bold;
//font:12px '微软雅黑', Verdana, Arial, Helvetica, sans-serif;
//padding:20px 10px 0px 10px;
//float:left;
//margin:5px;
//-webkit-transition:-webkit-transform 1s,opacity 1s,background 1s,width 1s,height 1s,font-size 1s;
//-webkit-border-radius:5px;
//-o-transition-property:width,height,-o-transform,background,font-size,opacity;
//-o-transition-duration:1s,1s,1s,1s,1s,1s;
//-moz-transition-property:width,height,-o-transform,background,font-size,opacity;
//-moz-transition-duration:1s,1s,1s,1s,1s,1s;
//transition-property:width,height,transform,background,font-size,opacity;
//transition-duration:1s,1s,1s,1s,1s,1s;
//border-radius:5px;
//opacity:0.4;

/**
* @type {Object} 框架支持的html元素类型
*/
var htmlTypes = {
  "button":true,
  "input[type=button]":true,
  "input[type=submit]":true
};
/**
* 设置btn颜色
* @param className 颜色class
* @param domType dom类型
* @constructor function Object(){....}
*/
var Tk = {};
Tk.list = function(list,cns){

}

Tk.from = function(from,cns){

}

Tk.tab = function(tab,cns){

}

Tk.btn = function(button,cns,htmlType){
   this.className=[];
   //加入所有class属性
   // htmlTypes[htmlType]?this.htmlType=htmlType:"";
   for(var i=0;i<cns.length;i++){
     if(classNames[cns[i]].color)
       button.style.color = classNames[cns[i]].color;
     if(classNames[cns[i]].background)
       button.style.background = classNames[cns[i]].background;
     if(classNames[cns[i]].width)
       button.style.width =classNames[cns[i]].width;
     if(classNames[cns[i]].height)
       button.style.height = classNames[cns[i]].height;
     if(classNames[cns[i]].borderRadius)
       button.style.borderRadius = classNames[cns[i]].borderRadius;
//     if(classNames[cns[i]].margin)
//       button.style.margin = classNames[cns[i]].margin;
   }
   //如果使用new 实例化当前对象 则默认返回this; 否则返回undefined
   //如果不用new 则失去了prototype 以及上级原型链
}

window.onload=function(){
    var inputs = window.document.getElementsByTagName("input");
    for(var i = 0;i<inputs.length;i++){
       new Tk.btn(inputs[i],inputs[i].className.split(" "),inputs[i].type);
    };
    var buttons = window.document.getElementsByTagName("button");
    for(var i = 0;i<buttons.length;i++){
       new Tk.btn(buttons[i],buttons[i].className.split(" "),buttons[i].type);
    };
}
