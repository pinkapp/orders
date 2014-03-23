//★ 日期控件 Version 1.0

function showMark(oInstance){ //ie6 解决select挡住div问题。
	if(getIEVersion()=="IE6"){
	  var CalendarDiv=document.all[oInstance.sDIVID];
	  var maskDiv=document.getElementById("bottom_"+ oInstance.sDIVID);
			   if(CalendarDiv.style.display=="none")
			     maskDiv.style.visibility="hidden";
			   else
			      maskDiv.style.visibility="visible";
	}
}
//以上 +stz

function PopupCalendar(InstanceName)
{
	///Global Tag
	this.instanceName=InstanceName;
	///Properties
	this.separator="-";
	this.separatorTime=":"; //+stz 时间分隔符
	this.canmove=false; //+stz  控件层是否可拖动
	this.oBtnTodayTitle="Today";
	this.oBtnCancelTitle="Cancel";
	this.weekDaySting=new Array("S","M","T","W","T","F","S");
	this.monthSting=new Array("January","February","March","April","May","June","July","August","September","October","November","December");
	this.Width=300;
	this.currDate=new Date();
	this.today=new Date();
	this.startYear=1970;
	this.endYear=2010;
	///Css
	this.normalfontColor="#666666";
	this.selectedfontColor="red";
	this.divBorderCss="1px solid #BCD0DE";
	this.titleTableBgColor="#E8F1FF";
	this.tableBorderColor="#CCCCCC"
	///Method
	this.Init=CalendarInit; //初始化函数
	this.Fill=CalendarFill;
	this.Refresh=CalendarRefresh;
	this.Restore=CalendarRestore;
	///HTMLObject
	this.oTaget=null;
	this.oPreviousCell=null;
	this.sDIVID=InstanceName+"_Div";
	this.sTABLEID=InstanceName+"_Table";
	this.sMONTHID=InstanceName+"_Month";
	this.sYEARID=InstanceName+"_Year";
	this.sTODAYBTNID=InstanceName+"_TODAYBTN";
	//add by stz
	this.sHOURID=InstanceName+"_Hour";
	this.sMINUTEID=InstanceName+"_Minute";
	this.sSECONDID=InstanceName+"_Second";
	this.movePicPath="";

}
function CalendarInit()				///Create panel
{
	var sMonth,sYear
	sMonth=this.currDate.getMonth();
	sYear=this.currDate.getYear();
	htmlAll="<div id='"+this.sDIVID+"' style='display:none;position:absolute; z-index:1000; width:"+this.Width+";border:"+this.divBorderCss+";padding:2px;background-color:#FFFFFF; left:0px; top:0px;'>"; //moveStart(event,\'"+ this.sDIVID +"\'); ondeactivate ='alert(1)'
	htmlAll+="<div align='center'>";
	/// Month
	if(this.canmove){ //alert(this.movePicPath);
	htmloMonth="<select id='"+this.sMONTHID+"' onchange=CalendarMonthChange("+this.instanceName+") style='width:25%'>"; //<img src='"+ this.movePicPath +"moveCursor.gif' width=17 height=17 style='cursor:move'  onmousedown='moveStart(event,\""+ this.sDIVID +"\");' onmouseup='moveEnd(\""+ this.sDIVID +"\")'> 
	}else{
		htmloMonth="<select id='"+this.sMONTHID+"' onchange=CalendarMonthChange("+this.instanceName+") style='width:25%'>"; 
	}
	for(i=0;i<12;i++)
	{
		htmloMonth+="<option value='"+i+"'>"+this.monthSting[i]+"</option>";
	}
	htmloMonth+="</select>";
	/// Year
	htmloYear="<select id='"+this.sYEARID+"' onchange=CalendarYearChange("+this.instanceName+") style='width:25%'>";
	for(i=this.startYear;i<=this.endYear;i++)
	{
		htmloYear+="<option value='"+i+"'>"+i+"</option>";
	}
	htmloYear+="</select>"; //alert(this.currDate.getHours());
	htmloYear+=" <input id='"+this.sHOURID+"' value="+ this.currDate.getHours() +" maxlength=2   class='input_time'>时 <input id='"+this.sMINUTEID+"' value="+ this.currDate.getMinutes() +" maxlength=2  class='input_time'>分 <input id='"+this.sSECONDID+"' value="+ this.currDate.getSeconds() +" maxlength=2 class='input_time'>秒</div>"; //+stz
	//;
	
	/// Day
	htmloDayTable="<table id='"+this.sTABLEID+"' width='100%' border=0 cellpadding=0 cellspacing=1 bgcolor='"+this.tableBorderColor+"'>";
	htmloDayTable+="<tbody bgcolor='#ffffff'style='font-size:13px'>";
	for(i=0;i<=6;i++)
	{
		if(i==0)
			htmloDayTable+="<tr bgcolor='" + this.titleTableBgColor + "'>";
		else
			htmloDayTable+="<tr>";
		for(j=0;j<7;j++)
		{

			if(i==0)
			{
				htmloDayTable+="<td height='20' align='center' valign='middle' style='cursor:hand'>";
				htmloDayTable+=this.weekDaySting[j]+"</td>"
			}
			else
			{
				htmloDayTable+="<td height='20' align='center' valign='middle' style='cursor:hand'";
				htmloDayTable+=" onmouseover=CalendarCellsMsOver("+this.instanceName+")";
				htmloDayTable+=" onmouseout=CalendarCellsMsOut("+this.instanceName+")";
				htmloDayTable+=" onclick=CalendarCellsClick(this,"+this.instanceName+")>";
				htmloDayTable+="&nbsp;</td>"
			}
		}
		htmloDayTable+="</tr>";
	}
	htmloDayTable+="</tbody></table>";
	/// Today Button
	htmloButton="<div align='center' style='padding:3px'>"
	htmloButton+="<button id='"+this.sTODAYBTNID+"' style='width:40%;border:1px solid #BCD0DE;background-color:#eeeeee;cursor:hand'"
	htmloButton+=" onclick=CalendarTodayClick("+this.instanceName+")>"+this.oBtnTodayTitle+"</button>&nbsp;"
	htmloButton+="<button style='width:40%;border:1px solid #BCD0DE;background-color:#eeeeee;cursor:hand'"
	htmloButton+=" onclick=CalendarCancel("+this.instanceName+")>"+this.oBtnCancelTitle+"</button> "
	htmloButton+="</div>"
	/// All
	htmlAll=htmlAll+htmloMonth+htmloYear+htmloDayTable+htmloButton+"</div>";
	document.write(htmlAll);
//	document.body.insertAdjacentHTML("beforeEnd",htmlAll); //mfy +stz
	this.Fill();
}
function CalendarFill()			///
{
	var sMonth,sYear,sWeekDay,sToday,oTable,currRow,MaxDay,iDaySn,sIndex,rowIndex,cellIndex,oSelectMonth,oSelectYear
	sMonth=this.currDate.getMonth();
	sYear=this.currDate.getYear();
	sWeekDay=(new Date(sYear,sMonth,1)).getDay();
	sToday=this.currDate.getDate();
	iDaySn=1
	oTable=document.all[this.sTABLEID];
	currRow=oTable.rows[1];
	MaxDay=CalendarGetMaxDay(sYear,sMonth);

	oSelectMonth=document.all[this.sMONTHID]
	oSelectMonth.selectedIndex=sMonth;
	oSelectYear=document.all[this.sYEARID]
	for(i=0;i<oSelectYear.length;i++)
	{
		if(parseInt(oSelectYear.options[i].value)==sYear)oSelectYear.selectedIndex=i;
	}
	////
	for(rowIndex=1;rowIndex<=6;rowIndex++)
	{
		if(iDaySn>MaxDay)break;
		currRow = oTable.rows[rowIndex];
		cellIndex = 0;
		if(rowIndex==1)cellIndex = sWeekDay;
		for(;cellIndex<currRow.cells.length;cellIndex++)
		{
			if(iDaySn==sToday)
			{
				currRow.cells[cellIndex].innerHTML="<font color='"+this.selectedfontColor+"'><i><b>"+iDaySn+"</b></i></font>";
				this.oPreviousCell=currRow.cells[cellIndex];
			}
			else
			{
				currRow.cells[cellIndex].innerHTML=iDaySn;
				currRow.cells[cellIndex].style.color=this.normalfontColor;
			}
			CalendarCellSetCss(0,currRow.cells[cellIndex]);
			iDaySn++;
			if(iDaySn>MaxDay)break;
		}
	}
}
function CalendarRestore()					/// Clear Data
{
	var i,j,oTable
	oTable=document.all[this.sTABLEID]
	for(i=1;i<oTable.rows.length;i++)
	{
		for(j=0;j<oTable.rows[i].cells.length;j++)
		{
			CalendarCellSetCss(0,oTable.rows[i].cells[j]);
			oTable.rows[i].cells[j].innerHTML="&nbsp;";
		}
	}
}
function CalendarRefresh(newDate)					///
{
	this.currDate=newDate; //alert(newDate);
	this.Restore();
	this.Fill();
}
function CalendarCellsMsOver(oInstance)				/// Cell MouseOver
{
	var myCell = event.srcElement;
	CalendarCellSetCss(0,oInstance.oPreviousCell);
	if(myCell)
	{
		CalendarCellSetCss(1,myCell);
		oInstance.oPreviousCell=myCell;
	}
}
function CalendarCellsMsOut(oInstance)				////// Cell MouseOut
{
	var myCell = event.srcElement;
	CalendarCellSetCss(0,myCell);
}
function CalendarYearChange(oInstance)				/// Year Change
{
	var sDay,sMonth,sYear,newDate
	sDay=oInstance.currDate.getDate();
	sMonth=oInstance.currDate.getMonth();
	sYear=document.all[oInstance.sYEARID].value
	newDate=new Date(sYear,sMonth,sDay);
	oInstance.Refresh(newDate);
}
function CalendarMonthChange(oInstance)				/// Month Change
{
	var sDay,sMonth,sYear,newDate
	sDay=oInstance.currDate.getDate();
	sMonth=document.all[oInstance.sMONTHID].value
	sYear=oInstance.currDate.getYear();
	newDate=new Date(sYear,sMonth,sDay);
	oInstance.Refresh(newDate);
}
function checkTime(sHour,sMinute,sSecond,oInstance){ //参数是input里填的时间
	var oldTime=new Array(oInstance.currDate.getHours(),oInstance.currDate.getMinutes(),oInstance.currDate.getSeconds()); //初始化时的时间
	var r,re;  
    re=/\d/i;
	r=sHour.match(re);
	if(r!=null && sHour>=0 && sHour<24 && sHour!="") oldTime[0]=sHour;
	else document.getElementById(oInstance.sHOURID).value=oldTime[0];
	r=sMinute.match(re);
	if(r!=null && sMinute>=0 && sMinute<59 && sMinute!="" ) oldTime[1]=sMinute;
	else document.getElementById(oInstance.sMINUTEID).value=oldTime[1];
	r=sSecond.match(re);
	if(r!=null && sSecond>=0 && sSecond<59 && sSecond!="" ) oldTime[2]=sSecond;
	else document.getElementById(oInstance.sSECONDID).value=oldTime[2];
	return oldTime;
}//+stz
function CalendarCellsClick(oCell,oInstance)
{
	var sDay,sMonth,sYear,  sHour,sMinute,sSecond,newDate;
	sYear=oInstance.currDate.getFullYear();
	sMonth=oInstance.currDate.getMonth();
	sDay=oInstance.currDate.getDate();
	//+stz
	sHour=document.getElementById(oInstance.sHOURID).value.trim();//oInstance.currDate.getHours();
	sMinute=document.getElementById(oInstance.sMINUTEID).value.trim();//oInstance.currDate.getMinutes();
	sSecond=document.getElementById(oInstance.sSECONDID).value.trim();//oInstance.currDate.getSeconds();
	//+stz
	
	var checkedTime=checkTime(sHour,sMinute,sSecond,oInstance);
	sHour=checkedTime[0];
	sMinute=checkedTime[1];
	sSecond=checkedTime[2];
	
	if(oCell.innerText!=" ")
	{
		sDay=parseInt(oCell.innerText);
		if(sDay!=oInstance.currDate.getDate())
		{
			newDate=new Date(sYear,sMonth,sDay,sHour,sMinute,sSecond);
			oInstance.Refresh(newDate);
		}
	}
	sDateString=sYear+oInstance.separator+CalendarDblNum(sMonth+1)+oInstance.separator+CalendarDblNum(sDay)+ " "+CalendarDblNum(sHour)+oInstance.separatorTime+CalendarDblNum(sMinute)+oInstance.separatorTime+CalendarDblNum(sSecond)  ;	 //alert(sDateString);	///+stz return sDateString
	if(oInstance.oTaget.tagName.toLowerCase()=="input") oInstance.oTaget.value = sDateString;
	CalendarCancel(oInstance);
	return sDateString;
}
function CalendarTodayClick(oInstance)				/// "Today" button Change
{
	oInstance.Refresh(new Date());
}

function getDateString(oInputSrc,oInstance,content)
{ //content指定控件所在的父元素中 第一个带滚动条的父元素
	//alert(oInputSrc); alert(oInstance);
	if(oInputSrc&&oInstance)
	{
		var CalendarDiv=document.all[oInstance.sDIVID];
		oInstance.oTaget=oInputSrc;
	 
		/* mfb +stz*/
		//	alert(CalendargetPos(oInputSrc,"Left")+oInstance.Width); // alert(screen.width)
		CalendarDiv.style.display="";
		CalendarDiv.style.pixelLeft=-oInstance.Width-100;
		CalendarDiv.style.pixelTop=-CalendarDiv.offsetHeight-100;
		//alert(CalendarDiv.scrollHeight); alert(CalendarDiv.clientHeight);  alert(CalendarDiv.offsetHeight); 
		var posleft=CalendargetPos(oInputSrc,"Left"), postop=CalendargetPos(oInputSrc,"Top") + oInputSrc.offsetHeight;
	//	CalendarDiv.style.display=(CalendarDiv.style.display=="none")?"":"none";
		var content=$(content); 
		if(!content) content=document.body;
	    if(CalendarDiv.style.pixelLeft<0){ //显示或隐藏【其实是移动到负的一段的距离】
			if(content!=document.body){
				if(posleft+oInstance.Width <content.scrollWidth){
					CalendarDiv.style.pixelLeft=posleft-content.scrollLeft;
					CalendarDiv.style.pixelTop=postop-content.scrollTop;
				}else{
					CalendarDiv.style.pixelLeft=content.offsetWidth+parseInt(content.currentStyle.paddingLeft)+parseInt(content.currentStyle.paddingRight)-oInstance.Width;  //中间多那些是因为content的scrollWidth没算入padding的空间
					CalendarDiv.style.pixelTop=postop-content.scrollTop;
				}
			}else{ // if(content!=document.body)
				if(posleft+oInstance.Width <content.scrollWidth){
					if(postop+CalendarDiv.clientHeight<content.scrollHeight){
						CalendarDiv.style.pixelLeft=posleft;
						CalendarDiv.style.pixelTop=postop;
				    }else{
						CalendarDiv.style.pixelLeft=posleft;
						CalendarDiv.style.pixelTop=CalendargetPos(oInputSrc,"Top")-CalendarDiv.offsetHeight;
				    }
				}else{
					if(postop+CalendarDiv.clientHeight<content.scrollHeight){
						CalendarDiv.style.pixelLeft=content.scrollWidth-oInstance.Width; 
						CalendarDiv.style.pixelTop=postop; 
				    }else{
						CalendarDiv.style.pixelLeft=content.scrollWidth-oInstance.Width; ;
						CalendarDiv.style.pixelTop=CalendargetPos(oInputSrc,"Top")-CalendarDiv.offsetHeight;
				    }
				}
			}
		}else{
			CalendarDiv.style.pixelLeft=-oInstance.Width-100;
		    CalendarDiv.style.pixelTop=-CalendarDiv.offsetHeight-100;
		}
		if(getIEVersion()=="IE6"){ //+stz 解决ie6 层被select挡住的bug
		//alert(1);
		   var maskDiv=document.getElementById("bottom_"+ oInstance.sDIVID);
		   if(!maskDiv){
		   var framemask = "<iframe src='' frameborder='0' id='bottom_"+ oInstance.sDIVID +"'  style='visibility:visible;position:absolute;width:0px;height:0px;left:0px;top:0px;background-color:#ffffff; z-index:999'></iframe>" // allowtransparency='true'
		   document.body.insertAdjacentHTML("beforeEnd", framemask);
		   maskDiv=document.getElementById("bottom_"+ oInstance.sDIVID);
		   maskDiv.style.width = CalendarDiv.offsetWidth; 
			maskDiv.style.height = CalendarDiv.offsetHeight;
			maskDiv.style.left = CalendarDiv.style.pixelLeft;
			maskDiv.style.top = CalendarDiv.style.pixelTop;
			
			if(content!=document.body){ //alert(1);
				if(posleft+oInstance.Width <content.scrollWidth){  //alert(2);
					//maskDiv.style.left=posleft-content.scrollLeft; //alert(postop-content.scrollTop);
					//maskDiv.style.top=postop-content.scrollTop;
					maskDiv.style.left=posleft-content.scrollLeft;//alert(postop-content.scrollTop);
					maskDiv.style.top=postop-content.scrollTop;
				}else{ //alert(3);
					maskDiv.style.pixelLeft=content.offsetWidth+parseInt(content.currentStyle.paddingLeft)+parseInt(content.currentStyle.paddingRight)-oInstance.Width;  //中间多那些是因为content的scrollWidth没算入padding的空间
					maskDiv.style.pixelTop=postop-content.scrollTop;
				}
			}
			//alert(maskDiv);
		   }else{
			  showMark(oInstance);
			  //-------这段和上面的完全一样
			  if(content!=document.body){ //alert(1);
				if(posleft+oInstance.Width <content.scrollWidth){  //alert(2);
					//maskDiv.style.left=posleft-content.scrollLeft; //alert(postop-content.scrollTop);
					//maskDiv.style.top=postop-content.scrollTop;
					maskDiv.style.left=posleft-content.scrollLeft;//alert(postop-content.scrollTop);
					maskDiv.style.top=postop-content.scrollTop;
				}else{ //alert(3);
					maskDiv.style.pixelLeft=content.offsetWidth+parseInt(content.currentStyle.paddingLeft)+parseInt(content.currentStyle.paddingRight)-oInstance.Width;  //中间多那些是因为content的scrollWidth没算入padding的空间
					maskDiv.style.pixelTop=postop-content.scrollTop;
				}
			}
			//-------这段和上面的完全一样
		   }
		}
	//	CalendarDiv.focus();
	}
}

function CalendarCellSetCss(sMode,oCell)			/// Set Cell Css
{
	// sMode
	// 0: OnMouserOut 1: OnMouseOver
	if(sMode)
	{
		oCell.style.border="1px solid #5589AA";
		oCell.style.backgroundColor="#BCD0DE";
	}
	else
	{
		oCell.style.border="1px solid #FFFFFF";
		oCell.style.backgroundColor="#FFFFFF";
	}
}
function CalendarGetMaxDay(nowYear,nowMonth)			/// Get MaxDay of current month
{
	var nextMonth,nextYear,currDate,nextDate,theMaxDay
	nextMonth=nowMonth+1;
	if(nextMonth>11)
	{
		nextYear=nowYear+1;
		nextMonth=0;
	}
	else
	{
		nextYear=nowYear;
	}
	currDate=new Date(nowYear,nowMonth,1);
	nextDate=new Date(nextYear,nextMonth,1);
	theMaxDay=(nextDate-currDate)/(24*60*60*1000);
	return theMaxDay;
}
function CalendargetPos(el,ePro)				/// Get Absolute Position
{
	var ePos=0;
	while(el!=null)
	{
		ePos+=el["offset"+ePro];
		el=el.offsetParent;
	}
	return ePos;
}
function CalendargetScroll(el,ePro)				/// +stz
{
	var ePos=0;
	while(el!=null)
	{
		ePos+=el["scroll"+ePro];
		el=el.offsetParent;
	}
	return ePos;
}
function CalendarDblNum(num)
{
	if(num < 10)
		return "0"+num;
	else
		return num;
}
function CalendarCancel(oInstance)			///Cancel
{
	var CalendarDiv=document.all[oInstance.sDIVID];
	CalendarDiv.style.display="none";
	showMark(oInstance);
}
