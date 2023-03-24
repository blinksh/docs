# Build up Ruby on Rails

This quick-start guide demonstrates how to use **Blink Build** to set up and **start a Ruby on Rails project** to work on from your iPad or iPhone. Lets start by connecting to our Build machie:

```bash
blink> build mosh
```

The Hacker Tools container started by Blink Build has Ruby and tools like Bundler out of the box. To install Rails, we are going to configure the default location for Gems in our Cloud Disk, so it is saved when our machine is automatically shutdown. To do so, edit `.bashrc:`

```bash
# Set installation directory in $HOME
export GEM_HOME=$HOME/.local/gems
# Add Gem binaries to path
PATH="$HOME/.local/gems/bin:$PATH"
```

We are now ready to install Rails:

```bash
gem install rails
```

Now let’s create a new Rails project:

```bash
rails new hello
```

Go to `hello` folder:

```bash
cd hello
```

And run:

```bash
rails server -b 0.0.0.0
```

We use host 0.0.0.0 so the server is exposed to the Build container, but not to the outside world.

### Opening Ports

Blink Build can transparently expose the ports on the remote container inside your local device. In this case, we want to access the Rails server running on port 3000, in our localhost on port 3001:

```bash
build ports add htools 3000 3001
```

Now you can access your project from http://localhost:3001!

> 👍 Blink Build exposes ports securely over a Wireguard interface.

### Dependencies

Hacker Tools comes with bundler out of the box, so to add dependencies to your project, edit your Gemfile as you need them:

```bash
gem 'nokogiri'
gem 'geokit'
```

After adding a dependency, if it is not yet installed, install it:

```bash
bundle install
```

## Comments

That’s it! You just created a very basic *”Hello, World!”* application using Ruby on Rails and **Blink Build**. Using Build for Ruby is no different than any machine, so you can use online tutorials and feel comfortable doing so, even if you're just starting out.

To learn more or to join others and improve Ruby development on iOS, join us in our [Discussion](https://github.com/blinksh/blink/discussions/1733).
