// START EDITOR USING 'plasma-interactiveconsole --kwin'
// VIEW LOGS USING 'ksystemlog'

print('------ kwin scripting ------')
print('desktops:', workspace.desktops) // num of desktops
print('current: ', workspace.currentDesktop) // current desktop


function generateDesktopArray() {
    // arr[i] stores number of applications in desktop i+1
    let arr = new Array(workspace.desktops);
    for (let i = 0; i < workspace.desktops; ++i) arr[i] = 0;

    clients = workspace.clientList();
    for (let i = 0; i < clients.length; i++) {
        // Client is on all desktops if value = -1
        if (clients[i].desktop != -1) {
            arr[clients[i].desktop - 1] += 1;
        }
        // print(apps[i].caption, apps[i].desktop);
    }

    return arr;
}


function switchDesktop(position) {
    let desktops = generateDesktopArray();
    let n = desktops.length;
    let cur = workspace.currentDesktop - 1;

    if (position == 'next') {
        print('from ', cur, ' to next non empty')
        // we cycle from cur+1 clockwise to cur-1
        for (let i = 1; i < n; i++) {
            j = (cur + i) % n;
            print('i=', i, ' j=', j);

            if (desktops[j] != 0) {
                print('desktop ', j, ' busy')
                workspace.currentDesktop = (j + 1);
                return
            }
            print('desktop ', j, ' empty')
        }
    }
    else if (position == 'prev') {
        print('from ', cur, ' to prev non empty')
        // we cycle from cur-1 anticlockwise to cur+1
        for (let i = 1; i < n; i++) {
            j = (cur - i) % n;
            if (j < 0) j += n;
            print('i=', i, ' j=', j);
            if (desktops[j] != 0) {
                print('desktop ', j, '  busy')
                workspace.currentDesktop = (j + 1);
                return
            }
            else print('desktop ', j, ' empty')
        }
    }

    return;
}


registerShortcut('SwitchToNextNonEmptyDesktop', 'Switch to the Next Non-Empty Desktop', 'Meta+Shift+S', function () { switchDesktop('next'); });
registerShortcut('SwitchToPreviousNonEmptyDesktop', 'Switch to the Previous Non-Empty Desktop', 'Meta+Shift+W', function () { switchDesktop('prev'); });
