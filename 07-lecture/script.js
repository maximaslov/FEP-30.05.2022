const students = [
  {
    id: 10,
    name: 'John Smith',
    marks: [10, 8, 6, 9, 8, 7]
  },
  {
    id: 11,
    name: 'John Doe',
    marks: [9, 8, 7, 6, 7]
  },
  {
    id: 12,
    name: 'Thomas Anderson',
    marks: [6, 7, 10, 8]
  },
  {
    id: 13,
    name: 'Jean-Baptiste Emanuel Zorg',
    marks: [10, 9, 8, 9]
  }
]



function averageStudentMark(id) {
  const student = students.find((student) => student.id === id);

  return arrayAverage(student.marks);
}

function averageGroupMark(students) {
  // const marks = students.reduce((acc, student) => acc.concat(student.marks), []);
  // const marks = students.map(student => student.marks).flat();
  const marks = students.flatMap(student => student.marks);

  return arrayAverage(marks);
}

function arrayAverage(arr) {
  return arr.reduce(sum) / arr.length;
}

function sum(a, b) {
  return a + b;
}