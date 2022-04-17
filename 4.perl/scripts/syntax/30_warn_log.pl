
# http://www.perl.or.kr/tipsinaction/control_flow/warn2log

BEGIN {
	$SIG{'__WARN__'} = sub {
		my($sec,$min,$hour,$mday,$mon,$year,$wday) = localtime();

        # TODO : 로그파일경로 지정
        # DEV
		my $path = "D:\/project\/svn\/test\/hooks\/log\/";
        # PRD
        # my $path = "E:\/Subversion\/Project\/hooks\/log\/";
        my $logfile = $path."svn.$wday.log";

		if( (-M $logfile) > 3 ) {
			# 하루에 한개의 파일이므로 오래된것은 지운다.
			unlink($logfile);
		}

		if(open(LOG,">>$logfile")) {
			# 날짜, process id와 함께 기록한다.
			print LOG "$$ : ", scalar(localtime()), " ", @_;
			close LOG;
		}
		warn @_; # 필요없다면 빼줍니다.
		# 재귀적으로 핸들러를 호출하지 않으므로 걱정마세요.
	};
}