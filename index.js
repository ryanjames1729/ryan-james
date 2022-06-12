#!/usr/bin/env node

import boxen from 'boxen';
import chalk from 'chalk';

const boxenOptions = {
    padding: 2,
    width: 80,
    title: 'ryanjames1729',
    titleAlignment: 'center',
    borderStyle: 'round', 
    borderColor: '#7DF9FF',
};

const logo = [
    "|     <<<  >>>      |||RRRR    JJJJJJJJJ      <<<    //>>>      |",
    "|   <<<      >>>    |||  RRR      |||       <<<     //   >>>    |",
    "| <<<          >>>  |||RRR        |||     <<<      //      >>>  |",
    "|   <<<      >>>    |||  RR    JJ |||       <<<   //     >>>    |",
    "|     <<<  >>>      |||   RR    JJJJ          <<<//    >>>      |",
    ]

const strLogo = logo.join('\n');

const intro = chalk.bold(
    strLogo + "\n\nRyan James, here. I teach computer science and build things for the Internet. Always coding, always learning.\n\n"
);

const links = [
    { name: chalk.hex("#fff").bgHex("#0f111a")("Website"), url: "   https://ryanjameswritescode.com" },
    { name: chalk.hex("#fff").bgHex("#ADD8E6")("GitHub"), url: "    https://github.com/ryanjames1729" },
    { name: chalk.hex("#fff").bgHex("#00008b")("Twitter"), url: "   https://twitter.com/rjames1729" },
    { name: chalk.hex("#fff").bgHex("#BF40BF")("Discord"), url: "   https://discord.gg/ryanjames1729" },
    { name: chalk.hex("#fff").bgHex("#880808")("E-mail"), url: "   ryanjames1729@gmail.com" },
  ];

const linkList = links.map(link => `   - ${link.name}: ${link.url}`).join('\n');

console.log(boxen(intro + linkList, boxenOptions));



