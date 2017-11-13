---
layout: default
---

<ul id="macy-container" class="list pl0">
{% for image in site.static_files %}
    {% if image.path contains 'photo-sets/urban-exploration' %}
        {% unless image.path contains '-500.' %}

        <li><a href="#"><img src="{{ site.baseurl }}{{ image.path | remove: image.extname | append: '-500' | append: image.extname }}" alt="image" class="w-100 h-auto db mw-100 dim" /></a></li>
    {% endunless %}    
    {% endif %}
{% endfor %}
</ul>