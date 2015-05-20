var CACHE=[],YubinBango;!function(YubinBango){var Core=function(){function Core(inputVal,callback){if(void 0===inputVal&&(inputVal=""),this.URL="https://yubinbango.github.io/yubinbango-data/data",this.REGION=[null,"北海道","青森県","岩手県","宮城県","秋田県","山形県","福島県","茨城県","栃木県","群馬県","埼玉県","千葉県","東京都","神奈川県","新潟県","富山県","石川県","福井県","山梨県","長野県","岐阜県","静岡県","愛知県","三重県","滋賀県","京都府","大阪府","兵庫県","奈良県","和歌山県","鳥取県","島根県","岡山県","広島県","山口県","徳島県","香川県","愛媛県","高知県","福岡県","佐賀県","長崎県","熊本県","大分県","宮崎県","鹿児島県","沖縄県"],inputVal){var a=inputVal.replace(/[０-９]/g,function(s){return String.fromCharCode(s.charCodeAt(0)-65248)}),b=a.match(/\d/g),c=b.join(""),yubin7=this.chk7(c);yubin7&&this.getAddr(yubin7,callback)}}return Core.prototype.chk7=function(val){return 7===val.length?val:void 0},Core.prototype.selectAddr=function(youbin7,addr){return addr[0]&&addr[1]?{region_id:addr[0],region:this.REGION[addr[0]],locality:addr[1],street:addr[2],extended:addr[3]}:void 0},Core.prototype.jsonp=function(url,fn){window.$yubin=function(data){return fn(data)};var scriptTag=document.createElement("script");scriptTag.setAttribute("type","text/javascript"),scriptTag.setAttribute("charset","UTF-8"),scriptTag.setAttribute("src",url),document.head.appendChild(scriptTag)},Core.prototype.getAddr=function(yubin7,fn){var _this=this,yubin3=yubin7.substr(0,3);this.cachecheck(yubin7,yubin3)?fn(this.selectAddr(yubin7,CACHE[yubin3][yubin7])):this.jsonp(this.URL+"/"+yubin3+".js",function(data){CACHE[yubin3]=data,fn(_this.selectAddr(yubin7,data[yubin7]))})},Core.prototype.cachecheck=function(yubin7,yubin3){return CACHE[yubin3]?!0:void 0},Core}();YubinBango.Core=Core}(YubinBango||(YubinBango={}));var YubinBango;!function(YubinBango){var OldFunction=function(){function OldFunction(){this.prev=""}return OldFunction.prototype.getAddr=function(yubin7,fn){return(new YubinBango.Core).getAddr(yubin7,fn)},OldFunction.prototype.zip2addr=function(postalcode01,postalcode02,region,locality,street,extended,afocus){var _this=this,elms={};if(elms.postalcode01=postalcode01?this.getElementByName(postalcode01):void 0,elms.postalcode02=postalcode02?this.getElementByName(postalcode02,elms.postalcode01):void 0,elms.region=region?this.getElementByName(region,elms.postalcode01):void 0,elms.locality=locality?this.getElementByName(locality,elms.postalcode01):void 0,elms.street=street?this.getElementByName(street,elms.postalcode01):void 0,elms.extended=extended?this.getElementByName(extended,elms.postalcode01):void 0,elms.ffocus=void 0===afocus?!0:afocus,elms.postalcode01&&elms.region){var a=elms.postalcode01?elms.postalcode01.value:"",b=elms.postalcode02?elms.postalcode02.value:"",yubin7=a+b;yubin7&&this.getAddr(yubin7,function(address){_this.apply(elms,address)})}},OldFunction.prototype.apply=function(elms,addr){var cursor=elms.locality;if("select-one"==elms.region.type||"select-multiple"==elms.region.type)for(var opts=elms.region.options,i=0;i<opts.length;i++){var vpref=opts[i].value,tpref=opts[i].text;opts[i].selected=vpref==addr.region_id||vpref==addr.region||tpref==addr.region}else elms.region.name==elms.locality.name?addr.locality=addr.region+addr.locality:elms.region.value=addr.region;switch(this.getFormsType(elms)){case 2:elms.locality.value=addr.locality+addr.street+addr.extended;break;case 1:elms.locality.value=addr.locality,elms.street.value=addr.street+addr.extended;break;case 0:elms.locality.value=addr.locality,elms.street.value=addr.street,elms.extended.value=addr.extended;break;default:elms.locality.value=addr.locality,elms.street.value=addr.street,elms.extended.value=addr.extended}if("function"==typeof this.onSuccess&&this.onSuccess(),elms.ffocus&&cursor&&cursor.value){var len=cursor.value.length;if(cursor.focus(),cursor.createTextRange){var range=cursor.createTextRange();range.move("character",len),range.select()}else cursor.setSelectionRange&&cursor.setSelectionRange(len,len)}},OldFunction.prototype.getElementByName=function(elem,sibling){if("string"==typeof elem){var list=document.getElementsByName(elem);if(!list)return null;if(!(list.length>1&&sibling&&sibling.form))return list[0];for(var form=sibling.form.elements,i=0;i<form.length;i++)if(form[i].name==elem)return form[i]}return elem},OldFunction.prototype.ckFormsType=function(elm,val){return elm[val]?0:1},OldFunction.prototype.getFormsType=function(elm){var _this=this;return["extended","street","locality"].map(function(val){return _this.ckFormsType(elm,val)}).reduce(function(a,b){return a+b})},OldFunction}();YubinBango.OldFunction=OldFunction}(YubinBango||(YubinBango={}));var AjaxZip3=new YubinBango.OldFunction;
//# sourceMappingURL=./ajaxzip3.js.map