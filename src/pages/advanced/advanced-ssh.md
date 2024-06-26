---
id: advanced-ssh
sidebar_position: 1
sidebar_label: SSH
slug: /advanced/advanced-ssh
---

# Advanced SSH: Tunnels, Jump Hosts and Agents

## Introduction

All system administrators know that SSH is arguably the most useful and powerful remote administration tool available for UNIX/Linux systems. SSH brings a remote system's command-line interface to our local machine unlocking the real source of the magic behind NIX systems - the shell.

Bash, ZSH, fish and other shells allow us to run powerful command-line utilities that alone provide more capability than our average commercial GUI desktop program. Combining all of this with pipes and filters, these gems knit together an unrivalled system that empowers us all.

And yet, you can spend years in the shell and not know about some of its most unique and useful features. Let us dig into some of the more obscure, but useful, features of SSH.

## Persistent SSH Connections with Blink

Phones and tablets are tuned for extended battery life, but the power saving technology in iOS works against long-running SSH connections. Fortunately, Blink ships with a security feature that has the secondary effect of keeping your connections running longer. The `geo track` command available on Blink Shell will enable the location tracking feature in iOS to ensure Blink can maintain active SSH connections. If run as `geo lock`, additionally the location of your device will be "locked" and in case your device is moved, all your connections will be dropped. Rest assured, we don't use or store any of the location data from your device. 

## SSH Agent and Agent Forwarding

Installing private keys on untrusted hosts is a security risk, but some users still need to perform operations, like cloning GitHub repositories, without giving them their credentials. An Agent is a program that tracks the user's private keys, offering them for authentication across different sessions or authorizing remote hosts on its behalf. The typical `ssh-agent` helps use the keys to log into other servers without repeatedly typing passphrases. The Secure Enclave handles Blink's key encryption so we will be focusing on its use on remote hosts through Agent Forwarding. This way, instead of installing a GitHub key on the remote, the agent can authenticate on your behalf without exposing keys.

Blink's agent is integrated into the system, so it does not require running a separate application. You can configure the default agent in Settings > Default Agent.

At the CLI, you can load specific keys at any time by specifying the filename with `ssh-add KEY_NAME`. To see which keys the agent holds, run `ssh-add -l`. To remove a key, use the `-d` flag. Note you can add keys at any time before or after you have forwarded the agent. Since Blink 17.3.0, the agent will always hold your keys even between app sessions.

To enable SSH agent forwarding, connect with `ssh -A` option, or set `ForwardAgent` to `YES` on your [SSH Config](/basics/hosts#ssh-config). This securely makes the keys available to the remote machine. Don't worry - the SSH keys are not copied or exported to the remote server in any way, the agent only accepts signature petitions, and it will only remain open for the duration of that specific SSH connection.

Even though SSH agent forwarding has numerous safeguards in place, an application running on the remote server can still use your key for unintended or possibly malicious purposes. To help mitigate this risk, Blink by default will prompt the user specifying which server is trying to use what key. This feature can be configured at Settings > Default Agent > Prompt.

Additionally, we recommend using separate, single-purpose keys for SSH agent forwarding with limited exposure. For example, it is typical - but dangerous - to generate a single default key and use it to log in to servers or services like GitHub. Instead, create single-purpose keys that will limit the exposure: in our GitHub case, create a GitHub key.

To learn more about the security implications of SSH agent forwarding, please see [this](https://heipei.io/2015/02/26/SSH-Agent-Forwarding-considered-harmful/).

## Tunnels

SSH tunnels provide secure network routes to or from your local machine to a remote network. The simplest example is bringing a port from a remote system to your local machine. If you had a development server running a service on port `8080` that wasn't exposed to the Internet and wanted to access it, you could run this command:

```bash
ssh -L 8080:localhost:8080 host
```

Replacing `host` with the remote hostname or IP. Once authenticated, a service listening on port `8080` on the remote machine will now be accesible as though it were on your local device. A connection to `localhost:8080` will be forwarded via the SSH tunnel to the remote computer.

Blink Shell supports both LocalForward (-L) and RemoteForward (-R). You can also set up your tunnels inside the SSH Config for the Host. This way, all your tunnels will get started with the connection, without the need to explicitely pass them at the command line.

**PRO TIP:** Blink can also start the tunnels in the background, without starting an interactive shell. Check out the `-N` parameter for this purpose.

## SOCKS

VPNs are incredibly useful in a wide variety of ways, and with increasing privacy and censorship concerns, they're becoming a practical necessity. While not an exact replacement for VPN technology, Blink Shell provides a SOCKS5 proxy, so you can tunnel your web traffic through the remote machine. Like a VPN, this will allow you to browse the internet privately, or access restricted content, but also, access services that may be localized at the remote network.

We have created a separate article about DynamicForward, so please [follow the link](/advanced/socks) for more information.

## Jump/Bastion Hosts

A jump host (sometimes referred to as a bastion host or server) is an intermediate SSH server that acts as a gateway to other networks. This setup is a common way to provide SSH access to a protected server (or group of servers) while allowing only one IP address (the jump host) access. This setup prevents other machines from accessing the protected server and ensures that connections first authenticate through the jump host.

To facilitate this, SSH has a `ProxyJump` option that allows you to specify the intermediate server:

```bash
ssh -J jumphost host
```

Where `jumphost` with the jump/bastion server and `host` with the remote host.

SSH jump hosts eliminate the need for SSH agent forwarding, offering a more secure approach to connect to protected networks.

Special cases may require a more exotic command through the JumpHost. Blink Shell also supports `ProxyCommand` for this purpose, either in configuration or in the Command Line:

```bash
ssh -o ProxyCommand="ssh -W %h:%p jumphost" host
```

## Venture Forth with Your Advanced SSH Knowledge

We hope this guide to advanced SSH has been helpful. Blink Shell, with its native shell and SSH support combined with your knowledge of SSH agent forwarding, jump hosts, SSH tunnels and persistent connections transforms your iOS device into a networking and development powerhouse.
