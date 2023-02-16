# Getting Started with Blink Build

Blink Build creates remote runtimes that can be accessed on all your devices. You can use Build in your day-to-day workflows whether you need to do development, DevOps, machine learning, or just play around with new tooling.


## Sign Up

Build is currently in open Beta for Blink Plus users. Before starting, you need to Sign Up for Blink Build inside `config`, `Build`. Setup is very straightforward, and to ensure the best performance, make sure to select the region closest to you.

## First Start

We are ready to start our first Build Runtime, the Build Hacker Tools. This runtime ships with the most common versions of Node, Python, Rust, Go, C/C++,  and several tools and editors like emacs, helix, mc, etc…

```bash
blink> build mosh
```

In just a few seconds, Build will connect you to the Hacker Tools shell using Mosh:

```bash
Machine is started.
Keys are added.
Your machine is ready.
Container started.
root ➜ ~ $
```
> Blink Build provides a totally new and private Virtual Machine in the Cloud for your usage when you start to work. And when you are done, it will automatically shut it down. During beta testing, Blink Build will only support one Machine size.

> 👍 Blink Build uses WireGuard® to connect to the remote machine under the hood. This way, only your authorized devices can connect to the remote without dealing with authentication keys.

## Make yourself at $HOME

You will notice that your home folder already has some Dotfiles.

```bash
root ➜ ~ $ ls
```
On the first start, Blink Build also creates a Disk for your usage that will persist between sessions.
By default, your Disk is created with a set of Dotfiles to give you a few nice-to-haves, like a prettified Bash shell or some optimized Tmux defaults.
As your Disk persists between sessions, it is the perfect place to start cloning repositories or installing your personalized dotfiles and secure keys.
> When keeping Secure Tokens like SSH Keys or GitHub keys in your Disk, we recommend encrypting them for enhanced security. See [Notes on Security]()

## Building up

To get to know more about how to start running your workflows with Blink Build, use one of our Build up Quickstarts:

Build up [Next.js](/build-up/nextjs).

Build up Python

Build up Ruby

Build up Rust

Build up Go

Build up PHP

Build up Jupyter

Build up code-server

Build up …

## Shutting down

Blink Build will auto shut down your environment within one hour after you stop using it. We monitor the machine's activity by checking if you are still interacting with your Mosh shell sessions or tunnels. Note that commands executing in the background without an active Mosh shell or traffic on your tunnels will be eventually terminated with the machine.

If you wish to shut down everything at this very moment, you can do so with:

```bash
blink> build machine stop
```

## A note on security

- Build machines are unique per user and terminated after shutting them down. This means your data or runtimes are never in the same machine as other users. You can see your assigned IP and machine information by running `build machine status`.
- Build stores your disks safely in persistent object storage using **256-bit AES-XTS full-disk encryption**. For extra security, we recommend sensitive information like private keys or secure tokens to be encrypted on a case-by-case basis.
- We do not have access to the machine as per the TOS unless authorized by the user.
