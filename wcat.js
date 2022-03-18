// 1) node wcat.js filepath => it displays the contents of a file in terminal
// node wcat.js filepath1 filepath2 filepath3 => it displays the contents of a file in terminal

const fs = require("fs");
let inputArr = process.argv.slice(2);

let filesArr = [];

for (let i = 0; i < inputArr.length; i++) {
    filesArr.push(inputArr[i]);
}
// console.log("length of files array:", filesArr.length);
// console.log("files to be pushed:", filesArr);

for (let i = 0; i < filesArr.length; i++) {
    let doesExist = fs.existsSync(filesArr[i]);
    // console.log("does exist", doesExist);

    if (!doesExist) {
        console.log("File Doesnt exist");
        break;
    }
}

// content reading and appending starts

let content = "";
for (let i = 0; i < filesArr.length; i++) {
    let fileContent = fs.readFileSync(filesArr[i]);
    content += fileContent+"\n";
}

console.log(content);
