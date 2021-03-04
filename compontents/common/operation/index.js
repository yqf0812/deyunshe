// compontents/common/operation/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    playNum: {
      type: Number,
      value: 0
    }
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    goComment() {
      wx.navigateTo({
        url: '/pages/comment/index',
      })
    }
  }
})
