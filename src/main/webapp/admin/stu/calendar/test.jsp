<%@ page language="java" import="java.util.*" pageEncoding="utf-8"%>
<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
  <head>
    <base href="<%=basePath%>">
    
    <title>My JSP 'test.jsp' starting page</title>
    
	<meta http-equiv="pragma" content="no-cache">
	<meta http-equiv="cache-control" content="no-cache">
	<meta http-equiv="expires" content="0">    
	<meta http-equiv="keywords" content="keyword1,keyword2,keyword3">
	<meta http-equiv="description" content="This is my page">
	<!--
	<link rel="stylesheet" type="text/css" href="styles.css">
	-->

  </head>
  
  <body> 
    This is my JSP page<br>.<br><br><br><br><br><br><br><br><br><br>&nbsp;<br>
    
   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<input type="text" name="text1" onclick="popUpCalendarDlg(this)"/> <a href="#" onclick="return popUpCalendarDlg('text1')">测试</a>
    
    
  </body>
 
</html>
 <script language=javascript>
  //引入日期
   	function popUpCalendarDlg(iText) {  
				//var ctrlobj=null;
				showx = event.screenX - event.offsetX; // + deltaX;
				//alert("showx="+showx+";event.screenX="+event.screenX+";event.offsetX="+event.offsetX);
				showy = event.screenY - event.offsetY; // + deltaY;
				//newWINwidth = 210 + 4 + 18;
				
				retval = window.showModalDialog("CalendarDlg.htm", "", "dialogWidth:197px; dialogHeight:210px; dialogLeft:"+showx+"px; dialogTop:"+showy+"px; status:no; directories:yes;scrollbars:no;Resizable=no; "  );
				if( retval != null ){
					iText.value = retval;
				}else{
					//alert("canceled");
				}
	  }
  </script>