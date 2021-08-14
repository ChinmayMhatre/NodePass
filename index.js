#!/usr/bin/env node
const program = require("commander")
const chalk = require("chalk")
const clipboardy = require("clipboardy")
const log = console.log
const createPassword = require("./utils/createPassword")
const savePassword = require("./utils/savePassword")
const deletePassword = require("./utils/deletePassword")
const { Select ,Toggle ,NumberPrompt ,MultiSelect ,Confirm ,Input  } = require('enquirer');

let lengthVal = 8; 
let hasNumbers = true;
let hasSymbols = true;

//* steps

    //* - generate pass
    //*     - length
    //*     - multichoice symbols numbers

    //*     - do you want to save the pass?
    //*         - enter the name which you want (default : unnamed)
    //* - clear pass.txt



const mainFunc = async ()=>{
    const main = new Select({
        name: 'main',
        message: 'Select What you want to do',
        choices: ['Generate New Password', 'Clear password.txt (only works if you are in the same folders as the file)']
    });
    try {
        const ans = await main.run()
        const generate  = 'Generate New Password';
        const clear     = 'Clear password.txt (only works if you are in the same folders as the file)'
        switch (ans) {
            case generate : 
                    const length = new NumberPrompt({
                        name: 'number',
                        message: 'Please enter a length(default:8)'
                        });
                    const answer = await length.run()
                    if(answer){
                        lengthVal=answer
                    }
                    const exceptions = new MultiSelect({
                        name: 'options',
                        message: 'select options using (space) press (enter) to process ',
                        limit: 2,
                        choices: [
                            { name: 'no symbols', value: 'symbol' },
                            { name: 'no numbers', value: 'number' }
                        ]
                    });
                    const exception = await exceptions.run()
                    if (exception.includes("no symbols")){
                        hasSymbols = false
                    }
                    if (exception.includes("no numbers")){
                        hasNumbers = false
                    }

                    const password = createPassword(lengthVal,hasNumbers,hasSymbols)

                    const save = new Confirm({
                        name: 'question',
                        message: 'Do you want to save the password to password.txt?'
                    });
                    const saveVal =await save.run()
                        if(saveVal){
                            const prompt = new Input({
                                message: 'What is this password for?',
                            });
                            const name = await prompt.run()
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




