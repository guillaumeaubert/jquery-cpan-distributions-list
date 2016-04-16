CPAN Distributions List Changelog
=================================

Version 1.0.3 - 2016-04-16
--------------------------

 * Relicensed under the MIT license.


Version 1.0.2 - 2016-02-14
--------------------------

 * Switch MetaCPAN queries to use https.


Version 1.0.1 - 2015-04-20
--------------------------

 * Added count of CPAN distributions found for display in the document.

Version 1.0.0 - 2015-01-24
--------------------------

 * Changed to use SVG badges for Coveralls.io and Travis-CI (GH-3).
 * Added support for pagination of queries to retrieve information from
   GitHub's API (GH-1).
 * Changed to use console.log() for non-fatal errors instead of alert().
 * Added 'metacpan-distname' to allow displaying a link to the MetaCPAN page
   with the name of the distribution.
 * Added CPAN Testers numbers to the data available for display.

Version 0.2.0 - 2013-07-08
--------------------------

 * Added count of open GitHub issues to the display for each distribution.
 * Removed existing rows in container before generating new ones, in case the
   function is called twice on the same container.
 * Cleaned up namespace.
 * Added documentation.

Version 0.1.0 - 2013-06-23
--------------------------

 * Initial release.
