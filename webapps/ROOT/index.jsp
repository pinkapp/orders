<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>记一笔</title>
<link rel="stylesheet" type="text/css"
	href="js/themes/default/easyui.css">
<link rel="stylesheet" type="text/css" href="js/themes/icon.css">
<link rel="stylesheet" type="text/css" href="js/demo/demo.css">
<script type="text/javascript" src="js/jquery-1.8.0.min.js"></script>
<script type="text/javascript" src="js/jquery.easyui.min.js"></script>
<script type="text/javascript" src="js/locale/easyui-lang-zh_CN.js"></script>
<title>记一笔</title>
</head>
<body>
<h1>记一笔</h1>
<form action="account_add" method="post">
<label>日期：</label><input name="date" class="easyui-datebox" value="2012-12-11" /><br/>
<label>项目：</label><input name="item" value="测试"/><br/>
<label>分类：</label><input name="category" value="1"/><br/>
<label>金额：</label><input name="money" value="33.44"/><br/>
<label>备注：</label><input name="note" value="我是来测试的"/><br/>
<input type="submit" value="提交" />
</form>
</body>
</html>
