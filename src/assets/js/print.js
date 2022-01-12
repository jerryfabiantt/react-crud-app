export const print = (orderDatas) => {
    var divContents = document.getElementById("printSession").innerHTML;
            var popup = window.open('', '', 'height=500, width=500');
            popup.document.write('<html>');
            popup.document.write('<body >');
            popup.document.write(divContents);
            popup.document.write('</body></html>');
            var options = {
                autoprint: true,
                headerFooterEnabled: true
            };
            popup.print(options);
            // webContents.print({silent: false, printBackground: false, deviceName: ''})
            // let win = new BrowserWindow(params);

            // win.webContents.print({silent: true});
                        
            // var objShell = new ActiveXObject("shell.application");
            // console.log(objShell)
            // objShell.ShellExecute("cmd.exe", 'RunDLL32.EXE printui.dll,PrintUIEntry /y /n "Printer name"', "C:\\WINDOWS\\system32", "open", 1);
}

// win.print(options);