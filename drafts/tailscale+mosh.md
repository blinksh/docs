# Tailscale + Mosh

## Intro
Tailscale presentation, effortless VPNs. 

Why pairing Blink with Tailscale? Connecting your mobile devices (iPhone or iPad) to your Tailscale network, will leverage Blink’s mosh connections to the rest of the machines in the network, so you can easily do development from your computer, manage your servers or check on other services, from your mobile devices with optimal performance. (Need to make this sound cooler).

Blink can automatically upgrade the connection to mosh instead of ssh (this is a big deal and the whole point of the article). With a mosh connection on your mobile device, paired with Tailscale, you can connect to any machine in your Tailscale network and stay connected everywhere you go.

## Installing Tailscale
### Step 1: Installing Tailscale in your computers
Follow instructions for your platform
-Link to linux- https://tailscale.com/kb/1031/install-linux/
-Link to macOS- https://tailscale.com/kb/1016/install-mac/

To initialize Tailscale SSH in the hosts, run:
`tailscale up —ssh`
More information: Advertise SSH on the host

### Step 2: Installing Tailscale in your devices
The last step is to install and sign in to Tailscale on your iPad. You can find Tailscale in the App Store. Make sure you log in with the same account as on your server, so the two devices can see each other.
-download Tailscale button-

## Mosh to your Tailscale Node
Copy the IP or the Hostname from the Tailscale app
To connect, do: 
`mosh <username>@hostname`

You can also create a host following the instructions in the next step and then connect doing:
`mosh host`

Blink will request permission to handle the installation of mosh-server automatically as the user wherever you connect to. This makes it easier to setup things wherever you connect to. (Again, this is a big deal)

## File Access
Tailscale also offers File Access. You can browse the remote file system with Blink, which is useful for <example: access documents from other machines, attaching documents from other machines to email, feel free to come up with other interesting use cases>. 

To connect to the remote file system using Blink, first we need to setup a host:
- Going to config > Hosts > Create host.
- Introduce an Alias for the host. under hostname, use the Tailscale provided IP. Enter the user name.
- To enable Files.app access, go down to the Files.app and just tap on Add Location.

(Image similar to...)
![img](https://docs.blink.sh/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fcreate-access-host-image2.25929bee.png&w=1920&q=75)

Opening the Files.app on your mobile device, you should now see a Blink icon for your Tailscale node. Tapping on it, you can browse the remote file system.
(Image TBD)

For more performant operations, like downloading big files or big directories, Blink can use the sftp command to transfer files from the remote to your device and vice versa. Ie:
`sftp <host>:~/Documents/big_file.pdf ~/`

---
Examples of similar articles to base this one:
https://tailscale.com/kb/1166/vscode-ipad/
