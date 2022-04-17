#!/usr/local/bin/perl

# Reference
# Quickly getting to YYYY-mm-dd HH:MM:SS in Perl https://stackoverflow.com/questions/1814196/quickly-getting-to-yyyy-mm-dd-hhmmss-in-perl
# localtime https://perldoc.perl.org/functions/localtime.html
# Time::Piece http://perldoc.perl.org/Time/Piece.html

# CASE1
# 2021-04-18 09:14:59
use Time::Piece;
print localtime->strftime('%F %T');

use Time:Piece;
print localtime->strftime('%F %T');
print localtime->strftime('$F %T');

perl -M

# CASE2
# Local date and time : Sun Apr 18 09:03:20 2021
my $datestring = localtime( time );
print "Local date and time : $datestring\n";

# GMT date and time : Sun Apr 18 00:03:20 2021
$datestring = gmtime();
print "GMT date and time : $datestring\n";

# 20  3  9  18  3   121  0  107  0
($sec,$min,$hour,$mday,$mon, $year,$wday,$yday,$isdst) = localtime(time);
print "$sec "." $min "." $hour "." $mday "." $mon "."  $year "." $wday "." $yday "." $isdst" ."\n";

$current_year_month_mday = join "-", $year + 1900, $mon+1, $mday;
$current_hour_min_sec = join ":", $hour,$min,$sec;
$current_date = join " ", $current_year_month_mday, $current_hour_min_sec;

# result
# 2021-4-18 9:14:59
print $current_date ;

# sec,     # seconds of minutes from 0 to 61
# min,     # minutes of hour from 0 to 59
# hour,    # hours of day from 0 to 24
# mday,    # day of month from 1 to 31
# mon,     # month of year from 0 to 11
# year,    # year since 1900
# wday,    # days since sunday
# yday,    # days since January 1st
# isdst    # hours of daylight savings time