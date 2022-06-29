const grades = [
    {
        firstName: "Nardine",
        lastName: "George",
        grade: 90
    },
    {
        firstName: "Jude",
        lastName: "Clark",
        grade: 99
    }
]
const form = document.getElementById("inputForm")
const tableBody = document.getElementById("table-body")

form.addEventListener("submit", (e) => {
    e.preventDefault()
    submitForm()
})

function submitForm() {
    const newGrade = {
        firstName: document.getElementById('fname').value,
        lastName: document.getElementById('lname').value,
        grade: document.getElementById('score').value
    }
    console.log(newGrade)
    grades.push(newGrade)
    renderTable();
}

function renderTable() {
    tableBody.innerHTML="";
    for (let i = 0; i < grades.length; i++) {
        //create a tr
        let tr = document.createElement('tr')
        //set innerHTML of tr to be 3 tds
        tr.innerHTML = `
        <td>${grades[i].firstName}</td>
         <td>${grades[i].lastName}</td>
         <td>${grades[i].grade}</td>`
        //append tr to tableBody
        tableBody.append(tr)
    }

}
renderTable();