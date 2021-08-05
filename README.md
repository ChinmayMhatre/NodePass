# NodePass

NodePass is a simple password generator which runs on NodeJS.

## Usage

**nodepass is not available on npm**. Hence, you can't install it using `npm install nodepass`.

In order to use nodepass, you have to run these commands.

```sh 
git clone https://github.com/ChinmayMhatre/NodePass.git
cd NodePass

npm install 
npm link

```

Once that's done, the command `nodepass` will be available. 

Run this command to see a list of available options.
```
nodepass --help
```

Which will show this message.

```
Usage: nodepass [options]

Simple Password Generator built on NodeJS

Options:
  -V, --version          output the version number
  -l, --length <number>  Length of the password (default: "8")
  -n, --name <title>     What is this password for (default: "unnamed password")
  -s, --save             Save password to password.txt
  -nn, --no-numbers      Exclude numbers in the password
  -ns, --no-symbols      Exclude symbols in the password
  -c, --clear            clear the password.txt file
  -h, --help             display help for command
```
