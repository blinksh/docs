import { Callout } from 'nextra-theme-blinkshell'

# Files.app integration

iOS 13 introduced File Provider APIs. This allowed apps to be shown as providers inside the Files.app, and offer their files to the rest of the system and applications. Blink can now be a File Provider, and with just the flip of a switch, you can securely attach files from a remote server to an email, or browse and quickview files just as if they were on your device.

This is a very powerful companion to our [SFTP command](advanced/unix-roundup#remote-transfer-tools). While the Files.app integration focuses on working with the rest of the system, the SFTP command is better suited for bulk operations, like large uploads and downloads of full directory structures, offer better performance plus more visibility and control of the progress.

## Enable Files.app access to your host

Start by adding one or more locations inside your [Host configuration](basics/hosts#filesapp).

<Callout type="warning" emoji="⚠️">
**WARNING:** As Files.app sessions are non-interactive, make sure you can login using SSH Keys or without interactive prompts. 
</Callout>

Finally, move to the Files.app, and just flip the switch on the new provider.

## Troubleshooting
- Make sure the Host has all the information necessary to authenticate and connect, like passwords. Try to ssh to the host first, or to use the console sftp in case of issues. 
- While ProxyJump is supported, complex ProxyCommand options are not.
- A log is automatically kept on `.blink/fileprovider.log`. If you need more information, set the LogLevel on the [SSH Config for the Host](basics/hosts#ssh-config).
- In case of **SFTP Subsystem errors**, please check that the server has SFTP enabled at /etc/ssh/sshd_config.
