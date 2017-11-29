angular.module("app.services")
    .service('loggerService', [function () {

    toastr.options.timeOut = 3500; 
    toastr.options.positionClass = 'toast-bottom-right';

    function log(message, obj) {
        var console = window.console;
        if (obj) {
            if (console && console.log && console.log.apply && console.group) {
                console.group(message);
                console.log(obj);
                console.groupEnd();
            }
        } else {
            !!console && console.log(message);
        }
    }

    return {
        info:  function (message) {
            toastr.info(message);
            log('Info: ${message}');
        },
        success:  function sccess(message) {
            toastr.success(message);
            log('Success: ${message}');
        },
        warning:  function (message) {
            toastr.warning(message);
            log('Warning: ${message}');
        },
        error:  function (message, data) {
     
            if (!data) {
                toastr.error(message);
                log(message);
                return;
            }
            else if (data.modelState) {
                var errorList = '<ul>';
                for (var key in data.modelState) {
                    if (data.modelState.hasOwnProperty(key)) {
                        errorList += '<li>${data.modelState[key][0]}</li>';
                    }
                }
                errorList += '</ul>';
                toastr.error(errorList, message);
            }
            else if (data.error_description) {
                toastr.error(data.error_description, message);
                log(data.error_description, message);
            }
            else if (data.message) {
                toastr.error(data.message, message);
                log(data.message, message);
            }
            else {
                toastr.error(message);
                log(data);
            }
        },
        debug:  function (message, obj) {
        if (settings.debugEnabled)
            log('Debug: ${message}', JSON.stringify(obj));
        },
        dump:  function (arr, level) {
            var dumpedText = '';
            if (!level)
                level = 0;

            //The padding given at the beginning of the line.
            var levelPadding = '';
            for (var j = 0; j < level + 1; j++)
                levelPadding += '    ';
            if (typeof (arr) == 'object') { //Array/Hashes/Objects
                for (var item in arr) {
                    if (arr.hasOwnProperty(item)) {
                        var value = arr[item];
                        if (typeof (value) == 'object') { //If it is an array,
                            dumpedText += levelPadding + '\'' + item + '\' ...\n';
                            dumpedText += dump(value, level + 1);
                        } else {
                            dumpedText += levelPadding + '\'' + item + '\' => "' + value + '"\n';
                        }
                    }
                }
            }
            else { //Stings/Chars/Numbers etc.
                dumpedText = '===>${arr}<===(${typeof (arr)})';
            }
            return dumpedText;
        }
    }
}]);