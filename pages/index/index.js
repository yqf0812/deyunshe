// pages/index/index.js
// import Toast from '../../miniprogram_npm/@vant/weapp/toast/toast';
Page({
  // touchStart(e) { // 页面滑动事件开始
  //   console.log(e)
  //   this.setData({
  //     touchx: e.changedTouches[0].clientX,
  //     touchy: e.changedTouches[0].clientY,
  //     ifScroll: true
  //   })
  // },
  // touchEnd(e) { // 页面滑动事件结束
  //   console.log(e)
  //   var that = this;
  //   let x = e.changedTouches[0].clientX;
  //   let y = e.changedTouches[0].clientY;
  //   let turn = "";
  //   if (x - that.data.touchx > 50 && Math.abs(y - that.data.touchy) < 50) {      //右滑
  //     turn = "right";
  //   } else if (x - that.data.touchx < -50 && Math.abs(y - that.data.touchy) < 50) {   //左滑
  //     turn = "left";
  //   }
  //   if(y - that.data.touchy > 50 && Math.abs(x - that.data.touchx) < 50){ //下滑
  //     turn = "down";
  //   }else if(y - that.data.touchy < -50 && Math.abs(x - that.data.touchx) < 50){ //上滑
  //     turn="up";
  //   }
  //   //根据方向进行操作
  //   if(turn === 'down'){
  //     //下滑触发操作
  //     console.log('down')
  //   }
  //   if(turn === 'up'){
  //     //下滑触发操作
  //     console.log('up')
  //     // var query = wx.createSelectorQuery();
  //     // query.selectAll('.videoItem').boundingClientRect((res) => {
  //     //   console.log(res)
  //     // })
  //     // query.exec((res) => {
  //     //     var listHeight = res; // 获取list高度
  //     //     console.log(res)
  //     // })
  //   }
  // },
  /**
   * 页面的初始数据
   */
  data: {
    touchx: 0,
    touchy: 0,
    ifScroll: false
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
    console.log(1)
    wx.showLoading({
      title: '玩命加载中',
      })
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})