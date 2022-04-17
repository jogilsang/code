
// 159_logger

// tsFormat() : 로그에 타임스탬프
const winston = require('winston');
const winstonDaily = require('winston-daily-rotate-file');
const moment = require('moment');

function tsFormat() {
    return moment().format('YYYY-MM-DD HH:mm:ss.SSS ZZ');
}

const logger = new (winston.Logger) ({
    transports: [
            new (winston.transports.Console) ({
                timestamp:tsFormat,
                colorize:true,
                showlevel:true,
                level:'debug',
            }),
            new (winstonDaily)({
                level:'info',
                filename :'Log/logs',
                timestamp : tsFormat,
                datePattern: '_yyyyy-MM-dd.log',
                showlevel : true,
                maxsize:1000000,
                maxFiles : 5,
            }),
    ],
    exceptionHandlers: [
        new (winstonDaily)({
            level : 'info',
            filename : 'Log/exception',
            timestamp : tsFormat,
            datePattern : '_yyyy-MM-dd.log',
            showlevel:true,
            maxsize : 1000000,
            maxFiles : 5,
        }),
        new (winston.transports.Console)({
            timestamp : tsFormat,
            colorize : true,
            showlevel : true,
            level : 'debug',
        }),
    ],
});

logger.info('info logging');
logger.error('error logging');