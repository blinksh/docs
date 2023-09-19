# Tailscale + Mosh

We love Tailscale for its effortless VPN setup and secure remote access via SSH. But SSH has its problems: slow connections cause lag, unstable connections and roaming cause repeated disconnections. These kinds of problems can cause terminal coding on mobile devices to become a nightmare.

That’s where Blink comes in. You can pair Blink with Tailscale and upgrade your connection from SSH to the more stable, more responsive Mosh protocol, letting you code without the delays and hiccups. You can access any machine in your Tailscale network for development, server management, and more, from your mobile devices with optimal performance.

With a Mosh connection on your mobile device, paired with Tailscale, you can connect to any machine in your Tailscale network and stay connected everywhere you go.

But what if you don't have root access to your Tailscale server, or are having trouble navigating the installation process? Don’t worry! Now, Blink can automatically install Mosh for you, no root access necessary.

## Install Tailscale and find your host IP address
### Step 1: Install Tailscale on your local network
Follow the instructions for your platform:
- [Install Tailscale for Linux](https://tailscale.com/kb/1031/install-linux/)
- [Install Tailscale for macOS](https://tailscale.com/kb/1016/install-mac/)

### Step 2: Initialize Tailscale SSH on your local network
On the host of your local network, advertise SSH by running `tailscale up --ssh`. For more information, see [Use Tailscale SSH](https://tailscale.com/kb/1193/tailscale-ssh/#advertise-ssh-on-the-host).
\{ This is a good place for a screenshot of Tailscale and the displayed results of running the command, or maybe even some substeps/screenshots of how to navigate within Tailscale to the place where you would enter this command. \}

### Step 3: Take note of your host IP address
On your host machine, [retrieve the IP or Hostname from the Tailscale app](https://tailscale.com/kb/1033/ip-and-dns-addresses/?q=display%20ip%20address#finding-your-tailscale-ip-address).
-For Linux users, enter the command `tailscale ip --4`. \{ This is a good place for a screenshot of Tailscale and the displayed results of running the command. \}
-For macOS users, open the menu bar for the app and look for the IP listed in the dropdown. \{ This is a good place for a screenshot of Tailscale and the location of the IP address in the dropdown – there is one on the Tailscale website but it might be better in a legal/copyright sense to make your own. \}

### Step 4: Install Tailscale on your mobile devices
Install and sign in to Tailscale on your iPad or iPhone. You can find the Tailscale app in the App Store. Make sure you log in with the same account as on your server, so the two devices can see each other. For more information, see [the Tailscale website](https://tailscale.com/download/ios).
\{ This might be a good place for a screenshot of the login screen of the Tailscale app with some placeholder credentials. \}

## Configure Blink
### Step 1: Mosh to your Tailscale Node
Remember that IP address you got in step 3 of "Install Tailscale and find your host IP address"? Well, now’s the time to use it. (Don’t worry, if you skipped that step, just scroll back up to it.)
Open the Blink app on your device, and run the command `mosh <username>@hostname` where `username` is your Tailscale user name, and `hostname` is your Tailscale host IP address.
Blink will request permission to install mosh-server on your host. \{ Insert text along the lines of “Just type ‘yes’ when prompted, and Blink will handle the details automatically.” This text would change depending on what sort of confirmation is actually needed – tapping a button, typing something, etc. I don’t have the program so I can’t see it myself. \}
\{ This would be a good place for a screenshot of the displayed results of running that command, and maybe some substeps/screenshots of how to navigate within Blink to the place where you would run that command. \}

### Step 2: (Optional) Set up a host within Blink
In order to connect to the remote file system (see Step 3), you will need to set up a host within Blink using the following steps. You can also just set up a host to make creating a Mosh connection easier.
1. Within Blink, go to config > Hosts > Create host. \{ This would be a good place for a screenshot or screenshots showing the menus used to navigate that we just mentioned. \}
2. Create an Alias for the host, such as “Tailscale”. “HostName” should be the IP address you got in step 3 of “Install Tailscale and find your host IP address.” “Port” should be 22. “User” should be your Tailscale user name.
![img](https://docs.blink.sh/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fcreate-access-host-image2.25929bee.png&w=1920&q=75)
3. To enable browsing the remote file system within Blink, scroll down to the “FILES.APP” section and tap “Add Location.”
\{ This would be a good place for another screenshot just like the one from the draft except slightly scrolled down so the “Add Location” button is more visible. \}
4. \{ Describe what happens when you tap “Add Location”, possibly add a screenshot for that. \}

Now in order to open a Mosh connection, all you need to do is type `mosh Tailscale` in the terminal (if you chose a different alias for your host, replace “Tailscale” with the alias you chose).

### Step 3: (Optional) Browse the remote file system
Tailscale also offers File Access. You can browse the remote file system with Blink, which lets you do things like download that report you forgot to bring, or upload an email attachment to your computer.

If you completed Step 2 above (Set up a host within Blink), once you open the Files.app on your device, you should see a Blink icon for the Tailscale node. Tap on it to browse the remote file system.
\{ Screenshot image goes here. \}

If you have a larger file to transfer, however, it’s probably better to use the SFTP command within Blink.
- To download a file from your server to your device, use the command `sftp Tailscale:~/serverfilename ~/mobilefilename` where `Tailscale` is the alias you chose for your Tailscale host, `hostfilename` is the path to the name of the file on your Tailscale server and `mobilefilename` is the path to the name of the file on your device.
\{ This might be a good place for a screenshot of the response from that command, and maybe even a practical example like “For example, in order to download a file from your server (with the alias `Tailscale`) located at `~/Documents/April/form.pdf` to your device and place it in the `~/MonthlyForms` folder and rename it to `myform.pdf` you would use the command `sftp Tailscale:~/Documents/April/form.pdf ~/MonthlyForms/myform.pdf`” \}
- To upload a file from your device to your server, use the command `sftp ~/mobilefilename Tailscale:~/serverfilename` where `Tailscale` is the alias you chose for your Tailscale host, `hostfilename` is the path to the name of the file on your Tailscale server and `mobilefilename` is the path to the name of the file on your device.
\{ This might be a good place for a screenshot of the response from that command, and maybe even a practical example similar to the one above.\}

## Mosh away
Now that you’ve got Tailscale and Blink working together, you’ve got the power of Mosh to access your VPN anywhere and anytime. You could potentially connect from your home wifi, drive to the airport, and take a plane to a different country –and stay connected all the way. No dealing with SSH breaking those connections or waiting seconds to see your typing show up on the screen. It’s almost like having your desktop in the palm of your hand.
