const fs = require('fs').promises;


async function listFiles(directoryPath) {
  try {
    const files = await fs.readdir(directoryPath);
    console.log('Files in directory:', files);
  } catch (error) {
    console.error('Error listing files:', error.message);
  }
}


async function createDirectory(directoryName) {
  try {
    await fs.mkdir(directoryName);
    console.log('Directory created:', directoryName);
  } catch (error) {
    console.error('Error creating directory:', error.message);
  }
}


async function readFileContent(filePath) {
  try {
    const content = await fs.readFile(filePath, 'utf-8');
    console.log('File content:', content);
  } catch (error) {
    console.error('Error reading file content:', error.message);
  }
}


async function writeToFile(filePath, content) {
  try {
    await fs.writeFile(filePath, content);
    console.log('File written successfully:', filePath);
  } catch (error) {
    console.error('Error writing to file:', error.message);
  }
}

module.exports = {
  listFiles,
  createDirectory,
  readFileContent,
  writeToFile,
};
