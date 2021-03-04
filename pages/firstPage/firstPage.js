// pages/firstPage/firstPage.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    time: 3
  },
  join: function() {
    console.log(1)
    wx.switchTab({
      url: '/pages/index/index',
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    let time = null;
    let that= this;
    console.log(1)
    console.log(that.data.time)
    let time1 = that.data.time
    time = setInterval(function() {
      time1 --
      that.setData({
        time: time1
      })
      console.log(time1)
      if (that.data.time === 0) {
        clearInterval(time)
        wx.switchTab({
          url: '/pages/index/index',
        })
      }
    }, 1000)
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