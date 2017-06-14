	
	//复选框id，标识选择是否多条，超连接id，action的名字，提示信息
	function hasSelects(flag,rowid,linkid,action,msg,type){//flag one 只能一条，two 可以多条
	//'one','selectId','tijiaoId','startFlow.do?method=startFlow','\u786e\u5b9a\u662f\u5426\u63d0\u4ea4\uff1f','tijiao'
			var obj = document.getElementsByName(rowid); //获取多选框数组
			//alert('obj……………………'+document.getElementsByName(rowid));
			var objLen= obj.length; //获取数据长度
			//alert('objLen……………………'+objLen);
			var checkValue = "";
			var num = 0;
			var stateArray ;//存放状态的数组
			var state ;//存放状态
			for(i=0;i<objLen;i++){
				if(obj[i].checked==true)
				{
				    num++;
				    if(checkValue!=""){
					 checkValue = checkValue+","+obj[i].value;
					}else{
					 checkValue = obj[i].value;
				    }
				    state = obj[i].value.split(',')[2];
				    //alert('state-----'+state);
				    
				}
			}	
	
			if(num>1){
			  //判断是多选还是单选
			  if(flag=='one'){
			    //请选择一条数据!
			    alert('\u8bf7\u9009\u62e9\u4e00\u6761\u6570\u636e\uff01');
			    //将所有选中的清空
			    for(i=0;i<objLen;i++){
					obj[i].checked=false;					
			    }
			    return false;
			  }else if(flag=='two'){//可以选择多条		  
			    document.all(linkid).href=action+"&id="+checkValue;	
			    return true;
			  }								
			}else if(num==1){//选择一条数据或者多条	 
			   if(type=='edit' || type=='del'){//修改 或者删除 
			     //已审批，不能修改！
			     ///**流程审批状态 已审批42003 */
			     if(state=='42003'){
			       alert('\u5df2\u5ba1\u6279\uff0c\u4e0d\u80fd\u4fee\u6539\uff01');
			       return false;
			     }else{
				     //审批中，不能修改
				     ///**流程审批状态 未审批42001 */
				     if(state!='42001'){
				       alert('\u5ba1\u6279\u4e2d\uff0c\u4e0d\u80fd\u4fee\u6539\uff01');
				       return false;
				     }
				     if(type=='del'){
				     	if(!window.confirm('\u662f\u5426\u5220\u9664\u6240\u9009\u8bb0\u5f55\uff01')){
				     		return false;
				     	}
				     }
			     }
			   }
			   if(type=='tijiao'){
			      //已审批，不能提交！
			     if(state=='42003'){
			       alert('\u5df2\u5ba1\u6279\uff0c\u4e0d\u80fd\u63d0\u4ea4\uff01');
			       return false;
			     }else{
				      //审批中，不能提交
				     if(state!='42001'){
				       alert('\u5ba1\u6279\u4e2d\uff0c\u4e0d\u80fd\u63d0\u4ea4\uff01');
				       return false;
				     }
			     }
			    
			   } 
	           document.all(linkid).href=action+"&id="+checkValue;
			   return true;			
			}else{
			  if(msg==''){
			  //请选择一条数据！
			   alert('\u8bf7\u9009\u62e9\u4e00\u6761\u6570\u636e\uff01');
			  }else{
			   alert(msg);
			  }
			  return false;
			}
			
		}

	//提交
	function tijiao(flag,rowid,linkid,action,msg,type){
	  var flag = hasSelects(flag,rowid,linkid,action,msg,type);
	  if(flag==true){
	      //确定是否提交审核？	
	      if(msg==''){	 
		   return window.confirm("\u786e\u5b9a\u662f\u5426\u63d0\u4ea4\u5ba1\u6838\uff1f");
		  }else{
		  	//alert(msg);
		   return window.confirm(msg);
		  }
	  }else{
	    return false;
	  }
	}
	
	//打开选择组织的窗口
	function open_contract_window(path){
		var window_width=800;
		var window_height=500;
		var window_left=(screen.availWidth/3)-(window_width/2);
		var window_top=(screen.availHeight/3)-(window_height/4);
		var window_dimensions = "height="+window_height+
		",width="+window_width+
		",left="+window_left+
		",top="+window_top+",status=no,tollbar=no,scrollbars=no";	
		window.open(path+'/contractAction.do?method=findContractList&loanAndExpenseConstract=true','',window_dimensions);
		return false;
	}
	