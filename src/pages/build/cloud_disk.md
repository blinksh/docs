# Storage and Cloud Disk

There are two types of storage in Blink Build: ephemeral storage and persistent storage or **Cloud Disk**.

The ephemeral storage refers to temporary storage mounted at the root filesystem of your container. It is ephemeral because it is not persisted between reboot cycles of your Build machine or the container. This means that if you install a package with `apt-get` or with any other tool in your container, it will not be persisted between reboots, what makes it perfect for experimentation.

The Cloud Disk is mounted as part of the $HOME folder in every container started by Build, and it is persisted automatically between cycles. We understand that development is a discovery process, so Blink Build does not limit you to one repository and configuration. Use the Cloud Disk for your files, clone multiple code repositories, tools, application settings, or anything else you want preserved between reboots.

## What to put in your Cloud Disk

### **Binaries**
Create a **$HOME/bin** directory to store executable files that you want to keep running system-wide, like:
1. Custom scripts or command-line utilities that you may have written yourself.
2. Third-party tools that you may want to install manually, like VS Code Server, AWS or GCloud CLI tools, etc.
3. Small tools to personalize your shell experience across containers, like prompts.

To create the folder:
```bash
root ➜ ~ $ mkdir ~/bin
```
Then add the folder to the PATH environment variable in `.bashrc`, so all binaries are accessible system-wide:
```bash
export PATH="$HOME/bin:$PATH"
```
Remember to restart your terminal or run `source ~/.bashrc` to apply changes.

### **Editors and plug-ins**
Code editors like Vim or Emacs use text files in the $HOME directory to manage settings. This way, you will have your color themes, keybindings or custom functions, available at every boot without extra work.

In Vim, the main configuration file is called `.vimrc`.

In Emacs, the main configuration file is called `.emacs`.

### **Shell**
The shell configuration in the $HOME directory controls the behavior of the command-line, from setting up special environment variables to customizing the prompt.

On your first Blink Build boot, you will notice that the prompt already has a custom configuration to display a colored prompt with current Git repository information. You can further customize to your liking by editing the `.bashrc` file.

For a list of resources to customize Bash, check out [Awesome Bash Customization](https://github.com/awesome-lists/awesome-bash#customization)

### **Tmux**
Tmux is a terminal multiplexer that allows to split your terminal window into multiple panes, and to connect to running terminal sessions from different devices.

When you start a Blink Build session, Tmux is automatically launched. You may have already noticed it as the green bar at the bottom of the screen. With Tmux running automatically, Blink Build can start your session on an iPad and switch to your iPhone without losing your progress.

Configuring Tmux can provide a better terminal experience, with special key bindings, custom status bars to show things like CPU, memory usage or even the weather.

For a list of resources to customize Tmux, check out [Awesome Tmux](https://github.com/rothgar/awesome-tmux)

### **Repositories**
You can clone multiple repositories as part of your $HOME folder so they are kept in your Cloud Disk between reboots.

You may need SSH Keys to clone and work on private repositories. To create a new key:

```bash
root ➜ ~ $ ssh-keygen -t ecdsa
```

When creating a key-pair, you will be prompted to create a passphrase. A passphrase will encrypt your key in storage, which will make it more secure inside your Cloud Disk.

Get the public key to [install in GitHub](https://docs.github.com/en/authentication/connecting-to-github-with-ssh/adding-a-new-ssh-key-to-your-github-account), [Gitlab](https://docs.gitlab.com/ee/user/ssh.html) or any other platform:
```bash
root ➜ ~ $ cat ~/.ssh/id_ecdsa.pub
```

## Storing Dotfiles in a Git Repository

Advanced users may want to keep their Dotfiles in a repository so they can replicate their configuration easily on other machines, to collaborate with others, or to experiment with different settings without worrying about losing previous customizations.

Blink Build offers a repository for Dotfiles outside the box that you can manipulate with the special `config` command . After creating files or making updates to your dots, you can manipulate it like a git repository:
```bash
config status
config add .emacs
config commit -m "Added emacs"
config add .bashrc
config commit -m "Updated bashrc"
config push
```

This setup is based on [Dotfiles: Best Way to Store in a Bare Git Repository](https://www.atlassian.com/git/tutorials/dotfiles).
