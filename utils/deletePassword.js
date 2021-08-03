const fs = require("fs")
const os = require("os")
const chalk = require("chalk")
const path = require("path")

const deletePassword = (password,name) =>{
    fs.open(
        path.join(__dirname,"../","passwords.txt"),
        "w",
        666,
        (e,id)=>{
            fs.write(
                id,
                "",
                null,
                "utf-8",
                () =>{
                    fs.close(id,()=>{
                        console.log(chalk.bgGrey("passwords.txt cleared"))
                    })
                }
            )
        }
    )
}

module.exports = deletePassword