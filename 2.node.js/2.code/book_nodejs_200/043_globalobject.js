
// 043 - Global Object

// process : 현재 동작 중인 프로세스의 정보
// console : 콘솔출력
// buffer : 이진 데이터를 다루는 버퍼 클래스
// require() : 모듈 로딩
// __filename, __dirname : 언더스코어(_) 2개, 현재 폴더 경로와 파일 경로
// module, exports : 로딩된 모듈 정보와 모듈로 타입, 객체 노출시키기
// Timeout : 타이머, 반복함수

// Reference : https://nodejs.org/api/globals.html

console.log(process.env);
console.log('------------------------');
console.log(process.arch);
console.log('------------------------');
console.log(process.uptime());
console.log('------------------------');
console.log(process.memoryUsage());
console.log('------------------------');
console.log(process.version);
console.log('------------------------');
console.log(process.versions);

// JSON
// %j
console.log('JSON: %j', {name : 'node.js'});


// { ALLUSERSPROFILE: 'C:\\ProgramData',
//   APPDATA: 'C:\\Users\\cho_gilsang\\AppData\\Roaming',
//   CommonProgramFiles: 'C:\\Program Files\\Common Files',
//   'CommonProgramFiles(x86)': 'C:\\Program Files (x86)\\Common Files',
//   CommonProgramW6432: 'C:\\Program Files\\Common Files',
//   COMPUTERNAME: 'CGS9874N1224',
//   ComSpec: 'C:\\windows\\system32\\cmd.exe',
//   DriverData: 'C:\\Windows\\System32\\Drivers\\DriverData',
//   FPS_BROWSER_APP_PROFILE_STRING: 'Internet Explorer',
//   FPS_BROWSER_USER_PROFILE_STRING: 'Default',
//   HOMEDRIVE: 'C:',
//   HOMEPATH: '\\Users\\cho_gilsang',
//   JAVA_HOME: 'D:\\program\\java\\jdk1.8.0_241;D:\\program\\jdk\\bin;',
//   JAVA_TOOL_OPTIONS: '-Djava.net.preferIPv4Stack=true',
//   LOCALAPPDATA: 'C:\\Users\\cho_gilsang\\AppData\\Local',
//   LOGONSERVER: '\\\\KRHOMEDC03',
//   NUMBER_OF_PROCESSORS: '8',
//   NVM_HOME: 'D:\\program\\nvm',
//   NVM_SYMLINK: 'D:\\program\\nodejs',
//   OneDrive: 'C:\\Users\\cho_gilsang\\OneDrive',
//   OS: 'Windows_NT',
//   Path: 'C:\\windows\\Softcamp\\SDK;C:\\windows\\Softcamp\\SDS\\x64;C:\\windows\\Softcamp\\SDS;C:\\Program Files (x86)\\Common Files\\Oracle\\Java\\javapath;C:\\Program Files (x86)\\Intel\\iCLS Client\\;C:\\Program Files\\Intel\\iCLS Client\\;C:\\windows\\system32;C:\\windows;C:\\windows\\System32\\Wbem;C:\\windows\\System32\\WindowsPowerShell\\v1.0\\;C:\\windows\\System32\\OpenSSH\\;C:\\Program Files (x86)\\Intel\\Intel(R) Management Engine Components\\DAL;C:\\Program Files\\Intel\\Intel(R) Management Engine Components\\DAL;C:\\Program Files (x86)\\Intel\\Intel(R) Management Engine Components\\IPT;C:\\Program Files\\Intel\\Intel(R) Management Engine Components\\IPT;C:\\Program Files\\Intel\\WiFi\\bin\\;C:\\Program Files\\Common Files\\Intel\\WirelessCommon\\;C:\\windows\\SoftCamp\\PISECU;D:\\조길상\\0000. 바로가기\\0000. 파일및폴더 바로가기;C:\\Progam Files (x86)\\Microsoft SQL Server\\Client SDK\\ODBC\\130\\Tools\\Binn\\;C:\\Program Files (x86)\\Microsoft SQL Server\\140\\Tools\\Binn\\;C:\\Program Files (x86)\\Microsoft SQL Server\\140\\DTS\\Binn\\;C:\\Program Files (x86)\\Microsoft SQL Server\\140\\Tools\\Binn\\ManagementStudio\\;D:\\mssql;D:\\program\\nvm;D:\\program\\nodejs;D:\\program\\putty\\;C:\\Program Files\\TortoiseSVN\\bin;C:\\windows\\SoftCamp\\Common;C:\\windows\\SoftCamp\\Common\\x64;C:\\windows\\SoftCamp\\SDK\\x64;C:\\windows\\SoftCamp\\VSD;C:\\windows\\SoftCamp\\VSD\\x64;D:\\program\\Git\\cmd;D:\\조 길상\\0000. 바로가기\\0000. 사이트 바로가기;D:\\downloads\\ngrok-stable-windows-amd64;C:\\Users\\cho_gilsang\\AppData\\Local\\Programs\\Python\\Python39\\Scripts\\;C:\\Users\\cho_gilsang\\AppData\\Local\\Programs\\Python\\Python39\\;C:\\Users\\cho_gilsang\\AppData\\Local\\Microsoft\\WindowsApps;D:\\program\\Microsoft VS Code\\bin',
//   PATHEXT: '.COM;.EXE;.BAT;.CMD;.VBS;.VBE;.JS;.JSE;.WSF;.WSH;.MSC',
//   PROCESSOR_ARCHITECTURE: 'AMD64',
//   PROCESSOR_IDENTIFIER: 'Intel64 Family 6 Model 142 Stepping 10, GenuineIntel',
//   PROCESSOR_LEVEL: '6',
//   PROCESSOR_REVISION: '8e0a',
//   ProgramData: 'C:\\ProgramData',
//   ProgramFiles: 'C:\\Program Files',
//   'ProgramFiles(x86)': 'C:\\Program Files (x86)',
//   ProgramW6432: 'C:\\Program Files',
//   PROMPT: '$P$G',
//   PSModulePath: '%ProgramFiles%\\WindowsPowerShell\\Modules;C:\\windows\\system32\\WindowsPowerShell\\v1.0\\Modules;C:\\Program Files (x86)\\Microsoft SQL Server\\140\\Tools\\PowerShell\\Modules\\',
//   PUBLIC: 'C:\\Users\\Public',
//   SAP_CODEPAGE: '8500',
//   SESSIONNAME: 'Console',
//   SystemDrive: 'C:',
//   SystemRoot: 'C:\\windows',
//   TEMP: 'C:\\Users\\CHO_GI~1\\AppData\\Local\\Temp',
//   TMP: 'C:\\Users\\CHO_GI~1\\AppData\\Local\\Temp',
//   USERDNSDOMAIN: 'HOME.E-KMALL.COM',
//   USERDOMAIN: 'HOME',
//   USERDOMAIN_ROAMINGPROFILE: 'HOME',
//   USERNAME: 'CHO_GILSANG',
//   USERPROFILE: 'C:\\Users\\cho_gilsang',
//   windir: 'C:\\windows' }
// ------------------------
// x64
// ------------------------
// 0.575
// ------------------------
// { rss: 21544960, heapTotal: 7409232, heapUsed: 3940528 }
// ------------------------
// v4.2.4
// ------------------------
// { http_parser: '2.5.0',
//   node: '4.2.4',
//   v8: '4.5.103.35',
//   uv: '1.7.5',
//   zlib: '1.2.8',
//   ares: '1.10.1-DEV',
//   icu: '56.1',
//   modules: '46',
//   openssl: '1.0.2e' }
// JSON: {"name":"node.js"}