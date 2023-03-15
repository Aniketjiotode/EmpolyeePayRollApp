class Employee{
    id;
    name;
    profilepic;
    gender;
    department;
    salary;
    note;
    result(){
        var output=`Id: ${this.id}\n
        Name: ${this.name}\n
        profilepic: ${this.profilepic}\n
        gender: ${this.gender}\n
        deparment: ${this.department}\n
        Salary: ${this.salary}\n
        Note: ${this.note}\n`
        return output
    }
}