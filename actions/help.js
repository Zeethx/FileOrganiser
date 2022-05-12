import chalk from 'chalk';
function helpFn() {
    console.log(chalk.blue(`
    How to use:
       zeno display <path>(optional)
       zeno organize <path>
       zeno help
    `));
    //console.log("by:", chalk.red.bold("Raghav Anand"));
}

export const help = helpFn;