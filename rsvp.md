---
layout: default
title: FAQ
permalink: /rsvp/
---

<h1> RSVP </h1>

<script type="text/javascript">var submitted=false;</script>

<iframe id="redirect" style="display:none;" onload="if(submitted) {window.location='{{ "/rsvp-confirmation" | relative_url }}';}">
</iframe>

<form id="submit" id="rsvp-form"
  action="https://docs.google.com/forms/d/e/1FAIpQLSfaJQ-a_ooQZixjnI5-R0dL7roAUrvGBeBaWIbaHy3sycgqlg/formResponse"
  method="post" target="redirect" onsubmit="submitted=true;">
  <table id="rsvp-table">
    <tr>
      <td class="prompt"> name </td>
      <td class="response">
        <input class="text-input" id="email" type="text" name="entry.1572100472">
      </td>
    </tr>
    <tr>
      <td class="prompt"> coming? </td>
      <td class="response">
        <input class="radio" type="radio" value="yes" name="entry.325870965">
        yes
        <br>
        <input class="radio" type="radio" value="no" name="entry.325870965">
        no
      </td>
    </tr>
    <tr>
      <td class="prompt">
        anyone else?
      </td>
      <td class="response">
        <input class="text-input" id="number-attending" type="text" name="entry.1118413491">
      </td>
    </tr>
    <tr>
      <td class="prompt">
        where can we expect you?
      </td>
      <td class="response">
        <input class="checkbox" type="checkbox" value="friday-evening" name="entry.1730510582"/>
        <a href="">Friday evening welcome drinks</a> <br>
        <input class="checkbox" type="checkbox" value="saturday-morning" name="entry.1730510582"/>
        <a href="">Saturday morning activities</a> <br>
        <input class="checkbox" type="checkbox" value="wedding-ceremony" name="entry.1730510582"/>
        <a href="">Wedding ceremony</a> <br>
        <input class="checkbox" type="checkbox" value="farewell-drinks" name="entry.1730510582"/>
        <a href="">Farewell drinks</a>
      </td>
    </tr>
    <tr>
      <td class="prompt">
        will you be on the <a href="{{ "/schedule" | relative_url }}">bus</a>?
      </td>
      <td class="response">
        <input class="radio" type="radio" value="yes" name="entry.841777812">
        yes
        <br>
        <input class="radio" type="radio" value="no" name="entry.841777812">
        no
      </td>
    </tr>
    <tr>
      <td class="prompt">
        <a href="{{ "/schedule" | relative_url }}">carpool</a>?
      </td>
      <td class="response">
        <input class="radio" type="radio" value="yes" name="entry.1993110218">
        yes
        <br>
        <input class="radio" type="radio" value="no" name="entry.1993110218">
        no
      </td>
    </tr>
  </table>
  <input class="button" id="submit-btn" type="submit" value="Submit">
</form>
