const fs = require('fs').promises;

async function readFiles(filePaths) {
    try {

        const fileReadPromises = filePaths.map(filePath => fs.readFile(filePath, 'utf8'));
        const fileContents = await Promise.all(fileReadPromises);

        fileContents.forEach((content, index) => {
            console.log(`Contents of ${filePaths[index]}:`);
            console.log(content);
            console.log('---');
        });
    } catch (error) {
        console.error('Error reading files:', error);
    }
}

readFiles(['./file1.txt', './file2.txt', './file3.txt']);
