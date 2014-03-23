<%@ page language="java" pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt"%>
<%@ page isELIgnored="false" %> 
<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3c.org/TR/1999/REC-html401-19991224/loose.dtd">
<html>
  <head>
	<meta http-equiv="pragma" content="no-cache">
	<meta http-equiv="cache-control" content="no-cache">
	<meta http-equiv="expires" content="0">    
	<meta http-equiv="keywords" content="keyword1,keyword2,keyword3">
	<meta http-equiv="description" content="This is my page">
    <LINK href="<%=path %>/css/css.css" type=text/css rel=stylesheet>
  </head>
  
  <BODY text=#000000  leftMargin=0 topMargin=0>
	<div class="wrap"> 
		<TABLE  cellSpacing=0 cellPadding=0 width="100%" align=center border=0 >
				<TR height="90">
					<TD align="center">
					    <jsp:include flush="true" page="/qiantai/inc/incTop1.jsp"></jsp:include> 
					</TD>
				</TR>
		</TABLE>
		
	
		<TABLE id=guide cellSpacing=0 cellPadding=0 width="100%" align=center border=0>
				<TR>
					<TD align="left">
						<jsp:include flush="true" page="/qiantai/inc/incTop2.jsp"></jsp:include>
					</TD>
				</TR>
		</TABLE>

        <TABLE class=MainTable style="MARGIN-TOP: 0px" cellSpacing=0 cellPadding=0 width="100%" align=center border=0>
				<TR>
				    <TD class=Side vAlign=top align=right width="25%">
						<jsp:include flush="true" page="/qiantai/inc/incLeft.jsp"></jsp:include>
					</TD>
					<td width="1">&nbsp;</td>
					<TD class=Side vAlign=top align=right width="75%">
						<TABLE class=dragTable cellSpacing=0 cellPadding=0 width="100%" border=0>
								<TR>
									<TD class=head>
										<SPAN class=TAG>网站首页</SPAN>
									</TD>
									
								</TR>
								<TR align="center">
									<TD height="5" >
									<br/><br/><br/><br/>
									</TD>
								</TR>
								<TR align="left" height="450">
									<TD>
									<font style="font-size:18px;color:#3399FF">使用说明:</font>
									
									<br>
									 &nbsp;&nbsp;&nbsp;<font style="font-size:14px;">教师教学教学管理系统是我校2014年3月引进的本系统将"教师教学资源管理系统"作为系统名.
									凡我校正式在册的教师、学生，均可使用教务处统一分配的用户名（教师为工号、学生为学号）及相应的密码（默认与用户名相同）登录。<br/></font>
									&nbsp;&nbsp;<font style="font-size:14px;color:#FF0066";>注意：填入用户名、密码点击“登录”后再点击“进入”才能真正登录进系统。</font><br/>
									&nbsp;&nbsp;<font style="font-size:14px;">进入系统后，教师可以对自己开设的各门课程进行添加材料操作，学生可以进行下载作业等师生交互操作。如果不登录系统则只能浏览。</font><br/>
								    <img src="img/sd.jpg"> 
									</TD>
								</TR>
								<TR align="left">
									<TD height="5"></TD>
								</TR>
						</TABLE>
					</TD>
				</TR>
		</TABLE>
		<jsp:include flush="true" page="/qiantai/inc/incFoot.jsp"></jsp:include>
    </div>
  </BODY>
</html>
