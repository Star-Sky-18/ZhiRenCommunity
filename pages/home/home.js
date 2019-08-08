// pages/home/home.js

const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    url: app.globalData.serviceurl,
    imgUrls: [
      'https://images.unsplash.com/photo-1551334787-21e6bd3ab135?w=640',
      'https://images.unsplash.com/photo-1551214012-84f95e060dee?w=640',
      'https://images.unsplash.com/photo-1551446591-142875a901a1?w=640'
    ],
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
    wx.showTabBarRedDot({
      index: 0,
    })
    wx.hideTabBarRedDot({
      index: 1,
    })
    wx.request({
      url: app.globalData.serviceurl,
      data: {
        request: 'infoOfUser',
        info:{
          user: app.globalData.userInfo.nickName
        }
      },
      success: function (res) {
        console.log(res.data)
      }
    })
  },
  tapForRoom: function() {
    wx.navigateTo({
      url: '../booking/booking',
    })
  },
  tapForStage: function () {
    wx.navigateTo({
      url: '../bookingStageDetail/bookingStageDetail',
    })
  },
  dormhandle: function () {
    wx.navigateTo({
      url: '../dormitory/dormitory',
    })
  }
})