// compontents/img/index/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    scrollHeight: {
      type: Number,
      value: 0
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    imgList: [
      "https://hbimg.huabanimg.com/642dce931f2351b479b6edfdc5f4629daab8178869295-gb1B5b_fw658/format/webp",
      "https://hbimg.huabanimg.com/477682abab7212cb383a8959dc69e816b71e89852825f7-Z7TDM5_fw658/format/webp",
      "https://hbimg.huabanimg.com/89c7a3e6a5040148dd7a6d8504f341f95a30541d4eb0-3T3IKd_fw658/format/webp",
      "https://hbimg.huabanimg.com/71bffbca7259f6d9f632dc459d095ff774003240109a9-VcbQeS_fw658/format/webp"
    ]
  },

  /**
   * 组件的方法列表
   */
  methods: {
    // previewImg(event) {
    //   let that = this;
    //   let src = event.currentTarget.dataset.src;//获取data-src
    //   let imgList = that.data.imgList;//获取data-list
    //     //图片预览
    //   wx.previewImage({
    //     current: src, // 当前显示图片的http链接
    //     urls: imgList // 需要预览的图片http链接列表
    //   })
    // }
    previewImg(e) {
      let src = e.currentTarget.dataset.src;
      wx.navigateTo({
        url: '/pages/imgInfo/index?url=' + src,
      })
    }
  }
})
