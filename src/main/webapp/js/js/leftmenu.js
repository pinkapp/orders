
String.prototype.trim = function()
{
	return this.replace(/(^\s*)|(\s*$)/g, "");
}
/*-----------------修改js原有类--e---------------------
---------------------------------------------------------------------
---------------------------------------------------------------------*/

/*-----------------一些浏览公共的或常用的方法--s---------------------
---------------------------------------------------------------------
---------------------------------------------------------------------*/
//通过id获取页面上的对象，它是唯一的
function $(id){
  return document.getElementById(id); 
}
//通过name获取页面上的对象，页面上可以多个对象用同一个name，这返回一个数组，包含所有名字为name的对象。引用时可以用数组的形式访问按顺序出现的同名对象，如： $s("a")[1]取得第二个名字为a的对象。
function $s(name){
  return document.getElementsByName(name);
}
//列出对象所有属性----测试用
function listAllPara(obj){ //alert(obj);
   var str="";
	for(var i in obj){
		if(checkWebBrouser()!="IE"){
		  str+=i+"<br>   ";
		  if(i%5==0) str+="<br>\n";
		}else{
          str+=i+"|"+obj[i]+"<br>\n";
		}
	}
	alert(str); //ff用这个才不会跳过
	document.write(str);
	return false;
}
function listAllPara2(obj){ //alert(obj);
   var str="";
   if(arguments[1]) var showType=arguments[1];
   if(showType && showType==2){ //显示方式2： 当属性值存在时【不包括null但可以为0】才打印出属性和属性值
	   for(var i in obj){
		  if(obj[i] || obj[i]==0) str+="<span style=\"color:#FF0000\">"+ i + "</span> | " + obj[i] + "<br>\n";
	   }
   }else{
	  for(var i in obj){
		 str+="<span style=\"color:#FF0000\">"+ i + "</span> | " + obj[i] + "<br>\n";
	  }
   }
	//alert(str);
	if(checkWebBrouser()=="IE"){
	    var newDiv = document.createElement('<div id="msg" style="color: #154BA0; position: absolute; z-index: 40; background-color: #FFFFFF; left:0px; top: 0px; width: 600px; height: 300px; overflow:auto"></div>')
        document.body.insertBefore(newDiv);
	    $("msg").innerHTML=str;
	}else{
		var newDiv = document.createElement('DIV');
		newDiv.id="msg";
		newDiv.style.backgroundColor="#FFFFFF";
		newDiv.style.left="0px";
		newDiv.style.top="0px";
		newDiv.style.width="600px";
		newDiv.style.height="300px";
		newDiv.style.overflow="auto";
		newDiv.style.zIndex =40;
		newDiv.style.position ="absolute";
		  document.body.appendChild(newDiv);
		$("msg").innerHTML=str;
	}
	return false;
}
//--------------------------获取对象绝对位置 s----------------------------------------
function findPosX(obj){
var curleft = 0; //listAllPara2(obj);
curleft +=obj.offsetLeft; // alert(curleft);
if(obj.offsetParent){ //返回父类元素，大多说offsetParent返回body
   while (obj.offsetParent){//遍历所有定位有关的父类元素
    curleft += obj.offsetLeft;  //alert(obj.tagName+" | "+obj.offsetLeft);//当前元素的左边距
    //obj = obj.offsetParent; 
		if(obj.tagName=="FIELDSET"){ //alert(obj.currentStyle.borderTopWidth);
			curleft += parseInt(obj.currentStyle.borderTopWidth); 
		}
		
	obj = obj.parentNode;
   } 
} else if (obj.x) curleft += obj.x;
return curleft;
}
function findPosY(obj){
var curtop = 0;
curtop +=obj.offsetTop;
if (obj.offsetParent) {
   while (obj) {
    curtop += obj.offsetTop;
		if(obj.tagName=="DIV"){ // alert(obj.tagName+" | "+obj.offsetTop+" | "+obj.innerHTML); //有滚动条
		//	alert(obj.innerHTML+"|"+obj.previousSibling);
			if(obj.scrollHeight>obj.offsetHeight){ //alert(1)
			curtop -= parseInt(obj.scrollTop);
			}
	    }
    obj = obj.offsetParent;
   }
} else if (obj.y) curtop += obj.y;
return curtop;
}
function findPosY2(obj){ //解决ff 的div在无其他临近节点时不算定位元素的问题【计入滚动距离】
var curtop = 0, objOld=obj;
curtop +=obj.offsetTop;
if (obj.offsetParent) {
	while (obj) {
    curtop += obj.offsetTop;
		if(obj.tagName=="DIV"){ // alert(obj.tagName+" | "+obj.offsetTop+" | "+obj.innerHTML); //有滚动条
		//	alert(obj.innerHTML+"|"+obj.previousSibling);
			curtop -=obj.offsetTop;
			
	    }
    obj = obj.offsetParent;
   }
   while (objOld) {
		if(objOld.tagName=="DIV"){ // alert(obj.tagName+" | "+obj.offsetTop+" | "+obj.innerHTML); //有滚动条
		  if(objOld.scrollHeight>objOld.offsetHeight){// alert(objOld.scrollTop)
			curtop -= parseInt(objOld.scrollTop);
			}
	    }
    objOld = objOld.parentNode;
   }
} else if (obj.y) curtop += obj.y;
return curtop;
}

function getPos(obj){
return {x:findPosX(obj),y:findPosY(obj)};
}

function showPos(obj){
var pos = getPos(obj);
alert("x=="+pos.x+"  y=="+pos.y);

}
//--------------------------获取对象绝对位置 e----------------------------------------

//返回网页参数 形如 somepage.html?para=1， ?后面的参数。若没有参数返回空数组，空数组等价于""
function pageSearchParas(){
	var paras=new Array();
	var url= window.location.search;
	if (url.indexOf("?")!=-1){
		var strs=url.substr(1).split("&");
		for(i=0; i<strs.length; i++){
			paras.push(new Array(strs[i].split("=")[0],unescape(strs[i].split("=")[1])));
		}
	}
	return paras; //返回一个包含参数名和参数值的二维数组。
}
/*-----------------一些浏览公共的或常用的方法--e---------------------
---------------------------------------------------------------------
---------------------------------------------------------------------*/

/*-----------------补充的一些浏览器兼容代码--s-----------------------
---------------------------------------------------------------------
---------------------------------------------------------------------*/
//ff子节点前后经常有#text节点【不是紧挨着的节点，或第一个子节点没有紧挨着父节点的开始标签之后，那就有(不紧挨包括换行,但无论有没有字符，不紧挨着就有且只有一个#text节点;而ie只有在有字符时才有#text节点)】，此方法取子节点排除此bug。 试验页：F:\stz\PMT\pmt-new2008-6-6\pmt-new2.1\psd\textNode.html.
//另：ie中，如果有2个子节点相邻，且前面都有小空格（也可以是换行），那第二个小空格（或换行）算文本节点！， 所以本方法是在所有子节点前都加入文本节点。
function getChildNodes(obj,childOrder){ 
		   /*
			var childNode=obj.childNodes[childOrder];
			while(childNode.nodeType!=1){
			   childNode=childNode.nextSibling;
			}
			*/
	var childNode=obj.childNodes[childOrder]; //alert(childNode.tagName); return;
	//if(checkWebBrouser()=="IE"){
		var pChilds=obj.childNodes, j=pChilds.length;
		for(var i=0; i<j; i++){ //alert(pChilds.length);
	 //	alert(pChilds[i].nodeType);
			if(pChilds[i].nodeType==1 && i%2==0){ //i%2==0 奇数位置的元素。
				obj.insertBefore(document.createTextNode(" "),pChilds[i]);
				i++;
				j++;
				pChilds=obj.childNodes;
			}
		}
		
	//}alert(obj.childNodes[0].nodeType);
// alert(obj.childNodes.length); //obj.childNodes.length  obj.childNodes[4].nodeType
	return obj.childNodes[2*childOrder+1]; //obj.childNodes[childOrder+childOrder+1]演变
}
//检查浏览器 navigator.userAgent
function checkWebBrouser(){
   if(navigator.userAgent.indexOf("MSIE")>0){
        return "IE";
   } 
   if(navigator.userAgent.indexOf("Firefox")>0){
        return "FF";
   } 
   if(navigator.userAgent.indexOf("Safari")>0){
        return "Safari";
   }  
   if(navigator.userAgent.indexOf("Camino")>0){
        return "Camino";
   } 
   if(navigator.userAgent.indexOf("Gecko")>0){
        return "Gecko";
   }
}
//这个函数用来判断ie的版本。仅在checkWebBrouser()的判断为IE的条件里使用
function getIEVersion()
{
	var verStr=navigator.appVersion;
	if(checkWebBrouser()=="IE") 
    {
           if(verStr.match(/6./i)=='6.') 
           {
                return "IE6";
           }
		 if (verStr.indexOf("MSIE 3.0")!=-1 || verStr.indexOf("MSIE 4.0") != -1 || verStr.indexOf("MSIE 5.0") != -1 || verStr.indexOf("MSIE 5.1") != -1)
           return "IE5.1";
    }
}
//注册firefox innerText 
if(checkWebBrouser()!="IE"){
HTMLElement.prototype.__defineGetter__("innerText", 
function(){ 
  var anyString = ""; 
  var childS = this.childNodes; 
  for(var i=0; i<childS.length; i++) {
	if(childS[i].nodeType==1) 
      anyString += childS[i].tagName=="BR" ? '\n' : childS[i].innerText; 
    else if(childS[i].nodeType==3) 
      anyString += childS[i].nodeValue; 
  } 
  return anyString;
 }
);
HTMLElement.prototype.__defineSetter__("innerText", 
 function(sText){ 
   this.textContent=sText; 
 } 
);
} //if(checkWebBrouser()!="IE")


//attach事件兼容
function addEvent(oElement,sEvent,func){ 
  if (oElement.attachEvent){ 
    oElement.attachEvent(sEvent,func); 
  } 
  else{
    sEvent=sEvent.substring(2,sEvent.length); 
    oElement.addEventListener(sEvent,func,false); 
  } 
}

//触发事件源
function eventMatchObj(e){ 
  //var webBrouser=checkWebBrouser(); 
  if(window.event){  //webBrouser=="IE";
	  return e.srcElement;
  }else if(e.target){  //alert(e.target.tagName);
	  return e.target;
  }
}

//支持事件类型
function eventMatch(e){ 
  //var webBrouser=checkWebBrouser(); 
  if(window.event){  //webBrouser=="IE";
	  return "winEvent";
  }else if(e.target){  //alert(e.target.tagName);
	  return "Target";
  }
}
/*-----------------补充的一些浏览器兼容代码--e-----------------------
---------------------------------------------------------------------
---------------------------------------------------------------------*/

/*-----------------窗口相关--s--------------------------------------
---------------------------------------------------------------------
---------------------------------------------------------------------*/
function showDialog(page){
	return openModalDialog(page,null,[400,620,,,'help:0;scroll:0;resizable:0;status:0; unadorned:1;']);
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


function openWindow(url,windowWidth,windowHeight)
{
		var property= 'menubar=no,toolbar=no,location=no,directories=no,status=no,scrollbars=no,titlebar=no,resizable=no';
     	
     	//window width & heigh
     	//var windowWidth = 480;
     	//var windowHeight = 300;
     	
     	var windowTop    = (window.screen.height - windowHeight)/2;
     	
     	var windowLeft   = (window.screen.width - windowWidth)/2;
     	
     	var locationInfo = ",width=" + windowWidth + ",height=" + windowHeight + ",top=" + windowTop + ",left=" + windowLeft;
     	
     	property += locationInfo;
     	
		window.open(url, "", property);
}
/*-----------------窗口相关--e--------------------------------------
---------------------------------------------------------------------
---------------------------------------------------------------------*/





function changeColor1(object)
{
    object.style.backgroundColor='';
}

function changeColor2(object)
{
    object.style.backgroundColor='#BFDFFF';
}
function delete1(){
//	/*
	if(!confirm("Are You Sure To Delete ?")){
	  return false;
	}
	else{
	  //location.href = "right.html";
	  return true;
	}
//	*/
}

/*==========================实现复选框逻辑部分s=========================================*/

var initChecked=1; //防止attachEvent多次. 那样会响应多次.
function initCheckEvent(obj){// alert(1)
	if(arguments[1]) initChecked=arguments[1]; // 当一个页面中有多个from时用到此参数【参数2】
   var eles = obj.elements;
	if (eles.length > 0)
	{ var checkboxNum=0;
		if(initChecked){
		for (var i=0; i<eles.length; i++)
		{//alert(eles[i].clientTop);
			var node = eles[i];
			if (node.type == "checkbox" && node.disabled == false)
			{
				//node.attachEvent("onclick",disableAddBtn);
				//node.attachEvent("onmouseover",handMouse);
				addEvent(node,"onclick",disableAddBtn);
				addEvent(node,"onmouseover",handMouse);
				checkboxNum++;
				//node.onmouseover="alert('df')";
			}
		}//for
		  initChecked=0;
		}  
	  //alert(checkboxNum);
	}
}
function handMouse(e){ //默认传入event对象 
	var eventObj=eventMatchObj(e);  //alert(eventObj.tagName);
	eventObj.style.cursor="pointer";
}
function disableAddBtn(e){
 // /*
  //alert("ff");
  var eventObj=eventMatchObj(e);    //alert(eventObj.tagName);
  var form=null;
   //alert(typeof(arguments[0])); //all object
  if(typeof(arguments[0])=="string"){ //alert(arguments[0]); ?? 我也忘了干吗用的了
	  form=document.getElementById(arguments[0]);
  }else{
	 while(eventObj.tagName != 'FORM')
	 {
		 eventObj = eventObj.parentNode;
	 }
	 form=eventObj;
  }
  
 //  alert(form.id);
  var allNoChecked=true;//全未选中
  var oneChecked=false;
  var allCheckBoxNum=0;
  var subCheckedBoxNum=0;
   
  var eles = form.elements; 
	if (eles.length > 0)
	{ //alert(eles[0].id);
	 //alert(eles.length);
	 var selectAllBox=null; //全选筐
		for (var i=0; i<eles.length; i++)
		{
			var node = eles[i];
			if (node.type == "checkbox" && node.disabled == false)
			{  //alert(node.id.indexOf("selectAll"));
			  if(node.id.indexOf("selectAll")<0){ //if 1 : 排除第一个复选筐[它是全选的],复选筐中只有它的id含selectAll
				  allCheckBoxNum++; //alert(node.id);
			   if(!node.checked){
				  allNoChecked=true;
				}else{
				  allNoChecked=false;
				  oneChecked=true;
				  subCheckedBoxNum++;
				}
			  }else{
				  selectAllBox=node;
			  }//if 1
			}
		}//for
	}
	
	
	if(allCheckBoxNum==subCheckedBoxNum){
	   selectAllBox.checked=true;
	}else{
		selectAllBox.checked=false;
	}
//	*/
}

function handleSelectAllEvent(formId,selAllId)
{
	var selector = $(selAllId);
	if (selector.checked == true)
	{
		selectAll(formId);
	}
	else
	{
		deselectAll(formId);	
	}
}
/**
 *	Select All checkboxes in the form except for the disables.
 */
function selectAll(formId)
{
	var form = $(formId);
	var eles = form.elements;
	if (eles.length > 0)
	{
		for (var i=0; i<eles.length; i++)
		{
			var node = eles[i];
			if (node.type == "checkbox" && node.disabled == false)
			{
				node.checked = true;
			}
		}
	}
}
/**
 *	Deselect All checkboxes in the form except for the disables.
 */
function deselectAll(formId)
{
	var form = $(formId);
	var eles = form.elements;
	//alert(eles.length);
	if (eles.length > 0)
	{
		for (var i=0; i<eles.length; i++)
		{
			var node = eles[i];
			//alert(node.tagName);
			if (node.type == "checkbox" && node.disabled == false)
			{
				node.checked = false;
			}
		}
	}
}


/*==========================初始化界面元素s================================*/
//内页层高度，以保证ff里出现滚动条
function initContentDiv(fomrNum){  //fomrNum : body里有几组form表单。
  var contentDiv=document.getElementById("contentDiv"); //alert(document.body.scrollHeight);
  if(checkWebBrouser()=="IE"){
      contentDiv.style.height="100%";
	 //contentDiv.style.height=document.body.scrollHeight-25+"px";
  }else{
	  contentDiv.style.height=document.body.scrollHeight-25+"px"; //减去顶部行距离25
	  //initDelBtn(fomrNum); //解决火狐浏览器disabled不灰色
  }
  //初始化所有复选框不选：
	var inputs=document.getElementsByTagName("INPUT");
	for(i=0;i<inputs.length;i++){
		if(inputs[i].type=="checkbox" && !inputs[i].disabled){
			inputs[i].checked=false;
		}
	}
}
function initTabDiv(){ 
	//alert(bodyHeight);//alert(event.type);// alert(para1); //top.clientHeight
	 if(arguments[0]){ // alert('b');
		 var div=$(arguments[0]);
         div.style.height=document.body.clientHeight-arguments[1]+"px";
	 }else{
        var div=$("tab_div");
	    div.style.height=document.body.clientHeight-80+"px";
	 }
}

//iframe 的高度要设置（100%不行）
function initIframeHeight(iframeName){ //alert("a");
	var iframe=$(iframeName);
	//var contentDiv=document.getElementById("contentDiv"); //alert(contentDiv.scrollHeight);
	if(arguments[1]){
		iframe.height=document.body.scrollHeight-30-arguments[1];
	}else{
	iframe.height=document.body.scrollHeight-30;}
}
function showDetail(event){
	var detailDiv1Child=$("detailDiv1Child");
	 var detailDiv1=$("detailDiv1");
	// alert(eventMatch(e));
	 if(eventMatch(event)=="winEvent"){  //listAllPara2(e);return;
		 detailDiv1.style.posLeft=event.clientX;
		 detailDiv1.style.posTop=event.clientY;

		 detailDiv1Child.style.posLeft=detailDiv1.style.posLeft+24;
	     detailDiv1Child.style.posTop=detailDiv1.style.posTop+55;
		 
	 }else{//alert(event.clientX);
		 detailDiv1.style.left=event.clientX; //alert(detailDiv1.style.left); return;
		 detailDiv1.style.top=event.clientY;

		 detailDiv1Child.style.left=event.clientX+24//detailDiv1.style.left+24; detailDiv1.style.left带了px啊。。
	     detailDiv1Child.style.top=event.clientY+55//detailDiv1.style.top+55;
	 }
}

function showDiv(id,divNum){ //divNum 共有几个需控制的隐藏层
    var div=$(id); //alert(div.id);
	for(var i=1;i<=divNum;i++){
		$("hideDiv_handin"+i).style.display="none";
		//alert($("hideDiv"+i));
	} //此for为隐藏其他层。2008-7-21
	div.style.display="";
}
function creatIframeIe6(divobj){
	var iframeId=divobj.id+"_iframe", iframe=$(iframeId);
	if(!iframe){
		divobj.insertAdjacentHTML("afterEnd",'<iframe id="'+ iframeId +'"  frameborder="0" style="position: absolute; z-index:39; background-color: #FFFFFF; left:'+ parseInt(divobj.style.posLeft)*1.02 +'px; top: '+ divobj.style.posTop +'px; width: '+ parseInt(divobj.scrollWidth)*0.98 +'px; height: '+ divobj.scrollHeight +'px; "></iframe>');
	}else{
		iframe.style.display="";
	}
}
//显示层法2 居中提示层
function showDiv2(id){ //层对象id
    var div=$(id); //alert(div.id);
	div.style.display="";
	if(checkWebBrouser()=="IE"){
		div.style.posLeft=(document.body.clientWidth-div.clientWidth)/4;  //alert(window.screen.height/2);
	    div.style.posTop=(document.body.clientHeight-div.clientHeight)/4;
		//兼容ie6 层被select挡住
		creatIframeIe6(div);
	}else{
		  div.style.left=(document.body.clientWidth-div.clientWidth)/4;
	      div.style.top=(document.body.clientHeight-div.clientHeight)/4;
	}
}
//显示层法3 
function showDiv3(){ //层对象id
    //var div=$(id); //alert(div.id);
	for(var i=0;i<arguments.length;i++){ //alert(arguments[i]);
		if(i<arguments.length-1)
		  $(arguments[i]).style.display="none";
		//alert($("hideDiv"+i));
	} //此for为隐藏其他层。2008-7-21
	//alert($(arguments[arguments[arguments.length-1]-1]).id);
	$(arguments[arguments[arguments.length-1]-1]).style.display="table";
	//div.style.display="";
}
//层隐藏-----------------------------
function closeDivComan(objid){
    var obj=$(objid);
	if(obj){
		obj.style.display="none";
	}
	
	var iframeId=objid+"_iframe", iframe=$(iframeId);
	if(iframe){
		iframe.style.display="none";
	}
}
//obj元素 所在的层隐藏
function closeDiv(obj){
    while(obj.tagName!="DIV"){
	    obj=obj.parentNode;
	}
	if(obj){
		obj.style.display="none";
	}
}
//obj元素 所在的元素隐藏. 比closeDiv更通用
function closeElement(obj,pTagName){
    while(obj.tagName!=pTagName){
	    obj=obj.parentNode;
	}
	if(obj){
		obj.style.display="none";
	}
}
// 隐藏层.
function closeElement2(contId){
	$(contId).style.display="none";
}
//兼容ff按钮disabled置灰
function initDelBtn(fomrNum){
	//alert(fomrNum);
 if(fomrNum>1){
	for(var i=0; i<fomrNum; i++){
	var submit_Delete=$s("Submit_Delete")[i];
	if(submit_Delete){ //火狐错误会堆栈，如果找不到次对象，下面又引用，那js会暂停运行。 ie不会。
	 if(submit_Delete.getAttribute("disabled"))
		 submit_Delete.style.color="#999999";
	}
	}//for
 }else{
	 var submit_Delete=$s("Submit_Delete")[0];
	if(submit_Delete){
	 if(submit_Delete.getAttribute("disabled"))
		 submit_Delete.style.color="#999999";
	}
 }
}
//表头不动，其他可滚动的js。
function initTblContD(tbRowsNum){ //tbRowsNum:显示的行数
   var tableContent="tableContent", tableHead="tableHead", scrollBarWidth="scrollBarWidth";
   if(arguments[2]) tableContent = arguments[2];
   if(arguments[1]) tableHead = arguments[1];
   if(arguments[3]) scrollBarWidth = arguments[3];
    var tbDiv=$(tableContent), table=getChildNodes(tbDiv,0), scrollBar=$(scrollBarWidth); 
	if(table.rows.length<=0) return;
	//alert(parseInt(scrollBar.style.width)); //alert(table.rows.length);
	//与滚动条一致
	//listAllPara2(tbDiv); //alert(tbDiv.offsetWidth +"|" +tbDiv.scrollWidth);
	var tableRows=table.rows, tableHeadDiv=$(tableHead), tableHead=getChildNodes(tableHeadDiv,0);
	//tableRows[0].style.display="none";
	var trOldRowW=tableRows[0], tds=trOldRowW.cells, trNewRowW=tableRows[1];//, tableHeadTds=tableHead.rows[0].cells;   //alert(tableHead.innerHTML);
	for(var i=0; i<tds.length; i++){
	   trNewRowW.cells[i].setAttribute("width",tds[i].getAttribute("width")); //静态的html里由于我第二行没有百分比，故要这样才不会乱。 jsf的百分比是一次设置所有行的，所以可以不要这句。
	     tableHead.rows[0].cells[i].innerHTML=tds[i].innerHTML;
	  // tableHeadTds[i].setAttribute("width",tds[i].getAttribute("width"));
	}
	table.deleteRow(0);
	
	//以下根据tbRowsNum 设置内部层的高度
	var tableH=0;
	for(var i=0; i<tableRows.length; i++){
	   tableH+=tableRows[i].offsetHeight;
	   if(i==tbRowsNum-1) break;
	}
	tbDiv.style.height=tableH; //tableH  alert(tbDiv.offsetWidth +"|" +tbDiv.scrollWidth);//tbRowsNum*table.cells[0].offsetHeight
	
	//以下根据有否滚动条调整表头的宽度
	// alert(tbDiv.offsetWidth); alert(tbDiv.scrollWidth);  
	if(tbDiv.offsetWidth<=tbDiv.scrollWidth){ //alert(tbDiv.offsetWidth-tbDiv.scrollWidth) //没有滚动条就是=  但ie有没有滚动条都进，怪异。
	//  scrollBar.style.width = tbDiv.offsetWidth - tbDiv.scrollWidth; return;
	
	  if(checkWebBrouser()=="IE"){ 
		var outerDiv=tbDiv.parentNode;  //alert(outerDiv.parentNode);
		while(outerDiv.tagName!="DIV"){
			outerDiv=outerDiv.parentNode;
		} //alert(tbDiv.parentNode.id);
		if(outerDiv.offsetWidth!=outerDiv.scrollWidth){ 
			scrollBar.style.width = 2*(tbDiv.offsetWidth - tbDiv.scrollWidth); 
		}else{
		   scrollBar.style.width = tbDiv.offsetWidth - tbDiv.scrollWidth; 
		}
	  }
	  if(checkWebBrouser()=="FF"){ 
	    var outerDiv=tbDiv.parentNode;
		while(outerDiv.tagName!="DIV"){
			outerDiv=outerDiv.parentNode;
		}
		if(outerDiv.offsetWidth!=outerDiv.scrollWidth){ 
		  //tbDiv.style.height=tableH;
			scrollBar.style.width = 20;
			tbDiv.style.width=tbDiv.offsetWidth-24-17; 
		}
	  }
	}else{// alert(1)
	  if(checkWebBrouser()=="FF"){ 
	    var outerDiv=tbDiv.parentNode;
		while(outerDiv.tagName!="DIV"){
			outerDiv=outerDiv.parentNode;
		}
		if(outerDiv.offsetWidth!=outerDiv.scrollWidth){// alert(1)
			scrollBar.style.width = tbDiv.offsetWidth - tbDiv.scrollWidth + 22; //alert(tbDiv.offsetWidth - tbDiv.scrollWidth)
			tbDiv.style.width=tbDiv.offsetWidth-24-17;
		}
	  }
	}
	
	//var thead=table.tHead, tbRows=table.rows;  alert(thead.offsetHeight); // +"|"+ tbRows.length
}


// img:图片对象， id：tr的id
function showTR(img,id){ 
   var tr=$(id);
   if(tr.style.display=="none"){
	   tr.style.display="";
	   img.src=img.src.replace("arrowNomal.gif","arrowDown.gif");
   }else{
	   tr.style.display="none";
	   img.src=img.src.replace("arrowDown.gif","arrowNomal.gif");
   }
}

//-----------------总体左侧菜单特效-------------------------------
//2级菜单里点击表格触发其内链接的代码
function show3ChildMenu2(obj,url,haschild){ //alert(getChildNodes(getChildNodes(obj,1),1).tagName);return; //getChildNodes(obj,1) tagName
    var hiddenInput=getChildNodes(getChildNodes(obj,1),0);  //alert(hiddenInput.tagName); return;
    setOtherTableInput(obj);
  hiddenInput.value=2;
  obj.className = "menuClickClass";
  // var url = "page/content.html";
	if(!haschild) 
	 top.mainFrame.location=url;
	 
   if(haschild){
	   var nextEle=obj.nextSibling;
	   while(nextEle.nodeName!="TR"){
		   nextEle=nextEle.nextSibling;
		}
	   if(nextEle.style.display=="none"){nextEle.style.display=""}else{nextEle.style.display="none"}
   }
}
function show3ChildMenu0(obj,url,haschild){ //alert(getChildNodes(getChildNodes(obj,1),1).tagName);return; //getChildNodes(obj,1) tagName
    var hiddenInput=getChildNodes(getChildNodes(obj,1),0);  //alert(hiddenInput.tagName); return;
   //setOtherTableInput(obj);
   hiddenInput.value=2;
   var imgInput=getChildNodes(getChildNodes(obj,0),0);  
   var imageSrc = imgInput.src;
   var imagePath = imageSrc.substring(imageSrc.lastIndexOf("/")+1);
   if(imagePath=="left_1.gif"){
	    imgInput.src = "../../images/frame_menu/left_2.gif";
   }else{
	   imgInput.src = "../../images/frame_menu/left_1.gif";
   }
   if(obj.className == "menuClickClass"){
	   obj.className = "menuUpClass";
   }else{
	    obj.className = "menuClickClass";
   }
  
	if(!haschild) 
	 top.mainFrame.location=url;
	 
   if(haschild){
	   var nextEle=obj.nextSibling;
	   while(nextEle.nodeName!="TR"){
		   nextEle=nextEle.nextSibling;
		}
	   if(nextEle.style.display=="none"){nextEle.style.display=""}else{nextEle.style.display="none"}
   }
}
//特殊
function show3ChildMenu22(obj,url,haschild){ //alert(getChildNodes(getChildNodes(obj,1),1).tagName);return; //getChildNodes(obj,1) tagName
  var hiddenInput=getChildNodes(getChildNodes(obj,1),0);  //alert(hiddenInput.tagName); return;
    setOtherTableInput(obj);
  hiddenInput.value=2;
  alert(haschild);
  //obj.className = "menuClickClass";
	if(!haschild) 
	 top.mainFrame.location=url;
	 
   if(haschild){
	   var nextEle=obj.nextSibling;
	   while(nextEle.nodeName!="TR"){
		   nextEle=nextEle.nextSibling;
		}
	   if(nextEle.style.display=="none"){nextEle.style.display=""}else{nextEle.style.display="none"}
   }
}
function setOtherTableInput(obj){
	var tbody=obj.parentNode; //alert(tbody.childNodes.length)
	var childrows=tbody.rows;
	//alert(getChildNodes(getChildNodes(childrows[1],1),0).tagName); return;
	for(var i=0;i<childrows.length;i++){
		if(childrows[i].className == "menuClickClass" ){
		  childrows[i].className = "menuUpClass";
		  getChildNodes(getChildNodes(childrows[i],1),0).value=1;
		}
	}
}

//鼠标悬停,取的img图片是为了标志当前行是否是当前点击的行, width==1表示未点击,==2表示点击
function fa2Over(obj) { //listAllPara2(obj);
//alert(getChildNodes(obj,0).innerHTML); return;
 //alert(getChildNodes(getChildNodes(obj,1),1).tagName); return;
	var hiddenInput=getChildNodes(getChildNodes(obj,1),0);  //alert(hiddenInput.type); return;
	if(parseInt(hiddenInput.value)==1) obj.className = "menuOverClass";
}
function fa2Out(obj) {  //return;
	var hiddenInput=getChildNodes(getChildNodes(obj,1),0);
	if(parseInt(hiddenInput.value)==1) obj.className = "menuUpClass";
}

//二级菜单：
function show3ChildMenu3(obj,url){
  /**
  var childrows=obj.parentNode.childNodes; //alert(obj.parentNode.childNodes.length);
  for(var i=0;i<childrows.length;i++){
	 if(childrows[i].nodeType!=3){
		if(childrows[i].className=="childMenuTdClick"){
		  childrows[i].className="";
		  getChildNodes(childrows[i],0).value=1;
		}
	 }
	}
  getChildNodes(obj,0).value=2;
  obj.className="childMenuTdClick";
  **/
  var url = "page/content.html";
  top.mainFrame.location=url; 
}

function show3ChildMenu(obj,url){
	  top.mainFrame.location=url; 
}

function faOverChild(obj) { //alert(getChildNodes(obj,0).value);
	if(parseInt(getChildNodes(obj,0).value)==1)
	obj.className="childMenuTdOver";
}
function faOutChild(obj) {
	if(parseInt(getChildNodes(obj,0).value)==1)
	obj.className="";
}
//层显示子目录
function show3ChildMenu4(obj,url){ //alert(getChildNodes(getChildNodes(obj,1),1).tagName);return; //getChildNodes(obj,1) tagName
  var nextDiv=obj.nextSibling; //alert(nextDiv); return;
  if(nextDiv.style.display=="none"){
    nextDiv.style.display="";
	obj.innerText=obj.innerText.replace("+","--");
  }else{
    nextDiv.style.display="none";
	obj.innerText=obj.innerText.replace("--","+");
  }
}
//层显示 二级目录连接
function show3ChildMenu5(obj,url){ //alert(getChildNodes(getChildNodes(obj,1),1).tagName);return; //getChildNodes(obj,1) tagName
	hideOther2Menu(obj);
	obj.className='active';
	getChildNodes(obj,0).value=2;
	//listAllPara2(contentIframe);
	contentIframe.location=url;
}
//隐藏其他二级菜单及修改样式为默认。
function hideOther2Menu(obj){
	var parentdiv=obj.parentNode;
	var topdiv=parentdiv.parentNode.parentNode, topdivChilds=topdiv.childNodes;
	//alert(topdivChilds.length);
	for(var i=0;i<topdivChilds.length;i++){ //alert(i);
		if(topdivChilds[i].getAttribute("haschild")){ 
			var allchilds=topdivChilds[i].nextSibling.childNodes[0].childNodes;  
			for(var j=0;j<allchilds.length;j++){
		       allchilds[j].className='';
		       getChildNodes(allchilds[j],0).value=1;
	        }
		}
		//alert(topdivChilds[i].getAttribute("haschild"));
	}
	//getAttribute("haschild");
  /*
  for(var i=0;i<allchilds.length;i++){
		allchilds[i].className='';
		getChildNodes(allchilds[i],0).value=1;
	}
	*/
}
function divOverChild(obj) {
   if(parseInt(getChildNodes(obj,0).value)==1)
	 obj.className='over';
}
function divOutChild(obj) {
	if(parseInt(getChildNodes(obj,0).value)==1)
	obj.className='';
}

function switchComment5_1(){ //在载入extraFunc.html时读取传入的层参数以显示该层。
	//alert(pageSearchParas());
	var divNum=pageSearchParas();
	if(divNum!=""){ //空数组等价于""
		divNum=divNum[0][1];
	}else{ 
		divNum=1;
	}
	switchComment(divNum,$("list"+divNum))
	//alert(liObjArray[2].outerHTML);
}
/*-----------------tab页效果---------------------------------*/
var CurComId=1,widthed=0;
function switchComment(Id,tabbar){
	for(var i=0;i<$("tab").childNodes.length;i++) {
		$("tab").childNodes[i].className="tab_li_off"	
	}//alert(tabbar.outerHTML);
	tabbar.className="tab_li_on"

	if (Id!=CurComId){
		eval("document.getElementById('tab" + Id.toString() + "').style.display='block';");
		eval("document.getElementById('tab" + CurComId.toString() + "').style.display='none';");
		CurComId=Id;
	} 
///* 
  //return;
	var tabdiv=$("tab_div"); //alert(tabdiv.childNodes[Id-1].innerHTML);
	if(tabdiv){ 
		var childDiv=tabdiv.childNodes[Id-1]; //alert(tabdiv.clientHeight-childDiv.clientHeight);
		//alert(parseInt(tabdiv.currentStyle.paddingTop) + parseInt(tabdiv.currentStyle.paddingBottom));
		if(tabdiv.clientHeight-(parseInt(tabdiv.currentStyle.paddingTop) + parseInt(tabdiv.currentStyle.paddingBottom)) >= childDiv.clientHeight && tabdiv.clientWidth>tabdiv.scrollWidth){ //没有滚动条
		    childDiv.style.width=tabdiv.scrollWidth-3; //alert(childDiv.clientWidth); alert(tabdiv.offsetWidth);alert(tabdiv.scrollWidth);
			//-----------------------以下是重新设置宽度的div
			 if(!widthed){
			 tabdiv.style.width=tabdiv.offsetWidth-17; //parseInt(tabdiv.style.left);
			 widthed=true;
			 }
		}
	}
//	*/
	//alert(tabdiv.scrollWidth-tabdiv.clientWidth);
	return false;
	
}

/*--------------------------------------拖动效果-----------------------------------*/
function moveStart(event,_sId){
  var oObj = $(_sId);
  oObj.onmousemove = mousemove;
  oObj.onmouseup = mouseup;
  oObj.setCapture ? oObj.setCapture() : function(){};
  oEvent = window.event ? window.event : event;
  var dragData = {x : oEvent.clientX, y : oEvent.clientY};
  var backData = {x : parseInt(oObj.style.top), y : parseInt(oObj.style.left)};
  function mousemove(){
   var oEvent = window.event ? window.event : event;
   var iLeft = oEvent.clientX - dragData["x"] + parseInt(oObj.style.left);
   var iTop = oEvent.clientY - dragData["y"] + parseInt(oObj.style.top);
   oObj.style.left = iLeft;
   oObj.style.top = iTop;
   if(getIEVersion()=="IE6"){
	   var maskDiv=document.getElementById("bottom_"+ _sId);
	    maskDiv.style.left = iLeft;
		maskDiv.style.top = iTop;
	   }
   dragData = {x: oEvent.clientX, y: oEvent.clientY};   
  }
  function mouseup(){
   var oEvent = window.event ? window.event : event;
   oObj.onmousemove = null;
   oObj.onmouseup = null;
   if(oEvent.clientX < 1 || oEvent.clientY < 1 || oEvent.clientX > document.body.clientWidth || oEvent.clientY > document.body.clientHeight){
    oObj.style.left = backData.y;
    oObj.style.top = backData.x;
	if(getIEVersion()=="IE6"){
	   var maskDiv=document.getElementById("bottom_"+ _sId);
	    maskDiv.style.left = backData.y;
		maskDiv.style.top = backData.x;
	   }
   }
   oObj.releaseCapture ? oObj.releaseCapture() : function(){};
  }
}
function moveEnd(_sId){ //有滚动条时，先触发的是滚动然后才触发onmousedown，这样造成鼠标释放后才捕获，以致离开层之后还能移动，bug。
	var oObj = $(_sId);
 	oObj.releaseCapture ? oObj.releaseCapture() : function(){};
}

/*--------------------------------------选中同名checkbox-----------------------------------*/
function checkAllSameName(ckallObj,checkboxNames){ 
	var checkboxs=$s(checkboxNames), checkStatus=ckallObj.checked; //alert(checkboxs.length);
	for(var i=0;i<checkboxs.length;i++){
		checkboxs[i].checked=checkStatus;
	}
}

function selectedValue(selectElementName){
	 var selectElement = $(selectElementName).options[$(selectElementName).selectedIndex].value;
	 return selectElement;
}

