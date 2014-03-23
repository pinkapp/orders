//去除空格
String.prototype.trim = function()
{
	return this.replace(/(^\s*)|(\s*$)/g, "");
}
//通过id获取页面上的对象，它是唯一的
function $(id){
  return document.getElementById(id); 
}

function $s(name){
  return document.getElementsByName(name);
}
/**

   合并表格单元格（如果内容相同）
   tabName   表格名称
   colIndex  合并colIndex以前的单元格
**/
function mergeCells(tabName,colIndex) {   
    var tabObj = $(tabName);
	if(tabObj != null) {   
		var i,j;   
		var intSpan;   
		var strTemp;   
		for(var m = 0; m <colIndex; m++ ){   
			for(i = 0; i < tabObj.rows.length; i++) {   
				intSpan = 1;   
				strTemp = tabObj.rows[i].cells[m].innerText;   
				for(j = i + 1; j < tabObj.rows.length; j++) {   
					if(strTemp == tabObj.rows[j].cells[m].innerText) {   
						intSpan++;   
						tabObj.rows[i].cells[m].rowSpan  = intSpan;   
						tabObj.rows[j].cells[m].style.display = "none";   
					} else {   
						break;   
					}   
				}   
				i = j - 1;   
			}   
		}   
	}   
}   


/**

   合并表格单元格（如果内容相同）
   tabName   表格名称
   colIndex  合并colIndex以前的单元格
**/
function checkedValue(control){
	var radioControl = $s(control);
	for(var i=0;i<radioControl.length;i++){
		if(radioControl[i].checked){
			return radioControl[i].value;
		}
	}
}

  
/**
  时间选择控件
**/
function popUpCalendarDlg(iText,path) {  
		//var ctrlobj=null;
		showx = event.screenX - event.offsetX; // + deltaX;
		//alert("showx="+showx+";event.screenX="+event.screenX+";event.offsetX="+event.offsetX);
		showy = event.screenY - event.offsetY; // + deltaY;
		//newWINwidth = 210 + 4 + 18;
		if(path != null){
			retval = window.showModalDialog(path+"/calendar/CalendarDlg.htm", "", "dialogWidth:197px; dialogHeight:210px; dialogLeft:"+showx+"px; dialogTop:"+showy+"px; status:no; directories:yes;scrollbars:no;Resizable=no; "  );
		}else{
			retval = window.showModalDialog("calendar/CalendarDlg.htm", "", "dialogWidth:197px; dialogHeight:210px; dialogLeft:"+showx+"px; dialogTop:"+showy+"px; status:no; directories:yes;scrollbars:no;Resizable=no; "  );
		}
		if( retval != null ){
			iText.value = retval;
		}else{
			//alert("canceled");
		}
  }
   
  /**
 * 复选框:取得所选复选框的id列,形如: (1, 3, 10)
 * 设定已有:
 * <input type="checkbox" name="CbGroup" value="1" />
 * <input type="checkbox" name="CbGroup" value="2" />
 * 被选择，则 getSelectedIds("CbGroup") 返回字符串"(1,2)"
 */
function getSelectedIds(checkboxGroup)
{
	var ids = ""; 
	var cbg = document.getElementsByName(checkboxGroup);
	if( !cbg ) return ids;

	if( cbg.length )
	{ 
		for(var i=0; i<cbg.length; i++)
		{
			if(cbg[i].checked )
			{
				ids += "," + cbg[i].value;
			}				
		}
	}
	else
	{
		if(cbg.checked )
		{
			ids +=  "," + cbg.value;
		}
	}
	if( ids!="" )
	{
		ids = ids.substring(1) ;
	}
	
	return ids;
}

/**
 * js Map数据格式
 */
function Map() {
	this.map = new Object();
	this.length = 0;

	this.size = function() {
		return this.length;
	}

	this.put = function(key, value) {

		if (!this.map['_' + key]) {
			++this.length;
		}

		this.map['_' + key] = value;

	}

	this.remove = function(key) {

		if (this.map['_' + key]) {
			return delete this.map['_' + key];
		} else {
			return false;
		}
	}

	this.containsKey = function(key) {

		return this.map['_' + key] ? true : false;

	}

	this.get = function(key) {

		return this.map['_' + key] ? this.map['_' + key] : null;

	}

	this.inspect = function() {
		var str = '';
		for (var each in this.map) {
			str += '\n' + each + '  Value:' + this.map[each];
		}

		return str;
	}
	this.toSelect = function(name){
		var str = "<select name='"+name+"'>";
		for (var each in this.map) {
			var v = each.substr(1);
			str += "<option value='" + v + "'>" + this.map[each] + "</option>";
		}
		str = str + "</select>";
		return str;
	}
		this.toSelectRole = function(name,select){
		var str = "<select name='"+name+"'>";
		for (var each in this.map) {
			var v = each.substr(1);
			
			if(v==select){
				str += "<option value='" + v + "' selected>" + this.map[each] + "</option>";
			}else{
				str += "<option value='" + v + "'>" + this.map[each] + "</option>";
			}
		}
		str = str + "</select>";
		return str;
	}

}

function openWindow(url,windowWidth,windowHeight)
{
		var property= 'menubar=no,toolbar=no,location=no,directories=no,status=no,scrollbars=yes,titlebar=no,resizable=no';

     	var windowTop    = (window.screen.height - windowHeight)/2;
     	
     	var windowLeft   = (window.screen.width - windowWidth)/2;
     	
     	var locationInfo = ",width=" + windowWidth + ",height=" + windowHeight + ",top=" + windowTop + ",left=" + windowLeft;
     	
     	property += locationInfo;
     	
		return window.open(url, "", property);
}

function showDialog(page){
	return openModalDialog(page,null,['400px','620px',,,'help:0;scroll:0;resizable:0;status:0; unadorned:1;']);
}
function openModalDialog(sURL,vArguments,paraArray){
	var sFeatures=""; //alert(paraArray);
	if(paraArray[0]) sFeatures+="dialogHeight:"+paraArray[0]+"px;";
	if(paraArray[1]) sFeatures+="dialogWidth:"+paraArray[1]+"px;";
	if(paraArray[2]) sFeatures+="dialogLeft:"+paraArray[2]+"px;";
	if(paraArray[3]) sFeatures+="dialogTop:"+paraArray[3]+"px;";
	if(paraArray[4]) sFeatures+=paraArray[4];
	 return window.showModalDialog(sURL,vArguments,sFeatures);
  //"dialogHeight:400px; dialogWidth:600px; help:0; resizable:1; status:0; unadorned:1;"
}

function oneTypeGo(){
	var page = $("gotoPage").value;
	var totalPage = $("totalPage").value;
    if(!checkNum(page)){   
        alert("请输入正确的页数！"); 
        $("gotoPage").select();
        $("gotoPage").focus();
        return false;   
    }   
    if(page > totalPage){   
        alert("超出了最大页数，请重新输入！");  
        $("gotoPage").select();
        $("gotoPage").focus();
    }else if(page < 1){   
        alert("页数不能小于1！");   
        $("gotoPage").select();
        $("gotoPage").focus();
    }else{   
        window.location=$("pageUrl").value.replace("p=","p="+page);   
        
    }   
}

function otherTypeGo(){
    var page = $("gotoPage").value;
	var totalPage = $("totalPage").value;
    if(!checkNum(page)){   
        alert("请输入正确的页数！"); 
        $("gotoPage").select();
        $("gotoPage").focus();
        return false;   
    }   
    if(page > totalPage){   
        alert("超出了最大页数，请重新输入！"); 
        $("gotoPage").select();
        $("gotoPage").focus();
    }else if(page < 1){   
        alert("页数不能小于1！");  
        $("gotoPage").select();
        $("gotoPage").focus();
    }else{   
        window.location=$("pageUrl").value.replace("p=1","p="+page);    
    }   
}

/**
 * 检验是否为正整数
 */
function checkNum(str)     
{     
	var reg =  /^[0-9]*[1-9][0-9]*$/;
	return reg.test(str);   
}





/**
  公用栏目切换 bianGY(obj,nr) 
  objTempGY 定义公用栏目常量
*/
var objTempGY = "objgy1";
var nrTempGY = "nrgy1";
function bianGY(objgy,objgy2){
if(objgy=="objgy1"){
	document.getElementById(objTempGY).style.background="#EEF1FB"
	document.getElementById(objTempGY).style.color="#003987";
	document.getElementById("objgy1").style.background="#BAC8EF";
	document.getElementById("objgy1").style.color="#000000";
	document.getElementById(nrTempGY).style.display="none";
	document.getElementById("nrgy1").style.display="";
}
if(objgy=="objgy2"){
    document.getElementById(objTempGY).style.background="#EEF1FB"
	document.getElementById(objTempGY).style.color="#003987";
	document.getElementById("objgy2").style.background="#BAC8EF";
	document.getElementById("objgy2").style.color="#000000";
	document.getElementById(nrTempGY).style.display="none";
	document.getElementById("nrgy2").style.display="";
}
if(objgy=="objgy3"){
    document.getElementById(objTempGY).style.background="#EEF1FB"
	document.getElementById(objTempGY).style.color="#003987";
	document.getElementById("objgy3").style.background="#BAC8EF";
	document.getElementById("objgy3").style.color="#000000";
	document.getElementById(nrTempGY).style.display="none";
	document.getElementById("nrgy3").style.display="";
}
if(objgy=="objgy4"){
    document.getElementById(objTempGY).style.background="#EEF1FB"
	document.getElementById(objTempGY).style.color="#003987";
	document.getElementById("objgy4").style.background="#BAC8EF";
	document.getElementById("objgy4").style.color="#000000";
	document.getElementById(nrTempGY).style.display="none";
	document.getElementById("nrgy4").style.display="";
}
if(objgy=="objgy5"){
    document.getElementById(objTempGY).style.background="#EEF1FB"
	document.getElementById(objTempGY).style.color="#003987";
	document.getElementById("objgy5").style.background="#BAC8EF";
	document.getElementById("objgy5").style.color="#000000";
	document.getElementById(nrTempGY).style.display="none";
	document.getElementById("nrgy5").style.display="";
}
	objTempGY = objgy;
	nrTempGY = objgy2;
}

