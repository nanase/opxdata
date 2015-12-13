var tiptip_options = {maxWidth: '360px', edgeOffset: 8, activation: 'hover', defaultPosition: 'top'};

$(function() {
  $('sup').each(function() {
    var text = $(this).text();
    var num = text.match(/\d+/);
    var target = $('ul.footnote>li:contains(' + text + '):first');
    var footnote = target.parent();

    if (!num) return; else num = num[0];

    var name = 'footnote_' + num;
    $(this).attr('title', target.next().text())
           .html('<a href="#' + name + '">'+ text + '</a>')
           .tipTip(tiptip_options)
           .hover(function(){ footnote.stop(false, true).css({backgroundColor: '#fff3b8'}); },
                  function(){ footnote.stop(false, true).animate({backgroundColor: '#ffffff'}, 3000); });
  });
  $('ul.footnote').each(function() {
    var text = $(this).children('li:first').text();
    var num = text.match(/\d+/);
    var name = 'footnote_' + num;
    $(this).before('<a name="' + name + '"></a>');
  });
});