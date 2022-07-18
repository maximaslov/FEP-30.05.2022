import Student from './Student.js';

class Group {
    #students = [];

    get students() {
        return this.#students;
    }

    addStudent(student) {
        if (this.#isStudent(student)) {
            this.#students.push(student);
        }
    }

    #isStudent(student) {
        return student instanceof Student;
    }

    getAverageMark() {
        const sum = this.getMarksSum();

        if (!sum) {
            return 0;
        }

        return sum / this.#students.length;
    }

    getMarksSum() {
        return this.#students
        .reduce((acc, student) => acc + student.getAverageMark(), 0);
    }
}

export default Group;
