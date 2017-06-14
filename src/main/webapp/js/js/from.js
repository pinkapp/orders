//添加一个数字录入框

function addNumberInputText(obj,pName,pSize,pValue,pMax,pClass)
{
	var obj1=obj.insertCell();obj1.className="zi13";
	obj1.innerHTML= "<input id=\""+pName + "\" name=\""+pName+"\" type=\"text\"" +"  size="+pSize+"\" value=\""+pValue+"\" maxlength=\""+pMax+"\" class=\""+pClass+"\" onkeydown=\"if(event.keyCode==13)event.keyCode=9\" onkeypress=\"if ((event.keyCode<46||event.keyCode==47 || event.keyCode>57)) event.returnValue=false\" onblur=\"if(!check_float_a(this.value)){this.value=0}\" >";
	obj1.align="center";
}

//添加一个数字录入框
function addNumberInputTextInt(obj,pName,pSize,pValue,pMax,pClass)
{
	var obj1=obj.insertCell();obj1.className="zi13";
	obj1.innerHTML= "<input id=\""+pName + "\" name=\""+pName+"\" type=\"text\"" +"  size="+pSize+"\" value=\""+pValue+"\" maxlength=\""+pMax+"\" class=\""+pClass+"\" onkeydown=\"if(event.keyCode==13)event.keyCode=9\" onkeypress=\"if ((event.keyCode<47 || event.keyCode>57)) event.returnValue=false\" onblur=\"if(!check_float_a(this.value)){this.value=0}\" >";
	obj1.align="center";
}

   function check_float_a(value)    
	{           
	//var patrn=/^\d{1,8}([.]?((\d)|[ ]){0,12})+$/;
	//var patrn=  /^(\d{1,5}(\.(\d){1,6})?)?$/;	
	//dujuan 
	//var patrn=  /^(\d{1,9}(\.(\d){1,2})?)?$/;	防止02.3这样情况
	var patrn=  /^(([0-9]|[1-9][0-9]{1,8})(\.(\d){1,6})?)?$/;
	if (!patrn.exec(value)){
	    //请填写正确的格式(保留两位小数位数)!
	    // alert('输入非法字符，请重新输入！');
	    //请填写正确的数字格式!	    
	    alert('\u8bf7\u586b\u5199\u6b63\u786e\u7684\u6570\u5b57\u683c\u5f0f\uff01');
		return false;
		}	
	    return true;
	}
//添加一个数字录入框可以进行合计
function addNumberInputTextHJ(obj,pName,pSize,pValue,pMax,hjid,ysid,pClass)
{
	var obj1=obj.insertCell();obj1.className="zi13";
	obj1.innerHTML= "<input id=\""+pName + "\" name=\""+pName+"\" type=\"text\"" +"  size="+pSize+"\" value=\""+pValue+"\" maxlength=\""+pMax+"\" class=\""+pClass+"\" onkeydown=\"if(event.keyCode==13)event.keyCode=9\" onkeypress=\"if ((event.keyCode<46||event.keyCode==47 || event.keyCode>57)) event.returnValue=false\" onblur=\"if(!check_float_a(this.value)){this.value=0}else{numberHj('"+hjid+"','"+ysid+"')}\">";
	obj1.align="center";
}
//带事件的数字录入框可以进行合计
function addNumberInputActionHJ(obj,pName,pSize,pValue,pMax,hjid,ysid,pClass,sOnclick,sOnchange)
{
	var obj1=obj.insertCell();obj1.className="zi13";
	if(sOnclick.length<2){
	sOnclick="\"\"";	
	}
	if(sOnchange.length<2){
	sOnchange="\"\"";
	}
	obj1.innerHTML= "<input id=\""+pName + "\" name=\""+pName+"\" type=\"text\"" +"  size="+pSize+"\" value=\""+pValue+"\" maxlength=\""+pMax+"\" class=\""+pClass+"\" onClick=\""+sOnclick+"\" onChange=\""+sOnchange+"\" onkeydown=\"if(event.keyCode==13)event.keyCode=9\" onkeypress=\"if ((event.keyCode<46||event.keyCode==47 || event.keyCode>57)) event.returnValue=false\"  onblur=\"if(!check_float_a(this.value)){this.value=0}else{numberHj('"+hjid+"','"+ysid+"')}\">";
	obj1.align="center";
}
function numberHj(hjid,ysid){
var num=0;

var rowsTemp = Number(document.getElementById("row"+ysid).value);
	for(var i=0;i<rowsTemp;i++){
	num=num+Number(document.getElementById(hjid+"_"+i).value);
	}
	if(document.getElementById(hjid+"_z")){
	document.getElementById(hjid+"_z").value=num;
	}
	zongji("hhj");
}
//
function zongji(csst){

	var forms = document.forms[0];
	var zjform;
	var hjz=0;
	for(var i=0;i<forms.length;i++){
		if(forms[i].className==csst){
			hjz=hjz+Number(forms[i].value);
		}
		if(forms[i].className=="ymzj"){
			zjform=forms[i];
		}
			if(zjform!=null){
		zjform.value=hjz;
	}
	}

}
//添加一个无限制文本框
function addInputText(obj,pName,pSize,pValue,pMax,pClass)
{
	var obj1=obj.insertCell();obj1.className="zi13";
	obj1.innerHTML= "<input id=\""+pName + "\" name=\""+pName+"\" type=\"text\"" +"  size="+pSize+"\" value=\""+pValue+"\" maxlength=\""+pMax+"\" class=\""+pClass+"\" >";
	obj1.align="center";
}
//添加一个文本域
function addTextarea(obj,pName,pCols,pRows,pValue,pClass)
{
	var obj1=obj.insertCell();obj1.className="zi13";
	obj1.innerHTML= " <textarea name=\""+pName+"\" cols=\""+pCols+"\" rows=\""+pRows+"\" class=\""+pClass+"\">"+pValue+"</textarea>";
	obj1.align="center";
}
//添加一个文本域
function addReadTextarea(obj,pName,pCols,pRows,pValue,pClass)
{
	var obj1=obj.insertCell();obj1.className="zi13";
	obj1.innerHTML= " <textarea id=\""+pName + "\" name=\""+pName+"\" cols=\""+pCols+"\" rows=\""+pRows+"\" class=\""+pClass+"\" readonly>"+pValue+"</textarea>";
	obj1.align="center";
}

//添加一个日期输入框new WdatePicker(this,'%Y-%M-%D %h:%m:%s',true)
function addDateInputText(obj,pName,pSize,pValue,pMax,pClass)
{
    istr=unescape('%u25bc');
	var obj1=obj.insertCell();obj1.className="zi13";
	var ed = new Date();
    var month = ed.getMonth()+1;
    var datestr = ed.getYear()+"-"+month+"-"+ed.getDate();
	obj1.innerHTML="<input id=\""+pName + "\"  type=\'text\' name=\'"+pName+"\' readonly value=\'"+pValue+"\' size=\""+pSize+"\" class=\""+pClass+"\">&nbsp;<input style=\'font-size:8pt;font-family: 宋体;\' type=\'button\' value=\'"+istr+"\' onClick=\'popUpCalendarDlg("+formName+"."+pName+")\'>";
	obj1.align="center";
}

//添加一个日期输入框
function addDateTimeInputText(obj,pName,pSize,pValue,pMax,pClass)
{
    istr=unescape('%u25bc');
	var obj1=obj.insertCell();obj1.className="zi13";
	var ed = new Date();
    var month = ed.getMonth()+1;
    var datestr = ed.getYear()+"-"+month+"-"+ed.getDate();
   	//obj1.innerHTML="<input  type=\'text\' name=\'"+pName+"\' readonly value=\'"+pValue+"\' size=\""+pSize+"\" >&nbsp;<input style=\'font-size:8pt;font-family: 宋体;\' type=\'button\' value=\'"+istr+"\' onClick=\'new WdatePicker("+formName+"."+pName+",\"%Y-%M-%D %h:%m:%s\",true)\'>";
	obj1.innerHTML="<input id=\""+pName + "\"  type=\'text\' name=\'"+pName+"\' readonly value=\'"+pValue+"\' size=\""+pSize+"\" class=\""+pClass+"\" onClick=\'new WdatePicker("+formName+"."+pName+",\"%Y-%M-%D %h:%m:%s\",true)\'>";
	obj1.align="center";
}
//添加日期区间输入框
function addDDateInputText(obj,pName1,pName2,pSize,pValue,pMax,pClass)
{
	istr=unescape('%u25bc');
	var obj1=obj.insertCell();obj1.className="zi13";
	obj1.innerHTML= "从<input id=\""+pName1 + "\"  name=\"" + pName1 + "\" type=\"text\" class=\"text\" size=\"" + pSize + "\"  class=\""+pClass+"\">&nbsp;<input style=\"font-size:8pt;font-family: 宋体;\" type=\"button\" value=\""+istr+"\" onClick=\'popUpCalendarDlg("+formName+"."+pName1+")\'>到 <input name=\"" + pName2 + "\" type=\"text\" class=\"text\" size=\"" + pSize + "\"  class=\""+pClass+"\">&nbsp;<input style=\"font-size:8pt;font-family: 宋体;\" type=\"button\" value=\""+istr+"\" onClick=\'popUpCalendarDlg("+formName+"."+pName2+")\'>";
	obj1.align="center";
}
//添加一个只读输入框
function addReadInputText(obj,pName,pSize,pValue,pMax,pClass)
{
	var obj1=obj.insertCell();obj1.className="zi13";
	obj1.innerHTML=  "<input id=\""+pName + "\"  name=\""+pName+"\" type=\"text\"" +"  size=\""+pSize+"\" value=\""+pValue+"\" maxlength=\""+pMax+"\" readonly  class=\""+pClass+"\">";
	obj1.align="center";
}
//带事件的输入框
function addActionInputText(obj,pName,pSize,pValue,pMax,sOnclick,sOnchange,pClass)
{
	var obj1=obj.insertCell();obj1.className="zi13";
	if(sOnclick.length<2){
	sOnclick="\"\"";	
	}
	if(sOnchange.length<2){
	sOnchange="\"\"";
	}
	obj1.innerHTML=  "<input id=\""+pName + "\"  name=\""+pName+"\" type=\"text\"" +"  size=\""+pSize+"\" value=\""+pValue+"\" maxlength=\""+pMax+"\"  class=\""+pClass+"\" onClick=\""+sOnclick+"\" onChange=\""+sOnchange+"\">";
	obj1.align="center";
}
function addHiddenInputText(obj,pName,defaultvalue,pClass)
{
	var obj1=obj.insertCell();obj1.className="zi13";
	obj1.innerHTML="<input  type=\"hidden\"  name=\""+pName + "\" value=\""+defaultvalue+"\"  class=\""+pClass+"\">";
	obj1.align="center";
}

function addSelectUserInputText(obj,pName,defaultv,rowtag)
{
	var obj1=obj.insertCell();obj1.className="zi13";
	obj1.innerHTML="<input id=\""+pName + "\" type=\"text\" size=\"5\" readonly  name=\""+pName + "\" value=\""+defaultv+"\" onClick=\"window.open('participantTree.jsf?rowtag="+rowtag+"');\">";
	obj1.align="center";
}
function addSelectBoxInputTextTag(obj,pName,Id,op)
{
	var obj1=obj.insertCell();obj1.className="zi13";
	obj1.innerHTML="<select id=\""+pName + "\"  name=\""+ pName +"\" class=\"input\" onClick=\"disInput('" +pName+"','"+Id+"')\"  >"+ op +"</select>";
	//alert(obj1.innerHTML);
	obj1.align="center";
}
function disInput(name,id)
{
   //alert(id);
   //alert(document.getElementById(id).value);
   //alert(document.getElementById(id).options[document.getElementById(id).selectedIndex].text);
   document.getElementById(id).value = document.getElementById(name).value;
   document.getElementById(name).value= document.getElementById(name).options[document.getElementById(name).selectedIndex].text;
   
}
function addSelectBoxInputText(obj,pName,op)
{
	var obj1=obj.insertCell();obj1.className="zi13";
	obj1.innerHTML="<select id=\""+pName + "\"  name=\""+ pName +"\" class=\"input\">"+ op +"</select>";
	obj1.align="center";
}
//添加用于修改的下拉菜单
function addSelectBoxUpdateText(obj,pName,op,values)
{
	var obj1=obj.insertCell();obj1.className="zi13";
	if(op.indexOf(">"+values+"</")>0){
		op=op.replace(">"+values+"</"," selected>"+values+"</");
	}
	obj1.innerHTML="<select id=\""+pName + "\"  name=\""+ pName +"\" class=\"input\">"+ op +"</select>";
	obj1.align="center";
}

//添加一个姓名文本框 可选择
function addNameInputText(obj,pName,pSize,pValue,pMax,rowtag)
{
    istr=unescape('%u25bc');
	var obj1=obj.insertCell();obj1.className="zi13";
	obj1.innerHTML= "<input id=\""+pName + "\"  name=\""+pName+"\" id=\""+pName + "\"  type=\"text\"" +"  size="+pSize+"\" value=\""+pValue+"\" maxlength=\""+pMax+"\" >&nbsp;<input style=\'font-size:8pt;font-family: 宋体;\' type=\'button\' value=\'"+istr+"\' "+rowtag+">";
	obj1.align="center";
}
//日期脚本
function popUpCalendarDlg(iText) {  
		//var ctrlobj=null;
		showx = event.screenX - event.offsetX; // + deltaX;
		//alert("showx="+showx+";event.screenX="+event.screenX+";event.offsetX="+event.offsetX);
		showy = event.screenY - event.offsetY; // + deltaY;
		//newWINwidth = 210 + 4 + 18;
	
		retval = window.showModalDialog("common/calendar/CalendarDlg.htm", "", "dialogWidth:197px; dialogHeight:210px; dialogLeft:"+showx+"px; dialogTop:"+showy+"px; status:no; directories:yes;scrollbars:no;Resizable=no; "  );
		if( retval != null ){
			iText.value = retval;
		}else{
			//alert("canceled");
		}
		
}
//计算在途时间
  function jsPassage (sdate,edate,obj1){

  sdate=sdate.replace(/-/g,"/");
  edate=edate.replace(/-/g,"/");
var sDT = new Date(sdate);
var eDT = new Date(edate);
	obj1.value=sDT.dateDiff("h",eDT);
  }
  //计算在途时间2
  //计算在途时间
  function jsPassageByName(sdateName,edateName,obj1){
  var sdate = sdateName.value;
  var edate = edateName.value;
  sdate=sdate.replace(/-/g,"/");
  edate=edate.replace(/-/g,"/");
var sDT = new Date(sdate);
var eDT = new Date(edate);
	obj1.value=sDT.dateDiff("h",eDT);
  }
 
   //计算在途时间
  function account(sNum,eNum,obj1,fh){
  var numberTemp;
  		switch (parseInt(fh)) {
	  case 0:
	  	numberTemp = Number(sNum.value)+Number(eNum.value);
		break;
	  case 1:
	  	numberTemp = Number(sNum.value)-Number(eNum.value);
		break;
	  case 2:
	  	numberTemp = Number(sNum.value)*Number(eNum.value);
		break;
	  case 3:
	  	numberTemp = Number(sNum.value)/Number(eNum.value);
		break;	
	  case 5:
	  	numberTemp = Number(sNum.value)*(Number(eNum.value)/100);
		break;			
	}	
	if(numberTemp.toString().indexOf(".")>-1){
	  		numberTemp = numberTemp.toString().substring(0,numberTemp.toString().indexOf(".")+7);
	}
	obj1.value=numberTemp;
  }
 
  //添加一个时间区间，用户计算在途
function addTimeToTime(obj,sName,eName,zName,pSize,pValue,pMax)
{
    istr=unescape('%u25bc');
	var obj1=obj.insertCell();
	obj1.className="zi13";
	var ed = new Date();
    var month = ed.getMonth()+1;
    var datestr = ed.getYear()+"-"+month+"-"+ed.getDate();
	obj1.innerHTML="出发：<input  type=\'text\' name=\'"+sName+"\' readonly value=\'"+pValue+"\' size=\""+pSize+"\"  onClick=\'new WdatePicker(this,\"%Y-%M-%D %h:%m:%s\",true)\'>&nbsp;到达：<input  type=\'text\' name=\'"+eName+"\' readonly value=\'"+pValue+"\' size=\""+pSize+"\"  onClick=\'new WdatePicker(this,\"%Y-%M-%D %h:%m:%s\",true)\'>&nbsp;在途：<input  type=\"text\"  name=\""+zName + "\"  size='3' onClick=\'jsPassage("+formName+"."+sName+".value,"+formName+"."+eName+".value,this)\'>小时";
	obj1.align="center";
}	
	
  Date.prototype.dateDiff = function(interval,objDate){
    //若參數不足或 objDate 不是日期物件則回傳 undefined
    if(arguments.length<2||objDate.constructor!=Date) return undefined;
    switch (interval) {
      //計算秒差
      case "s":return parseInt((objDate-this)/1000);
      //計算分差
      case "n":return parseInt((objDate-this)/60000);
      //計算時差
      case "h":return parseInt((objDate-this)/3600000);
      //計算日差
      case "d":return parseInt((objDate-this)/86400000);
      //計算週差
      case "w":return parseInt((objDate-this)/(86400000*7));
      //計算月差
      case "m":return (objDate.getMonth()+1)+((objDate.getFullYear()-this.getFullYear())*12)-(this.getMonth()+1);
      //計算年差
      case "y":return objDate.getFullYear()-this.getFullYear();
      //輸入有誤
      default:return undefined;
    }
  }
//有提示信息
function formxy(obj){
	var forms = document.all(obj);
	var message="";
	for(var i=0;i<forms.length;i++){
		if(forms[i].className=="notNull"){
			if(forms[i].value==null||forms[i].value==""){
				forms[i].style.border="2px solid red"; 
				message="关键字段必须填写！";
			}
		}
	}
	if(message!=""){
		alert(message);
		return false;
	}else{
	return true;
	}
}
//不要提示信息和页面的验证结合
function formxy_notalert(obj){
	var forms = document.all(obj);
	var message="";
	for(var i=0;i<forms.length;i++){
		if(forms[i].className=="notNull"){
			if(forms[i].value==null||forms[i].value==""){
			    if(forms[i].type=='select-one'){
			     forms[i].style.color="red"; 
			    }
			    else{
			    forms[i].style.border="2px solid red"; 
			    }
				
				message="关键字段必须填写！";
			}else{
			//forms[i].style.border="1px thin"; 
			//alert('-----'+forms[i].style.border);
			 //   forms[i].style.removeProperty("border-clol");
			  forms[i].removeAttribute("style");
			}
		}
	}
	if(message!=""){
		return false;
	}else{
	return true;
	}
}

function formViewToInfo(pid){
window.parent.document.getElementById("formProperty").src="../../PropertyFromWork.do?method=toPorpertyInfo&proId="+pid;
}
 function calculator(obj){
obj.value=window.showModalDialog("../js/calculator.html", "事件配置窗口", "dialogWidth=500px;dialogHeight=200px,location:no,menubar:no,toolbar:no,status:no");
 }