// compontents/common/operation/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    showPlayNum: {
      type: Boolean,
      value: true
    },
    showLikeNum: {
      type: Boolean,
      value: true
    },
    showCommentNum: {
      type: Boolean,
      value: true
    },
    playNum: {
      type: Number,
      value: 0
    },
    likeNum: {
      type: Number,
      value: 0
    },
    commentNum: {
      type: Number,
      value: 0
    },
    type: {  // 媒体类型
      type: String,
      value: ''
    },
    id: { // 媒体id
      type: String,
      value: ''
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    isLike: false
  },

  /**
   * 组件的方法列表
   */
  methods: {
    goComment() {
      wx.navigateTo({
        url: '/pages/comment/index',
      })
    },
    like() {
      if (this.data.isLike) {
        this.setData({
          likeNum: this.data.likeNum - 1
        })
      } else {
        this.setData({
          likeNum: this.data.likeNum + 1
        })
      }
      this.setData({
        isLike: !this.data.isLike,
      })
    }
  },
  lifetimes: {
    attached: function() {
    },
    detached: function() {
      // 在组件实例被从页面节点树移除时执行
    },
  },
})
