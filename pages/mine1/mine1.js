// pages/mine1/mine1.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    url:app.globalData.serviceurl,
    discuss: [],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    var that = this;
    wx.request({
      url: app.globalData.serviceurl,
      data: {
        request: 'infoOfUser',
        info: {
          user: 'Star Sky'
        }
      },
      success: function(res) {
        // console.log(res.data)
        that.setData({
          discuss: res.data.appointmentOfDis
        })
        console.log(that.data.discuss)
      }
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {
    var that = this
    wx.request({
      url: app.globalData.serviceurl,
      data: {
        request: 'infoOfUser',
        info: {
          user: 'Star Sky'
        }
      },
      success: function(res) {
        // console.log(res.data)
        that.setData({
          discuss: res.data.appointmentOfDis
        })
        console.log(that.data.discuss)
      }
    })
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  },
  onScroll: function() {
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
    wx.request({
      url: app.globalData.serviceurl,
      data: {
        request: 'getInfoOfDis',
        info: {
          day: 0,
          num: 1,
          title: '',
          startTime: 0,
          stopTime: 120
        }
      },
      success: function(res) {
        console.log(res.data)
      }
    })
  },
  bindViewTap1: function() {
    wx.navigateTo({
      url: '../booking/booking'
    })
  },
  cancelAppoint: function(e) {
    wx.request({
      url: app.globalData.serviceurl,
      data: {
        request: 'cancelAppoint',
        info: {
          timestamp: e.currentTarget.id
        }
      },
      success: function(res) {
        wx.showModal({
          title: '温馨提示',
          content: '!',
        })
        console.log(res.data)
      }
    })
  }

})