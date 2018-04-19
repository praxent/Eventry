// Copyright 2018 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';

let logHours = document.getElementById('logHours');

/*
chrome.storage.sync.get('color', function(data) {
  changeColor.style.backgroundColor = data.color;
  changeColor.setAttribute('value', data.color);
});

*/


logHours.onclick = function(element) {
  console.log("YEAHHH we're logging some hours now!");
};
