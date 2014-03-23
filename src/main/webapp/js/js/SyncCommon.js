/*
 * SyncCommon JS Library 1.5.0
 * Copyright(c) 2008-2018, SyncCommon JS.
 * wanghao924@126.com
 */

var SyncCommon = {
	Version: '1.5.0',
	Author:'Alex'
	};
/**
 * Copies all the properties of c to o.
 * @param {Object} o The receiver of the properties
 * @param {Object} c The source of the properties
 * @param {Object} defaults A different object that will also be applied for default values
 * @return {Object} returns o
 * @member SyncCommon apply
 */
SyncCommon.apply = function(o, c, defaults){
    if(defaults){
        // no "this" reference for friendly out of scope calls
        SyncCommon.apply(o, defaults);
    }
    if(o && c && typeof c == 'object'){
        for(var p in c){
            o[p] = c[p];
        }
    }
    return o;
};

var Class = {
  create: function() {
    return function() {
      this.initialize.apply(this, arguments);
    }
  }
}
var Content = Class.create();
Content.prototype = {
   	initialize: function() {
		this.key = "";
		this.value="";
    },
	put:function(key,value){
        this.key = key;
		this.value = value;
		return this;
	}
}

var SyncHelper = Class.create(); 

SyncHelper.prototype = {
	initialize: function() {
		this.collection = [];
		
    },
	addCollection:function(object){
		this.collection.push(object);
	},
	getCollection:function(curFlag){
		var checkboxNameArray = [];
		var allElement = document.all;
		for(var i =0;i<allElement.length;i++)
		{
			var element = allElement[i];
			var eleType = element.type;
			
			if (eleType == null || eleType =="")
			{
				continue;
			}
			var flag = element.getAttribute("flag");
			if(eleType != "select-one")
			{
                if(!flag){continue}
			}
			//if(!flag || eleType != "select-one"){continue}
			if(eleType == "checkbox"){
				var key = element.getAttribute("name");
				if(!this.isInArray(key,checkboxNameArray))
				{
					var value = this.checkboxToString(key,'Y');
					if(curFlag && curFlag == 'Y')
					{
						value = this.checkboxToString(key);
					}
					var content = new Content();
					this.collection.push(content.put(key,value));
					checkboxNameArray.push(key);
				}
			}else if(eleType == "radio"){
				 var key = element.getAttribute("name");
				 if(element.checked)
				 {
					  var content = new Content();
					  var value = element.text;
					  if(curFlag && curFlag == 'Y')
					  {
						 value = element.value;
					  }
					  this.collection.push(content.put(key,value));
				 }
			}else if(eleType == "select-one"){
				 for(var j=0;j<element.length;j++)
				 {
					 if(element.selectedIndex == j)
				     {
                          var content = new Content();
						  var key = element.getAttribute("name");
						  var value = element[j].text;
						  if(curFlag && curFlag == 'Y')
					      {
							 value = element[j].value;
					      }
						  this.collection.push(content.put(key,value));
						  break;
					 }
				 }
			}else{
				var content = new Content();
                var key = element.getAttribute("name");
				var value = element.value.trim();
				this.collection.push(content.put(key,value));
				
			}
		}
		return  this;
	},
    /**
	   change checkboxvalue to string 
	**/
	checkboxToString: function(controlname,flag){
		var inputControl = document.getElementsByName(controlname);
		var resultString = "";
		for(var i = 0 ; i<inputControl.length ; i++){
			if(inputControl[i].checked){
                var current = inputControl[i].value;
                if(flag && flag == 'Y')
				{
                    current = inputControl[i].text;
				}
				if(i == 0){
	                resultString = current;
				}else{
					if(resultString==""){
						resultString = resultString + current;
					}else{
						resultString = resultString + ",";
					    resultString = resultString + current;
					}
				}
			}
		}
		return resultString;
	},
	checkedByValue: function(stringValue,inputControlname,flag){
        var inputControl = document.getElementsByName(inputControlname);
		this.checkedNone(inputControl);
		for(var i=0;i<inputControl.length;i++){
			var tempString = stringValue.split(",");
			for(var j=0;j<tempString.length;j++){
                var current = inputControl[i].value;
				if(flag && flag == 'Y')
				{
                    current = inputControl[i].text;
				}
				if(tempString[j] == current){
					inputControl[i].checked = "true";
					break;
				}
			}
		}
    },
	radioByValue: function(stringValue,inputControlname,flag){
	    var inputControl = document.getElementsByName(inputControlname);
		for(var i=0;i<inputControl.length;i++){
			var current = inputControl[i].value;
			if(flag && flag == 'Y')
			{
				current = inputControl[i].text;
			}
			if(current == stringValue){
	             inputControl[i].checked = "true";
				 break;
			}
		}
	},
	checkedNone: function(inputControl){
		for(var i=0;i<inputControl.length;i++){
			if(inputControl[i].checked == true)
			{
                 inputControl[i].checked = false;
			}
		}
    },
    pageLock:function(form)
	{
		var formElements = form.elements;
		for (var i=0; i<formElements.length;i++) {
			if (formElements[i].disabled==true) continue;
            formElements[i].readOnly = true;
            formElements[i].onclick=null;
		}
	},
	lockRefurbish:function()
	{
		document.onkeydown = this.lockF5;
		document.oncontextmenu = this.lockContextMenu;
	},
	lockF5:function()
	{
		if(event.keyCode==116)     
         {     
             event.keyCode = 0;     
             event.cancelBubble = true;     
             return false;     
         }     
	},
	lockContextMenu:function()
	{
		 return false;  
	},
	limitTextAreaLength:function(inputName,max)
	{
		var inputValue = $(inputName).value;
		var len = inputValue.length;
		if(len>max)
		{
			$(inputName).value = $(inputName).value.substring(0,max);
		}
	},
	selectedByValue: function(selectValue,selectControlName,flag){
		if($(selectControlName)){
			var selected_value =selectValue;
			selectedNodes = $(selectControlName).options;
			curflag = false;
			for(len=0 ; len<selectedNodes.length ;len++){
				var current = selectedNodes[len].value;
                if(flag && flag == 'Y')
				{
                    current = selectedNodes[len].text.trim();
				}
				if(selectedNodes[len] && current){
					if(current == selected_value){
						selectedNodes[len].selected = true;
						curflag = true;
					}
				}
			}
			if(!curflag){
				selectedNodes[0].selected = true;
			}
		}
	},	
	selectedValue:function(selectElementName)
	{
         var selectElement = $(selectElementName).options[$(selectElementName).selectedIndex].value;
		 return selectElement;
	},
	isInArray: function(value,array){
		var flag = false;
		for(var i=0;i<array.length;i++){
			if(array[i] == value)
			{
                flag = true;
				break;
			}
		}
		return flag;
    },
    selectAllValue:function(arrayList,flag){
		if(!arrayList){return;}
		for(var i=0;i<arrayList.length;i++)
		{
			var currentControl = arrayList[i];
			var selectName = currentControl.key;
			var eleType = $(selectName).type;
			if(eleType!="select-one"){continue}
			var value = currentControl.value;
			if(flag && flag == 'Y')
			{
				this.selectedByValue(value,selectName,"Y");	
			}else{
				this.selectedByValue(value,selectName);	
			}
		}
	}
};


SyncHelper.Validation = Class.create();
SyncHelper.Validation.allName = new Array();
SyncHelper.Validation.prototype = {
	initialize: function(frm){
		this.frm = frm;
        this.errMsg = new Array();
	    this.errName = new Array();
        
	},
	required: function(inputObj){
        if (typeof(inputObj) == "undefined" || inputObj.value.trim() == "") {
            return false;
        }
		return true;
	},
	preRequired:function(inputObj,formElements){
		var curObj = inputObj;
		var preObj = formElements[inputObj.getAttribute('preName')];
        if (curObj != null && preObj != null) {
            if (preObj.value =="" && curObj.value !="") {
				    return false;
            }
        }
		return true;
	},
	dateCompare:function(first,second){
		var bigenDate = first.split(/(-|:|(\u0020+))/g);
		var endDate = second.split(/(-|:|(\u0020+))/g);
		var bigen="";
		var end="";
		for(i=0;i<bigenDate.length;i++)
		{
			bigen = bigen + bigenDate[i];
		}
		for(i=0;i<endDate.length;i++)
		{
			end = end + endDate[i];
		}
		if((bigen-end)>0)
		{
			return false;
		}
		return true;
	},
	dateValidateEarly:function(inputObj,formElements){
		var curObj = inputObj;
		if(curObj.value==null || curObj.value==""){
			return true;
		}
		var preObj = formElements[inputObj.getAttribute('compareName')];
        if(preObj.value!=null && preObj.value!=""){
			if(!this.dateCompare(preObj.value,curObj.value)){
				return false;
			}
		}
		return true;
	},
	limit: function (inputObj) {
		//var len = inputObj.value.getBytes();
		var len = inputObj.value;
		if (len) {
			var minv = parseInt(inputObj.getAttribute('min'));
			var maxv = parseInt(inputObj.getAttribute('max'));
			minv = minv || 0;
			maxv = maxv || Number.MAX_VALUE;
			return minv <= len && len <= maxv;
		}
		return true;
	},
	addErrorMsg: function(name,str) {
        this.errMsg.push(str);
		this.errName.push(name);
    },
	
    addAllName: function(name) {
		SyncHelper.Validation.allName.push(name);
    },
    success:function(){
		return true;
	},
	showError:function(errMsg,flag){
		var msg = "";
        msg = errMsg[0];
		if(flag && flag=="Y")
		{
			msg ="";
		    for (i = 0; i < errMsg.length; i++) {
				msg +=  (i+1) + "-" + errMsg[i] + "\n";
		    }
		}
		alert(msg);
	},
	onFocus: function(str){
		$(str).focus();
	},
	
	isEmpty: function(str){
		var tmpStr = $F(str);
		return tmpStr==null||tmpStr.Trim().length==0;
	},
	
	isNumber: function(str){
		var tmpStr = $F(str);
		return (!isNaN(tmpStr) && !/^\s+$/.test(tmpStr));
	},
	
	isEmail: function(str){
		var tmpStr = $F(str);
		return  /\w{1,}[@][\w\-]{1,}([.]([\w\-]{1,})){1,3}$/.test(tmpStr);
	},
	
	isDate: function(str){
		var tmpStr = $F(str);
		var test = new Date(tmpStr);
	    return  !isNaN(test);
	},
	
	isInteger: function(str){
		var tmpStr = $F(str);
		return  (/^[-+]?[\d]+$/.test(tmpStr));
	},
    
	limitLength: function(str){
		var length = str.value.length;
		var max = parseInt(str.getAttribute('max'));
		if(length > max){
			return false;
		}
		return true;
	},
	checkReg: function(inputObj, reg, msg) {
        inputObj.value = inputObj.value.trim();
        if (inputObj.value == '') {
            return true;
        } else {
            return reg.test(inputObj.value);
        }
    },
    formValidate:function(currentElement,syncHelper,formElements) {
		var validType = currentElement.getAttribute('valid');
		var errorMsg = currentElement.getAttribute('errMsg');
		if (!errorMsg) {
			errorMsg = '';
		}
		if (validType==null) return [];
		this.addAllName(currentElement.name);
		var validArray = validType.split('|');
		var errorMsgArray = errorMsg.split('|');
		var r = [];
		for (var j=0; j<validArray.length; j++) {
			var curValidType = validArray[j];
			var curErrorMsg = errorMsgArray[j];
			var validResult;
			switch (curValidType) {
			case 'isNumber':
			case 'isEmail':
			case 'isPhone':
			case 'isMobile':
			case 'isIdCard':
			case 'isMoney':
			case 'isZip':
			case 'isInt':
			case 'isEnglish':
			case 'isChinese':
			case 'isUrl':
			case 'isDate':
			case 'isTime':
				validResult = this.checkReg(currentElement,RegExps[curValidType],curErrorMsg);
				break;
			case 'isWanYuan':
			    curErrorMsg = '请输入正确的金额！（小数点前最多6位，小数点后最多6位）';
			    validResult = this.checkReg(currentElement,RegExps[curValidType],curErrorMsg);
				break;
			case 'isYuan':
			    curErrorMsg = '请输入正确的金额！（小数点前最多9位，小数点后最多2位）';
			    validResult = this.checkReg(currentElement,RegExps[curValidType],curErrorMsg);
				break;
			case 'regexp':
				validResult = this.checkReg(currentElement,new RegExp(currentElement.getAttribute('regexp'),"g"),curErrorMsg);
				break;
			case 'custom':
				validResult = eval(currentElement.getAttribute('custom')+'(currentElement,formElements)');
				break;
			default :
				validResult = eval('this.'+curValidType+'(currentElement,formElements)');
				break;
			}
			if (!validResult) r.push(curErrorMsg);
		}
		return r;
     },
	 passed:function(flag) {
        if (this.errMsg.length > 0) {
            this.showError(this.errMsg,flag);
            try{
	            for(var h=0;h<this.errName.length;h++){
	            	frt = document.getElementsByName(this.errName[h])[0];
	            	var errorTipContent = frt.getAttribute("errorTipContent")
	            	if(errorTipContent == 'undefined' || errorTipContent==null){
	            		frt.className = "errorTip";
	            	}else{
	            		$(errorTipContent).className = "errorTip";
	            	}
	            	
	            }
				if (this.errName[0].indexOf('[')==-1) {
	            	frt = document.getElementsByName(this.errName[0])[0];
					if (frt.type=='text' || frt.type=='password') {
						frt.focus();
					}
				}
            }catch(err){return false;}
			
            return false;
        } else {
          return this.success();
        }
    }
};

//SyncCommon.apply(syncHelper.prototype,syncHelper.Validation);

function validateForm(form,flag){
	var formElements = form.elements;
	var syncHelper = new SyncHelper.Validation();
    for (var i=0; i<formElements.length;i++) {
    	formElements[i].className="";
		if (formElements[i].disabled==true) continue;
		if(formElements[i].getAttribute('flag')!="true")continue;
		var msgs = syncHelper.formValidate(formElements[i],syncHelper,formElements);
		if (msgs.length>0) {
			for (var j=0;j<msgs.length;j++) {
				syncHelper.addErrorMsg(formElements[i].name,msgs[j]);
			}
		}
	}
    return syncHelper.passed(flag);
}
/**
 * Trims whitespace from either end of a string, leaving spaces within the string intact.  Example:
 * <pre><code>
var s = '  foo bar  ';
alert('-' + s + '-');         //alerts "- foo bar -"
alert('-' + s.trim() + '-');  //alerts "-foo bar-"
</code></pre>
 * @return {String} The trimmed string
 */
String.prototype.trim = function(){
    var re = /^\s+|\s+$/g;
    return function(){ return this.replace(re, ""); };
}();

/**
 * get element which is the page .  Example:
 * <pre><code>
<input name ='test' value="123">;
alert($('test'));         //alerts "object"
</code></pre>
 * @return object 
 */
function $(element){
	var result = null;
    if (typeof element == 'string')
	{
		result = document.getElementById(element);
	}
	if(element == null)
	{
		result = document.getElementsByName(element)[0];
	}
    return result;
};

/**
 * get element value which is the page .  Example:
 * <pre><code>
<input name ='test' value="123">;
alert($F('test'));         //alerts "123"
</code></pre>
 * @return string  
 */
function $F(element)
{
    var result = null;
	if (typeof element == 'string')
	{
		result = document.getElementById(element);
	}
	return result.value;
};

var RegExps = function(){};
RegExps.isNumber = /^[-\+]?\d+(\.\d+)?$/;
RegExps.isEmail = /([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)/;
RegExps.isPhone = /^((\(\d{2,3}\))|(\d{3}\-))?(\(0\d{2,3}\)|0\d{2,3}-)?[1-9]\d{6,7}(\-\d{1,4})?$/;
RegExps.isMobile = /^((\(\d{2,3}\))|(\d{3}\-))?(13|15)\d{9}$/;
RegExps.isIdCard = /(^\d{15}$)|(^\d{17}[0-9Xx]$)/;
//RegExps.isMoney = /^\d+(\.\d+)?$/;
RegExps.isMoney = /(^\d{1,8}(\.\d{1,2})?$)|(^\d{10}$)/;
RegExps.isWanYuan = /(^\d{1,6}(\.\d{1,6})?$)|(^\d{6}$)/;
RegExps.isYuan = /(^\d{1,9}(\.\d{1,2})?$)|(^\d{9}$)/;
RegExps.isZip = /^[1-9]\d{5}$/;
//RegExps.isInt = /^[-\+]?\d+$/;
RegExps.isInt = /^[+]?\d+$/;
RegExps.isEnglish = /^[A-Za-z]+$/;
RegExps.isChinese =  /^[\u0391-\uFFE5]+$/;
RegExps.isUrl = /^http[s]?:\/\/[A-Za-z0-9]+\.[A-Za-z0-9]+[\/=\?%\-&_~`@[\]\':+!]*([^<>\"\"])*$/;
RegExps.isDate = /^\d{4}-\d{1,2}-\d{1,2}$/;
RegExps.isTime = /^\d{4}-\d{1,2}-\d{1,2}\s\d{1,2}:\d{1,2}:\d{1,2}$/;