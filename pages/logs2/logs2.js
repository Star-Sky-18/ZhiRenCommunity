//logs2.js
const util = require('../../utils/util.js')
const app = getApp()
Page({
  data: {
    url: app.globalData.serviceurl,
    logs: []
  },
  onLoad: function () {
    this.setData({
      logs: (wx.getStorageSync('logs') || []).map(log => {
        return util.formatTime(new Date(log))
      })
    })
  },
  onPullDownRefresh: function () {
    wx.startPullDownRefresh()
    setTimeout(() => {
      wx.stopPullDownRefresh()
    }, 2000)
  },
  onScroll: function () {
    wx.request({
      url: 'http://10.21.12.57:8860',
      data: {
        request: 'getInforOfDis',
        infor:{
          day:0,
          num:1,
          title: '',
          startTime:0,
          stopTime:120
        }
      },
      success: function (res) {
        console.log(res.data)
      }
    })
    wx.pageScrollTo({
      scrollTop: 0,
      duration: 300
    })
    wx.showTabBarRedDot({
      index: 1,
    })
    wx.hideTabBarRedDot({
      index: 0,
    })
  }
})
