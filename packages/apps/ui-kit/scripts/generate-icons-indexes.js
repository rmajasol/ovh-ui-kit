"strict mode";

const chalk = require("chalk");
const fs = require("fs");
const path = require("path");
const icons = require("../dist/fonts/oui-icons/oui-icons.json");
const log = console.log;

log(chalk.yellow("\nGenerating less variables from icons"));

// init less file
const file = fs.createWriteStream("../../components/_core/src/less/_icons.less");

log(chalk.blue("Generated"), chalk.cyan(path.resolve(file.path)));

const iconsIndexes = ["@oui-icon-index:"];
const iconsCodes = ["\n"];

Object.keys(icons).forEach((key) => {
    const value = icons[key];
    const prefix = "icon-";

    // Remove prefix from key name
    const index = key.substr(prefix.length);
    iconsIndexes.push(`  ~"${index}"`);
    iconsCodes.push(`@oui-icon-index-${index}: "${value}";`);
});

const lastIndex = iconsIndexes.length;
iconsIndexes[lastIndex - 1] += ";";

file.write("// Icons\n");
file.write("//\n");
file.write("// WARNING: THIS FILE IS GENERATED, PLEASE DO NOT EDIT IT!\n");
file.write(iconsIndexes.join("\n"));
file.write(iconsCodes.join("\n"));
file.write("\n");

file.end();

log(chalk.green("Done"));
