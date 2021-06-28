---
id: faq
sidebar_position: 2
sidebar_label: FAQ
slug: /faq
---

# Frequently Asked Questions

## General Questions

### How to apply for a student license?
Just send us an e-mail from your university account to [hello@blink.sh](mailto:hello@blink.sh).

### Does Blink Shell work on all Apple devices?
We support iPhone and iPad, and the newest Mac's with M1 chip.

### Does Blink have a TestFlight version?
Yes, it has! We call it Community Edition, and you can sign up here: [https://community.blink.sh](https://community.blink.sh)

### How to file a bug report?
Fill an issue on our [GitHub](https://github.com/blinksh/blink/issues)

## Known Issues

### Cmd key stuck while switching between apps with Cmd Tab

After switching apps with the `Cmd-Tab` shortcut, when you return to the same app, the `Cmd` key is still pressed and the shortcuts help window shown. You can then press `w`, `t`, etc without having the `Cmd` key pressed.

> This is a known issue within iOS 13, and to get Apple to solve it we need your help. Please create a bug report within [Feedback Assistant](https://feedbackassistant.apple.com). We suggest that you use a similar title to ours: "Cmd key stuck while switching between apps with Cmd-Tab".

Here are two recordings that show the issue: `Cmd-tab` in [Pages.app](https://youtu.be/x0foV_ONDmk) & `Cmd-tab` in [Safari](https://youtu.be/-7LayQvtmPQ).

### Spacebar suddenly didn’t work?

Go to iOS Settings -> Accessibility -> Full Keyboard Access -> Commands -> Activate and change `Space` to `shift + space` or other shortcut.

That way you will have full keyboard access and spacebar working in Blink

### Can't find mosh?

> mosh-server: command not found  
> Did not find remote IP address 

This issue appears mostly when Blink cannot find mosh-server on the device, meaning that the location is not one of the defaults in the path. To fix that do `which mosh-server` to get its current location. Then configure that location in Blink: `Settings` > `Hosts` > `Mosh` > `Command`.

You can also test it from the command line by providing it to the `mosh --server=<path> <host>` command.

<div id="fyfk-widget"></div>
