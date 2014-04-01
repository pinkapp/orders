<%@ page contentType="text/html;charset=utf-8" language="java"%>
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
</head>
<body>
${message }
<div style="display: none;">
${fujianFileName }
${fujianContentType }
${attachments }
</div>
<script language="javascript">
	var attachments = eval('${attachments}');
	window.parent.uploadCallback(attachments);
	//window.parent.document.getElementById("achementId").value = attachments[0].id;
	//window.parent.document.getElementById("fujian").value = attachments[0].name;
	//alert(attachments[0].name);
</script>
</body>
</html>

