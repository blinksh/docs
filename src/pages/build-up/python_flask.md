#  Build up Python + Flask projets

You can use **Blink Build** to run your Flask project in an **isolated development environment**, that you can easily launch from your iPhone or iPad. Python 3 is supported in the default Hacker Tools container, so we can get started in no time:

```bash
blink> build mosh
```

Create and go to the `hello` project folder:

```bash
root ➜ ~ $ mkdir hello
root ➜ ~ $ cd hello
```

Create and activate a virtual environment:

```bash
root ➜ ~/hello $ python -m venv venv
root ➜ ~/hello $ source venv/bin/activate
```

Last step is installing Flask itself:

```bash
root ➜ ~/hello $ pip install flask
```

## Developing

Create in VIM*(or your favorite)* editor `app.py`, and add:

```python
from flask import Flask

app = Flask(__name__)

@app.route("/")
def hello_world():
    return "<p>Hello, World!</p>"
```

Now run your development server:

```bash
flask run --host=0.0.0.0
```

We use host 0.0.0.0 so the server is exposed to the Build container, but not to the outside world.

### Opening Ports

Blink Build can transparently expose the ports on the remote container inside your local device. In this case, we want to access the Flask server running on port 5000, in our localhost on port 5001:

```bash
build ports add htools 5000 5001
```

Now you can access your project from http://localhost:5001!

> 👍 Blink Build exposes ports securely over a Wireguard interface.

## Comments

This was a quick start but if you want to learn more tips or to participate with other iOS pythonistas, join our [discussion](https://github.com/blinksh/blink/discussions/1725).
