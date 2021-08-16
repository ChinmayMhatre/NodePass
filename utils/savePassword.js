const fs = require("fs")
const os = require("os")
const chalk = require("chalk")
const path = require("path")

const savePassword = (password,name) =>{
    fs.open(
        path.join(process.cwd(),"/passwords.txt"),
        "a",
        666,
        (e,id)=>{
            fs.write(
                id,
                name + " : " + password + os.EOL,
                null,
                "utf-8",
                () =>{
                    fs.close(id,()=>{
                        console.log(chalk.bgGrey("Password saved to passwords.txt"))
                    })
                }
            )
        }
    )
}

module.exports = savePassword