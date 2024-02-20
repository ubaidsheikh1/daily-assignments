const fileSystemModule =require('./fileSystemModule');


async function demonstrateFileOperations() {
  
  await fileSystemModule.listFiles('./');

  
  await fileSystemModule.createDirectory('newDirectory');

  
  await fileSystemModule.readFileContent('example.txt');

  
  await fileSystemModule.writeToFile('newFile.txt', 'Hello, Node.js!');
}


demonstrateFileOperations();
