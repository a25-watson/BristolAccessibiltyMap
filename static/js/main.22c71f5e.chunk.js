(this.webpackJsonpbristolaccessibiltymap=this.webpackJsonpbristolaccessibiltymap||[]).push([[0],{8:function(t,e,a){t.exports=a(9)},9:function(t,e,a){"use strict";a.r(e);var n=a(3),i=a(4),o=a(7),s=a(6),r=a(0),l=a.n(r),c=a(5),m=a.n(c),u=a(1),d=a.n(u);d.a.accessToken="pk.eyJ1Ijoic3RlYWx0aDk2IiwiYSI6ImNrOHdpZXJzeTAybG4zZm83c3Bhem1ieXEifQ.QLDnXvW8CNXiWXFOtxrN_Q";var p=function(t){Object(o.a)(a,t);var e=Object(s.a)(a);function a(t){var i;return Object(n.a)(this,a),(i=e.call(this,t)).state={lng:5,lat:34,zoom:2},i}return Object(i.a)(a,[{key:"componentDidMount",value:function(){var t=this,e=new d.a.Map({container:this.mapContainer,style:"mapbox://styles/stealth96/ckaddkt490d1y1iqd7vqd4p5a",center:[this.state.lng,this.state.lat],zoom:this.state.zoom});e.on("move",(function(){t.setState({lng:e.getCenter().lng.toFixed(4),lat:e.getCenter().lat.toFixed(4),zoom:e.getZoom().toFixed(2)})}))}},{key:"render",value:function(){var t=this;return l.a.createElement("div",null,l.a.createElement("div",{className:"sidebarStyle"},l.a.createElement("div",null,"Longitude: ",this.state.lng," | Latitude: ",this.state.lat," | Zoom: ",this.state.zoom)),l.a.createElement("div",{ref:function(e){return t.mapContainer=e},className:"mapContainer"}))}}]),a}(l.a.Component);m.a.render(l.a.createElement(p,null),document.getElementById("app"))}},[[8,1,2]]]);
//# sourceMappingURL=main.22c71f5e.chunk.js.map