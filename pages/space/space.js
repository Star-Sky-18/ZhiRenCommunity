// pages/space/space.js
const app = getApp()
var result
Page({

  /**
   * 页面的初始数据
   */
  data: {
    hidden: true
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
  roomhandle: function () {
    wx.navigateTo({
      url: '../booking/booking',
    })
  },
  stagehandle: function () {
    wx.navigateTo({
      url: '../bookingStage/bookingStage',
    })
  },
  bakinghandle: function() {
    var that = this
    wx.showModal({
      title: '温馨提示',
      content: '烘焙室预约功能仅对致仁烘焙室成员开放。',
      success(res) {
        if (res.confirm) {
          that.setData({
            hidden: false
          })
        }
      }
    })
  },
  passwordBlur: function (e) {
    result = e.detail.value
  },
  cancel: function () {
    this.setData({
      hidden: true
    })
  },
  confirm: function () {
    wx.request({
      url: app.globalData.serviceurl,
      method: "POST",
      data: {
        request: "bakingroomPassword",
        info: {
          password: result,
        }
      },
      success: function (res) {
        if (res.data.result) {
          wx.navigateTo({
            url: '../bakingroom/bakingroom',
          })
        }
        else {
          wx.showModal({
            title: '密码错误',
            content: '点击“取消”退出当前界面,点击“重试”进行重试。',
            confirmText: "重试",
          })
        }
      }
    })
  }
})