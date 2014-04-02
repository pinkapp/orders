<%@page import="java.io.*"%>
<%@page import="java.net.URLDecoder"%>
<%@ page language="java" import="java.util.*" pageEncoding="utf-8"%>
<%
String path = request.getContextPath();
%>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
<head>
<meta http-equiv="pragma" content="no-cache">
<meta http-equiv="cache-control" content="no-cache">
<meta http-equiv="expires" content="0">
</head>

<body>
	<% 
             
          java.io.BufferedInputStream bis = null;     
          java.io.BufferedOutputStream bos = null;     
          try {
        	  String filePath=request.getParameter("fujianPath");
        	  filePath = request.getRealPath("/attachment/"+filePath);
        	  System.out.println(filePath);
              String fileName=request.getParameter("fujianYuashiMing");
              fileName=URLDecoder.decode(fileName,"UTF-8");
              long fileLength = new File(filePath).length();     
      
              response.setContentType("application/x-msdownload;");     
              response.setHeader("Content-disposition", "attachment; filename=" + fileName);     
              response.setHeader("Content-Length", String.valueOf(fileLength));     
              response.setContentType("text/html;charset=utf-8"); 
              bis = new BufferedInputStream(new FileInputStream(filePath));     
              bos = new BufferedOutputStream(response.getOutputStream());     
              byte[] buff = new byte[2048];     
              int bytesRead;     
              while (-1 != (bytesRead = bis.read(buff, 0, buff.length))) {     
                  bos.write(buff, 0, bytesRead);     
              }     
          } catch (Exception e) {     
              e.printStackTrace();     
          } finally {     
              if (bis != null)     
                  bis.close();     
              if (bos != null)     
                  bos.close();     
          }     
      %>


</body>
</html>
