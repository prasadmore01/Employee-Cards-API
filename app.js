

let employees = new XMLHttpRequest()
let empArr = []

employees.open("GET","https://dummyjson.com/users",true)

employees.send()

employees.onload = function(){
    if(employees.status == 200){
        let response = this.responseText;
        let emp = JSON.parse(response) 
        let arr = emp
        let arrLen = arr.users

        for(let i=0;i<arrLen.length;i++){
            empArr.push(arr.users[i])
        }
    
    }
    console.log(empArr)

    
}
    
