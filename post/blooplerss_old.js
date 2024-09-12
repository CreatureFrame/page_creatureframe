var container = document.createElement("div");
container.innerHTML = "<h3 class=\"feed-title\"><a href=\"https://creatureframe.com/\" target=\"_blank\">Creatureframe<\/a><\/h3><h4 class=\"feed-item-title\"><a href=\"https://creatureframe.com/post/test01.html\" target=\"_blank\">testpage01<\/a><\/h4><p class=\"feed-item-desc\">A description of the page.<\/p><div style=\"text-align: end;\">\n  <a href=\"https://rss.bloople.net/\" target=\"_blank\" style=\"color: #000000;\">Powered by RSS 2 HTML<\/a>\n<\/div>\n\n<!-- To create this output, visit: https://rss2html.net/build_embeds/new?embed_render_title=false&feed_render_description=false&feed_render_image=false&strip_html=false&template=legacy&url=https%3A%2F%2Fcreatureframe.com%2Frss.xml -->\n";
var nodes = [].slice.call(container.childNodes);
var script = document.scripts[document.scripts.length - 1];
var parent = script.parentNode;
while(nodes.length > 0) parent.insertBefore(nodes.shift(), script);
parent.removeChild(script);
