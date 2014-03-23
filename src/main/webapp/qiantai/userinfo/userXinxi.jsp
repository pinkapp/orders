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
    <script type="text/javascript" src="<%=path %>/js/popup.js"></script>
    <script type="text/javascript">
           
		    function check1()
		    {
		      
		        if(document.form1.loginpw.value=="")
		        {
		            alert("请输入密码");
		            return false;
		        }
		        if(document.form1.loginpw.value!=document.form1.loginpw1.value)
		        {
		            alert("两次密码不一致");
		            return false;
		        }
		        document.form1.submit();
		    }
    </script>
  </head>
  
  <BODY text=#000000  leftMargin=0 topMargin=0>
	<div class="wrap"> 
		<TABLE  cellSpacing=0 cellPadding=0 width="100%" align=center border=0>
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
										<SPAN class=TAG>用户信息</SPAN>
									</TD>
								</TR>
								<TR align="left">
									<TD height="5"></TD>
								</TR>
								<TR align="left" height="200">
									<TD>
									   	<form action="<%=path %>?type=userXinxi" name="form1" method="post">
									   	  <table width="500" border="0" cellspacing="0" cellpadding="0">
                                            <tr>
                                              <td width="92">用户名</td>
                                              <td width="402">${sessionScope.user.loginname}&nbsp;</td>
                                            </tr>
                                            <tr>
                                              <td>密码</td>
                                              <td><input type="password" name="loginpw" value="${sessionScope.user.loginpw}" />&nbsp;</td>
                                            </tr>
                                            <tr>
                                              <td>确认密码</td>
                                              <td><input type="password" name="loginpw1" value="${sessionScope.user.loginpw}" />&nbsp;</td>
                                            </tr>
                                            <tr>
                                              <td>学号/教师号</td>
                                              <td>${sessionScope.user.xuehao_jiaoshihao}&nbsp;</td>
                                            </tr>
                                            <tr>
                                              <td colspan="2"><input type="submit" value="确定" onclick="check1();"/>	<input type="button" value="取消" onclick="closeOpen()"/>&nbsp;</td>
                                            </tr>
                                          </table>
									   	</form>
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
