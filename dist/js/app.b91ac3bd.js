(function(){"use strict";var e={7117:function(e,t,a){var n=a(2856),r=function(){var e=this,t=e._self._c;return t("div",{attrs:{id:"app"}},[t("MyHeader"),t("MyList",{directives:[{name:"show",rawName:"v-show",value:e.dataList.length,expression:"dataList.length"}],attrs:{dataList:e.dataList,deleteTask:e.deleteTask,changeFlag:e.changeFlag,clearTask:e.clearTask}})],1)},s=[],i=function(){var e=this,t=e._self._c;return t("div",[t("input",{ref:"task",attrs:{type:"text",placeholder:"请输入任务"},on:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.submitTask(t)}}})])},l=[],o=a(2451),c={name:"MyHeader",methods:{submitTask(e){const t=e.target.value;console.log(t);const a={id:(0,o.A)(),name:t,flag:!1};this.$bus.$emit("sendTask",a,e)}}},u=c,d=a(1656),f=(0,d.A)(u,i,l,!1,null,null,null),h=f.exports,g=function(){var e=this,t=e._self._c;return t("div",[t("ul",[e._l(e.dataList,(function(a){return t("li",{key:a.id},[t("input",{directives:[{name:"model",rawName:"v-model",value:a.flag,expression:"item.flag"}],attrs:{type:"checkbox"},domProps:{checked:a.flag,checked:Array.isArray(a.flag)?e._i(a.flag,null)>-1:a.flag},on:{change:[function(t){var n=a.flag,r=t.target,s=!!r.checked;if(Array.isArray(n)){var i=null,l=e._i(n,i);r.checked?l<0&&e.$set(a,"flag",n.concat([i])):l>-1&&e.$set(a,"flag",n.slice(0,l).concat(n.slice(l+1)))}else e.$set(a,"flag",s)},function(t){return e.changeFlag(a.flag,"2",a.id)}]}}),t("span",[e._v(e._s(a.name))]),t("button",{on:{click:function(t){return e.deleteTask(t,a.id)}}},[e._v("删除")])])})),t("li",[t("input",{directives:[{name:"model",rawName:"v-model",value:e.isAll,expression:"isAll"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(e.isAll)?e._i(e.isAll,null)>-1:e.isAll},on:{change:[function(t){var a=e.isAll,n=t.target,r=!!n.checked;if(Array.isArray(a)){var s=null,i=e._i(a,s);n.checked?i<0&&(e.isAll=a.concat([s])):i>-1&&(e.isAll=a.slice(0,i).concat(a.slice(i+1)))}else e.isAll=r},function(t){return e.checkAll(t)}]}}),t("span",[e._v("已完成:"+e._s(e.doneNumber)+" / ")]),t("span",[e._v(" 全部:"+e._s(e.dataList.length))]),t("button",{staticStyle:{float:"right"},on:{click:e.clearDoneTask}},[e._v("清除已完成任务")])])],2)])},p=[],v={name:"MyList",props:["dataList","deleteTask","changeFlag","flag","clearTask"],data(){return{}},methods:{checkAll(e){this.changeFlag(e.target.checked,"1")},clearDoneTask(){this.clearTask()}},computed:{doneNumber(){let e=0;return this.dataList.forEach((t=>{t.flag&&e++})),e},isAll:{get(){return this.dataList.length===this.doneNumber&&this.doneNumber>0},set(e){this.changeFlag(e)}}}},k=v,m=(0,d.A)(k,g,p,!1,null,null,null),y=m.exports,b={name:"App",components:{MyHeader:h,MyList:y},data(){return{dataList:JSON.parse(localStorage.getItem("tasks"))||[]}},methods:{submitTask(e,t){console.log("我收到了数据：",e),this.dataList.unshift(e),t.target.value=null},deleteTask(e,t){this.dataList=this.dataList.filter((e=>e.id!==t)),console.log("我是被删除后的数组长度",this.dataList.length)},changeFlag(e,t,a){"2"===t?this.dataList.forEach((n=>{n.id===a&&(console.log("@@@",t,e),n.flag=e)})):this.dataList.forEach((t=>{t.flag=e}))},clearTask(){this.dataList=this.dataList.filter((e=>!1===e.flag))}},watch:{dataList:{deep:!0,handler(e){localStorage.setItem("tasks",JSON.stringify(e))}}},mounted(){this.$bus.$on("sendTask",this.submitTask)},beforeDestroy(){this.$bus.$off("sendTask")}},A=b,_=(0,d.A)(A,r,s,!1,null,null,null),L=_.exports;n.Ay.config.productionTip=!1,new n.Ay({render:e=>e(L),beforeCreate(){n.Ay.prototype.$bus=this}}).$mount("#app")}},t={};function a(n){var r=t[n];if(void 0!==r)return r.exports;var s=t[n]={exports:{}};return e[n].call(s.exports,s,s.exports,a),s.exports}a.m=e,function(){var e=[];a.O=function(t,n,r,s){if(!n){var i=1/0;for(u=0;u<e.length;u++){n=e[u][0],r=e[u][1],s=e[u][2];for(var l=!0,o=0;o<n.length;o++)(!1&s||i>=s)&&Object.keys(a.O).every((function(e){return a.O[e](n[o])}))?n.splice(o--,1):(l=!1,s<i&&(i=s));if(l){e.splice(u--,1);var c=r();void 0!==c&&(t=c)}}return t}s=s||0;for(var u=e.length;u>0&&e[u-1][2]>s;u--)e[u]=e[u-1];e[u]=[n,r,s]}}(),function(){a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,{a:t}),t}}(),function(){a.d=function(e,t){for(var n in t)a.o(t,n)&&!a.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}}(),function(){a.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={524:0};a.O.j=function(t){return 0===e[t]};var t=function(t,n){var r,s,i=n[0],l=n[1],o=n[2],c=0;if(i.some((function(t){return 0!==e[t]}))){for(r in l)a.o(l,r)&&(a.m[r]=l[r]);if(o)var u=o(a)}for(t&&t(n);c<i.length;c++)s=i[c],a.o(e,s)&&e[s]&&e[s][0](),e[s]=0;return a.O(u)},n=self["webpackChunkvue_demo"]=self["webpackChunkvue_demo"]||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))}();var n=a.O(void 0,[504],(function(){return a(7117)}));n=a.O(n)})();
//# sourceMappingURL=app.b91ac3bd.js.map