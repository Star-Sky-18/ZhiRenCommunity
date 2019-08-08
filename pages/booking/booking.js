var utils = require('../../utils/util.js')
var app = getApp()
app.day = 0
Page({
  data: {
    url: app.globalData.serviceurl,
    isAgree: false,
    discussRoom: [1,2,3,4],
    day1: utils.addDay1(0),
    day2: utils.addDay1(1),
    day3: utils.addDay1(2),
    day1Picked: true,
    day2Picked: false,
    day3Picked: false,
    currentDay: 0
    //此数组用于存request到的对象，暂用编号代替
  },
  changeDay: function(e) {
    app.day = parseInt(e.target.dataset.number);
    if(app.day === 0){
      this.setData({
        day1Picked: true,
        day2Picked: false,
        day3Picked: false,
        currentDay: 0
      })
    }
    else if(app.day === 1) {
      this.setData({
        day1Picked: false,
        day2Picked: true,
        day3Picked: false,
        currentDay: 1
      })
    }
    else if(app.day === 2) {
      this.setData({
        day1Picked: false,
        day2Picked: false,
        day3Picked: true,
        currentDay: 2
      })
    }
  },
  changeAgreedStat: function(e) {
    this.setData({
      isAgree: !this.data.isAgree
    })
  },
  showNotice: function(e) {
    wx.navigateTo({
      url: '../notice/notice',
      success: function(res) {},
      fail: function(res) {},
      complete: function(res) {},
    })
  },
  book: function (e) {
    if(!this.data.isAgree) {
      wx.showModal({
        title: '温馨提示',
        content: '您需要勾选同意服从页面上部的活动室管理规定才能进行预约喔~~~谢谢您的配合！',
      })
    }
    else{
      console.log("The user wants to book discuss room" + (e.target.dataset.number + 1) + "!");
      app.roomNumber = parseInt(e.target.dataset.number);
      wx.request({
        url: app.globalData.serviceurl,
        data: {
          request: 'getInfoOfAllDis',
          info: {}
        },
        success: function (res) {
          app.globalData.disArray = res.data[app.roomNumber][app.day]
          wx.navigateTo({
            url: '../bookingRoomDetail/bookingRoomDetail',//这里填你的页面路径
            success: function (res) { },
            fail: function (res) { },
            complete: function (res) { },
          })
        }
      })
    }
  },
  onShow: function(){
    var a = this;
    wx.request({
      url: app.globalData.serviceurl,
      data: {
        request: 'getInfoOfAllDis',
        info: {}
      },
      success: function (res) {
        var oldArray = res.data
        var newArray = 
        [
          [
            [
              [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false], 
              [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false], 
              [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false]
            ],
            [
              [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false], 
              [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false], 
              [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false]
            ],
            [
              [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false], 
              [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false], 
              [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false]
            ]
          ],
          [
            [
              [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
              [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
              [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false]
            ],
            [
              [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
              [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
              [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false]
            ],
            [
              [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
              [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
              [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false]
            ]
          ],
          [
              [
                [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
                [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
                [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false]
              ],
              [
                [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
                [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
                [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false]
              ],
              [
                [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
                [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
                [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false]
              ]
            ],
          [
            [
              [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
              [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
              [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false]
            ],
            [
              [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
              [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
              [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false]
            ],
            [
              [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
              [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
              [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false]
            ]
          ]
        ]
        for(var i = 0; i < oldArray.length; i++){
          for(var j = 0; j < oldArray[i].length; j++){
            for(var k = 0; k < oldArray[i][j].length; k++){
              for (var p = oldArray[i][j][k].startTime; p < oldArray[i][j][k].stopTime; p++){
                newArray[i][j][Math.floor(p/24)][p%24] = true
              }
            }
          }
        }
        a.setData({
          discussRoom: newArray
        })
        console.log(a.data.discussRoom);
      }
    })
  },
  onPullDownRefresh: function(){
    wx.showNavigationBarLoading();
    setTimeout(function()
    {
      wx.hideNavigationBarLoading();
      wx.stopPullDownRefresh();
    },1000);
  }
})
