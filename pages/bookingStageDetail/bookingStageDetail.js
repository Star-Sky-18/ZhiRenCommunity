// pages/bookingStageDetail/bookingStageDetail.js
var utils = require('../../utils/util.js')
const app = getApp()
var result = [{ id: 0, obj: '' }, { id: 1, obj: '' }, { id: 2, obj: '' }, { id: 3, obj: '' }, { id: 4, obj: '' }, { id: 5, obj: '' }, { id: 6, obj: '' }, { id: 7, obj: '' }, { id: 8, obj: '' }, { id: 9, obj: '' }, { id: 10, obj: 'false' }, { id: 11, obj: 'false' }]
Page({

  /**
   * 页面的初始数据
   */
  data: {
    utils: utils,
    startDate: utils.addDay2(1),
    endDate: utils.addMonth(1),
    currentDate: '点击选择',
    currentStart: '点击选择',
    currentEnd: '点击选择'
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
    result = [{ id: 0, obj: '' }, { id: 1, obj: '' }, { id: 2, obj: '' }, { id: 3, obj: '' }, { id: 4, obj: '' }, { id: 5, obj: '' }, { id: 6, obj: '' }, { id: 7, obj: '' }, { id: 8, obj: '' }, { id: 9, obj: '' }, { id: 10, obj: 'false' }, { id: 11, obj: 'false' }]
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
  datehandle: function (e) {
    this.setData({
      currentDate: e.detail.value
    })
    result[0].obj = e.detail.value
    console.log(result[0].obj)
  },
  starthandle: function (e) {
    this.setData({
      currentStart: e.detail.value
    })
    result[1].obj = e.detail.value
    console.log(result[1].obj)
  },
  endhandle: function (e) {
    this.setData({
      currentEnd: e.detail.value
    })
    result[2].obj = e.detail.value
    console.log(result[2].obj)
  },
  projectorChange: function (e) {
    result[10].obj = e.detail.value
    console.log(result[10].obj)
  },
  microphoneChange: function (e) {
    result[11].obj = e.detail.value
    console.log(result[11].obj)
  },
  contentBlur: function (e) {
    focus1: 'false'
    result[3].obj = e.detail.value
    console.log(result[3].obj)
  },
  nameBlur: function (e) {
    focus2: 'false'
    result[4].obj = e.detail.value
    console.log(result[4].obj)
  },
  studentIDBlur: function (e) {
    focus3: 'false'
    result[5].obj = e.detail.value
    console.log(result[5].obj)
  },
  emailBlur: function (e) {
    focus4: 'false'
    result[6].obj = e.detail.value
    console.log(result[6].obj)
  },
  telBlur: function (e) {
    focus5: 'false'
    result[7].obj = e.detail.value
    console.log(result[7].obj)
  },
  titleBlur: function (e) {
    focus6: 'false'
    result[8].obj = e.detail.value
    console.log(result[8].obj)
  },
  remarkBlur: function (e) {
    focus7: 'false'
    result[9].obj = e.detail.value
    console.log(result[9].obj)
  },
  submit: function () {
    if (result[0].obj == '' || result[1].obj == '' || result[2].obj == '' || result[3].obj == '' || result[4].obj == '' || result[5].obj == '' || result[6].obj == '' || result[7].obj == '' || result[8].obj == '') {
      wx.showModal({
        title: 'NOTICE',
        content: '请填写所有必填信息。',
        showCancel: false,
      })
    }
    else {
      console.log(result[0].obj + "\n" + result[1].obj + "\n" + result[2].obj + "\n" + result[3].obj + "\n" + result[4].obj + "\n" + result[5].obj + "\n" + result[6].obj + "\n" + result[7].obj + "\n" + result[8].obj)
      wx.request({
        url: app.globalData.serviceurl,
        data: {
          request: 'appointActivity',
          info: {
            date: result[0].obj,
            startTime: result[1].obj,
            endTime: result[2].obj,
            content: result[3].obj,
            name: result[4].obj,
            studentNumber: result[5].obj,
            email: result[6].obj,
            tel: result[7].obj,
            title: result[8].obj,
            remark: result[9].obj,
            projector: result[10].obj,
            microphone: result[11].obj,
            user: app.globalData.userInfo.nickName
          }
        },
        success: function (res) {
          console.log(res.data)
          if (res.data) {
            wx.showModal({
              title: 'SUCCESS',
              content: '预约成功，审核结果将会由邮箱或短信的形式通知，请耐心等待。',
              confirmText: '返回上层',
              showCancel: false,
              success(res) {
                if (res.confirm) {
                  wx.navigateBack({
                    delta: 0,
                  })
                }
              }
            })
          }
          else {
            wx.showModal({
              title: 'FAIL',
              content: '预约失败，请重试。',
              showCancel: false
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
  }
})