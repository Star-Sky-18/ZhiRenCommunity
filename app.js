//app.js
App({
  onLaunch: function () {
    // 展示本地存储能力
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
    })
    // 获取用户信息
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success: res => {
              // 可以将 res 发送给后台解码出 unionId
              this.globalData.userInfo = res.userInfo

              // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
              // 所以此处加入 callback 以防止这种情况
              if (this.userInfoReadyCallback) {
                this.userInfoReadyCallback(res)
              }
            }
          })
        }
      }
    })
  },
  onPullDownRefresh: function () {
    wx.startPullDownRefresh()
    setTimeout(() => {
      wx.stopPullDownRefresh()
    }, 2000)
  },
  globalData: {
    userInfo: null
  }
})
var app = getApp();
app.globalData.disArray = []
app.day = [0,1,2];
app.globalData.serviceurl = 'http://10.17.23.142:8860'
app.objectArray = [
  { id: 0, name: '6:00' },
  { id: 1, name: '6:15' },
  { id: 2, name: '6:30' },
  { id: 3, name: '6:45' },
  { id: 4, name: '7:00' },
  { id: 5, name: '7:15' },
  { id: 6, name: '7:30' },
  { id: 7, name: '7:45' },
  { id: 8, name: '8:00' },
  { id: 9, name: '8:15' },
  { id: 10, name: '8:30' },
  { id: 11, name: '8:45' },
  { id: 12, name: '9:00' },
  { id: 13, name: '9:15' },
  { id: 14, name: '9:30' },
  { id: 15, name: '9:45' },
  { id: 16, name: '10:00' },
  { id: 17, name: '10:15' },
  { id: 18, name: '10:30' },
  { id: 19, name: '10:45' },
  { id: 20, name: '11:00' },
  { id: 21, name: '11:15' },
  { id: 22, name: '11:30' },
  { id: 23, name: '11:45' },
  { id: 24, name: '12:00' },
  { id: 25, name: '12:15' },
  { id: 26, name: '12:30' },
  { id: 27, name: '12:45' },
  { id: 28, name: '13:00' },
  { id: 29, name: '13:15' },
  { id: 30, name: '13:30' },
  { id: 31, name: '13:45' },
  { id: 32, name: '14:00' },
  { id: 33, name: '14:15' },
  { id: 34, name: '14:30' },
  { id: 35, name: '14:45' },
  { id: 36, name: '15:00' },
  { id: 37, name: '15:15' },
  { id: 38, name: '15:30' },
  { id: 39, name: '15:45' },
  { id: 40, name: '16:00' },
  { id: 41, name: '16:15' },
  { id: 42, name: '16:30' },
  { id: 43, name: '16:45' },
  { id: 44, name: '17:00' },
  { id: 45, name: '17:15' },
  { id: 46, name: '17:30' },
  { id: 47, name: '17:45' },
  { id: 48, name: '18:00' },
  { id: 49, name: '18:15' },
  { id: 50, name: '18:30' },
  { id: 51, name: '18:45' },
  { id: 52, name: '19:00' },
  { id: 53, name: '19:15' },
  { id: 54, name: '19:30' },
  { id: 55, name: '19:45' },
  { id: 56, name: '20:00' },
  { id: 57, name: '20:15' },
  { id: 58, name: '20:30' },
  { id: 59, name: '20:45' },
  { id: 60, name: '21:00' },
  { id: 61, name: '21:15' },
  { id: 62, name: '21:30' },
  { id: 63, name: '21:45' },
  { id: 64, name: '22:00' },
  { id: 65, name: '22:15' },
  { id: 66, name: '22:30' },
  { id: 67, name: '22:45' },
  { id: 68, name: '23:00' },
  { id: 69, name: '23:15' },
  { id: 70, name: '23:30' },
  { id: 71, name: '23:45' },
  { id: 72, name: '23:59' }
]

wx.request({
  url: app.globalData.serviceurl,
  data:{
    request:"getSlashes",
    info:{}
  },
  success:function(res){
    console.log(res)
    app.globalData.slashes = res.data
  }
})