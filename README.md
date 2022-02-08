# kwin-cycle-non-empty-desktops
KWin Script to switch to the next or previous non empty virtual desktop.

## Installation

### Method 1: From the KDE Store

Go to `System Settings` -> `Window Management` -> `KWin Scripts` -> `Get New Scripts`

Search for 'KWin Cycle Non Empty Desktops'

Click the Install button

**NOTE:** The direct store URL is https://store.kde.org/p/1700772


### Method 2: From kwinscript file

Visit the [releases section](https://github.com/shaansubbaiah/kwin-cycle-non-empty-desktops/releases/) and download the _.kwinscript_ file.

After that, you will be able to select this file in `System Settings` -> `Window Management` -> `KWin Scripts` -> `Install from File`.

### Method 3: From source

To install, run:
```
git clone https://github.com/shaansubbaiah/kwin-cycle-non-empty-desktops
kpackagetool5 --type=KWin/Script -i kwin-cycle-non-empty-desktops
```
---

To update, run:

```
git clone https://github.com/shaansubbaiah/kwin-cycle-non-empty-desktops &&  kpackagetool5 --type=KWin/Script -u kwin-cycle-non-empty-desktops
```
**Note:** You will need to disable then enable script from `System Settings` -> `Window Management` -> `KWin Scripts` for changes to take effect. You may also need to log out and back into the Plasma session for changes to take effect.

---
To uninstall, run:

```
kpackagetool5 --type=KWin/Script -r kwin-cycle-non-empty-desktops
```

After installing the script, it must be also enabled in the System Settings.

## Configuration

The default shortcuts are:

<kbd>Meta</kbd>+<kbd>Shift</kbd>+<kbd>S</kbd> - To Switch to the Next Non-Empty Desktop

<kbd>Meta</kbd>+<kbd>Shift</kbd>+<kbd>W</kbd> - To Switch to the Previous Non-Empty Desktop

Change them by going to `System Settings` -> `Shortcuts` -> Search for "Next Non-Empty Desktop" or "Previous Non-Empty Desktop"

## Development

Open the Plasma Desktop Scripting Console using: 
```
plasma-interactiveconsole --kwin
```

View output/logs using `ksystemlog` and filter for _kwin_x11_

Package _.kwinscript_ using:
```
zip -r kwin-cycle-non-empty-desktops.kwinscript contents/ LICENSE metadata.desktop
```

Plasma KWin Scripting Docs - https://develop.kde.org/docs/extend/plasma/kwin/

README adapted from [wsdfhjxc/kwin-scripts](https://github.com/wsdfhjxc/kwin-scripts) and [darkstego/Mudeer](https://github.com/darkstego/Mudeer)
