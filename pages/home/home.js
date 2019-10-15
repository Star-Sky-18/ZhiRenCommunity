// pages/home/home.js

const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    url: app.globalData.serviceurl,
    imgUrls: app.globalData.slashes,
    indicatorDots: true,
    autoplay: true,
    interval: 5000,
    duration: 1000
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
    this.setData({
      imgUrls:app.globalData.slashes
    })
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
    wx.startPullDownRefresh()
    setTimeout(() => {
      wx.stopPullDownRefresh()
    }, 2000)
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
  onScroll: function() {
    wx.pageScrollTo({
      scrollTop: 0,
      duration: 300
    })
    wx.showModal({
      title: '帮助',
      content: '暂未开放',
    })
  },
  tapForRoom: function() {
    wx.navigateTo({
      url: '../booking/booking',
    })
  },
  tapForStage: function () {
    wx.navigateTo({
      url: '../bookingStage/bookingStage',
    })
  },
  tapForQuanyi: function () {
    wx.showModal({
      title: '温馨提示',
      content: '权益通道功能暂未开放，敬请期待后续版本哦！',
    })
  },
  dormhandle: function () {
    wx.navigateTo({
      url: '../dormitory/dormitory',
    })
  }
})