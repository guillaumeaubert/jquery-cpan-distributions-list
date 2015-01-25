CPAN Distributions List
=======================

[![Build Status](https://travis-ci.org/guillaumeaubert/jquery-cpan-distributions-list.svg?branch=master)](https://travis-ci.org/guillaumeaubert/jquery-cpan-distributions-list)
[![Coverage Status](https://coveralls.io/repos/guillaumeaubert/jquery-cpan-distributions-list/badge.svg?branch=master)](https://coveralls.io/r/guillaumeaubert/jquery-cpan-distributions-list?branch=master)

Display a list of CPAN distributions and related information for a specified Perl author.


Getting Started
---------------

Download the [production version][min] or the [development version][max].

[min]: https://raw.github.com/guillaumeaubert/jquery-cpan-distributions-list/master/dist/cpan-distributions-list.min.js
[max]: https://raw.github.com/guillaumeaubert/jquery-cpan-distributions-list/master/dist/cpan-distributions-list.js

Add the following in your `HEAD` section:

```html
<script src="libs/jquery/jquery.js"></script>
<script src="dist/cpan-distributions-list.min.js"></script>
<script>
	$('#cpan_distributions').createDistributionsList(
		{
			pause_id: "AUBERTG",
			github_id: "guillaumeaubert",
		}
	);
</script>
```

Add the following to your `BODY` section:

```html
<table id="cpan_distributions">
	<thead>
		<th>Distribution</th>
		<th>Current Version</th>
		<th>Links</th>
		<th>Build Status</th>
		<th>Test Coverage</th>
	</thead>
	<tbody>
		<tr style="display: none;" class="template">
			<td class="distribution"><!-- Name of the distribution --></td>
			<td class="version"><!-- Current version of the distribution --></td>
			<td class="links">
				<span class="github"><!-- GitHub link --></span>
				|
				<span class="metacpan"><!-- MetaCPAN link --></span>
				|
				<span class="cpants"><!-- CPANTS link --></span>
			</td>
			<td class="travis_status_badge"><!-- Travis CI - badge to indicate build status --></td>
			<td class="coveralls_badge"><!-- Coveralls.io - badge to indicate test coverage percentage --></td>
		</tr>
	</tbody>
</table>
```


Documentation
-------------

`createDistributionsList()` accepts the following arguments:

<table>
  <tr>
    <th>Argument</th>
    <th>Default</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>pause_id</th>
    <td>AUBERTG</th>
    <td>A PAUSE author ID.</td>
  </tr>
  <tr>
    <td>github_id</td>
    <td>guillaumeaubert</td>
    <td>The corresponding GitHub ID, where the repositories for all the distributions are located.</td>
  </tr>
  <tr>
    <td>coveralls</td>
    <td>true</td>
    <td>Control the display of the Coveralls.io badges for all distributions.</td>
  </tr>
  <tr>
    <td>travis_ci</td>
    <td>true</td>
    <td>Control the display of the Travis-CI badge.</td>
  </tr>
  <tr>
    <td>repository_lowercase</td>
    <td>false</td>
    <td>
      By default, this plugin expects the name of the repositories on GitHub to
      match the name of the distributions, case included. If you have chosen to
      lowercase the name of the distribution for the repository names, set this
      argument to true.
    </td>
  </tr>
  <tr>
    <td>repositories</td>
    <td>{}</td>
    <td>
      Hash associating a distribution name with a corresponding repository on
      GitHub. This is useful if the repository name does not match the
      distribution name.
    </td>
  </tr>
  <tr>
    <td>template_row</td>
    <td>this.find('tr.template:first')</td>
    <td>
      This plugin uses a hidden tr row as a template to clone and display
      each distribution. Changing this value allows sharing the same template
      across different tables, for example.
    </td>
  </tr>
</table>


Development
-----------

1. Install [Node.JS](https://github.com/joyent/node/wiki/Installing-Node.js-via-package-manager).

2. Install [Grunt](http://gruntjs.com/getting-started).

3. Clone the repository: `git clone git@github.com:guillaumeaubert/jquery-cpan-distributions-list.git`

4. Install the project dependencies: `cd jquery-cpan-distributions-list && npm install`

5. Run Grunt to check the files and rebuild: `grunt`


Copyright & License
-------------------

Copyright 2013 Guillaume Aubert.

This program is free software: you can redistribute it and/or modify it under
the terms of the GNU General Public License version 3 as published by the Free
Software Foundation.

This program is distributed in the hope that it will be useful, but WITHOUT ANY
WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR A
PARTICULAR PURPOSE. See the GNU General Public License for more details.

You should have received a copy of the GNU General Public License along with
this program. If not, see http://www.gnu.org/licenses/

