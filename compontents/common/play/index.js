// compontents/common/play/index.js
let app = getApp();
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    rowReverse: {
      type: String,
      value: 'row'
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    show: false
  },

  /**
   * 组件的方法列表
   */
  methods: {
    show() {
      this.setData({
        show: !this.data.show
      })
    },
    pause() {
      app.globalData.isPlay= false;
      this.triggerEvent('pausePlay', app.globalData.isPlay)
    }
  }
})
