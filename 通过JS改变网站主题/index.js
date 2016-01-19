// 绿色按钮事件
function changeColor1() {
      commonFunction("#0aa770","#099e6a");
  	}
// 粉色按钮事件
function changeColor2() {
      commonFunction("#FF9999","#FF6666");
  	}
// 蓝色按钮事件
function changeColor3() {
      commonFunction("#99CCFF","#0099CC");
   }
// 公共事件
function commonFunction(first_col,second_col){
      document.getElementById("index").style.backgroundColor= first_col;
      document.getElementById("nav").style.borderTopColor= second_col;
      document.getElementById("a1").style.color= second_col;
      document.getElementById("a2").style.color= second_col;
      document.getElementById("a3").style.color= second_col;
      document.getElementById("a4").style.color= second_col;
      document.getElementById("a5").style.color= second_col;
      document.getElementById("a6").style.color= second_col;
      document.getElementById("a7").style.color= second_col;
      document.getElementById("a8").style.color= second_col;
      setCookie('username',second_col,365);
   }
// 创建cookie
function setCookie(c_name,value,expiredays){
   var exdate=new Date()
   exdate.setDate(exdate.getDate()+expiredays)
   document.cookie=c_name+ "=" +value+
   ((expiredays==null) ? "" : "; expires="+exdate.toGMTString())
   }
// 获取cookie
function getCookie(c_name){
   if (document.cookie.length>0){ 
   c_start=document.cookie.indexOf(c_name + "=");
   if (c_start!=-1){ 
   c_start=c_start + c_name.length+1 ;
   c_end=document.cookie.indexOf(";",c_start);
   if (c_end==-1) 
   c_end=document.cookie.length;
   return document.cookie.substring(c_start,c_end);
   } 
   }
   return "";
   }
// 加载页面时返回cookie值
window.onload=function(){
   var col = getCookie('username');
   if("#099e6a"==col){
      changeColor1();
   }
   else if("#FF6666"==col){
      changeColor2();
   }
   else if("#0099CC"==col){
      changeColor3();
   }
}

