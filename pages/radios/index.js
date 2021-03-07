// pages/radios/index.js
let myaudio;
import Toast from '../../miniprogram_npm/@vant/weapp/toast/toast';
const playOpt = require('./../../util/play');
const app = getApp();
Page({
  buttonStart(e) {
    let that = this;
    playOpt.buttonStart(e, that);
  },
  buttonMove(e) {
    let that = this;
    playOpt.buttonMove(e, that);
  },
  buttonEnd(e) {
    let that = this;
    playOpt.buttonEnd(e, that);
  },
  /**
   * 页面的初始数据
   */
  data: {
    myaudio: '',
    isAllPlay: false,
    index: 0,
    windowHeight: 0,
    windowWidth: 0,
    buttonTop: 100,
    buttonLeft: 0,
    rowReverse: '',
    isPlay: app.globalData.isPlay,
    radioList: [
      {
        url: 'https://www.w3school.com.cn/i/horse.ogg',
        name: '麻椒',
        isPlay: false
      },
      {
        url: 'http://127.0.0.1:3000/radios/测试录音.aac',
        name: 'Beautiful Girl',
        isPlay: false
      },
      {
        url: 'https://www.w3school.com.cn/i/horse.ogg',
        name: '麻椒',
        isPlay: false
      }
    ]
  },
  allPlay() {
    myaudio.src = this.data.radioList[0].url;
    myaudio.play();
    this.setData({
      ['radioList[0].isPlay']: true,
      index: 0
    })
  },
  pausePlay(e) {
    console.log(e)
    this.setData({
      isPlay: e.detail
    })
    myaudio.pause();
    this.setData({
      ['radioList['+ this.data.index +'].isPlay']: false,
    })
  },
  playRadio(e) {
    let index = e.currentTarget.dataset.index;
    this.setData({
      index: index
    })
    for(let i = 0; i< this.data.radioList.length; i++) {
      if (index === i) {
        myaudio.src = this.data.radioList[i].url;
        if (!this.data.radioList[i].isPlay) {
          myaudio.play();
          this.setData({
            ['radioList['+ i+'].isPlay']: true
          })
        } else {
          myaudio.pause();
          this.setData({
            ['radioList['+ i+'].isPlay']: false
          })
        }
      } else {
        this.setData({
          ['radioList['+ i+'].isPlay']: false,
        })
      }
    }

  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      windowHeight: app.globalData.windowHeight,
      windowWidth: app.globalData.windowWidth
    })
    myaudio = wx.createInnerAudioContext();
    myaudio.onError((error) => {
      if (error) {
        Toast.fail('音频播放失败');
        setTimeout(() => {
          this.setData({
            ['radioList['+ this.data.index +'].isPlay']: false
          })
        }, 1000)
      }
    })
    myaudio.onEnded(() => {
      if(this.data.radioList[this.data.index].isPlay) {
        this.setData({
          ['radioList['+ this.data.index +'].isPlay']: false,
        })
        if (!(this.data.index === this.data.radioList.length - 1)) {
          myaudio.src = this.data.radioList[this.data.index + 1].url;
          setTimeout(() => {
            myaudio.play();
            let indexTemp = this.data.index + 1;
            this.setData({
              ['radioList['+ indexTemp +'].isPlay']: true,
              index: this.data.index + 1
            })
          }, 1000)
        } else {
          this.setData({
            isAllPlay: !this.data.isAllPlay
          })
        }
      }
    }),
    myaudio.onPlay(() => {
      app.globalData.isPlay = true;
      this.setData({
        isPlay: true
      })
    })
    // myaudio.src = 'http://127.0.0.1:3000/radios/RGP (레게 강 같은 평화) _ 权政烈 (권정열) - Beautiful Girl.mp3';
    
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})