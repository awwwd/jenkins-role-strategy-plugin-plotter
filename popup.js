function check() {
  var trname = document.getElementById("row").value;
  var e = document.getElementById("selectionList");
  var inname = e.options[e.selectedIndex].value;

  var config = {row: trname, col: inname, op: 'check'};

  chrome.tabs.executeScript(null, {
      code: 'var data = ' + JSON.stringify(config)
  }, function() {
      chrome.tabs.executeScript(null, {file: 'content.js'});
  });
}

function uncheck() {
  var trname = document.getElementById("row").value;
  var e = document.getElementById("selectionList");
  var inname = e.options[e.selectedIndex].value;

  var config = {row: trname, col: inname, op: 'uncheck'};

  chrome.tabs.executeScript(null, {
      code: 'var data = ' + JSON.stringify(config)
  }, function() {
      chrome.tabs.executeScript(null, {file: 'content.js'});
  });
}

function setDOMInfo(info) {
  var elem = document.getElementById('selectionList');
  var opt = document.createElement('option');
  for (let i = 1; i <= info.length; i++) {
    var opt = document.createElement('option');
    opt.value = info[i-1];
    opt.innerHTML = info[i-1];
    elem.appendChild(opt);
  }
}

document.addEventListener('DOMContentLoaded', function () {
  document.getElementById("check").addEventListener('click', check);
  document.getElementById("uncheck").addEventListener('click', uncheck);

  chrome.tabs.query({
    active: true,
    currentWindow: true
  }, function (tabs) {
    chrome.tabs.sendMessage(
      tabs[0].id, {
        from: 'popup',
        subject: 'ProjectList'
      }, setDOMInfo);
  });
});
