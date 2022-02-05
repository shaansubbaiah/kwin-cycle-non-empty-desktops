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
    }

    return arr;
}


function switchDesktop(position) {
    let desktops = generateDesktopArray();
    let n = desktops.length;
    let cur = workspace.currentDesktop - 1;

    if (position == 'next') {
        // we cycle from cur+1 clockwise to cur-1
        for (let i = 1; i < n; i++) {
            let j = (cur + i) % n;

            if (desktops[j] != 0) {
                workspace.currentDesktop = (j + 1);
                return;
            }
        }
    }
    else if (position == 'prev') {
        // we cycle from cur-1 anticlockwise to cur+1
        for (let i = 1; i < n; i++) {
            let j = (cur - i) % n;
            if (j < 0) j += n;

            if (desktops[j] != 0) {
                workspace.currentDesktop = (j + 1);
                return;
            }
        }
    }

    return;
}


registerShortcut('SwitchToNextNonEmptyDesktop', 'Switch to the Next Non-Empty Desktop', 'Meta+Shift+S', function () { switchDesktop('next'); });
registerShortcut('SwitchToPreviousNonEmptyDesktop', 'Switch to the Previous Non-Empty Desktop', 'Meta+Shift+W', function () { switchDesktop('prev'); });
