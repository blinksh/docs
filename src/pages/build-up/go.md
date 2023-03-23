# Build up Go environments

The default Hacker Tools in Blink Build already have everything pre-installed to **start coding in Go** from your iPad or iPhone in no time. In a Blink shell, connect to your Build machine by running:

```bash
blink> build mosh
```

Create and go to the `hello` project folder:

```bash
root ➜ ~ $ mkdir hello
root ➜ ~ $ cd hello
```

Create in VIM*(or your favorite)* editor `main.go`, and add:

```go
package main 

import "fmt" 

func main() { 
    fmt.Println("Hello, World")
}
```

After saving it, run your newly created program:

```bash
root ➜ hello/ $ go run main.go
```

It will show:

```bash
Hello, World!
```

That was easy, now let’s create a simple web server to serve our “Hello, World!”.

## Creating Go Web Server

Again, open in VIM*(or your favorite)* editor `main.go`, and update with:

```go
package main

import (
    "fmt"
    "net/http"
)
```

Next, we’ll create a Handler which receives all incomming HTTP connections from browsers. And, a listener as the request handler alone can not accept any HTTP connections from the outside. An HTTP server has to listen on a port to pass connections on to the request handler.

```go
func main() {
    http.HandleFunc("/", func(w http.ResponseWriter, r *http.Request) {
        fmt.Fprintf(w, "Hello, World!", r.URL.Path)
    })

    http.ListenAndServe(":8080", nil)
}
```

Run again with:

```bash
root ➜ hello/ $ go run main.go
```

### Opening Ports

Blink Build can transparently expose the ports on the remote Hacker Tools container inside your local device. While the go server is running, open a new Blink shell. In this case, we want to access the go server running on port 8080, in our localhost on port 8081:

```bash
blink> build ports add htools 8080 8081
```

Now you can access your project from http://localhost:8081!

> 👍 Blink Build exposes ports securely over a Wireguard interface.

## Comments

Doing Go in Build is no different than any other machine, so you can use online tutorials and feel comfortable doing so, even if you're just starting out.

This was a quick start but If you have additional tips or to learn more about how to code in Go from your iOS device, participate in our [discussion](https://github.com/blinksh/blink/discussions/1724).

