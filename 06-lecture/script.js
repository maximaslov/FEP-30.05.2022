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

// console.log(averageStudentMark(11));
console.log(averageGroupMark(students));

function averageStudentMark(id) {
  const student = students.find((student) => student.id === id);
  const sum = student.marks.reduce((acc, mark) => acc + mark);

  return sum / student.marks.length;
}

function averageGroupMark(students) {
  const marks = students.reduce((acc, student) => {
      return acc.concat(student.marks)
  }, []);
  const sum = marks.reduce((acc, mark) => acc + mark);

  return sum / marks.length;
}