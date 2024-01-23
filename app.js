

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
    display()

    
}



function display(){
    console.log(empArr)
    let card = document.getElementById('card')
    let fname = document.getElementById('fname')
    let email = document.getElementById('email')
    let bday = document.getElementById('bday')
    let gender = document.getElementById('gender')
    let pno = document.getElementById('pno')

    for(let i=0;i<empArr.length;i++){
        let cards = document.createElement('div')
        fname.innerText = empArr[i].firstName
        email.innerText = empArr[i].email
        bday.innerText = empArr[i].birthDate
        gender.innerText = empArr[i].gender
        pno.innerText = empArr[i].phone


        cards.appendChild()
        cards.appendChild(email.innerText)
        cards.appendChild(bday.innerText)
        cards.appendChild(gender.innerText)
        cards.appendChild(pno.innerText)
        card.appendChild(cards)
        

        console.log(cards)
    }

}
    
