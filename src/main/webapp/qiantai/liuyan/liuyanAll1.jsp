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
    <script type="text/javascript">
         function check123()
         {
             <c:if test="${sessionScope.user==null}">
                  alert("请先登录");
                  return false;
            </c:if>
            
            <c:if test="${sessionScope.user!=null}">
                   if(document.fr.title.value=="")
                   {
                       alert("请先登录");
                       return false;
                   }
                   return true;
            </c:if>
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
										<SPAN class=TAG>网站首页</SPAN>
									</TD>
								</TR>
								<TR align="left">
									<TD height="5"></TD>
								</TR>
								<TR align="center" height="500">
									<TD>
									    <TABLE cellSpacing=7 cellPadding=4 width="100%" border=0>
											<c:forEach items="${requestScope.liuyanList}" var="liuyan">
											    <TR>
												<TD>
													<TABLE class=tpt width="100%" border=0>
														<TBODY>
															<TR bgColor=#cccccc>
																<TD align=left width="70%">
																	<STRONG>标题：&nbsp;<c:out value="${liuyan.title}"/></STRONG>
																</TD>
																<TD align=middle width="10%">
																	<STRONG>留言人：&nbsp;<c:out value="${liuyan.user_id}"/></STRONG>
																</TD>
																<TD align=middle width="20%">
																	<STRONG>时间：&nbsp;<c:out value="${liuyan.shijian}"/></STRONG>
																</TD>
															</TR>
															<TR>
																<TD vAlign=top align=left colspan="3">
																	<STRONG><c:out value="${liuyan.content}" escapeXml="false"/></STRONG>
																</TD>
															</TR>
														</TBODY>
													</TABLE>
												</TD>
											</TR>
											</c:forEach>
										</TABLE>
										<BR>
										<form action="<%=path %>/liuyan?type=liuyanAdd" name="fr" method="post">
										<table border="0" align="left">
										     <tr>
										         <td width="10%">标题:</td>
										         <td width="90%" align="left"><input type="text" name="title" size="41"/></td>
										     </tr>
										     <tr>
										         <td width="10%">内容:</td>
										         <td width="90%" align="left">
										             <textarea name="content" cols="40" rows="10" style="overflow:hidden"></textarea>
								                 </td>
										     </tr>
										     <tr>
										         <td align="left" colspan="2">
										             <input type="submit" name="" value="提交留言" onclick="return check123()">
								                 </td>
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
