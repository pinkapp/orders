function openScript(url,name, width, height){
		 var Win = window.open(url,name,'width=' + width + ',height=' + height + ',resizable=1,scrollbars=yes,menubar=no,status=yes' );
		}
function delMessages(actions){
	if(confirm('记录删除不可恢复,确认删除?')){
		document.forms[0].action = actions;
		document.forms[0].submit();
	}
}	
function hasSelect(action){
var index = document.getElementById("pageindex").value;
	document.location=action+"&curpage="+index;
}
