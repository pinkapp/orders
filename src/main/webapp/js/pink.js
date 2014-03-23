$(function(){
	$('form').form({
	    success:function(data){
	        var info;
	        if(data == 1){
	        	info = '操作成功';
	        }else{
	        	info = '操作失败,错误码:' + data;
	        }
	        $.messager.show({title:'信息', msg:info, timeout:5000, showType:'slide'});
	    }
	});
	});