// Object representing a student
const student = {
    name: "John Doe",
    age: 18,
    grade: 75,
    subjects: ["Math", "English", "Science"]
  };
  
  // Function to display student information
  function displayInfo() {
    console.log(`Name: ${this.name}, Age: ${this.age}, Grade: ${this.grade}`);
  }
  
  // Use bind to create a new function with the student object bound as its context
  const boundDisplayInfo = displayInfo.bind(student);
  
  // Invoke boundDisplayInfo to display the student's information
  boundDisplayInfo();
  
  // Modify the function to accept an additional parameter for a message
  // and display both the message and the student's information using apply and call
  function displayInfoWithMessage(message) {
    console.log(`${message} - Name: ${this.name}, Age: ${this.age}, Grade: ${this.grade}`);
  }
  
  displayInfoWithMessage.apply(student, ["Student Info"]); // Using apply
  displayInfoWithMessage.call(student, "Student Info");    // Using call
  
  // Function to process subjects with a callback function
  function processSubjects(subjects, callback) {
    subjects.forEach(callback);
  }
  
  // Callback function to process each subject
  function subjectCallback(subject) {
    console.log(`Processing subject: ${subject}`);
  }
  
  processSubjects(student.subjects, subjectCallback);
  
  // Function to double the grades using map
  function doubleGrades(student) {
    const doubledGrades = student.subjects.map(subject => ({
      subject,
      originalGrade: student.grade,
      doubledGrade: student.grade * 2
    }));
  
    console.log("Original Grades:", student.grade);
    console.log("Modified Grades:", doubledGrades);
  }
  
  doubleGrades(student);
  
  // Function to find and display passing subjects using filter
  function passingSubjects(student, passingGrade) {
    const passedSubjects = student.subjects.filter(subject => student.grade >= passingGrade);
  
    console.log(`Subjects with grade >= ${passingGrade}:`, passedSubjects);
  }
  
  passingSubjects(student, 70);
  
       
    

 
 
