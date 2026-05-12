// $('h1').html(function(i, html){
//     let chars = $.trim(html).split('');

//     return '<h1>' + chars.join('</h1><h1>') + '</h1>';
// })

document.querySelectorAll('h1').forEach((el) => {
  let chars = el.textContent.trim().split('');

  el.innerHTML = '<h1>' + chars.join('</h1><h1>') + '</h1>';
});