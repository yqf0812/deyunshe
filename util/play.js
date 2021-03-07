let startPoint;
function buttonStart (e, that) {
  startPoint = e.touches[0];
};
function buttonMove (e, that) {
  var endPoint = e.touches[0]
  var translateX = endPoint.clientX - startPoint.clientX
  var translateY = endPoint.clientY - startPoint.clientY
  startPoint = endPoint
  var buttonTop = that.data.buttonTop + translateY
  var buttonLeft = that.data.buttonLeft + translateX
  //判断是移动否超出屏幕
  if (buttonLeft + 50 >= that.data.windowWidth) {
    buttonLeft = that.data.windowWidth - 50;
  }
  if (buttonLeft <= 0) {
    buttonLeft = 0;
  }
  if (buttonTop <= 0) {
    buttonTop = 0
  }
  if (buttonTop + 50 >= that.data.windowHeight) {
    buttonTop = that.data.windowHeight - 50;
  }
  that.setData({
    buttonTop: buttonTop,
    buttonLeft: buttonLeft
  })
};
function buttonEnd (e, that) {
  if (that.data.buttonLeft > that.data.windowWidth/2) {
    let buttonLeft = that.data.windowWidth - 200;
    that.setData({
      buttonLeft: buttonLeft,
      rowReverse: 'row-reverse'
    })
  } else {
    that.setData({
      buttonLeft: 0,
      rowReverse: 'row'
    })
  }
};
module.exports.buttonEnd = buttonEnd;
module.exports.buttonMove = buttonMove;
module.exports.buttonStart = buttonStart;