var app = new Vue({
  el: '#expenses',
  data: {
    data: dataStorage.fetch(),
  },
})
