---
layout: default
title: FAQ
permalink: /rsvp/
---

<h1> RSVP </h1>

<iframe name="redirect" style="display:none;"></iframe>

<form id="submit" id="rsvp-form"
  action="https://docs.google.com/forms/d/e/1FAIpQLSfaJQ-a_ooQZixjnI5-R0dL7roAUrvGBeBaWIbaHy3sycgqlg/formResponse"
  method="post" target="redirect" onsubmit="markFormAsSubmitted();">
  <table id="rsvp-table">
    <tr>
      <td class="prompt"> Your name </td>
      <td class="response">
        <input class="text-input" id="email" type="text" name="entry.1572100472">
      </td>
    </tr>
    <tr>
      <td class="prompt"> Are you able to attend? </td>
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
        Name of your +1 (as indicated on invitation)?
      </td>
      <td class="response">
        <input class="text-input" id="number-attending" type="text" name="entry.1118413491">
      </td>
    </tr>
    <tr>
      <td class="prompt">
        Which events will you be attending?
      </td>
      <td class="response">
        <input class="checkbox" type="checkbox" value="friday-evening" name="entry.1730510582"/>
        <a href="{{ "/schedule" | relative_url }}">Friday evening welcome drinks</a> <br>
        <input class="checkbox" type="checkbox" value="ceremony" name="entry.1730510582"/>
        <a href="{{ "/schedule" | relative_url }}">Ceremony and reception</a> <br>
        <input class="checkbox" type="checkbox" value="sunday-breakfast" name="entry.1730510582"/>
        <a href="{{ "/schedule" | relative_url }}">Sunday breakfast</a>
      </td>
    </tr>
    <tr>
      <td class="prompt">
        will you be on the <a href="{{ "/transportation/#getting-to-wedding" | relative_url }}">bus</a>?
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
        <a href="{{ "/transportation/#carpool" | relative_url }}">carpool</a>?
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
  <button class="button" id="submit-btn" type="submit"></button>
</form>

We would love to see your children and/or dogs at the Saturday morning
activities and Sunday breakfast, but **we are unfortunately unable to accomodate
children or pets at the ceremony and reception**. We recommend [x](), [y]() and
[z]() daycares for your loved ones during the ceremony and reception.
