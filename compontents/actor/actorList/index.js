// compontents/actor/actorList/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    dec: {
      type: Array
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    activeName: '',
  },

  /**
   * 组件的方法列表
   */
  methods: {
    onChange(event) {
      this.setData({
        activeName: event.detail,
      });
    },
    detail() {
      wx.navigateTo({
        url: '/pages/actorInfo/index',
      })
    }
  }
})
