---
id: socks
sidebar_position: 6
sidebar_label: SOCKS
slug: /advanced/socks
---

# SOCKS5

Blink comes with dynamic port forwarding support, aka SOCKS5 server or proxy. This is perfect as a simple VPN that allows you to browse the internet using a remote machine as a proxy, or - a more critical dev scenario - to access backend services behind a Firewall. As a SOCKS proxy sits at layer 5 of the OSI stack, its performance is also astounding, try for yourself!

For a thorough explanation on how a SOCKS proxy works, please read the [SOCKS5 Proxy Primer](https://securityintelligence.com/posts/socks-proxy-primer-what-is-socks5-and-why-should-you-use-it/). We wanna remark three features here:

1. DNS resolution happens at the host, so your requests are more secure and also will allow you to access services at the host side, like behind a firewall.
2. As mentioned, SOCKS sits at the layer 5 of the OSI stack. This means TLS is negotiated between the browser and the host, so your requests are fully secure.
3. Our current implementation only supports TCP traffic and not UDP.

## Configuration on iOS

Within iOS, you can configure all your traffic to be routed through Blink Proxy. This is really cool, as other apps can also make use of it.

1. Open: Settings > Wi-Fi > Connection Information > Http Proxy | Configure Proxy

![img](socks/setup.jpg)

2. Select Automatic, and introduce https://blink.sh/proxy.pac
3. To start dynamic port forwarding inside Blink, just type the usual `ssh -D 10800 <host>`.
4. As this is an ssh tunnel, we would recommend that you also do `geo track` to ensure that the connection is locked while you are browsing.

The usual SOCKS5 port is 1080, but it is currently taken by iOS. Our own blink.sh/proxy.pac file configures the listener on port 10800. If you would like to use a different port, you will need to use your own proxy.pac file. We suggest creating a Gist with that configuration and link to it instead.