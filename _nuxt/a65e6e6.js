(window.webpackJsonp=window.webpackJsonp||[]).push([[17,24,25,26],{296:function(t,e,n){},297:function(t,e,n){},307:function(t,e,n){},310:function(t,e,n){"use strict";n(296)},311:function(t,e,n){"use strict";n(297)},318:function(t,e,n){"use strict";n.r(e);n(6),n(41),n(45);var o=n(0).a.extend({components:{CheckBoxFormQuestion:function(){return n.e(5).then(n.bind(null,469))}},computed:{opinionsOpenQuestion:function(){return this.$store.state.question.activeQuestion.opinions}}}),r=(n(310),n(23)),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("form",{staticClass:"question-open"},[t._l(t.opinionsOpenQuestion,(function(t,e){return n("check-box-form-question",{key:e,attrs:{opinion:t.opinion,index:e}})})),t._v(" "),n("check-box-form-question",{attrs:{opinion:"Добавить вариант"}})],2)}),[],!1,null,null,null);e.default=component.exports},319:function(t,e,n){"use strict";n.r(e);var o=n(0).a.extend({}),r=(n(311),n(23)),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{staticClass:"question-closed"},[t._v("закрытый вопрос")])}),[],!1,null,null,null);e.default=component.exports},327:function(t,e,n){"use strict";n(307)},328:function(t,e,n){},349:function(t,e,n){"use strict";n.r(e);n(6),n(41),n(45);var o=n(0),r=n(318),c=n(319),l=o.a.extend({components:{OpenQuestion:r.default,ClosedQuestion:c.default,TitleFormQuestion:function(){return Promise.all([n.e(0),n.e(1),n.e(7)]).then(n.bind(null,463))},SelectTypeQuestion:function(){return Promise.all([n.e(4),n.e(0),n.e(1),n.e(2),n.e(6)]).then(n.bind(null,462))}},props:{question:{type:Object,required:!0}},data:function(){return{title:""}},computed:{activeQuestion:function(){return this.$store.getters["question/activeQuestion"]}},methods:{setActiveQuestion:function(t){this.activeQuestion.id!==t.id&&this.$store.commit("question/SET_ACTIVE_QUESTION",t)},determinantQuestionId:function(t){return this.activeQuestion.id===t},determinantTypeQuestion:function(t){switch(t){case 1:return"OpenQuestion";case 2:return"ClosedQuestion"}}}}),f=(n(327),n(23)),component=Object(f.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{on:{click:function(e){return t.setActiveQuestion(t.question)}}},[t.activeQuestion.id!==t.question.id?n("div",[t._v(t._s(t.question.question))]):n("form",{staticClass:"constructor"},[n("div",{staticClass:"header"},[n("title-form-question"),t._v(" "),n("select-type-question")],1),t._v(" "),t.determinantQuestionId(t.question.id)?n(t.determinantTypeQuestion(t.activeQuestion.type_question_id),{tag:"component"}):t._e()],1)])}),[],!1,null,"1f76e603",null);e.default=component.exports},354:function(t,e,n){"use strict";n(328)},371:function(t,e,n){"use strict";n.r(e);var o=n(0),r=n(349),c=o.a.extend({components:{CardQuestion:r.default},props:{questions:{type:Array,default:function(){return[]}}}}),l=(n(354),n(23)),component=Object(l.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"questions"},t._l(t.questions,(function(t,e){return n("card-question",{key:e,staticClass:"questions__question",attrs:{question:t}})})),1)}),[],!1,null,null,null);e.default=component.exports}}]);