// compontents/radio/index/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    scrollHeight: {
      type: Number,
      value: 0
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    scrollHeight: 0,
    scrollWidth: 0
  },
  lifetimes: {
    attached() {
      let that = this;
      let query = wx.createSelectorQuery().in(that); // 组件中获取元素高度要使用in（this)
      query.select('.radio-list').boundingClientRect(
        function(rect) {
          console.log(rect)
          that.setData({
            scrollHeight: rect.height,
            scrollWidth: rect.width
          })
        }
      ).exec();
    },

  },
  /**
   * 组件的方法列表
   */
  methods: {
    search() {
      wx.navigateTo({
        url: '/pages/radioSearch/index',
      })
    }
  }
})
