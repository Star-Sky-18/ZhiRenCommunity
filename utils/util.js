const formatTime = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : '0' + n
}

//日期的加减
const addDay1 = data => {
  //下面的不是时间戳，是时间戳*1000
  var timestamp = Date.parse(new Date());
  var newTimestamp = timestamp + data * 24 * 60 * 60 * 1000;
  var date = new Date(newTimestamp);

  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();

  return [month, day].map(formatNumber).join('/');
}

const addDay2 = data => {
  //下面的不是时间戳，是时间戳*1000
  var timestamp = Date.parse(new Date());
  var newTimestamp = timestamp + data * 24 * 60 * 60 * 1000;
  var date = new Date(newTimestamp);

  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();

  return [year, month, day].map(formatNumber).join('-');
}

const addMonth = num => {
  if (typeof num == "string") {
    num = parseInt(num);
  }
  var date = new Date();
  const curYear = date.getFullYear();
  const curMonth = date.getMonth() + 1;
  const curDay = date.getDate();
  let month = (curMonth + num - 1) % 12;
  let year = curYear + (curMonth + num - month) / 12;
  let days = curDay;
  date = new Date(year, month, days);
  year = date.getFullYear();
  month = date.getMonth() + 1;
  const day = date.getDate();

  return [year, month, day].map(formatNumber).join('-')
}

const setStartTime = disArray=> {
  let addTime = function (startIndex, endIndex) {
    let initialLength = array.length
    let index = startIndex
    for (let i = initialLength; i < initialLength + endIndex - startIndex; i++) {
      array[i] = {
        id: index,
        name: Math.floor(index / 4 + 6) + ':' + (((index % 4) * 15) === 0 ? '00' : ((index % 4) * 15))
      }
      index++
    }
  }
  let array = []
  if(disArray==0) {
    addTime(0,72)
    return array
  }
  addTime(0, disArray[0].startTime)
  for (let i = 1; i < disArray.length; i++) {
    addTime(disArray[i - 1].stopTime, disArray[i].startTime)
  }
  addTime(disArray[disArray.length - 1].stopTime, 72)
  return array
}

const setStopTime = (startIndex, disArray) => {
  let endIndex = startIndex + 7 > 72 ? 72 : (startIndex + 7)
  for (let i = 0; i < disArray.length; i++) {
    if ( startIndex<= disArray[i].startTime && disArray[i].startTime < endIndex) {
      endIndex = disArray[i].startTime
    }
  }
  let array = []
  let index = startIndex;
  for (let i = 0; i < endIndex - startIndex + 1; i++) {
    array[i] = {
      id: index,
      name: Math.floor(index / 4 + 6) + ':' + (((index % 4) * 15) === 0 ? '00' : ((index % 4) * 15))
    }
    index++
  }
  if (array[array.length - 1].id === 72)
    array[array.length - 1].name = '23:59'
  return array;
}

module.exports = {
  formatTime: formatTime,
  addDay1: addDay1,
  addDay2: addDay2,
  addMonth: addMonth,
  setStartTime:setStartTime,
  setStopTime:setStopTime
}
