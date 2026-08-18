function generateDesktopArray() {
    // arr[i] stores number of applications in desktop i+1
    const arr = {};
    workspace.desktops.forEach(x => arr[x.id] = 0);
    arr.length = workspace.desktops.length;
    windows = workspace.windowList();

    for (const w of windows.filter(x => !x.onAllDesktops)) {
        // Client is on all desktops if value = -1
        w.desktops.forEach(x => {
           arr[x.id] += 1;
        });
    }

    return arr;
}

function getDesktop(position) {
    return workspace.desktops[position];
}

function switchDesktop(position) {
    let desktops = generateDesktopArray();
    let n = desktops.length;
    let cur = workspace.desktops.findIndex(x => x.id == workspace.currentDesktop.id);

    if (position == 'next') {
        // we cycle from cur+1 clockwise to cur-1
        for (let i = 1; i < n; i++) {
            const j = (cur + i) % n;
            const desk = getDesktop(j);
            if (desktops[desk.id] != 0) {
                workspace.currentDesktop = desk;
                return;
            }
        }
    }
    else if (position == 'prev') {
        // we cycle from cur-1 anticlockwise to cur+1
        for (let i = 1; i < n; i++) {
            let j = (cur - i) % n;
            if (j < 0) j += n;
            const desk = getDesktop(j)

            if (desktops[desk.id] != 0) {
                workspace.currentDesktop = desk;
                return;
            }
        }
    }

    return;
}


registerShortcut('SwitchToNextNonEmptyDesktop', 'Switch to the Next Non-Empty Desktop', 'Meta+Shift+S', function () { switchDesktop('next'); });
registerShortcut('SwitchToPreviousNonEmptyDesktop', 'Switch to the Previous Non-Empty Desktop', 'Meta+Shift+W', function () { switchDesktop('prev'); });
