const fs = require("fs")
const os = require("os")
const chalk = require("chalk")
const path = require("path")

const deletePassword = () =>{
    fs.open(
        path.join(process.cwd(),"/passwords.txt"),
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