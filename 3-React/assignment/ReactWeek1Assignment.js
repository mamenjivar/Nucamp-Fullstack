class Student {
    constructor(name, email, community) {
        this.name = name;
        this.email = email;
        this.community = community;
    }
}

class Bootcamp {
    constructor(name, level, students = []){
        this.name = name;
        this.level = level;
        this.students = students;
    }

    registerStudent(studentToRegister) {
        if(this.students.includes(studentToRegister)) {
            // console.log(`The student ${this.students[this.students.indexOf(studentToRegister)].email} is already registered!`);
            console.log(`The student ${studentToRegister.email} is already registered!`);
        } else {
            this.students.push(studentToRegister);
            // console.log(`Registering ${this.students[this.students.length - 1].email} to the bootcamp Web Dev Fundamentals.`);
            console.log(`Registering ${studentToRegister.email} to the bootcamp Web Dev Fundamentals.`);
        }

        return this.students;
    }
}