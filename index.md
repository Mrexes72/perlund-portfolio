---
layout: home
author_profile: true
title: "Per Lund"
---

<h3>Boot.dev Progress</h3>
<p><strong>Lessons completed:</strong> {{ site.data.bootdev.lessons }}</p>

<h4>Courses</h4>
<ul>
  {% for course in site.data.bootdev.courses %}
    <li>{{ course }}</li>
  {% endfor %}
</ul>

<h4>Guided Projects</h4>
<ul>
  {% for project in site.data.bootdev.projects %}
    <li>{{ project }}</li>
  {% endfor %}
</ul>

<p><em>Last updated: {{ site.data.bootdev.lastUpdated }}</em></p>
