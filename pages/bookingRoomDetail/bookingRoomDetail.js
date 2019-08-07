// pages/bookingRoomDetail/bookingRoomDetail.js
var utils = require('../../utils/util.js')
const app = getApp()
var startTimeArray = utils.setStartTime(app.globalData.disArray)
var endTimeArray = utils.setStopTime(startTimeArray[0].id+1,app.globalData.disArray)

var startTimeIndex = 0;
var endTimeIndex = 0;
var date = ['今天 ' + utils.addDay2(0), '明天 ' + utils.addDay2(1), '后天 ' + utils.addDay2(2)]
console.log(date)
var result = [{ id: 0, obj: 0 }, { id: 1, obj: 0 }, { id: 2, obj: '' }, { id: 3, obj: startTimeArray[0].id }, { id: 4, obj: endTimeArray[0].id }, { id: 5, obj: '' }, { id: 6, obj: '' }, { id: 7, obj: '' }, { id: 8, obj: '' }]
var that = undefined;

Page({

  /**
   * 页面的初始数据
   */
  data: {
    startTimeIndex: startTimeIndex,
    endTimeIndex: endTimeIndex,
    startTimeArray: startTimeArray,
    endTimeArray: endTimeArray,
    date: date,
    result: result,
    num: result[1].obj + 1,
    value1: '',
    value2: '',
    value3: '',
    value4: '',
    value5: ''
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function () {
    that = this
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
    result = [{ id: 0, obj: app.day }, { id: 1, obj: app.roomNumber }, { id: 2, obj: '' }, { id: 3, obj: startTimeArray[0].id }, { id: 4, obj: endTimeArray[0].id }, { id: 5, obj: '' }, { id: 6, obj: '' }, { id: 7, obj: '' }, { id: 8, obj: '' }]
    startTimeArray = utils.setStartTime(app.globalData.disArray)
    endTimeArray = utils.setStopTime(startTimeArray[0].id + 1, app.globalData.disArray)

    startTimeIndex = 0;
    endTimeIndex = 0;

    this.setData({
      startTimeIndex: startTimeIndex,
      endTimeIndex: endTimeIndex,
      startTimeArray: startTimeArray,
      endTimeArray: endTimeArray,
      date: date,
      result: result,
      num: result[1].obj + 1,
      value1: '',
      value2: '',
      value3: '',
      value4: '',
      value5: ''
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

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  bindStartTimeChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    startTimeIndex = parseInt(e.detail.value)
    endTimeIndex = 0
    endTimeArray = utils.setStopTime(startTimeArray[e.detail.value].id + 1, app.globalData.disArray)
    this.setData({
      startTimeIndex: startTimeIndex,
      endTimeArray: endTimeArray,
      endTimeIndex: endTimeIndex
    })
    console.log("("+startTimeIndex+","+endTimeIndex+")")
    result[3].obj = startTimeArray[e.detail.value].id
    result[4].obj = endTimeArray[endTimeIndex].id
    console.log(startTimeArray[e.detail.value].id + ' ' + endTimeArray[endTimeIndex].id)
  },
  bindEndTimeChange: function (e) {
    console.log('picker发送选择改变，携带值为', parseInt
    (e.detail.value) + startTimeArray[startTimeIndex].id - 1)
    endTimeIndex = parseInt(e.detail.value),
    this.setData({
      endTimeIndex: endTimeIndex,
      startTimeIndex: startTimeIndex
    })
    console.log("(" + startTimeIndex + "," + endTimeIndex + ")")
    result[3].obj = startTimeArray[startTimeIndex].id
    result[4].obj = endTimeArray[endTimeIndex].id
    console.log(endTimeArray)
    console.log(startTimeArray[startTimeIndex].id + ' ' + endTimeArray[endTimeIndex].id)
  },
  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },
  // submitTap: function (e) {
  //   console.log(e)
  // },
  submit: function () {
    if (result[2].obj=='' || result[5].obj=='' || result[6].obj=='' || result[8].obj=='') {
      wx.showModal({
        title: 'NOTICE',
        content: '请填写所有必填信息。',
        showCancel: false,
      })
    }
    else if(result[6].obj.length == 8 && result[8].obj.length == 11){
      console.log(result[0].obj + "\n" + result[1].obj + "\n" + result[2].obj + "\n" + result[5].obj + "\n" + result[6].obj + "\n" + result[7].obj + "\n" + result[8].obj + "\n" + result[3].obj + "\n"  + result[4].obj + "\n" )
    wx.request({
      url: app.globalData.serviceurl,
      data: {
        request: 'appointDis',
        info: {
          day: result[0].obj,
          num: result[1].obj,
          title: result[2].obj,
          startTime: result[3].obj,
          stopTime: result[4].obj,
          name: result[5].obj,
          studentNumber: result[6].obj,
          remark: result[7].obj,
          tel: result[8].obj,
          user: app.globalData.userInfo.nickName
        }
      },
      success: function (res) {
        console.log(res.data)
        if (res.data) {
          wx.showModal({
            title: 'SUCCESS',
            content: '预约成功。',
            confirmText: '返回上层',
            showCancel: false,
            success (res) {
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
            content: '该时段已被预约，请重新选择。',
            showCancel: false
          })
          wx.request({
            url: app.globalData.serviceurl,
            data: {
              request: 'getInfoOfAllDis',
              info: {}
            },
            success: function (res) {
              console.log(res.data)
              app.globalData.disArray = res.data[app.roomNumber][app.day]
            }
          })
          that.setData({
            startTimeArray: utils.setStartTime(app.globalData.disArray),
            endTimeArray: utils.setStopTime(startTimeArray[0].id + 1, app.globalData.disArray),
            startTimeIndex: 0,
            endTimeIndex: 0,
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

  titleBlur: function (e) {
    focus1:'false'
    result[2].obj = e.detail.value
    console.log(result[2].obj)
  },
  nameBlur: function (e) {
    focus2:'false'
    result[5].obj = e.detail.value
    console.log(result[5].obj)
  },
  studentIDBlur: function (e) {
    focus3:'false'
    result[6].obj = e.detail.value
    console.log(result[6].obj)
  },
  remarkBlur: function (e) {
    focus5:'false'
    result[7].obj = e.detail.value
    console.log(result[7].obj)
  },
  telBlur: function (e) {
    focus4: 'false'
    result[8].obj = e.detail.value
    console.log(result[8].obj)
  },
  reset: function () {
    console.log(app.globalData.disArray)
    endTimeArray = utils.setStopTime(startTimeArray[0].id + 1, app.globalData.disArray)
    this.setData({
      startTimeIndex: 0,
      endTimeArray: utils.setStopTime(startTimeArray[0].id+1, app.globalData.disArray),
      endTimeIndex: 0,
      value1: '',
      value2: '',
      value3: '',
      value4: '',
      value5: ''
    })
    result[2].obj = ''
    result[3].obj = startTimeArray[0].id
    result[4].obj = endTimeArray[0].id
    result[5].obj = ''
    result[6].obj = ''
    result[7].obj = ''
    result[8].obj = ''
  },
})
