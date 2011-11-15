/*
Copyright 2011, KISSY UI Library v1.20dev
MIT Licensed
build time: Nov 14 18:14
*/
KISSY.add("anim/base",function(c,b,f,i,n,a,m,e){function h(g,j,d,p,o){if(g=b.get(g)){if(!(this instanceof h))return new h(g,j,d,p,o);j=c.isString(j)?c.unparam(j,";",":"):c.clone(j);for(var q in j){var w=k(c.trim(q));if(q!=w){j[w]=j[q];delete j[q]}}d=c.isPlainObject(d)?c.clone(d):{duration:parseFloat(d)||undefined,easing:p,complete:o};this.config=d=c.merge(M,d);d.duration*=1E3;this.elem=this.domEl=g;this.props=j;this._backupProps={};this._fxs={};this.on("complete",r)}}function r(g){var j=this._backupProps,
d=this.config;c.isEmptyObject(j=this._backupProps)||b.css(this.elem,j);d.complete&&d.complete.call(this,g)}function s(){var g=this.config,j=this._backupProps,d=this.elem,p,o,q,w=g.specialEasing||{},N=this._fxs,t=this.props;y(this);if(this.fire("start")===false)this.stop(0);else{if(x(d)){p=b.css(d,"display")=="none";for(q in t){o=t[q];if(o=="hide"&&p||o=="show"&&!p){this.stop(1);return}}}c.each(t,function(E,u){if(t.hasOwnProperty(u)){var v;if(c.isArray(E)){v=w[u]=E[1];t[u]=E[0]}else v=w[u]=w[u]||g.easing;
if(c.isString(v))v=w[u]=i[v];w[u]=v||i.easeNone}});c.each(K,function(E,u){var v,H,L;if(L=t[u]){H={};c.each(E,function(J){H[J]=b.css(d,J);w[J]=w[u]});b.css(d,u,L);for(v in H){t[v]=b.css(d,v);b.css(d,v,H[v])}delete t[u]}});for(q in t)if(t.hasOwnProperty(q)){o=c.trim(t[q]);var z,B,F={elem:d,prop:q,duration:g.duration,easing:w[q]},D=m.getFx(F);if(c.inArray(o,A)){j[q]=b.style(d,q);if(o=="toggle")o=p?"show":"hide";if(o=="hide"){z=0;B=D.cur();j.display="none"}else{b.show(d);B=0;z=D.cur()}o=z}else{z=o;B=
D.cur()}o+="";var I="",G=o.match(O);if(G){z=parseFloat(G[2]);if((I=G[3])&&I!=="px"){b.css(d,q,o);B=z/D.cur()*B;b.css(d,q,B+I)}if(G[1])z=(G[1]==="-="?-1:1)*z+B}F.from=B;F.to=z;F.unit=I;D.load(F);N[q]=D}if(x(d)&&(t.width||t.height)){c.mix(j,{overflow:b.css(d,"overflow"),"overflow-x":b.css(d,"overflowX"),"overflow-y":b.css(d,"overflowY")});b.css(d,"overflow","hidden");if(b.css(d,"display")==="inline"&&b.css(d,"float")==="none")n.ie?b.css(d,"zoom",1):b.css(d,"display","inline-block")}a.start(this)}}function y(g){var j=
g.elem,d=b.data(j,C);d||b.data(j,C,d={});d[c.stamp(g)]=g}function l(g,j,d,p){d&&p!==false&&e.removeQueue(g,p);g=b.data(g,C);g=c.merge(g);for(var o in g){d=g[o];d.config.queue==p&&d.stop(j)}}var k=b._camelCase,x=b._isElementNode,A=["hide","show","toggle"],K={border:["borderBottomWidth","borderLeftWidth","borderRightWidth","borderTopWidth"],borderBottom:["borderBottomWidth"],borderLeft:["borderLeftWidth"],borderTop:["borderTopWidth"],borderRight:["borderRightWidth"],font:["fontSize","fontWeight"],margin:["marginBottom",
"marginLeft","marginRight","marginTop"],padding:["paddingBottom","paddingLeft","paddingRight","paddingTop"]},M={duration:1,easing:"easeNone"},O=/^([+\-]=)?([\d+.\-]+)([a-z%]*)$/i;h.SHORT_HANDS=K;c.augment(h,f.Target,{isRunning:function(){var g;g=(g=b.data(this.elem,C))?!!g[c.stamp(this)]:0;return g},_runInternal:s,run:function(){this.config.queue===false?s.call(this):e.queue(this);return this},_frame:function(){var g,j=1,d=this._fxs;for(g in d)if(d.hasOwnProperty(g))j&=d[g].frame();if(this.fire("step")===
false||j)this.stop(j)},stop:function(g){var j=this.config.queue,d,p=this._fxs;if(this.isRunning()){if(g){for(d in p)p.hasOwnProperty(d)&&p[d].frame(1);this.fire("complete")}a.stop(this);g=this.elem;if(d=b.data(g,C)){delete d[c.stamp(this)];c.isEmptyObject(d)&&b.removeData(g,C)}j!==false&&e.dequeue(this);return this}else j!==false&&e.remove(this)}});var C=c.guid("ks-anim-unqueued-"+c.now()+"-");h.stop=function(g,j,d,p){if(p===null||c.isString(p)||p===false)return l.apply(undefined,arguments);d&&e.removeQueues(g);
var o=b.data(g,C);o=c.merge(o);for(var q in o)o[q].stop(j)};h.isRunning=function(g){return(g=b.data(g,C))&&!c.isEmptyObject(g)};h.Q=e;return h},{requires:["dom","event","./easing","ua","./manager","./fx","./queue"]});
KISSY.add("anim/color",function(c,b,f,i){function n(l){l+="";var k;if(k=l.match(r))return[parseInt(k[1]),parseInt(k[2]),parseInt(k[3])];else if(k=l.match(s))return[parseInt(k[1]),parseInt(k[2]),parseInt(k[3]),parseInt(k[4])];else if(k=l.match(y)){for(l=1;l<k.length;l++)if(k[l].length<2)k[l]+=k[l];return[parseInt(k[1],m),parseInt(k[2],m),parseInt(k[3],m)]}if(h[l=l.toLowerCase()])return h[l];return[255,255,255]}function a(){a.superclass.constructor.apply(this,arguments)}var m=16,e=Math.floor,h={black:[0,
0,0],silver:[192,192,192],gray:[128,128,128],white:[255,255,255],maroon:[128,0,0],red:[255,0,0],purple:[128,0,128],fuchsia:[255,0,255],green:[0,128,0],lime:[0,255,0],olive:[128,128,0],yellow:[255,255,0],navy:[0,0,128],blue:[0,0,255],teal:[0,128,128],aqua:[0,255,255]},r=/^rgb\(([0-9]+)\s*,\s*([0-9]+)\s*,\s*([0-9]+)\)$/i,s=/^rgba\(([0-9]+)\s*,\s*([0-9]+)\s*,\s*([0-9]+),\s*([0-9]+)\)$/i,y=/^#?([0-9A-F]{1,2})([0-9A-F]{1,2})([0-9A-F]{1,2})$/i;b=f.SHORT_HANDS;b.background=["backgroundColor"];b.borderColor=
["borderBottomColor","borderLeftColor","borderRightColor","borderTopColor"];b.border.push("borderBottomColor","borderLeftColor","borderRightColor","borderTopColor");b.borderBottom.push("borderBottomColor");b.borderLeft.push("borderLeftColor");b.borderRight.push("borderRightColor");b.borderTop.push("borderTopColor");c.extend(a,i,{load:function(){a.superclass.load.apply(this,arguments);if(this.from)this.from=n(this.from);if(this.to)this.to=n(this.to)},interpolate:function(l,k,x){var A=a.superclass.interpolate;
if(l.length==3&&k.length==3)return"rgb("+[e(A(l[0],k[0],x)),e(A(l[1],k[1],x)),e(A(l[2],k[2],x))].join(", ")+")";else if(l.length==4||k.length==4)return"rgba("+[e(A(l[0],k[0],x)),e(A(l[1],k[1],x)),e(A(l[2],k[2],x)),e(A(l[3]||1,k[3]||1,x))].join(", ")+")"}});c.each(["backgroundColor","borderBottomColor","borderLeftColor","borderRightColor","borderTopColor","color","outlineColor"],function(l){i.Factories[l]=a});return a},{requires:["dom","./base","./fx"]});
KISSY.add("anim/easing",function(){var c=Math.PI,b=Math.pow,f=Math.sin,i=1.70158,n={swing:function(a){return-Math.cos(a*c)/2+0.5},easeNone:function(a){return a},easeIn:function(a){return a*a},easeOut:function(a){return(2-a)*a},easeBoth:function(a){return(a*=2)<1?0.5*a*a:0.5*(1- --a*(a-2))},easeInStrong:function(a){return a*a*a*a},easeOutStrong:function(a){return 1- --a*a*a*a},easeBothStrong:function(a){return(a*=2)<1?0.5*a*a*a*a:0.5*(2-(a-=2)*a*a*a)},elasticIn:function(a){if(a===0||a===1)return a;
return-(b(2,10*(a-=1))*f((a-0.075)*2*c/0.3))},elasticOut:function(a){if(a===0||a===1)return a;return b(2,-10*a)*f((a-0.075)*2*c/0.3)+1},elasticBoth:function(a){if(a===0||(a*=2)===2)return a;if(a<1)return-0.5*b(2,10*(a-=1))*f((a-0.1125)*2*c/0.45);return b(2,-10*(a-=1))*f((a-0.1125)*2*c/0.45)*0.5+1},backIn:function(a){if(a===1)a-=0.0010;return a*a*((i+1)*a-i)},backOut:function(a){return(a-=1)*a*((i+1)*a+i)+1},backBoth:function(a){if((a*=2)<1)return 0.5*a*a*(((i*=1.525)+1)*a-i);return 0.5*((a-=2)*a*
(((i*=1.525)+1)*a+i)+2)},bounceIn:function(a){return 1-n.bounceOut(1-a)},bounceOut:function(a){return a<1/2.75?7.5625*a*a:a<2/2.75?7.5625*(a-=1.5/2.75)*a+0.75:a<2.5/2.75?7.5625*(a-=2.25/2.75)*a+0.9375:7.5625*(a-=2.625/2.75)*a+0.984375},bounceBoth:function(a){if(a<0.5)return n.bounceIn(a*2)*0.5;return n.bounceOut(a*2-1)*0.5+0.5}};n.NativeTimeFunction={easeNone:"linear",ease:"ease",easeIn:"ease-in",easeOut:"ease-out",easeBoth:"ease-in-out",easeInStrong:"cubic-bezier(0.9, 0.0, 0.9, 0.5)",easeOutStrong:"cubic-bezier(0.1, 0.5, 0.1, 1.0)",
easeBothStrong:"cubic-bezier(0.9, 0.0, 0.1, 1.0)"};return n});
KISSY.add("anim/fx",function(c,b,f){function i(a){this.load(a)}function n(a,m){if((!a.style||a.style[m]==null)&&b.attr(a,m,f,1)!=null)return 1;return 0}c.augment(i,{load:function(a){c.mix(this,a);this.startTime=c.now();this.pos=0;this.unit=this.unit||""},frame:function(a){var m=0,e=c.now();if(a||e>=this.duration+this.startTime)m=this.pos=1;else{a=e-this.startTime;this.pos=this.easing(a/this.duration)}this.update();return m},interpolate:function(a,m,e){return c.isNumber(a)&&c.isNumber(m)?(a+(m-a)*
e).toFixed(3):f},update:function(){var a=this.prop,m=this.elem,e=this.to,h=this.interpolate(this.from,e,this.pos);if(h===f){if(!this.finished){this.finished=1;b.css(m,a,e)}}else{h+=this.unit;n(m,a)?b.attr(m,a,h,1):b.css(m,a,h)}},cur:function(){var a=this.prop,m=this.elem;if(n(m,a))return b.attr(m,a,f,1);var e;a=b.css(m,a);return isNaN(e=parseFloat(a))?!a||a==="auto"?0:a:e}});i.Factories={};i.getFx=function(a){return new (i.Factories[a.prop]||i)(a)};return i},{requires:["dom"]});
KISSY.add("anim/manager",function(c){var b=c.stamp;return{interval:15,runnings:{},timer:null,start:function(f){var i=b(f);if(!this.runnings[i]){this.runnings[i]=f;this.startTimer()}},stop:function(f){this.notRun(f)},notRun:function(f){delete this.runnings[b(f)];c.isEmptyObject(this.runnings)&&this.stopTimer()},pause:function(f){this.notRun(f)},resume:function(f){this.start(f)},startTimer:function(){var f=this;if(!f.timer)f.timer=setTimeout(function(){if(f.runFrames())f.stopTimer();else{f.timer=0;
f.startTimer()}},f.interval)},stopTimer:function(){var f=this.timer;if(f){clearTimeout(f);this.timer=0}},runFrames:function(){var f=1,i=this.runnings,n;for(n in i)if(i.hasOwnProperty(n)){f=0;i[n]._frame()}return f}}});
KISSY.add("anim/queue",function(c,b){function f(e,h,r){h=h||a;var s,y=b.data(e,n);if(!y&&!r)b.data(e,n,y={});if(y){s=y[h];if(!s&&!r)s=y[h]=[]}return s}function i(e,h){h=h||a;var r=b.data(e,n);r&&delete r[h];c.isEmptyObject(r)&&b.removeData(e,n)}var n=c.guid("ks-queue-"+c.now()+"-"),a=c.guid("ks-queue-"+c.now()+"-"),m={queueCollectionKey:n,queue:function(e){var h=f(e.elem,e.config.queue);h.push(e);h[0]!=="..."&&m.dequeue(e);return h},remove:function(e){var h=f(e.elem,e.config.queue,1);if(h){e=c.indexOf(e,
h);e>-1&&h.splice(e,1)}},removeQueues:function(e){b.removeData(e,n)},removeQueue:i,dequeue:function(e){var h=e.elem;e=e.config.queue;var r=f(h,e,1),s=r&&r.shift();if(s=="...")s=r.shift();if(s){r.unshift("...");s._runInternal()}else i(h,e)}};return m},{requires:["dom"]});KISSY.add("anim",function(c,b,f){b.Easing=f;return b},{requires:["anim/base","anim/easing","anim/color"]});