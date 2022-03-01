const getCurrentDateFormat = () => {
    let date = new Date();
    return {color: "\x1b[36m%s\x1b[0m", date:`${date.getFullYear()}-${date.getMonth() < 10? "0" + (date.getMonth()+1): (date.getMonth()+1)}-${date.getDate() < 10? "0" + date.getDate():date.getDate()} ${date.getHours() < 10?"0" + date.getHours():date.getHours()}:${date.getMinutes() < 10? "0" + date.getMinutes():date.getMinutes()}:${date.getSeconds() < 10? "0" + date.getSeconds(): date.getSeconds()}.${date.getMilliseconds()}`}
};


function _getCallerFile() {
    var filename;

    var _pst = Error.prepareStackTrace
    Error.prepareStackTrace = function (err, stack) { return stack; };
    try {
        var err = new Error();
        var callerfile;
        var currentfile;

        currentfile = err.stack.shift().getFileName();

        while (err.stack.length) {
            callerfile = err.stack.shift().getFileName();

            if(currentfile !== callerfile) {
                filename = callerfile;
                break;
            }
        }
    } catch (err) {}
    Error.prepareStackTrace = _pst;
    
    let string = "";
    for(var i=filename.length-1; i>0; i--){
        if (filename[i] === "\\")
            break;

        string += filename[i];
    }

    return string.split("").reverse().join("");
}

var error = (...text) => {
    let date = getCurrentDateFormat()
    console.log(date.color, date.date,"\x1b[35m",process.pid,"\x1b[34m", _getCallerFile(), "\x1b[31mERROR\x1b[0m",...text);
};

var info = (...text) => {
    let date = getCurrentDateFormat();
    console.log(date.color, date.date,"\x1b[35m",process.pid,"\x1b[34m", _getCallerFile(),"\x1b[32mINFO\x1b[0m", ...text);
};

var warning = (...text) => {
    let date = getCurrentDateFormat();
    console.log(date.color, date.date,"\x1b[35m",process.pid,"\x1b[34m", _getCallerFile(),"\x1b[33mWARNING\x1b[0m", ...text);
};




exports.info = info;
exports.error = error;
exports.warning = warning; 