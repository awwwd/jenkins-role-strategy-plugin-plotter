chrome.runtime.sendMessage({
  from:    'content',
  subject: 'showPageAction'
});

chrome.runtime.onMessage.addListener(function (msg, sender, response) {
  if ((msg.from === 'popup') && (msg.subject === 'ProjectList')) {
    let fullTable = document.getElementById('projectRoles');
    fullTable.querySelectorAll("tr.page-header")
    let headerRow = fullTable.querySelectorAll("td.pane-header")

    var arr = []
    for (let i = 1; i < headerRow.length; i++)  {
      arr.push(headerRow[i].innerText);
    }
    response(arr);
  }
});
