---
layout: default
title: Blog
---

## Blog

{% if site.posts.size > 0 %}
{% for post in site.posts %}
- [{{ post.title }}]({{ post.url | relative_url }}) — {{ post.date | date: "%b %d, %Y" }}
{% endfor %}
{% else %}
No posts yet.
{% endif %}
