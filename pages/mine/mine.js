// pages/mine/mine.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse) {
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  getUserInfo: function (e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },


  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },
  bindViewTap1: function () {
    wx.navigateTo({
      url: '../mine1/mine1'
    })
  },
  bindViewTap2: function () {
    wx.navigateTo({
      url: '../mine2/mine2'
    })
  },
  bindViewTap3: function () {
    wx.showModal({
      title: '温馨提示',
      content: '权益通道功能暂未开放，敬请期待后续版本哦！',
    })
  }
  ,

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
  onScroll: function () {
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
      url: 'http://10.21.12.57:8860',
      data: {
        request: 'getInforOfDis',
        infor: {
          day: 0,
          num: 1,
          title: '',
          startTime: 0,
          stopTime: 120
        }
      },
      success: function (res) {
        console.log(res.data)
      }
    })
  }
})