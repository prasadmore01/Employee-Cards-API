

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
   

    for(let i=0;i<empArr.length;i++){
        let cards = document.createElement('div')
        cards.classList.add('cardBox')

        let img = document.createElement('img')
        img.src = empArr[i].image

        let h1 = document.createElement('h1')
        h1.textContent = empArr[i].firstName

        let h2 = document.createElement('h2')
        h2.textContent = empArr[i].email

        let h3 = document.createElement('h2')
        h3.textContent = empArr[i].birthDate

        let h4 = document.createElement('h2')
        h4.textContent = empArr[i].gender

        let h5 = document.createElement('h2')
        h5.textContent = empArr[i].phone

        card.appendChild(cards)
        cards.appendChild(img)
        cards.appendChild(h1)
        cards.appendChild(h2)
        cards.appendChild(h3)
        cards.appendChild(h4)
        cards.appendChild(h5)

        

        console.log(cards)
    }

}
    
