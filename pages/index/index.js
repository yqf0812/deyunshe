// pages/index/index.js
// import Toast from '../../miniprogram_npm/@vant/weapp/toast/toast';
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
    touchx: 0,
    touchy: 0,
    ifScroll: false,
    windowHeight: 0,
    windowWidth: 0,
    buttonTop: 100,
    buttonLeft: 0,
    rowReverse: '',
    isPlay: app.globalData.isPlay,
    active: 0,
    scrollHeight: 0
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      windowHeight: app.globalData.windowHeight,
      windowWidth: app.globalData.windowWidth
    })
    
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
    let that = this;
    let query = wx.createSelectorQuery();
    query.select('.content').boundingClientRect(
      function(rect) {
        that.setData({
          scrollHeight: rect.height
        })
      }
    ).exec();
    that.setData({
      isPlay: app.globalData.isPlay
    })
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

  },
  onChange(event) {
    this.setData({
      active: event.detail.index
    })
  }
})