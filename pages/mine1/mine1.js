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
    onShow()
  },
  bindViewTap1: function() {
    wx.navigateTo({
      url: '../booking/booking'
    })
  },
  cancelAppoint: function(e) {
    var that = this
    wx.request({
      url: app.globalData.serviceurl,
      data: {
        request: 'cancelAppoint',
        info: {
          timestamp: e.currentTarget.id,
          user:'Star Sky'
        }
      },
      success: function(res) {
        wx.showModal({
          title: '温馨提示',
          content: res.data.reason==''? '您已取消题为'+res.data.result[0].title+'\n 开始时间为'+app.objectArray[res.data.result[0].startTime].name+'\n 结束时间为'+app.objectArray[res.data.result[0].stopTime].name+'的预约':'取消失败，不存在这条记录',
          showCancel:false,
          success:function(){
            that.onShow()
          }
        })
        console.log(res.data)
      }
    })
  }

})