function sample(){
    if(true){
    var x = 100
    let y = 200
    const z = 300

    console.log(x)
    console.log(y)
    console.log(z)

    var x = 150
    console.log(x)
    }}
//sample()

function sample1(){
    var x = 'Hello'
    console.log(x[0])

    var myarray = [100,"Hello",9.05];
    console.log("Before:",myarray[0])
    myarray[0] = 500
    console.log("After",myarray[0])

    console.log(myarray)

    myarray.push('NewItem')
    console.log(myarray)

    myarray[6] = 656
    console.log(myarray)

    var array_2d = [[20,"First",0.21],[10,"Second"]]
    console.log(array_2d)
    console.log(array_2d[1])
    console.log(array_2d[1][1])
}
//sample1()

function sample2(p1,p2,p3){
    var new_item = ""
    new_item = p1+p2+p3
    return new_item
}

// console.log(sample2("Hello ","World"))

class Student {
    constructor(name, rNo){
        this.Student_Name = name
        this.Roll_No = rNo
        this.Email = name+"@gmail.com"
    }

    showDetails(){
        console.log("Name: ", this.Student_Name)
        console.log("Roll No: ", this.Roll_No)
        console.log("Email: ", this.Email )
    }
}

const sampObject = new Student("ASDF", 101)
const sampObject1 = new Student("ABCD", 102)

sampObject.showDetails()
sampObject1.showDetails()
