# Build up Rust environments

Rust is supported in the pre-installed Hacker Tools, including additional tools like lints and analyzers for full integration in code editors. To get started writing Rust in your iPad or iPhone, run in a Blink shell:

```bash
build mosh htools
```

Create a new template project using `Cargo`:

```bash
cargo new hello-rust
```

Go to `hello` folder:

```bash
cd hello
```

And run:

```bash
cargo run
```

Now you should see:

```bash
Compiling hello v0.1.0 (/root/hello)
    Finished dev [unoptimized + debuginfo] target(s) in 2.88s
     Running `target/debug/hello`
Hello, world!
```

## Developing

Open in Helix*(or your favorite)* editor `Cargo.toml`, and add under `[dependencies]`:

```bash
[dependencies]
ferris-says = "0.2"
```

Then edit `src/main.rs` by replacing its content with:

```rust
use ferris_says::say;
use std::io::{ stdout, BufWriter };

fn main() {
    let out = b"Hello fellow Rustaceans!";
    let width = 24;

    let mut writer = BufWriter::new(stdout());
    say(out, width, &mut writer).unwrap();
}
```

Save, and run your modified application:

```bash
cargo run
```

It should show:

```bash
----------------------------
| Hello fellow Rustaceans! |
----------------------------
              \
               \
                 _~^~^~_
             \) /  o o  \ (/
               '_   -   _'
               / '-----' \
```

### Configuration

Cargo can be configured locally by modifying the `$HOME/cargo.toml` file. By default, Rust installs dependencies in the `.target` directory of your project. However, for larger projects with many dependencies, this may fill up your Cloud Disk. To avoid this issue, it's recommended to set the `target-dir` to `/tmp` instead. This will allow the directory to grow unbounded and reset with the machine.

```rust
[build]
target-dir = /tmp
```

## Comments

Using Rust in Build is no different than your local machine, so you can take it from here with online tutorials and feel comfortable doing so, even if you're just starting out.

If you have additional tips or to learn more about how to code Rust from your iOS device, participate in our [discussion](https://github.com/blinksh/blink/discussions/1726).
