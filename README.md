# NodePass

NodePass is a simple password generator which runs on NodeJS.

## Usage

**nodepass is not available on npm**. Hence, you can't install it using `npm install nodepass`.

In order to use nodepass, you have to run these commands.
---
Clone repository
```sh 
git clone https://github.com/ChinmayMhatre/NodePass.git
npm link

```
Navigate to the folder
```sh
cd NodePass
```
Install dependencies
```sh
npm install 
```

create a symlink to use `nodepass` everywhere
```sh
npm link

# To remove symlink
npm unlink
```

Once that's done, the command `nodepass` will be available. 

Run this command to see a list of available options.
```
nodepass --help
```

Options:
  | Short | Long              | Description                                               |
  | ----- | ----------------- | --------------------------------------------------------- |
  | -l    | --length <number> | Length of the password (default: "8")                     |
  | -n    | --name <title>    |  What is this password for (default: "unnamed password")  |
  | -s    | --save            | save password to passwords.txt                            |
  | -nn   | --no-numbers      |  Exclude numbers in the password                          |
  | -ns   | --no-symbols      | Exclude symbols in the password                           |
  | -h    | --help            | display help for command                                  |
  | -V    | --version         | output the version number                                 |
  | -c    | --clear           | clear the password.txt file                               | 
  

