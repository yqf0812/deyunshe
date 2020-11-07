// compontents/common/videoItem/videoItem.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    progressTime: {
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
    getPlayprogress(e) {
      //获取视频播放的进度
      let time = e.detail.time;
      this.setData({
        progressTime: time
      })
    },
    toCommentDetail() {
      wx.navigateTo({
        url: '/pages/commentPage/commentPage?time=' + this.properties.progressTime,
      })
    }
  }
})
