<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<!DOCTYPE html>
<html lang="zh-CN">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no">
    <!-- 上述3个meta标签*必须*放在最前面，任何其他内容都*必须*跟随其后！ -->
    <title>HELLO WORLD!</title>

    <!-- Bootstrap -->
    <link href="css/bootstrap.min.css" rel="stylesheet">
	<link href="css/bootstrap-responsive.css" rel="stylesheet">
	<link href="css/Lobibox.min.css" rel="stylesheet"/>
	<style type="text/css">
	
	  html,
      body {
        height: 100%;
        /* The html and body elements cannot have any padding or margin. */
      }
      
      body {
        /* padding-top: 60px;
        padding-bottom: 40px; */
        
        margin: 0; 
	    padding: 0; 
	    font-family: 'Microsoft YaHei',Verdana,Arial,Helvetica,sans-serif;
	    color: #3c3c3c;
	    font-size: 14px;
	    line-height: 1.4;
	    /* background-color: #f4f4f4; */
	    word-wrap: break-word;
	    -webkit-tap-highlight-color: rgba(0,0,0,0);
	    -webkit-touch-callout: none;
	    -webkit-user-drag: none;
	    -webkit-user-select: none;
      }
      
      /* Wrapper for page content to push down footer */
      #wrap {
        min-height: 100%;
        height: auto !important;
        height: 100%;
        /* Negative indent footer by it's height */
        margin: 0 auto -60px;
      }
      
      .my-top {
      	position:fixed;
      	top:0;
      	margin:0;
      	padding:0;
	    filter:alpha(opacity=90);  /* ie 有效*/
	    -moz-opacity:0.9; /* Firefox  有效*/
	    opacity: 0.9; /* 通用，其他浏览器  有效*/
      }
      
      .my-bottom {
      	position:fixed;
      	bottom:0;
      }
      
      #container{
	  min-width:600px;
	  min-height:767px;
	  }
	  
	  /* Set the fixed height of the footer here */
      #push,
      #footer {
        height: 60px;
      }
      #footer {
        background-color: #f5f5f5;
      }

      /* Lastly, apply responsive CSS fixes as necessary */
      @media (max-width: 767px) {
        #footer {
          margin-left: -20px;
          margin-right: -20px;
          padding-left: 20px;
          padding-right: 20px;
        }
      }



      /* Custom page CSS
      -------------------------------------------------- */
      /* Not required for template or sticky footer method. */

      .container .credit {
        margin: 20px 0;
      }
      .aa {
		    display: inline-block;
		    vertical-align: top;
		    font-size: 12px;
		    line-height: 20px;
		    color: rgb(102, 102, 102);
		    padding: 20px 0px 13px;
		    width: 20%;
		    overflow: hidden;
		    text-overflow: ellipsis;
		    white-space: nowrap;
		    text-align: center;
		}
	.ab {
	    width: 70%;
	    margin: 0px auto;
	    display: block;
	    /* background-image: url(https://static-o2o.360buyimg.com/daojia/new/images/index_ball_default_2.0.png); */
	    background-size: 100%;
	}
    </style>
    <!-- HTML5 shim and Respond.js for IE8 support of HTML5 elements and media queries -->
    <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
    <!--[if lt IE 9]>
      <script src="js/html5shiv.min.js"></script>
      <script src="js/respond.min.js"></script>
    <![endif]-->
    <link rel="apple-touch-icon-precomposed" sizes="144x144" href="ico/apple-touch-icon-144-precomposed.png">
    <link rel="apple-touch-icon-precomposed" sizes="114x114" href="ico/apple-touch-icon-114-precomposed.png">
    <link rel="apple-touch-icon-precomposed" sizes="72x72" href="ico/apple-touch-icon-72-precomposed.png">
    <link rel="apple-touch-icon-precomposed" href="ico/apple-touch-icon-57-precomposed.png">
    <link rel="shortcut icon" href="ico/favicon.png">
  </head>
  <body onLoad="getLocation()">
    <div id="wrap">
	<nav class="navbar navbar-default navbar-fixed-top my-top">
	  <div class="navbar-inner">
        <div class="container">
         <!--  <button type="button" class="btn btn-navbar" data-toggle="collapse" data-target=".nav-collapse">
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button> -->
          <!-- <a class="brand" href="#">京东到家</a> -->
          <!-- <a class="brand" href="#" onclick="chooseAdd();" >SELECT</a> -->
          <form class="navbar-search">
           <i class="icon-map-marker"></i>
           <span id="address" onclick="chooseAdd();">未知</span>
           <i class="icon-chevron-down" onclick="chooseAdd();"></i>
		   <input type="text" class="search-query" placeholder="Search" style="max-width: 150px;">
		  </form>
          <!-- <div class="nav-collapse collapse">
            <ul class="nav">
              <li class="active"><a href="#">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#contact">Contact</a></li>
              <li class="dropdown">
                <a href="#" class="dropdown-toggle" data-toggle="dropdown">Dropdown <b class="caret"></b></a>
                <ul class="dropdown-menu">
                  <li><a href="#" onclick="chooseAdd();">选择地点</a></li>
                  <li><a href="#">Another action</a></li>
                  <li><a href="#">Something else here</a></li>
                  <li class="divider"></li>
                  <li class="nav-header">Nav header</li>
                  <li><a href="#">Separated link</a></li>
                  <li><a href="#">One more separated link</a></li>
                </ul>
              </li>
            </ul>
            <form class="navbar-form pull-right">
              <input class="span2" type="text" placeholder="Email">
              <input class="span2" type="password" placeholder="Password">
              <button type="submit" class="btn">Sign in</button>
            </form>
          </div> --><!--/.nav-collapse -->
        </div>
      </div>
	</nav>
	<div class="container" style="padding-top: 60px;">
	<div>
		<a class="aa"><img class="ab" alt="cat" src="images/category_1.png">产品类别</a><a class="aa"><img class="ab" alt="cat" src="images/category_2.png">产品类别</a><a class="aa"><img class="ab" alt="cat" src="images/category_3.png">产品类别</a><a class="aa"><img class="ab" alt="cat" src="images/category_4.png">产品类别</a><a class="aa"><img class="ab" alt="cat" src="images/category_5.png">产品类别</a>
	</div>
    <div class="row">
       <!-- <div id="container" class="span12"></div> -->
       <c:forEach var="dealer" items="${dealers }">
       <div class="span12">
         <h2>${dealer.name }</h2>
         <p>${dealer.lat }</p>
         <p>${dealer.lng }</p>
         <p><a class="btn" href="#" onclick="chooseAdd();">View details &raquo;</a></p>
       </div>
       </c:forEach>
    </div>
    <div class="row">
	  <div class="span4">module:<label id="module"></label></div>
	  <div class="span4">lat:<label id="lat"></label></div>
	  <div class="span4">lng:<label id="lng"></label></div>
	  <div class="span4">poiaddress:<label id="poiaddress"></label></div>
	  <div class="span4">poiname:<label id="poiname"></label></div>
	  <div class="span4">cityname:<label id="cityname"></label></div>
	</div>
    </div><!-- /.wrap -->
	
	<!-- <nav class="navbar navbar-default navbar-fixed-bottom my-bottom">
	  <div class="container">
		  
	  </div>
	</nav> -->
	<div id="push"></div>
	</div>
	
	
	<div id="footer">
      <div class="container">
        <p class="muted credit">Power by <a href="#">Hunter</a>.</p>
      </div>
    </div>
	
	<script>
		function chooseAdd(){
			var ifra ='<iframe id="mapPage" width="100%" height="800" frameborder=0 src="https://apis.map.qq.com/tools/locpicker?search=1&type=1&key=OB4BZ-D4W3U-B7VVO-4PJWW-6TKDJ-WPB77&referer=myapp"></iframe>'
			$("body").append(ifra);
			$("#wrap").hide();
			$("#footer").hide();
	    }
	    window.addEventListener('message', function(event) {
	        // 接收位置信息，用户选择确认位置点后选点组件会触发该事件，回传用户的位置信息
	        var loc = event.data;
	        if (loc && loc.module == 'locationPicker') {//防止其他应用也会向该页面post信息，需判断module是否为'locationPicker'
	          console.log('location', loc); 
	          $("#module").html(loc.module);
	          $("#lat").html(loc.latlng.lat);
	          $("#lng").html(loc.latlng.lng);
	          if(loc.poiaddress){
	        	  if(loc.poiaddress.length > 3){
	        		  $("#address").html(loc.poiaddress.substring(0,3) + "...");
	        	  }else{
	        		  $("#address").html(loc.poiaddress);
	        	  }
	          }
	         
	          $("#poiaddress").html(loc.poiaddress);
	          $("#poiname").html(loc.poiname);
	          $("#cityname").html(loc.cityname);
	          $("#mapPage").remove();
	          $("#wrap").show();
	          $("#footer").show();
	          doPost({lat:loc.latlng.lat, lng:loc.latlng.lng, name:loc.poiname});
	        }                                
	    }, false); 
	    
	   function doPost(data){
		   $.post("dealer/add.shtml",data,function(result){
			   Lobibox.notify("success", {
				    size: 'mini',
				    title: 'Message',
				    msg: 'success'
				});  
		   	});
	   }
	</script>
    <!-- jQuery (necessary for Bootstrap's JavaScript plugins) -->
    <script src="js/jquery.min.js"></script>
    <!-- Include all compiled plugins (below), or include individual files as needed -->
    <script src="js/bootstrap.min.js"></script>
    <script src="js/Lobibox.min.js"></script>
    <!-- If you do not need both (messageboxes and notifications) you can inclue only one of them -->
    <!-- <script src="js/messageboxes.min.js"></script> -->
    <!-- <script src="js/notifications.min.js"></script> -->
    <script charset="utf-8" src="http://map.qq.com/api/js?v=2.exp&libraries=convertor"></script>
    <script>
    
	function getLocation(){
	  //判断是否支持 获取本地位置
	  if (navigator.geolocation)
	    {
	    navigator.geolocation.getCurrentPosition(showPosition);
	    }
	  else{x.innerHTML="浏览器不支持定位.";}
	  }
	function showPosition(position)
	  {
	/* var lat=position.coords.latitude; 
	var lng=position.coords.longitude;
	//调用地图命名空间中的转换接口   type的可选值为 1:GPS经纬度，2:搜狗经纬度，3:百度经纬度，4:mapbar经纬度，5:google经纬度，6:搜狗墨卡托
	qq.maps.convertor.translate(new qq.maps.LatLng(lat,lng), 1, function(res){
	  //取出经纬度并且赋值
	     latlng = res[0];
	  
	  var map = new qq.maps.Map(document.getElementById("container"),{
	        center:  latlng,
	        zoom: 13
	    });
	    //设置marker标记
	   var marker = new qq.maps.Marker({
	            map : map,
	            position : latlng
	        });
	    }); */
	  }
	</script>

  </body>
</html>