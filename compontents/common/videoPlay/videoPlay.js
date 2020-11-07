// compontents/common/videoPlay/videoPlay.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    startTime: {
      type: Number,
      value: 0
    },
    autoPlay: {
      type: Boolean,
      value: false
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
    getPlayprogress: function (e) {
      //实时播放进度 秒数
      var currentTime = parseInt(e.detail.currentTime);
      this.triggerEvent('getPlayprogress', {
        time: currentTime
      })

    },
  },
  lifetimes: {
    attached: function() {
      console.log(111)
      console.log(this.properties.startTime)
      if (this.properties.startTime > 0) {
        console.log(this.properties.autoPlay)
        this.setData({
          autoPlay: true
        })
      }
      
    }
  }
})
