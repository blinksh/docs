import { Callout } from 'nextra-theme-blinkshell'

# Vim for iOS and iPadOS

From v17.3.0, Blink now includes Vim to provide a convenient tool for local file editing. Vim is the ubiquitous text editor included in most UNIX systems, making it a familiar choice for many users. Thanks to Vim’s architecture and extensibility, numerous features can be enabled with a bit of configuration. Here is how to set things up.

<Callout>
Our goal with local tools remains to enhance the local experience before transitioning to a remote machine. While this is real Vim, we have disabled certain features at build time to ensure better stability, so please do not expect full compatibility with all extensions or branches like Neovim. Our aim is to offer basic local editing capabilities, with everything else being considered an extra.
</Callout>

## Basic setup

Make a minimal vimrc by doing `vim ~/.vimrc`, with a few essential settings:
```
set termguicolors    " enables colors
set encoding=utf-8   " ensures that vim's locale is set properly at launch
set backspace=2      " more powerful backspace
syntax on
```
`:wq` to save it, and exit vim.

## Enable plugins

Since most plugin managers rely on the *git* cli, which is not available on Blink, @rrgeorge from our community developed a plugin manager that uses *curl* to download and install plugins from GitHub.

Add the following to your `~/.vimrc`:
```
let data_dir = expand('~/.vim')
if empty(glob(data_dir . '/autoload/blink.vim'))
    call mkdir(expand(data_dir."/autoload"),"p")
    silent execute '!curl -fLo ' . data_dir . '/autoload/blink.vim --create-dirs  https://raw.githubusercontent.com/rrgeorge/vim-blink/main/blink.vim'
endif

let g:blink_path=~/.vim/pack/blink

call blink#init()
```

## Install some nice QOL plugins

You can add `Blink` to activate plugins (and install as needed):

```
Blink 'ryanoasis/vim-devicons'
Blink 'vim-airline/vim-airline'
Blink 'vim-airline/vim-airline-themes'
Blink 'fcpg/vim-osc52'
Blink 'preservim/nerdtree'
Blink 'preservim/tagbar'
```

To check all plugins for updates, run `:BlinkUpdate`.

For more information, please read: [rrgeorge/vim-blink](https://github.com/rrgeorge/vim-blink/)
