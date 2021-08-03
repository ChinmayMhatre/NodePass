#!/usr/bin/env node
const program = require("commander")
const chalk = require("chalk")
const clipboardy = require("clipboardy")
const log = console.log
const createPassword = require("./utils/createPassword")
const savePassword = require("./utils/savePassword")
const deletePassword = require("./utils/deletePassword")


program
.version("1.0.0")
.description("Simple Password Generator built on NodeJS")


program
.option("-l, --length <number>","Length of the password","8")
.option("-n, --name <title>","What is this password for","unnamed password")
.option("-s, --save","Save password to password.txt",)
.option("-nn, --no-numbers","Exclude numbers in the password",)
.option("-ns, --no-symbols","Exclude symbols in the password",)
.option("-c, --clear","Exclude symbols in the password",)
.parse()

const {length, save, numbers, symbols,name,clear } = program.opts()

if(clear){
    //* Delete all content from password.txt
    deletePassword()
}else{

    //* Generate password
    const generatedPassword = createPassword(length,numbers,symbols)

    //* Save to file 
    if(save){
        savePassword(generatedPassword,name)
    }

    //* Copy to clipboard
    clipboardy.writeSync(generatedPassword)

    //* Output password
    log(chalk.blue("Generated password : ")+ chalk.yellow(generatedPassword) )
    log(chalk.green("Password copied to clipboard") )

}

