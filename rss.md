for individual pages, in <head>

```
<link rel="alternate" type="application/rss+xml"
href="../rss.xml" title="RSS">
```



https://timestampgenerator.com/



to check rss.xml is okay:

https://validator.w3.org/feed/



GUID must be unique, so is usually the page url. if wanting to not have an url, use `isPermaLink="false"`

```
<guid isPermaLink="false">article 54 at example.com</guid>
```

final <item> section

```
<item>
<title>testpage03</title>
<pubDate>Wed, 12 Sep 2024 15:52:00 EST</pubDate>
<link>https://creatureframe.com/post/test01.html</link>
<guid>00003</guid>
<description> got some shtuff here<br><img src="https://64.media.tumblr.com/a3252ea288efc237fcd27b502b74d60c/8ed3a094cc57053e-5a/s400x600/6d1de0f7247350f8d42d36c44d59375993eefbdc.gif"> </description>
</item>
```









after pushing, use https://rss.bloople.net/ to get 

```
<script src="//rss.bloople.net/?url=https%3A%2F%2Fcreatureframe.com%2Frss.xml&showicon=true&type=js"></script>
```



https://rss2html.net/build_embeds/new?embed_render_title=false&feed_render_description=false&feed_render_image=false&item_count=10&strip_html=false&template=legacy&url=https%3A%2F%2Fdoqmeat.com%2Fnotebook%2Ftutorials%2Frss%2Ftemplate.xml





https://doqmeat.com/notebook/tutorials/rss/template.xml







## for adding images and stuff

can use

https://mothereff.in/html-entities



```
<a href="URL">LINK</a>
=
&lt;a href=&quot;URL&quot;&gt;LINK&lt;/a&gt;

<img src="IMG-URL">
=
&lt;img src=&quot;IMG-URL&quot;&gt;
```









## other tools

https://purifycss.online/