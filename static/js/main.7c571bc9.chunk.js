(this["webpackJsonpf2e-week3"]=this["webpackJsonpf2e-week3"]||[]).push([[0],{101:function(t,e,i){},129:function(t,e,i){"use strict";i.r(e);var a=i(0),n=i.n(a),o=i(30),r=i.n(o),s=i(11),C=i(176),y=i(171),c=i(85),u=i.n(c),d=(i(101),i(174)),l=i(173),m=i(177),h=i(178),j=i(172),p=i(2);function b(t){var e=t.label,i=t.options,a=t.data,n=t.setData,o=t.setData2,r=t.setdirection,s=t.setstopsData;return Object(p.jsxs)(m.a,{size:"small",fullWidth:!0,error:!i.length,children:[Object(p.jsx)(d.a,{id:"demo-simple-select-label",children:e}),Object(p.jsx)(j.a,{labelId:"demo-simple-select-label",id:"demo-simple-select",value:a,label:"City",onChange:function(t){n(t.target.value),r(0),s(void 0),"\u7e23\u5e02"===e&&o("")},children:i&&i.map((function(t){return Object(p.jsx)(l.a,{value:t.RouteName&&t.RouteName.Zh_tw||t.City,onClick:function(){"\u8def\u7dda"===e&&o(t)},children:t.RouteName&&t.RouteName.Zh_tw||t.CityName},t.RouteUID||t.CityID)}))}),!i.length&&Object(p.jsx)(h.a,{children:"\u8acb\u9078\u64c7\u7e23\u5e02"})]})}var D=i(66),I=i.n(D),x=i(82),f=i(83),N=i.n(f),O=i(87);function g(){var t=(new Date).toGMTString(),e=new O.a("SHA-1","TEXT");return e.setHMACKey("Pn9PITNbREc7_yBevt-7udS0UOE","TEXT"),e.update("x-date: "+t),{Authorization:'hmac username="125f67eef61d44189819c6378e4da9cb", algorithm="hmac-sha1", headers="x-date", signature="'+e.getHMAC("B64")+'"',"X-Date":t}}function T(t){return Object(x.a)(I.a.mark((function e(){return I.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,N()({method:"get",url:t,headers:g()});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))()}var V=i(84);var w=function(){var t=n.a.useState(""),e=Object(s.a)(t,2),i=e[0],a=e[1],o=n.a.useState(""),r=Object(s.a)(o,2),c=r[0],d=r[1],l=n.a.useState(""),m=Object(s.a)(l,2),h=m[0],j=m[1],D=n.a.useState(),I=Object(s.a)(D,2),x=I[0],f=I[1],N=n.a.useState(),O=Object(s.a)(N,2),g=O[0],w=O[1],R=n.a.useState(0),S=Object(s.a)(R,2),v=S[0],E=S[1];n.a.useEffect((function(){i&&function(t,e){T("https://ptx.transportdata.tw/MOTC/v2/Bus/Route/City/".concat(e,"?$format=JSON")).then((function(e){t(e.data.sort((function(t,e){return(""+t.RouteName.Zh_tw).localeCompare(e.RouteName.Zh_tw)})))})).catch((function(t){return console.log(t)}))}(d,i),i&&x&&x.RouteName.Zh_tw&&x.RouteUID&&function(t,e,i,a){T("https://ptx.transportdata.tw/MOTC/v2/Bus/EstimatedTimeOfArrival/City/".concat(e,"/").concat(i,"?$filter=RouteUID%20eq%20'").concat(a,"'&$top=100&$format=JSON")).then((function(e){e.data.length>0&&t(e.data)})).catch((function(t){return console.log(t)}))}(w,i,x.RouteName.Zh_tw,x.RouteUID)}),[d,i,x]);var A=function(t,e){return Object(p.jsxs)(C.a,{style:{width:"50%",color:e===v?"#fff":"#000",fontWeight:e===v?"bold":"normal"},onClick:function(){return E(e)},children:[" \u5f80 ",t]})};return Object(p.jsxs)("div",{style:{maxWidth:"500px",padding:"12px 20px"},children:[Object(p.jsxs)(C.a,{display:"flex",mb:1,children:[Object(p.jsx)(b,{label:"\u7e23\u5e02",options:V,data:i,setData:a,setData2:j,setdirection:E,setstopsData:w}),i&&c&&Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)(C.a,{mr:1}),Object(p.jsx)(b,{label:"\u8def\u7dda",options:c,data:h,setData:j,setData2:f,setdirection:E,setstopsData:w})]})]}),x&&Object(p.jsxs)(C.a,{borderRadius:2,boxShadow:3,children:[Object(p.jsxs)(C.a,{borderRadius:2,display:"flex",className:"bg-primary300",style:{color:"#fff",padding:"16px 32px",borderBottomLeftRadius:"0",borderBottomRightRadius:"0"},children:[Object(p.jsx)("h2",{style:{width:"100%"},children:x.RouteName.Zh_tw}),Object(p.jsx)("a",{href:x.RouteMapImageUrl,target:"_blank",rel:"noreferrer",style:{display:"block",marginLeft:"auto",color:"#fff"},children:Object(p.jsx)(u.a,{})})]}),Object(p.jsxs)(C.a,{className:"bg-primary200",display:"flex",style:{padding:"8px 0",textAlign:"center"},children:[A(x.DepartureStopNameZh,0),Object(p.jsx)(y.a,{orientation:"vertical",style:{borderColor:"#fff"},flexItem:!0}),A(x.DestinationStopNameZh,1)]}),Object(p.jsx)(C.a,{style:{padding:"8px 20px"},children:g?g.map((function(t,e){return t.Direction===v&&Object(p.jsxs)(p.Fragment,{children:[Object(p.jsxs)(C.a,{display:"flex",style:{padding:"8px 0"},children:[Object(p.jsx)(C.a,{borderRadius:2,display:"flex",className:"border-primary400",children:Object(p.jsx)("p",{className:"primary400",style:{width:"60px",textAlign:"center",margin:"auto 0"},children:t.EstimateTime?Object(p.jsxs)("span",{children:[(t.EstimateTime/60).toFixed(0),"\u5206"]}):Object(p.jsx)("span",{style:{fontSize:"10px"},children:"\u5c1a\u672a\u767c\u8eca"})})}),Object(p.jsx)("p",{style:{margin:"auto 0 auto 8px",fontWeight:"bold"},children:t.StopName.Zh_tw})]}),Object(p.jsx)(y.a,{light:!0})]})})):Object(p.jsx)(p.Fragment,{children:"\u66ab\u7121\u8cc7\u6599"})})]})]})};r.a.render(Object(p.jsx)(n.a.StrictMode,{children:Object(p.jsx)(w,{})}),document.getElementById("root"))},84:function(t){t.exports=JSON.parse('[{"CityID":"A","CityName":"\u81fa\u5317\u5e02","CityCode":"TPE","City":"Taipei","CountyID":"A","Version":"21.08.1"},{"CityID":"B","CityName":"\u81fa\u4e2d\u5e02","CityCode":"TXG","City":"Taichung","CountyID":"B","Version":"21.08.1"},{"CityID":"C","CityName":"\u57fa\u9686\u5e02","CityCode":"KEE","City":"Keelung","CountyID":"C","Version":"21.08.1"},{"CityID":"D","CityName":"\u81fa\u5357\u5e02","CityCode":"TNN","City":"Tainan","CountyID":"D","Version":"21.08.1"},{"CityID":"E","CityName":"\u9ad8\u96c4\u5e02","CityCode":"KHH","City":"Kaohsiung","CountyID":"E","Version":"21.08.1"},{"CityID":"F","CityName":"\u65b0\u5317\u5e02","CityCode":"NWT","City":"NewTaipei","CountyID":"F","Version":"21.08.1"},{"CityID":"G","CityName":"\u5b9c\u862d\u7e23","CityCode":"ILA","City":"YilanCounty","CountyID":"G","Version":"21.08.1"},{"CityID":"H","CityName":"\u6843\u5712\u5e02","CityCode":"TAO","City":"Taoyuan","CountyID":"H","Version":"21.08.1"},{"CityID":"I","CityName":"\u5609\u7fa9\u5e02","CityCode":"CYI","City":"Chiayi","CountyID":"I","Version":"21.08.1"},{"CityID":"J","CityName":"\u65b0\u7af9\u7e23","CityCode":"HSQ","City":"HsinchuCounty","CountyID":"J","Version":"21.08.1"},{"CityID":"K","CityName":"\u82d7\u6817\u7e23","CityCode":"MIA","City":"MiaoliCounty","CountyID":"K","Version":"21.08.1"},{"CityID":"M","CityName":"\u5357\u6295\u7e23","CityCode":"NAN","City":"NantouCounty","CountyID":"M","Version":"21.08.1"},{"CityID":"N","CityName":"\u5f70\u5316\u7e23","CityCode":"CHA","City":"ChanghuaCounty","CountyID":"N","Version":"21.08.1"},{"CityID":"O","CityName":"\u65b0\u7af9\u5e02","CityCode":"HSZ","City":"Hsinchu","CountyID":"O","Version":"21.08.1"},{"CityID":"P","CityName":"\u96f2\u6797\u7e23","CityCode":"YUN","City":"YunlinCounty","CountyID":"P","Version":"21.08.1"},{"CityID":"Q","CityName":"\u5609\u7fa9\u7e23","CityCode":"CYQ","City":"ChiayiCounty","CountyID":"Q","Version":"21.08.1"},{"CityID":"T","CityName":"\u5c4f\u6771\u7e23","CityCode":"PIF","City":"PingtungCounty","CountyID":"T","Version":"21.08.1"},{"CityID":"U","CityName":"\u82b1\u84ee\u7e23","CityCode":"HUA","City":"HualienCounty","CountyID":"U","Version":"21.08.1"},{"CityID":"V","CityName":"\u81fa\u6771\u7e23","CityCode":"TTT","City":"TaitungCounty","CountyID":"V","Version":"21.08.1"},{"CityID":"W","CityName":"\u91d1\u9580\u7e23","CityCode":"KIN","City":"KinmenCounty","CountyID":"W","Version":"21.08.1"},{"CityID":"X","CityName":"\u6f8e\u6e56\u7e23","CityCode":"PEN","City":"PenghuCounty","CountyID":"X","Version":"21.08.1"},{"CityID":"Z","CityName":"\u9023\u6c5f\u7e23","CityCode":"LIE","City":"LienchiangCounty","CountyID":"Z","Version":"21.08.1"}]')}},[[129,1,2]]]);
//# sourceMappingURL=main.7c571bc9.chunk.js.map