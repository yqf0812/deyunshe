// pages/like/index.js
import Dialog from '../../miniprogram_npm/@vant/weapp/dialog/dialog';
import Toast from '../../miniprogram_npm/@vant/weapp/toast/toast';
Page({

  /**
   * 页面的初始数据
   */
  data: {
    activeKey:0,
    data: [1],
    touchStart: 0,
    touchEnd: 0,
    showChanel: false,
    checkAll: false,
    isAll: 0,
    allChange: false,
    list: [],
    typeList: [1, 2, 3, 4, 5, 6, 7],
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

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },
  touchStart: function(e){
    var that=this;
    that.setData({
      touchStart: e.timeStamp
    })
  },
  touchEnd: function(e){
    var that=this;
    that.setData({
      touchEnd: e.timeStamp
    })
  },
  pressTap: function() {
    let that = this;
    let touchTime = that.data.touchEnd - that.data.touchStart;
    if (touchTime > 1000) {
      that.setData({
        showChanel: true
      })
    }
  },
  onChange(e) {
    let that = this;
    that.setData({
      activeKey: e.detail,
      showChanel: false
    })
  },
  ifAll(e) {
    let that = this;
    that.setData({
      list: e.detail.list
    })
    if (e.detail.value === 'all') {
      that.setData({
        isAll: 1,
        allChange: true
      })
    } else {
      that.setData({
        isAll: 0,
        allChange: false
      })
    }
  },
  chanelLike() {
    let that = this;
    Dialog.confirm({
      title: '确认',
      message: '确定要对这些作品不在喜欢了吗？'
    }).then(() => {
      Toast.success('成功文案');
      that.setData({
        showChanel: false
      })
    }).catch(() => {
      Toast.fail('失败文案');
      that.setData({
        showChanel: false
      })
    });
    if (that.data.isAll) {
      console.log(that.data.typeList)
    } else {
      console.log(that.data.list)
    }
  },
  checkAll(e) {
    let that = this;
    if (e.target.dataset.value) {
      that.setData({
        checkAll: false,
        isAll: 0
      })
    } else {
      that.setData({
        checkAll: true,
        isAll: 1
      })
    }
  }
})