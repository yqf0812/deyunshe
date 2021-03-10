// compontents/actorAtlas/index.js
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
    cardCur: 0,
    imgList: ['https://bkimg.cdn.bcebos.com/pic/f703738da97739120e28f200f1198618367ae241?x-bce-process=image/watermark,image_d2F0ZXIvYmFpa2U5Mg==,g_7,xp_5,yp_5/format,f_auto', 
    'https://ossweb-img.qq.com/images/lol/web201310/skin/big84001.jpg', 
  'https://ossweb-img.qq.com/images/lol/web201310/skin/big39000.jpg'],
    swiperList: [{
      id: 0,
      type: 'image',
      url: 'https://bkimg.cdn.bcebos.com/pic/f703738da97739120e28f200f1198618367ae241?x-bce-process=image/watermark,image_d2F0ZXIvYmFpa2U5Mg==,g_7,xp_5,yp_5/format,f_auto'
    }, {
      id: 1,
        type: 'image',
        url: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big84001.jpg',
    }, {
      id: 2,
      type: 'image',
      url: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big39000.jpg'
    }, {
      id: 3,
      type: 'image',
      url: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big10001.jpg'
    }, {
      id: 4,
      type: 'image',
      url: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big25011.jpg'
    }, {
      id: 5,
      type: 'image',
      url: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big21016.jpg'
    }, {
      id: 6,
      type: 'image',
      url: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big99008.jpg'
    }],
  },
  lifetimes: {
    attached: function() {
      
    }
  },
  /**
   * 组件的方法列表
   */
  methods: {
    //预览图片，放大预览
  preview(event) {
    let currentUrl = event.currentTarget.dataset.src
    wx.previewImage({
      current: currentUrl, // 当前显示图片的http链接
      urls: this.data.imgList // 需要预览的图片http链接列表
    })
  }
  }
})
