// compontents/common/step/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    parentHieght: {
      type: String
    },
    dec: {
      type: Array,
      value: []
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    parentTop: 0,
    eleTop: 0
  },

  /**
   * 组件的方法列表
   */
  methods: {

  },
  lifetimes: {
    attached: function() {
      
    },
    detached: function() {
      // 在组件实例被从页面节点树移除时执行
    },
    ready: function() {
      let that = this;
      
      let query = wx.createSelectorQuery().in(this);
      let parentTop = 0;
      query.selectAll('#step').boundingClientRect().exec(function(res) {
        query.selectAll('.img-icon').boundingClientRect().exec(function(res) {
          for (let i = 0; i < that.data.dec.length; i++) {
            that.data.dec[i]['top'] = res[1][i].top - res[0][0].top;
          }
          parentTop = res[0][0].top;
          console.log(that.data.dec)
          let height = res[0][0].height  + 50 + 'px';
          that.setData({
            parentHieght: height,
            dec: that.data.dec
          })
        });
      });
      
      
    }
  },
})
