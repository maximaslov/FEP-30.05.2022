class Student {
    constructor(name, marks) {
        this.name = name;
        this.marks = marks;
    }

    getAverageMark() {
        const sum = this.marks.reduce(this.sum);

        return sum / this.marks.length;
    }

    sum(a, b) {
        return a + b;
    }
}

export default Student;
