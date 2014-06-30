/**
 * Created by MyAIr on 14-6-29.
 */
var el = document.getElementById("backgroundDiv");
el.innerHTML="<div><div name='tklist'></div><form name='tkform'></div></form>";
var data = ["hello","world","java","script"];//ajax;
Tkquery.list(document.getElementsByName("tklist")[0],data);
Tkquery.form(document.getElementsByName("tkform")[0],data);