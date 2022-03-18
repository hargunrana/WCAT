// 1) node wcat.js filepath => it displays the contents of a file in terminal
// 2) node wcat.js filepath1 filepath2 filepath3 => it displays the contents of a file in terminal

const fs = require("fs");
let inputArr = process.argv.slice(2);

let filesArr = [];
let optionsArr = [];

//----------------->Placed Files in Array<---------------------

for (let i = 0; i < inputArr.length; i++) {
    let firstChar = inputArr[i].charAt(0);
    if (firstChar == "-") {
        optionsArr.push(inputArr[i]);
    } else {
        filesArr.push(inputArr[i]);
    }
}

//----------------->Check if All files Exist or not<---------------------

for (let i = 0; i < filesArr.length; i++) {
    let doesExist = fs.existsSync(filesArr[i]);

    if (!doesExist) {
        console.log("One or File(s) Doesnt exist");
        break;
    }
}

//----------------->Content Reading and appending starts<---------------------

let content = "";
for (let i = 0; i < filesArr.length; i++) {
    let fileContent = fs.readFileSync(filesArr[i]);
    content += fileContent + "\n";
}

console.log(content);

//----------------->Appling the Options<---------------------

let contentArr = content.split("\n");
console.table(contentArr);

let isSPresent = optionsArr.includes("-s");

if (isSPresent) {
    for (let i = 1; i < contentArr.length; i++) {
        if (
            contentArr[i] == "" &&
            (contentArr[i - 1] == "" || contentArr[i - 1] == null)
        ) {
            contentArr[i] = null;
        }
    }
    let tempArr = [];
    for (let i = 0; i < contentArr.length; i++) {
        if (contentArr[i] != null) {
            tempArr.push(contentArr[i]);
        }
    }
    console.log("data after removing extra lines\n", tempArr);
}



