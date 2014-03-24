<%@ page contentType="text/html;charset=utf-8" language="java"%>
<%@ page import="org.apache.commons.fileupload.*"%>
<%@ page import="org.apache.commons.fileupload.servlet.*"%>
<%@ page import="org.apache.commons.fileupload.disk.*"%>
<%@ page import="java.util.*"%>
<%@page import="java.io.*"%>
<%  
    String home = System.getProperty("user.home");
    File  uploadFile = new File(home,"upload");
    if(!uploadFile.exists()){
    	uploadFile.mkdirs();
    }
	boolean isMultipart = ServletFileUpload.isMultipartContent(request);//检查输入请求是否为multipart表单数据。
	if (isMultipart == true) {
		FileItemFactory factory = new DiskFileItemFactory();//为该请求创建一个DiskFileItemFactory对象，通过它来解析请求。执行解析后，所有的表单项目都保存在一个List中。
		ServletFileUpload upload = new ServletFileUpload(factory);
		List<FileItem> items = upload.parseRequest(request);
		Iterator<FileItem> itr = items.iterator();
		while (itr.hasNext()) {
			FileItem item = (FileItem) itr.next();
			if (item.isFormField()) {
			} else {
				File fullFile = new File(item.getName());
			    File savedFile = new File(uploadFile, fullFile.getName());
			    out.print("the upload file is in the " + savedFile.getAbsolutePath());
			    /* if(!savedFile.exists()) {
			    	savedFile.createNewFile();  
                } 
			    item.write(savedFile); */
				out.print("the upload file is in the " + savedFile.getAbsolutePath());
				out.print("<br>");
			}
		}
	} else {
		out.print("the enctype must be multipart/form-data");
	}
%>

<script language="javascript">
	
</script>
