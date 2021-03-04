// compontents/video/index.js
const ajax = require("../../../util/ajax");
import Toast from '../../../miniprogram_npm/@vant/weapp/toast/toast';
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
    videoList: [],
    videoCtx: '',
    playVideo: '', //正在播放的视频id
    windowInfo: {}, // 屏幕信息,
    touchx: 0,
    touchy: 0,
  },
  lifetimes: {
    attached: function() {
      // 在组件实例进入页面节点树时执行
      this.setData({
        windowInfo: wx.getSystemInfoSync()
      })
      ajax.get('api/videoList', (data) => {
        this.setData({
          videoList: data.data
        })
      }, (err) => {
        Toast.fail('服务出错，请稍后再看...')
      })
    },
    detached: function() {
      // 在组件实例被从页面节点树移除时执行
    },
  },
  /**
   * 组件的方法列表
   */
  methods: {
    bindplay(e) { //点击播放按钮的时候播放量加1
      var userid = 'admin';
      var curIdx = e.currentTarget.dataset.vid; // 视频id
      var params = {
        typeid: curIdx,
        userid: userid
      }
      ajax.post('api/addPlay', params, (data) => {
        
      });
      if (!this.data.playVideo) {
        this.setData({
          playVideo: curIdx
        })
      } else {
        var videoContextPrev = wx.createVideoContext('modelV' + this.data.playVideo, this);
        if (this.data.playVideo != curIdx) {
          videoContextPrev.pause()
        }
        this.setData({
          playVideo: curIdx
        })
        var videoContextCurrent = wx.createVideoContext('modelV' + curIdx)
        videoContextCurrent.play()
      }
    },
    touchStart(e) { // 页面滑动事件开始
      this.setData({
        touchx: e.changedTouches[0].clientX,
        touchy: e.changedTouches[0].clientY
      })
    },
    touchEnd(e) { // 页面滑动事件结束
      var that = this;
      let x = e.changedTouches[0].clientX;
      let y = e.changedTouches[0].clientY;
      let turn = "";
      if (x - that.data.touchx > 50 && Math.abs(y - that.data.touchy) < 50) {      //右滑
        turn = "right";
      } else if (x - that.data.touchx < -50 && Math.abs(y - that.data.touchy) < 50) {   //左滑
        turn = "left";
      }
      if(y - that.data.touchy > 50 && Math.abs(x - that.data.touchx) < 50){ //下滑
        turn = "down";
      }else if(y - that.data.touchy < -50 && Math.abs(x - that.data.touchx) < 50){ //上滑
        turn="up";
      }
      if (turn === 'left') {
        var videoClass = '.video-' + this.data.playVideo;
        var query = wx.createSelectorQuery().in(this);
        query.select(videoClass).boundingClientRect();
        query.exec((res) => {
          var videoContextPrev = wx.createVideoContext('modelV' + this.data.playVideo, this);
          videoContextPrev.pause();
        })
      }
      //根据方向进行操作
      if(turn === 'down'){
        //下滑触发操作
      }
      if(turn === 'up'){
        //下滑触发操作
        var videoClass = '.video-' + this.data.playVideo;
        var query = wx.createSelectorQuery().in(this);
        query.select(videoClass).boundingClientRect();
        query.exec((res) => {
          if(res.length) {
            var top = res[0].top;
            if (Math.abs(top) > 200) {
              var videoContextPrev = wx.createVideoContext('modelV' + this.data.playVideo, this);
              videoContextPrev.pause();
            }
          }
        })
      }
    },
  }
})
