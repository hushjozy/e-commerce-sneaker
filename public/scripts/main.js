
const Card = Vue.component('Card', {
  template: `
  <div class="card">
    <a href="/">
      <img :src="imgUrl" :alt="title">
      <div class="title-wrapper" :style="{'background-color':color}">
        <span>{{title}}</span>
      </div>
           
    </a>
  </div>
  `,
  props:["imgUrl", "title","color"]
})

new Vue({
  el: '#categories',
  data:{
    msg: 'hello'
  },
  components:[Card]
})
