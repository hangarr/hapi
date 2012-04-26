/* automatically generated by JSCoverage - do not edit */
if (typeof _$jscoverage === 'undefined') _$jscoverage = {};
if (! _$jscoverage['monitor/process.js']) {
  _$jscoverage['monitor/process.js'] = [];
  _$jscoverage['monitor/process.js'][4] = 0;
  _$jscoverage['monitor/process.js'][5] = 0;
  _$jscoverage['monitor/process.js'][6] = 0;
  _$jscoverage['monitor/process.js'][7] = 0;
  _$jscoverage['monitor/process.js'][9] = 0;
  _$jscoverage['monitor/process.js'][10] = 0;
  _$jscoverage['monitor/process.js'][11] = 0;
  _$jscoverage['monitor/process.js'][13] = 0;
  _$jscoverage['monitor/process.js'][22] = 0;
  _$jscoverage['monitor/process.js'][23] = 0;
  _$jscoverage['monitor/process.js'][24] = 0;
  _$jscoverage['monitor/process.js'][25] = 0;
  _$jscoverage['monitor/process.js'][26] = 0;
  _$jscoverage['monitor/process.js'][36] = 0;
  _$jscoverage['monitor/process.js'][37] = 0;
  _$jscoverage['monitor/process.js'][38] = 0;
  _$jscoverage['monitor/process.js'][40] = 0;
  _$jscoverage['monitor/process.js'][43] = 0;
}
_$jscoverage['monitor/process.js'][4]++;
var child_process = require("child_process");
_$jscoverage['monitor/process.js'][5]++;
var exec = child_process.exec;
_$jscoverage['monitor/process.js'][6]++;
var os = require("os");
_$jscoverage['monitor/process.js'][7]++;
var Base = require("./base");
_$jscoverage['monitor/process.js'][9]++;
var ProcessMonitor = (function () {
  _$jscoverage['monitor/process.js'][10]++;
  this.builtins = ["uptime", "memoryUsage"];
  _$jscoverage['monitor/process.js'][11]++;
  Base.expose(ProcessMonitor, process, this.builtins);
  _$jscoverage['monitor/process.js'][13]++;
  return this;
});
_$jscoverage['monitor/process.js'][22]++;
ProcessMonitor.prototype.cpu = (function (callback) {
  _$jscoverage['monitor/process.js'][23]++;
  exec("ps -eo pcpu,pid | grep " + process.pid, (function (error, stdout, stderr) {
  _$jscoverage['monitor/process.js'][24]++;
  if (error) {
    _$jscoverage['monitor/process.js'][24]++;
    return callback(error);
  }
  _$jscoverage['monitor/process.js'][25]++;
  var cpuUsage = Number(stdout.split(" ").shift()).toFixed(2);
  _$jscoverage['monitor/process.js'][26]++;
  callback(null, cpuUsage);
}));
});
_$jscoverage['monitor/process.js'][36]++;
ProcessMonitor.prototype.memory = (function (callback) {
  _$jscoverage['monitor/process.js'][37]++;
  var result = process.memoryUsage();
  _$jscoverage['monitor/process.js'][38]++;
  result.total = os.totalmem();
  _$jscoverage['monitor/process.js'][40]++;
  callback(null, result);
});
_$jscoverage['monitor/process.js'][43]++;
module.exports = exports = new ProcessMonitor();
_$jscoverage['monitor/process.js'].source = ["/**"," * Module dependencies."," */","var child_process = require(\"child_process\");","var exec = child_process.exec;","var os = require(\"os\");","var Base = require(\"./base\");","","var ProcessMonitor = function(){","  this.builtins = ['uptime', 'memoryUsage'];","  Base.expose(ProcessMonitor, process, this.builtins);","  ","  return this;","}","","/**"," * Return percentage of CPU core used by THIS process"," *"," * @param {Function} callback function to process result"," * @api public"," */","ProcessMonitor.prototype.cpu = function(callback) {","  exec('ps -eo pcpu,pid | grep ' + process.pid, function (error, stdout, stderr) {","    if (error) return callback(error);","    var cpuUsage = Number(stdout.split(\" \").shift()).toFixed(2);","    callback(null, cpuUsage)","  })","}","","/**"," * Return process memoryUsage with total system memory"," *"," * @param {Function} callback function to process result"," * @api public"," */","ProcessMonitor.prototype.memory = function(callback){","  var result = process.memoryUsage();","  result.total = os.totalmem();","  ","  callback(null, result);","}","","module.exports = exports = new ProcessMonitor();"];