# Introduction. 
What's VS Code Server. 

Research and compare Two options for deployment: self-managed versus cloud instance. 

Installing VS Code in your Build instance is the easiest way to access VS Code in your iPad while keeping all the control you are used to in your desktop. Although these instructions are tailored for Blink Build, the installation process should be similar in any other Cloud instance or to your private computer. Your own code server under your own control.

Different brands of Code Server to choose from. All easy to install and easy to access, a matter of preference.

## VS Code Server from Microsoft
Make an emphasis that Microsoft version is Open but it is subject to a more restricted license for some functionality
Advantage is having the full marketplace available.
Other things to note?

### Instructions for installation:
1 - create binary directory
```
mkdir ~/bin
```
Add to PATH on .bashrc so binaries are available system-wide
```
export PATH="$HOME/bin:$PATH"
```
(Check https://docs.blink.sh/build/cloud_disk#binaries as reference)

2 - Install
```
curl --output vscode.tar.gz -L -X GET "https://code.visualstudio.com/sha/download?build=stable&os=cli-alpine-x64"
tar -zxf vscode.tar.gz && mv code ~/bin/
```
3- running
```
code tunnel
```
Running. Tunnel managed by Microsoft. Copy the URL from running the command and on a new blink shell, run:
```
code <URL>
```

### Open VS Code Server from GitPod
https://github.com/gitpod-io/openvscode-server link for reference
Advantage, fully open license. 
Disadvantage, an alternative marketplace

Installation
1 - create binary directory (same as before)
2- Install 
Download latest release from https://github.com/gitpod-io/openvscode-server/releases/latest 
```
tar -xzf openvscode-server-v${OPENVSCODE_SERVER_VERSION}.tar.gz
 cd openvscode-server-v${OPENVSCODE_SERVER_VERSION}
 
```
3 - Running
First start the code server
```
 ./bin/openvscode-server # you can add arguments here, use --help to list all of the possible options
```
In a new Blink shell, use code with the provided URL
```
code <URL>
```

