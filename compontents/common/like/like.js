// compontents/common/like/like.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    like: {
      type: Boolean
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    likeSrc: '/images/like@hover.png',
    noLikeSrc: '/images/like.png'
  },

  /**
   * 组件的方法列表
   */
  methods: {
    onLike: function() {
      let like = this.properties.like;
      this.setData({
        like: !like
      })
    }
  }
})
