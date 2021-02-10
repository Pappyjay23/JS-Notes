var employee = {
    name: "John Smith",
    job: "Programmer",
    age: 31,
    nameLength: function name() {
        console.log(employee.name.length)
    },
    mod:function mod() {
        alert("Name is " + employee.name + ", Job is " + employee.job + ", Age is "+ employee.age )
    },
    lastName: function(){
        alert("Last Name is: " + this.name.split(" ")[1])
    } 
}