console.log(`${200} - OK`)

var data = [
	["Пример 1 (требования или конкурент)","ТУ","В1","1Д","Н5","М6","Э1","К2",0,100,10],
	["Kaspersky Endpoint Security версии 11.6.0.394. ","ТУ","В5","1В","Н3","М4","Э4","К3",67,10,0],
	["Тест", "ТУ", "В1", "0", "0", "0", "0", "0", 0, 100, 0],
]

tbody = document.getElementById("tbody")
function ous(data) {
	let ous = 0.0
	let name = data[0]
	let RDV = data[1]
	let SVT = data[2]
	let NSD = data[3]
	let NDV = data[4]
	let ME = data[5]
	let ECP = data[6]
	let PDn = data[7]
	let Q = data[8]
	let R = data[9]
	let other = data[10]
	if (RDV === "ТУ") {
		ous += 1.0
	}
	switch (SVT) {
		case "В6":
			ous += 0.17
			break
		case "В5":
			ous += 0.2
			break
		case "В4":
			ous += 0.25
			break
		case "В3":
			ous += 0.33
			break
		case "В2":
			ous += 0.5
			break
		case "В1":
			ous += 1.0
			break
	}
	switch (NSD) {
		case "1Д":
			ous += 1.2
			break
		case "1Г":
			ous += 1.25
			break
		case "1В":
			ous += 1.3
			break
		case "1Б":
			ous += 1.5
			break
		case "1А":
			ous += 2.0
			break
		case "2Б":
			ous += 2.5
			break
		case "2А":
			ous += 3.0
			break
		case "3Б":
			ous += 3.5
			break
		case "3А":
			ous += 4.0
			break
	}
	switch (NDV) {
		case "Н5":
			ous += 0.2
			break
		case "Н4":
			ous += 0.25
			break
		case "Н3":
			ous += 0.33
			break
		case "Н2":
			ous += 0.5
			break
		case "Н1":
			ous += 1.0
			break
	}
	switch (ME) {
		case "М5":
			ous += 0.2
			break
		case "М4":
			ous += 0.25
			break
		case "М3":
			ous += 0.33
			break
		case "М2":
			ous += 0.5
			break
		case "М1":
			ous += 1.0
			break
	}
	switch (ECP) {
		case "Э5":
			ous += 0.2
			break
		case "Э4":
			ous += 0.25
			break
		case "Э3":
			ous += 0.33
			break
		case "Э2":
			ous += 0.5
			break
		case "Э1":
			ous += 1.0
			break
	}
	switch (PDn) {
		case "К4":
			ous += 0.25
			break
		case "К3":
			ous += 0.33
			break
		case "К2":
			ous += 0.5
			break
	}

	ous += 0.5 * (Q / 10)

	switch (R) {
		case 10:
			ous += 0
			break
		case 0:
			ous += 10
			break
		default:
			ous += 10 / R
			ous += 0.5 * (other / 10)
			break
	}

	return ous
}
function updateTree() {
	console.log("updating...")
	tbody.innerHTML = ""
	for (var i = 0; i < data.length; i++) {
		new_item = document.createElement("tr")
        new_item.id = `sz${i+1}`

		let ous_ = ous(data[i])
		let name = data[i][0]
        let RDV = data[i][1]
        let SVT = data[i][2]
        let NSD = data[i][3]
        let NDV = data[i][4]
        let ME = data[i][5]
        let ECP = data[i][6]
        let PDn = data[i][7]
        let Q = data[i][8]
        let R = data[i][9]
        let other = data[i][10]
	

		new_item.innerHTML = `<td>${i+1}</td><td>${name}</td><td>${RDV}</td><td>${SVT}</td><td>${NSD}</td><td>${NDV}</td><td>${ME}</td><td>${ECP}</td><td>${PDn}</td><td>${Q}</td><td>${R}</td><td>${other}</td><td>${ous_.toFixed(2)}</td><td>${(ous_ / ous(data[0])).toFixed(2)}</td><td class='del' onclick="deltd(${i+1})">&times</td>`
		tbody.appendChild(new_item)
	}
}
updateTree()

const inp_name = document.getElementById("inp_name")
const sel_RDV = document.getElementById("sel_RDV")
const sel_SVT = document.getElementById("sel_SVT")
const sel_NSD = document.getElementById("sel_NSD")
const sel_NDV = document.getElementById("sel_NDV")
const sel_ME = document.getElementById("sel_ME")
const sel_ECP = document.getElementById("sel_ECP")
const sel_PDn = document.getElementById("sel_PDn")
const inp_Q = document.getElementById("inp_Q")
const inp_R = document.getElementById("inp_R")
const inp_oth = document.getElementById("inp_oth")
const btn_sub = document.getElementById("btn_sub")
const btn_clr = document.getElementById("btn_clr")

btn_sub.addEventListener("click", () => {
	if (inp_name.value) {
		data.push([
			inp_name.value,
			sel_RDV.value,
			sel_SVT.value,
			sel_NSD.value,
			sel_NDV.value,
			sel_ME.value,
			sel_ECP.value,
			sel_PDn.value,
			Number(inp_Q.value),
			Number(inp_R.value),
			Number(inp_oth.value),
		])
		updateTree()
		clrinp()
	} else {
		alert("Введите название!")
	}
})

function clrinp() {
	inp_name.value = ""
	sel_RDV.value = 0
	sel_SVT.value = 0
	sel_NSD.value = 0
	sel_NDV.value = 0
	sel_ME.value = 0
	sel_ECP.value = 0
	sel_PDn.value = 0
	inp_Q.value = 0
	inp_R.value = 0
	inp_oth.value = 0
}

btn_clr.addEventListener("click", () => {
	clrinp()
})

function deltd(index){
    console.log(index);
    let td = document.getElementById(`sz${index}`)
    if(confirm('Вы уверенны?')){
        data.splice(index-1, 1)
        updateTree()
    }
}