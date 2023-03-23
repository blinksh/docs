# Starting your Next.js project

The pre-installed Hacker Tools in Build come with a Node runtime, so it is a great option to get started:

```bash
blink> build mosh 
```

Now let’s create an example Next.js project:

```bash
root ➜ ~ $ yarn create-next-app@latest
```

Go to your project's folder, by default `my-app`, and run a development server:

```bash
root ➜ ~ $ cd my-app
root ➜ ~ $ yarn dev
```

### Opening Ports

Blink Build can transparently expose the ports on the remote container inside your local device. In this case, we want to access the node server running on port 3000, in our localhost on port 3001:

```bash
blink> build ports add htools 3000 3001
```

Visit http://localhost:3001 and view your project alive!

> 👍 Blink Build exposes ports securely over a Wireguard interface. To open the ports on your machine to the Internet, check out []()

## Comments
To learn more about using Next.js in Blink Build, participate in our [discussion]().
