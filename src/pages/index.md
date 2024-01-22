# Quick Start Guide

## Installing Blink Shell

1. Download Blink Shell on the App Store:
[<img src="/appstore-download-bttn.png" style={{maxWidth: "150px"}} />](https://apps.apple.com/us/app/blink-shell-build-code/id1594898306)

2. Start a Free Trial of Blink+Build or buy Blink+, the Shell of choice for developers, depending on your needs.

## Navigating Blink Shell

Welcome! You can now start using Blink. Here is a quick tour:

1. Using Blink Shell is similar to most other terminals - you simply type commands and hit the `RETURN` key.
2. Navigate command history with the `up` and `down` arrow keys.
3. Type `help` to get a quick list of available [commands](basics/commands) and features.

## Gestures

**Touchscreen gestures:**

1. To create a new shell, tap the screen with two fingers ✌️.
2. To switch between active shells, swipe side to side ⬅️👆➡️.
3. To adjust size of current terminal, pinch the screen 👌.
4. To start selection mode, Tap and drag 👆🔘🔼.

   You can drag selections to other apps, or from other apps into Blink. It will be pasted where the cursor is located.

5. To show the Context bar, tap the iOS Home Bar twice or press `CMD ⌘` twice.
![img](./basics/navigation/navigating-blink-shell-contextual-bar.jpg)
      In the bar you can: Create or Close a tab, access Snips, and toggle Lock and Geo.

      Change the Context Bar appearance in the `…` menu.


## Keyboard shortcuts

   If you have a keyboard connected, press and hold `CMD ⌘` key to see available shortcuts.

![img](./basics/navigation/navigating-blink-shell-image3.png)


## SMART KEYS

Smart Keys provide special keys to use in your terminal session. Smart Keys are **only** visible when using the on screen keyboard, and hidden when using an external keyboard.

- Modifiers (i.e. `CTRL` ^, `ALT` ⌥, and `ESC` ⎋) for key combinations like `CTRL`+`C`.
- Arrow keys.
- Function and Alternate Cursor keys like Home, End, Page Down and Page Up when pressing `CMD` ⌘.
- Scrollable area in the center with more keys
- Hold a modifier to chain multiple combinations, useful in applications like Emacs where you use chains like `C-x`, `C-c`.
<img src="/gifs/navigating-blink-shell-image4.gif" style={{maxWidth: "100%"}} />

## Configuration

To access the Settings menu type `config` in the shell or press `CMD ⌘` and `,` together:

- Hosts: create hosts that can be accessed with only the hostname. [Read more.](basics/hosts)
- Keys: Create SSH key pairs for a more secure, password-less access to your servers. [Read more.](basics/ssh-keys)
- Appearance: Style your terminal with [themes](basics/customize#themes) and [fonts](basics/customize#fonts).
- Keyboard: add shortcuts, modifier keys and custom key presses. [Read more.](basics/customize#keyboard)
- Get in contact with us through the Support or Feedback options.

![img](./basics/navigation/navigating-blink-shell-image5.png)

## Connecting to a Server or Computer using Blink

### Mosh

1. Make sure you have mosh installed in your desired destination.
2. In Blink type `mosh [user@]hostname`. For example : `mosh irwin@irwinvb`.
![img](./basics/navigation/quickstart-blink-shell-mosh.jpeg)

   Or use the IP Address. For example: `mosh irwin@100.10.222.33`.

   [Read more about Mosh.](advanced/advanced-mosh)

### SSH
1. Make sure you have ssh set up on your desired destination.
2. In Blink type `ssh [user@]hostname`. For example : `ssh irwin@irwinvb`.
![img](./basics/navigation/quickstart-blink-shell-ssh.jpeg)

   Or use the IP Address. For example: `ssh irwin@100.10.222.33`.

3. Follow Blink instructions for password, accepting the remote host key, etc.

   [Read more about SSH.](advanced/advanced-ssh)

## Support and Community

We sincerely appreciate your support and use of Blink. You can contact us via [email](mailto:hello@blink.sh) but ideally it is best to file issues on our [GitHub Discussions](https://github.com/blinksh/blink/discussions) so that all of the community is aware of the issue. Not only does it help make Blink better but another user may help you solve your issue.

**VERY IMPORTANT: Reporting a problem in your review in the App Store will not help us solve issues that you might be experiencing. Please make sure to contact us too!**

When a crash occurs in the application we receive a crash report. When this happens, please [email](mailto:hello@blink.sh) us or open a [GitHub Issue](https://github.com/blinksh/blink/issues).

Do you have an idea for a feature? Join our community on [GitHub Discussions](https://github.com/blinksh/blink/discussions) to send us your suggestions!
