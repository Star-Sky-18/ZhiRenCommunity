// pages/quanyi/quanyi.js
const app = getApp()
var result = [{ id: 0, obj: '' }, { id: 1, obj: '' }, { id: 2, obj: '' }, { id: 3, obj: '' }, { id: 4, obj: '' }]
Page({

  /**
   * 页面的初始数据
   */
  data: {
    result: result
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
  submit: function () {
    if (result[0].obj == '' || result[1].obj == '' || result[2].obj == '' || result[3].obj == '') {
      wx.showModal({
        title: 'NOTICE',
        content: '请填写所有必填信息。',
        showCancel: false,
      })
    }
    else if (result[1].obj.length == 8 && result[2].obj.length == 11) {
      console.log(result[0].obj + "\n" + result[1].obj + "\n" + result[2].obj + "\n" + result[3].obj + "\n")
      wx.request({
        url: app.globalData.serviceurl,
        data: {
          request: 'quanyi',
          info: {
            name: result[0].obj,
            studentNumber: result[1].obj,
            tel: result[2].obj,
            content: result[3].obj,
            user: app.globalData.userInfo.nickName
          }
        },
        success: function (res) {
          console.log(res.data)
          if (res.data.result) {
            wx.showModal({
              title: 'SUCCESS',
              content: '提交成功，您反馈的问题已被记录，处理结果将会以邮箱或短信的方式告知。',
              confirmText: '返回',
              showCancel: false,
              success: function (res) {
                if (res.confirm) {
                  wx.switchTab({
                    url: '../home/home'
                  })
                } else {
                  console.log(res.confirm)
                }
              }
            })
          }
        },
        fail: function () {
          wx.showModal({
            title: 'FAIL',
            content: '连接超时，请检查网络状况。',
            showCancel: false,
          })
        }
      })
    }
    else {
      wx.showModal({
        title: 'FAIL',
        content: '学号或电话号码输入不正确，请重新输入。',
        showCancel: false
      })
    }
  },

  nameBlur: function (e) {
    focus1: 'false'
    result[0].obj = e.detail.value
    console.log(result[0].obj)
  },
  studentIDBlur: function (e) {
    focus2: 'false'
    result[1].obj = e.detail.value
    console.log(result[1].obj)
  },
  telBlur: function (e) {
    focus3: 'false'
    result[2].obj = e.detail.value
    console.log(result[2].obj)
  },
  contentBlur: function (e) {
    focus4: 'false'
    result[3].obj = e.detail.value
    console.log(result[3].obj)
  }
})