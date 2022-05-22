import Vue from 'vue';
import MathJax, { initMathJax, renderByMathjax } from 'mathjax-vue'

// Rewrite pageReady method, optimizing MathJax as required rendering and render to avoid them
// ❗️❗️ For example '<span>$$Not a formula$$</span>' is not going to render, but in fact will be rendered into formula， As below is not the el

function onMathJaxReady() {
  // The parent node of need to be rendered into the formula node set
  const el = document.getElementById('elementId')
  // ❗️❗️ When there is no el will begin to render the default root node
  renderByMathjax(el)
}

initMathJax({}, onMathJaxReady)

// vue 2
Vue.use(MathJax)