// Copyright 2018 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';

let logHours = document.getElementById('logHours');
let fromDate = document.getElementById('fromDate');
let toDate = document.getElementById('toDate');

$(function(){
  fromDate.value = getCurrentDate();
  toDate.value = getCurrentDate();
});

logHours.onclick = function(element) {
  console.log("YEAHHH we're logging some hours now!");  
};


function getCurrentDate(){
  var fullDate = new Date();
  //console.log(fullDate);
  var twoDigitMonth = fullDate.getMonth()+1+"";if(twoDigitMonth.length==1)  twoDigitMonth="0" +twoDigitMonth;
  var twoDigitDate = fullDate.getDate()+"";if(twoDigitDate.length==1) twoDigitDate="0" +twoDigitDate;
  var currentDate = fullDate.getFullYear() + "-" +  twoDigitMonth + "-" +  twoDigitDate;
  //console.log(currentDate);
  return currentDate;
}

