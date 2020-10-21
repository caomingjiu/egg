<!-- app/view/news/list.tpl -->
<html>
  <head>
    <title>Hacker News</title>
    <link rel="stylesheet" href="/public/css/news.css" />
  </head>
  <body>
    <ul class="news-view view">
      {% for item in list %}
        <li class="item">
        {{ helper.relativeTime(item.time) }}
        </li>
      {% endfor %}
    </ul>
  </body>
</html>
