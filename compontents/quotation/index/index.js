// compontents/quotation/index/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    touchStart: 0,
    touchEnd: 0,
    showOpt: false,
    active: 0
  },

  /**
   * 组件的方法列表
   */
  methods: {
    touchStart: function(e){
      var that=this;
      that.setData({
        touchStart: e.timeStamp
      })
    },
    touchEnd: function(e){
      var that=this;
      that.setData({
        touchEnd: e.timeStamp
      })
    },
    pressTap: function(e) {
      let index = e.currentTarget.dataset.index;
      let that = this;
      let touchTime = that.data.touchEnd - that.data.touchStart;
      // if (touchTime > 1000) {
        that.setData({
          showOpt: true,
          active: index
        })
      // }
    },
    closeOpt() {
      this.setData({
        showOpt: false
      })
    }
  }
})
