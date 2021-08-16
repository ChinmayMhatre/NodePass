const { Select ,Toggle ,NumberPrompt ,MultiSelect ,Confirm ,Input  } = require('enquirer');
const chalk = require("chalk")


const main = new Select({
    name: 'main',
    message: 'Select What you want to do',
    choices: ['Generate New Password', 'Clear password.txt (only works if you are in the same folders as the file)']
});

const length = new NumberPrompt({
    name: 'number',
    message: 'Please enter a length(default:8)'
    });

    const exceptions = new MultiSelect({
        name: 'options',
        message: 'select options using (space) press (enter) to process ',
        limit: 2,
        choices: [
            { name: 'no symbols', value: 'symbol' },
            { name: 'no numbers', value: 'number' }
        ]
    });

    const save = new Confirm({
        name: 'question',
        message: `Do you want to save the password to ${chalk.yellow(process.cwd(),"\password.txt?")}`
    });

    const passName = new Input({
        message: 'What is this password for?',
    });







module.exports = {main ,length ,exceptions ,save, passName}