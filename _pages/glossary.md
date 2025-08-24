---
layout: page
title: Glossary
permalink: /glossary/
description: List of terms that comes up frequently in my work.
nav: false
nav_order: 5
---

<ul>
{% assign sorted_terms = site.data.glossary | sort %}
{% assign current_letter = '' %}
{% for item in sorted_terms %}
  {% assign first_letter = item[0] | slice: 0, 1 | upcase %}
  {% if first_letter != current_letter %}
    {% assign current_letter = first_letter %}
    <h2>{{ current_letter }}</h2>
  {% endif %}
  <li id="{{ item[0] }}"><strong>{{ item[0] }}:</strong> {{ item[1] }}</li>
{% endfor %}
</ul>