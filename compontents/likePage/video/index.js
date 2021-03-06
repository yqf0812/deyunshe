// compontents/likePage/video/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    showChanel: {
      type: Boolean,
      value: false
    },
    checkAll: {
      type: Boolean,
      value: false
    },
    typeList: {
      type: Array,
      value: []
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    selectVideo: []
  },

  /**
   * 组件的方法列表
   */
  methods: {
    checkboxChange(e) {
      let that = this;
      let params = {
        value: '',
        list: []
      }
      that.setData({
        selectVideo: e.detail.value
      })
      if (e.detail.value.length === that.properties.typeList.length) {
        params.value = 'all';
        params.list = that.data.videoList;
      } else {
        params.value = 'notAll';
        params.list = that.data.selectVideo;
      }
      that.triggerEvent('checkboxChange', params)
    },  
  }
})
