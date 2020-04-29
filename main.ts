import fs from 'fs';
import path from 'path';
import argv from 'argv';

export default () => {
    // define reg
    const reg = [/ *\[[^\[\]]*\] */g, / *\([^\(\)]*\) */g];

    // get args
    const args = argv.run();

    // rename
    if (args.targets.length) {
        for (const targetDir of args.targets) {
            for (const name of fs.readdirSync(path.resolve(targetDir))) {
                fs.renameSync(path.resolve(targetDir, name), path.resolve(targetDir, name.replace(reg[0], '').replace(reg[1], '')));
            }
        }
    }
};
