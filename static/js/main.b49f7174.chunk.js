(this["webpackJsonpf2e-week3"]=this["webpackJsonpf2e-week3"]||[]).push([[0],{101:function(t,e,i){},129:function(t,e,i){"use strict";i.r(e);var a=i(0),n=i.n(a),o=i(30),r=i.n(o),s=i(9),C=i(175),u=i(170),c=i(85),y=i.n(c),l=(i(101),i(173)),d=i(172),m=i(176),p=i(171),h=i(2);function f(t){var e=t.label,i=t.options,a=t.data,n=t.setData,o=t.setData2,r=t.setdirection;return Object(h.jsxs)(m.a,{size:"small",fullWidth:!0,error:!1,children:[Object(h.jsx)(l.a,{id:"demo-simple-select-label",children:e}),Object(h.jsx)(p.a,{labelId:"demo-simple-select-label",id:"demo-simple-select",value:a,label:"label",onChange:function(t){var a=t.target.value;n(a),"\u7e23\u5e02"===e&&o(""),"\u8def\u7dda"===e&&(o(i.filter((function(t){return(t.RouteName&&t.RouteName.Zh_tw)===a}))[0]),r(0))},children:i&&i.map((function(t,e){return Object(h.jsx)(d.a,{value:t.RouteName&&t.RouteName.Zh_tw||t.City,children:t.RouteName&&t.RouteName.Zh_tw||t.CityName},e)}))})]})}var D=i(82),b=i(66),j=i.n(b),I=i(83),x=i(84),N=i.n(x),O=i(87);function g(){var t=(new Date).toGMTString(),e=new O.a("SHA-1","TEXT");return e.setHMACKey("Pn9PITNbREc7_yBevt-7udS0UOE","TEXT"),e.update("x-date: "+t),{Authorization:'hmac username="125f67eef61d44189819c6378e4da9cb", algorithm="hmac-sha1", headers="x-date", signature="'+e.getHMAC("B64")+'"',"X-Date":t}}function S(t){return Object(I.a)(j.a.mark((function e(){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,N()({method:"get",url:t,headers:g()});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))()}var T=function(){var t=n.a.useState(""),e=Object(s.a)(t,2),i=e[0],a=e[1],o=n.a.useState(),r=Object(s.a)(o,2),c=r[0],l=r[1],d=n.a.useState(""),m=Object(s.a)(d,2),p=m[0],b=m[1],j=n.a.useState(),I=Object(s.a)(j,2),x=I[0],N=I[1],O=n.a.useState(0),g=Object(s.a)(O,2),T=g[0],R=g[1],w=n.a.useState(),V=Object(s.a)(w,2),v=V[0],E=V[1],U=n.a.useState(),A=Object(s.a)(U,2),Z=A[0],H=A[1];n.a.useEffect((function(){i&&function(t,e){S("https://ptx.transportdata.tw/MOTC/v2/Bus/Route/City/".concat(e,"?$format=JSON")).then((function(e){e.data.length>0&&t(e.data.sort((function(t,e){return(""+t.RouteName.Zh_tw).localeCompare(e.RouteName.Zh_tw)})))})).catch((function(t){return console.log(t)}))}(l,i),i&&x&&x.RouteName.Zh_tw&&x.RouteUID&&(function(t,e,i,a){S("https://ptx.transportdata.tw/MOTC/v2/Bus/StopOfRoute/City/".concat(e,"/").concat(i,"?$filter=RouteUID%20eq%20'").concat(a,"'&$top=30&$format=JSON")).then((function(e){e.data.length>0&&t(e.data)})).catch((function(t){return console.log(t)}))}(E,i,x.RouteName.Zh_tw,x.RouteUID),function(t,e,i,a){S("https://ptx.transportdata.tw/MOTC/v2/Bus/EstimatedTimeOfArrival/City/".concat(e,"/").concat(i,"?$filter=RouteUID%20eq%20'").concat(a,"'&$top=100&$format=JSON")).then((function(e){e.data.length>0&&t(e.data)})).catch((function(t){return console.log(t)}))}(H,i,x.RouteName.Zh_tw,x.RouteUID))}),[l,i,x]);var M=function(t,e){return Object(h.jsxs)("a",{href:"/",style:{display:"block",textDecoration:"none",width:"50%",color:e===T?"#fff":"#000",fontWeight:e===T?"bold":"normal"},onClick:function(t){t.preventDefault(),R(e)},children:[" \u5f80 ",t]})};return Object(h.jsxs)("div",{style:{maxWidth:"400px",padding:"12px 20px"},children:[Object(h.jsxs)(C.a,{display:"flex",mb:1,children:[Object(h.jsx)(f,{label:"\u7e23\u5e02",options:D,data:i,setData:a,setData2:b}),c&&Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)(C.a,{mr:1}),Object(h.jsx)(f,{label:"\u8def\u7dda",options:c,data:p,setData:b,setData2:N,setdirection:R})]})]}),x&&Object(h.jsxs)(C.a,{borderRadius:2,boxShadow:3,children:[Object(h.jsxs)(C.a,{borderRadius:2,display:"flex",className:"bg-primary300",style:{color:"#fff",padding:"16px 32px",borderBottomLeftRadius:"0",borderBottomRightRadius:"0"},children:[Object(h.jsx)("h2",{style:{width:"100%"},children:x.RouteName.Zh_tw}),Object(h.jsx)("a",{href:x.RouteMapImageUrl,target:"_blank",rel:"noreferrer",style:{display:"block",marginLeft:"auto",color:"#fff"},children:Object(h.jsx)(y.a,{})})]}),Object(h.jsxs)(C.a,{className:"bg-primary200",display:"flex",style:{padding:"8px 0",textAlign:"center"},children:[M(x.DepartureStopNameZh,0),Object(h.jsx)(u.a,{orientation:"vertical",style:{borderColor:"#fff"},flexItem:!0}),M(x.DestinationStopNameZh,1)]}),Object(h.jsx)(C.a,{style:{padding:"8px 20px"},children:v&&v.map((function(t,e){return t.Direction===T&&Object(h.jsx)(C.a,{children:t.Stops.map((function(t,e){return Object(h.jsxs)(C.a,{children:[Object(h.jsxs)(C.a,{display:"flex",style:{padding:"8px 0"},children:[Object(h.jsx)(C.a,{borderRadius:2,display:"flex",className:"border-primary400",children:Object(h.jsx)("p",{className:"primary400",style:{width:"60px",textAlign:"center",margin:"auto 0",padding:"4px 0"},children:Z&&Z.some((function(e){return e.StopUID===t.StopUID}))&&Z.filter((function(e){return"-1"!==e.CurrentStop&&"-1"!==e.PlateNumb&&e.StopUID===t.StopUID})).sort((function(t,e){return t.EstimateTime-e.EstimateTime})).map((function(t){return t&&t.EstimateTime?Object(h.jsx)("span",{children:"".concat((t.EstimateTime/60).toFixed(0),"\u5206")}):Object(h.jsx)("span",{style:{fontSize:"10px"},children:"\u5c1a\u672a\u5230\u7ad9"})}))})}),Object(h.jsx)("p",{style:{margin:"auto 0 auto 8px",fontWeight:"bold"},children:t.StopName.Zh_tw})]}),Object(h.jsx)(u.a,{light:!0})]},t.StopUID)}))},e)}))})]})]})};r.a.render(Object(h.jsx)(n.a.StrictMode,{children:Object(h.jsx)(T,{})}),document.getElementById("root"))},82:function(t){t.exports=JSON.parse('[{"CityID":"A","CityName":"\u81fa\u5317\u5e02","CityCode":"TPE","City":"Taipei","CountyID":"A","Version":"21.08.1"},{"CityID":"B","CityName":"\u81fa\u4e2d\u5e02","CityCode":"TXG","City":"Taichung","CountyID":"B","Version":"21.08.1"},{"CityID":"C","CityName":"\u57fa\u9686\u5e02","CityCode":"KEE","City":"Keelung","CountyID":"C","Version":"21.08.1"},{"CityID":"D","CityName":"\u81fa\u5357\u5e02","CityCode":"TNN","City":"Tainan","CountyID":"D","Version":"21.08.1"},{"CityID":"E","CityName":"\u9ad8\u96c4\u5e02","CityCode":"KHH","City":"Kaohsiung","CountyID":"E","Version":"21.08.1"},{"CityID":"F","CityName":"\u65b0\u5317\u5e02","CityCode":"NWT","City":"NewTaipei","CountyID":"F","Version":"21.08.1"},{"CityID":"G","CityName":"\u5b9c\u862d\u7e23","CityCode":"ILA","City":"YilanCounty","CountyID":"G","Version":"21.08.1"},{"CityID":"H","CityName":"\u6843\u5712\u5e02","CityCode":"TAO","City":"Taoyuan","CountyID":"H","Version":"21.08.1"},{"CityID":"I","CityName":"\u5609\u7fa9\u5e02","CityCode":"CYI","City":"Chiayi","CountyID":"I","Version":"21.08.1"},{"CityID":"J","CityName":"\u65b0\u7af9\u7e23","CityCode":"HSQ","City":"HsinchuCounty","CountyID":"J","Version":"21.08.1"},{"CityID":"K","CityName":"\u82d7\u6817\u7e23","CityCode":"MIA","City":"MiaoliCounty","CountyID":"K","Version":"21.08.1"},{"CityID":"M","CityName":"\u5357\u6295\u7e23","CityCode":"NAN","City":"NantouCounty","CountyID":"M","Version":"21.08.1"},{"CityID":"N","CityName":"\u5f70\u5316\u7e23","CityCode":"CHA","City":"ChanghuaCounty","CountyID":"N","Version":"21.08.1"},{"CityID":"O","CityName":"\u65b0\u7af9\u5e02","CityCode":"HSZ","City":"Hsinchu","CountyID":"O","Version":"21.08.1"},{"CityID":"P","CityName":"\u96f2\u6797\u7e23","CityCode":"YUN","City":"YunlinCounty","CountyID":"P","Version":"21.08.1"},{"CityID":"Q","CityName":"\u5609\u7fa9\u7e23","CityCode":"CYQ","City":"ChiayiCounty","CountyID":"Q","Version":"21.08.1"},{"CityID":"T","CityName":"\u5c4f\u6771\u7e23","CityCode":"PIF","City":"PingtungCounty","CountyID":"T","Version":"21.08.1"},{"CityID":"U","CityName":"\u82b1\u84ee\u7e23","CityCode":"HUA","City":"HualienCounty","CountyID":"U","Version":"21.08.1"},{"CityID":"V","CityName":"\u81fa\u6771\u7e23","CityCode":"TTT","City":"TaitungCounty","CountyID":"V","Version":"21.08.1"},{"CityID":"W","CityName":"\u91d1\u9580\u7e23","CityCode":"KIN","City":"KinmenCounty","CountyID":"W","Version":"21.08.1"},{"CityID":"X","CityName":"\u6f8e\u6e56\u7e23","CityCode":"PEN","City":"PenghuCounty","CountyID":"X","Version":"21.08.1"},{"CityID":"Z","CityName":"\u9023\u6c5f\u7e23","CityCode":"LIE","City":"LienchiangCounty","CountyID":"Z","Version":"21.08.1"}]')}},[[129,1,2]]]);
//# sourceMappingURL=main.b49f7174.chunk.js.map