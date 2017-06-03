<%@ page language="java" pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt"%>
<%@ page isELIgnored="false" %> 
<%-- <%@ taglib uri="http://java.fckeditor.net" prefix="FCK"%> --%>
<%
	String path = request.getContextPath();
	String basePath = request.getScheme() + "://"
			+ request.getServerName() + ":" + request.getServerPort()
			+ path + "/";
%>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
	<head>
		<meta http-equiv="pragma" content="no-cache">
		<meta http-equiv="cache-control" content="no-cache">
		<meta http-equiv="expires" content="0">
		<meta http-equiv="keywords" content="keyword1,keyword2,keyword3">
		<meta http-equiv="description" content="This is my page">
		<link rel="stylesheet" href="<%=path%>/css/woncore.css" type="text/css"></link>
	</head>

	<BODY>
    <div class="body-box">
		<TABLE cellSpacing=1 cellPadding=4 width="100%" border=0>
			<c:forEach items="${requestScope.liuyanList}" var="liuyan">
			    <TR>
				<TD>
					<TABLE class=tpt width="100%" border=0>
						<TBODY>
							<TR bgColor=#cccccc>
								<TD align=middle width="10%">
									<STRONG>留言人：</STRONG>
								</TD>
								<TD width="47%">
									<FONT color=#000000>&nbsp;<c:out value="${liuyan.user_name}"/></FONT>
								</TD>
								<TD align=middle width="14%">
									<STRONG>留言时间：</STRONG>
								</TD>
								<TD width="29%">
									<FONT color=#000000>&nbsp;<c:out value="${liuyan.shijian}"/></FONT>
								    &nbsp;&nbsp;&nbsp;&nbsp;
									<a style="color: red" href="<%=path %>/liuyan?type=liuyanDel&id=${liuyan.id}">删除</a>
								</TD>
							</TR>
							<TR>
								<TD align=middle>
									<STRONG>标题：</STRONG>
								</TD>
								<TD colSpan=3>
									<FONT color=#000000>&nbsp;<c:out value="${liuyan.title}"/></FONT>
								</TD>
							</TR>
							<TR>
								<TD vAlign=top align=middle>
									<STRONG>内容：</STRONG>
								</TD>
								<TD colSpan=3>
									<c:out value="${liuyan.content}" escapeXml="false"/>
								</TD>
							</TR>
						</TBODY>
					</TABLE>
				</TD>
			</TR>
			</c:forEach>
		</TABLE>
	</div>
	</BODY>
</html>
