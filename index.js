#!/usr/bin/env node
const chalk = require("chalk")
const clipboardy = require("clipboardy")
const log = console.log
const createPassword = require("./utils/createPassword")
const savePassword = require("./utils/savePassword")
const deletePassword = require("./utils/deletePassword")
const {main ,length ,exceptions ,save ,passName} = require('./utils/Prompts')

let lengthVal = 8; 
let hasNumbers = true;
let hasSymbols = true;

const mainFunc = async ()=>{
    try {
        //* Main Prompts
        const ans = await main.run()
        const generate  = 'Generate New Password';
        const clear     = 'Clear password.txt (only works if you are in the same folders as the file)'
        switch (ans) {
            case generate : 
                    //* Generate Password
                    const answer = await length.run()
                    if(answer){
                        lengthVal=answer
                    }
                    //* Exception Prompts
                    const exception = await exceptions.run()
                    if (exception.includes("no symbols")){
                        hasSymbols = false
                    }
                    if (exception.includes("no numbers")){
                        hasNumbers = false
                    }
                    //* Create Password
                    const password = createPassword(lengthVal,hasNumbers,hasSymbols)
                    //* Save Password
                    const saveVal =await save.run()
                        if(saveVal){
                            //* name of the password
                            const name = await passName.run()
                                if(name.length = 0){
                                    savePassword(password,"unknown")
                                }else{
                                    savePassword(password,name)
                                }
                        }
                    //* Copy to clipboard
                    clipboardy.writeSync(password)
                    //* Output password
                    log(chalk.blue("Generated password : ")+ chalk.yellow(password) )
                    log(chalk.bgGreenBright.black("Password copied to clipboard") )
                break;
            case clear : 
                    deletePassword()
                break;
        
            default:
                break;
        }        
    } catch (error) {
        console.log(chalk.red("exiting"))
    }
    
    
}
    mainFunc()




