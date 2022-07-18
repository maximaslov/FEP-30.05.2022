class Group {
    #students = [];

    addStudent(student) {
        if (this.#isStudent(student)) {
            this.#students.push(student);
        }
    }

    #isStudent(student) {
        return student instanceof Student;
    }

    get students() {
        return this.#students;
    }

    getAverageMark() {
        // Variant 1:
        // const allMarks = this.#students
        // .reduce((acc, student) => acc.concat(student.marks), [])
        // const sum = allMarks.reduce((a, b) => a + b);
        
        // return sum / allMarks.length;

        // Variant 2:
        // const allMarks = this.#students
        // .map(student => student.marks)
        // .flat()
        const allMarks = this.#students.flatMap(student => student.marks)
        const sum = allMarks.reduce((a, b) => a + b);

        return sum / allMarks.length;
    }
}

class Student {
    constructor(name, marks) {
        this.name = name;
        this.marks = marks;
    }
}

const group = new Group();




group.addStudent(new Student('John', [10, 8]));
group.addStudent(new Student('Alex', [10, 9]));
group.addStudent(new Student('Bob', [6, 10,]));

// При добавлении валидировать тип добавляемого объекта
// и если тип не Student - игнорировать. Функцию валидатор сделать приватной
console.log(group.students.length === 3);
group.addStudent({});
console.log(group.students.length === 3);

// Выводим средний балл группы
console.log(group.getAverageMark() === (10 + 8 + 10 + 9 + 6 + 10) / 6); // 8.83

// Сделать group.students - readonly
group.students = [new Student('John', [10, 10, 5, 10])];
console.log(group.students.length === 3);
