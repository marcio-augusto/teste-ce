webpackJsonp([10],{1061:function(e,t,s){"use strict";var a=s(59),o=s(1171);t.a={data:()=>({show:!0}),components:{Card:a.a,BasixModal:o.a},methods:{showSmallModal(){this.$refs.smallModal.open()},showMediumModal(){this.$refs.mediumModal.open()},showLargeModal(){this.$refs.largeModal.open()},showScrollingModal(){this.$refs.scrollingeModal.open()},showStaticModal(){this.$refs.staticModal.open()}}}},1062:function(e,t,s){"use strict";t.a={name:"basix-modal",props:{transition:{type:String,default:"modal"},small:{type:Boolean,default:!1},large:{type:Boolean,default:!1},force:{type:Boolean,default:!1},okText:{type:String,default:"CONFIRM"},cancelText:{type:String,default:"CANCEL"},okClass:{type:String,default:"btn btn-primary"},cancelClass:{type:String,default:"btn btn-secondary"}},data:()=>({show:!1,duration:200}),computed:{modalClass(){return{"modal-lg":this.large,"modal-sm":this.small}}},created(){this.show&&(document.body.className+=" modal-open")},beforeDestroy(){document.body.className=document.body.className.replace(/\s?modal-open/,"")},watch:{show(e){e?document.body.className+=" modal-open":window.setTimeout(()=>{document.body.className=document.body.className.replace(/\s?modal-open/,"")},this.duration)}},methods:{ok(){this.$emit("ok"),this.show=!1},cancel(){this.$emit("cancel"),this.show=!1},clickMask(){this.force||this.cancel()},open(){this.show=!0}}}},1171:function(e,t,s){"use strict";var a=s(1062),o=s(1174);var n=function(e){s(1172)},l=s(0)(a.a,o.a,!1,n,null,null);t.a=l.exports},1172:function(e,t,s){var a=s(1173);"string"==typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);s(2)("284890e0",a,!0,{})},1173:function(e,t,s){(e.exports=s(1)(!1)).push([e.i,".slide-enter-active{animation:slide-in 3s fade forwards}.slide-leave-active{animation:slide-out 3s fade forwards}@keyframes slide-in{0%{transform:translateY(250px)}to{transform:translateY(0)}}@keyframes slide-out{0%{transform:translateY(0)}to{transform:translateY(250px)}}.modal{display:block}.modal-backdrop,.modal-dialog{transition:all .5s ease}.modal-enter .modal-dialog,.modal-leave-active .modal-dialog{opacity:0;transform:translateY(-30%)}.modal-enter .modal-backdrop,.modal-leave-active .modal-backdrop{opacity:0}.modal-backdrop{opacity:.5}.modal-header{height:55px;padding:0 1.6rem;border-bottom:2px solid #eee;font-size:1.2rem;display:flex;align-items:center}.modal-content{border-radius:0}.modal-footer{justify-content:center;padding:0 2px;padding-bottom:5px;flex-wrap:wrap}.modal-footer .btn{margin:0 10px 20px}",""])},1174:function(e,t,s){"use strict";var a={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("transition",{attrs:{name:"slide",duration:e.duration}},[s("div",{directives:[{name:"show",rawName:"v-show",value:e.show,expression:"show"}],staticClass:"modal-container"},[s("div",{staticClass:"modal",on:{click:function(t){return t.target!==t.currentTarget?null:e.clickMask(t)}}},[s("div",{staticClass:"modal-dialog",class:e.modalClass},[s("div",{staticClass:"modal-content"},[s("div",{staticClass:"modal-header"},[e._t("header",[s("div",{staticClass:"modal-title"},[e._t("title")],2)])],2),e._v(" "),s("div",{staticClass:"modal-body"},[e._t("default")],2),e._v(" "),s("div",{staticClass:"modal-footer"},[e._t("footer",[s("button",{staticClass:"mt-3",class:e.okClass,attrs:{type:"button"},on:{click:e.ok}},[e._v(e._s(e.okText))]),e._v(" "),s("button",{staticClass:"mt-3",class:e.cancelClass,attrs:{type:"button","data-dismiss":"modal"},on:{click:e.cancel}},[e._v(e._s(e.cancelText))])])],2)])])]),e._v(" "),s("div",{staticClass:"modal-backdrop"})])])},staticRenderFns:[]};t.a=a},1175:function(e,t,s){"use strict";var a={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"basix-modals row"},[s("div",{staticClass:"col-md-12"},[s("card",{attrs:{"header-text":"Modals","header-icon":"fa fa-align-justify"}},[s("button",{staticClass:"btn btn-secondary",attrs:{type:"button"},on:{click:function(t){e.showSmallModal()}}},[e._v("\n              Small\n            ")]),e._v(" "),s("button",{staticClass:"btn btn-secondary",attrs:{type:"button"},on:{click:function(t){e.showMediumModal()}}},[e._v("\n              Medium\n            ")]),e._v(" "),s("button",{staticClass:"btn btn-secondary",attrs:{type:"button"},on:{click:function(t){e.showLargeModal()}}},[e._v("\n              Large\n            ")]),e._v(" "),s("button",{staticClass:"btn btn-secondary",attrs:{type:"button"},on:{click:function(t){e.showScrollingModal()}}},[e._v("\n              Scrolling\n            ")]),e._v(" "),s("button",{staticClass:"btn btn-secondary",attrs:{type:"button"},on:{click:function(t){e.showStaticModal()}}},[e._v("\n              Static\n            ")]),e._v(" "),s("basix-modal",{ref:"smallModal",attrs:{show:e.show,small:!0,cancelClass:"btn btn-secondary"},on:{"update:show":function(t){e.show=t}}},[s("div",{attrs:{slot:"title"},slot:"title"},[e._v("Small modal")]),e._v(" "),s("p",[e._v("\n                There are three species of zebras: the plains zebra, the mountain zebra and the Grévy's zebra. The plains zebra\n                and the mountain zebra belong to the subgenus Hippotigris, but Grévy's zebra is the sole species of subgenus\n                Dolichohippus. The latter resembles an ass, to which it is closely related, while the former two are more\n                horse-like. All three belong to the genus Equus, along with other living equids.\n              ")])]),e._v(" "),s("basix-modal",{ref:"mediumModal",attrs:{show:e.show},on:{"update:show":function(t){e.show=t}}},[s("div",{attrs:{slot:"title"},slot:"title"},[e._v("Medium modal")]),e._v(" "),s("p",[e._v("\n                There are three species of zebras: the plains zebra, the mountain zebra and the Grévy's zebra. The plains zebra\n                and the mountain zebra belong to the subgenus Hippotigris, but Grévy's zebra is the sole species of subgenus\n                Dolichohippus. The latter resembles an ass, to which it is closely related, while the former two are more\n                horse-like. All three belong to the genus Equus, along with other living equids.\n              ")])]),e._v(" "),s("basix-modal",{ref:"largeModal",attrs:{show:e.show,large:!0},on:{"update:show":function(t){e.show=t}}},[s("div",{attrs:{slot:"title"},slot:"title"},[e._v("Large Modal")]),e._v(" "),s("p",[e._v("\n                There are three species of zebras: the plains zebra, the mountain zebra and the Grévy's zebra. The plains zebra\n                and the mountain zebra belong to the subgenus Hippotigris, but Grévy's zebra is the sole species of subgenus\n                Dolichohippus. The latter resembles an ass, to which it is closely related, while the former two are more\n                horse-like. All three belong to the genus Equus, along with other living equids.\n              ")])]),e._v(" "),s("basix-modal",{ref:"scrollingeModal",attrs:{show:e.show,large:!0},on:{"update:show":function(t){e.show=t}}},[s("div",{attrs:{slot:"title"},slot:"title"},[e._v("Scrolling Long Content Modal")]),e._v(" "),s("p",[e._v("\n                Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. "),s("br"),e._v("\n\n                Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor."),s("br"),e._v("\n\n                Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla."),s("br"),e._v("\n\n                Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros."),s("br"),e._v("\n\n                Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor."),s("br"),e._v("\n\n                Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla."),s("br"),e._v("\n\n                Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros."),s("br"),e._v("\n\n                Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor."),s("br"),e._v("\n\n                Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla."),s("br"),e._v("\n\n                Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros."),s("br"),e._v("\n\n                Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor."),s("br"),e._v("\n\n                Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla."),s("br"),e._v("\n\n                Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros."),s("br"),e._v("\n\n                Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor."),s("br"),e._v("\n\n                Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla."),s("br"),e._v("\n\n                Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros."),s("br"),e._v("\n\n                Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor."),s("br"),e._v("\n\n                Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.\n              ")])]),e._v(" "),s("basix-modal",{ref:"staticModal",attrs:{show:e.show,small:!0,force:!0,cancelClass:"btn btn-secondary",okText:"CLOSE"},on:{"update:show":function(t){e.show=t}}},[s("div",{attrs:{slot:"title"},slot:"title"},[e._v("Static Modal")]),e._v(" "),s("p",[e._v("\n                This is a static modal, backdrop click will not close it.\n              ")])])],1)],1)])},staticRenderFns:[]};t.a=a},58:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=s(1061),o=s(1175),n=s(0)(a.a,o.a,!1,null,null,null);t.default=n.exports}});