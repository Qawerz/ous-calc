onload = () => window.location.href = `#calc`

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


var data = []
var bd = [
    [
        "Пример 1 (требования или конкурент)",
		"ТУ",
		"В1",
		"1Д",
		"Н5",
		"М6",
		"Э1",
		"К2",
		0,
		100,
		10,],
	[
		"Kaspersky Endpoint Security версии 11.6.0.394. ",
		"ТУ",
		"В5",
		"1В",
		"Н3",
		"М4",
		"Э4",
		"К3",
		67,
		10,
		0,
	],
	[
		"Программный комплекс Межсетевой экран с системой обнаружения вторжений Ideco UTM",
		"ТУ",
		"0",
		"0",
		"0",
		"М4",
		"0",
		"0",
		0,
		15,
		4,
	],
	[
		"Программно-аппаратный комплекс ViPNet xFirewall 5",
		"ТУ",
		"0",
		"0",
		"0",
		"М4",
		"0",
		"0",
		0,
		0,
		4,
	],
	[
		"Межсетевой экран «Mail.Ru Cloud Firewall»",
		"ТУ",
		"0",
		"0",
		"0",
		"М6",
		"0",
		"0",
		0,
		0,
		0,
	],
	[
		"Операционная система «SUSE Linux Enterprise Server for SAP Applications 15 SP3»",
		"ТУ",
		"0",
		"0",
		"0",
		"0",
		"0",
		"0",
		0,
		0,
		6,
	],
	[
		"Комплекс безопасности «Континент». Версия 4.",
		"ТУ",
		"0",
		"0",
		"0",
		"М4",
		"0",
		"0",
		0,
		0,
		4,
	],
	[
		"Специальное программное обеспечение средств защиты информации от несанкционированного доступа «Аккорд-Win64 K»",
		"ТУ",
		"В5",
		"0",
		"0",
		"0",
		"0",
		"0",
		0,
		0,
		4,
	],
	[
		"Соната-РС3", 
		"ТУ",
		"0", 
		"0", 
		"0", 
		"0", 
		"0", 
		"0", 
		0, 
		0, 
		0
	],
	[
		"Программное обеспечение «Avanpost FAM»",
		"ТУ",
		"0",
		"0",
		"0",
		"0",
		"0",
		"0",
		0,
		0,
		0,
	],
	[
		"Прикладное программное обеспечение «PostgreSQL Sber Edition»",
		"ТУ",
		"0",
		"0",
		"0",
		"0",
		"0",
		"0",
		0,
		0,
		0,
	],
	[
		"Программно-аппаратный комплекс аутентификации, управления доступом и безопасного хранения информации и персональных данных пользователей, ключевой носитель ФОРОС 2",
		"ТУ",
		"0",
		"0",
		"0",
		"0",
		"0",
		"0",
		0,
		0,
		0,
	],
	[
		"Программное обеспечение «Защита виртуальных рабочих столов ТИОНИКС»",
		"ТУ",
		"0",
		"0",
		"0",
		"0",
		"0",
		"0",
		0,
		0,
		0,
	],
	[
		"Программное обеспечение «Система контроля каналов передачи конфиденциальной информации Falcongaze SecureTower»",
		"ТУ",
		"0",
		"0",
		"0",
		"0",
		"0",
		"0",
		0,
		0,
		6,
	],
	[
		"Программное обеспечение «Единый портал государственных и муниципальных услуг»",
		"ТУ",
		"0",
		"0",
		"0",
		"0",
		"0",
		"0",
		0,
		0,
		0,
	],
	[
		"Программное обеспечение «Совокупность подсистем единого окна цифровой обратной связи государственной информационной системы «Единый портал государственных и муниципальных услуг (функций)» версия 1",
		"ТУ",
		"0",
		"0",
		"0",
		"0",
		"0",
		"0",
		0,
		0,
		0,
	],
	[
		"Специализированное программное обеспечение «Тобол-ТВ» ЦКДИ.00047-03",
		"ТУ",
		"0",
		"0",
		"0",
		"0",
		"0",
		"0",
		0,
		0,
		0,
	],
	[
		"Программный комплекс «С-Терра Клиент». Версия 4.3",
		"ТУ",
		"0",
		"0",
		"0",
		"М4",
		"0",
		"0",
		0,
		0,
		0,
	],
	[
		"Программное обеспечение «Автоматизированная информационная система Общегородская платформа совместных вычислений на агрегированных данных»",
		"ТУ",
		"0",
		"0",
		"0",
		"0",
		"0",
		"0",
		0,
		0,
		0,
	],
	[
		"«Компонент защиты информации Пергамент»",
		"ТУ",
		"0",
		"0",
		"0",
		"0",
		"0",
		"0",
		0,
		0,
		0,
	],
	[
		"Программно-аппаратный комплекс однонаправленной передачи данных Numa uGate",
		"ТУ",
		"0",
		"0",
		"0",
		"0",
		"0",
		"0",
		0,
		0,
		0,
	],
	[
		"Изделие «ViPNet SafePoint»",
		"ТУ",
		"В5",
		"0",
		"0",
		"0",
		"0",
		"0",
		0,
		0,
		4,
	],
	[
		"Directum RX", 
		"ТУ", 
		"0", 
		"0", 
		"0", 
		"0", 
		"0", 
		"0", 
		0, 
		0, 
		0
	],
	[
		"Специальное программное обеспечение «Водопад-НЧР»",
		"ТУ",
		"0",
		"0",
		"0",
		"0",
		"0",
		"0",
		0,
		0,
		0,
	],
	[
		"Система контроля действий поставщиков ИТ-услуг (СКДПУ)",
		"ТУ",
		"0",
		"0",
		"0",
		"0",
		"0",
		"0",
		0,
		0,
		0,
	],
	[
		"Прикладное программное обеспечение «Облачная платформа Сбербанка»",
		"ТУ",
		"0",
		"0",
		"0",
		"0",
		"0",
		"0",
		0,
		0,
		0,
	],
	[
		"Программное обеспечение «Информационно-поисковая система Сервис ИСОД МВД России «Незаконный оборот наркотиков»",
		"ТУ",
		"0",
		"0",
		"0",
		"0",
		"0",
		"0",
		0,
		0,
		0,
	],
	[
		"Программно-аппаратный комплекс «FortiGate» для защиты промышленной сети",
		"ТУ",
		"0",
		"0",
		"0",
		"М6",
		"0",
		"0",
		0,
		0,
		10,
	],
	[
		"Модуль защиты информации «Skillaz»",
		"ТУ",
		"0",
		"0",
		"0",
		"0",
		"0",
		"0",
		0,
		0,
		0,
	],
	[
		"Программное обеспечение «WebGard 2.0»",
		"ТУ",
		"0",
		"0",
		"0",
		"0",
		"0",
		"0",
		0,
		0,
		0,
	],
	[
		"Программный комплекс Solar Dozor версии 7",
		"ТУ",
		"0",
		"0",
		"0",
		"0",
		"0",
		"0",
		0,
		0,
		0,
	],
	[
		"Программное обеспечение «Модуль управления системы «Активный гражданин»",
		"ТУ",
		"0",
		"0",
		"0",
		"0",
		"0",
		"0",
		0,
		0,
		0,
	],
	[
		"Программное изделие «Kaspersky Unified Monitoring and Analysis Platform (версия 1.5)»",
		"ТУ",
		"0",
		"0",
		"0",
		"0",
		"0",
		"0",
		0,
		0,
		0,
	],
	[
		"Программное обеспечение «Модуль управления Автоматизированной информационной системы «Электронный дом»",
		"ТУ",
		"0",
		"0",
		"0",
		"0",
		"0",
		"0",
		0,
		0,
		0,
	],
	[
		"Фильтр электромагнитных излучений технических средств «ФИЛЬТР ФЭМИ-01»",
		"ТУ",
		"0",
		"0",
		"0",
		"0",
		"0",
		"0",
		0,
		0,
		0,
	],
	[
		"Межсетевой экран ESR-20, версия программного обеспечения 1.5",
		"ТУ",
		"0",
		"0",
		"0",
		"М4",
		"0",
		"0",
		0,
		0,
		0,
	],
	[
		"Специальное программное обеспечение средств защиты информации от несанкционированного доступа «Аккорд-Х К»",
		"ТУ",
		"В5",
		"0",
		"0",
		"0",
		"0",
		"0",
		0,
		0,
		0,
	],
	[
		"Средство аутентификации и безопасного хранения информации пользователей JaCarta",
		"ТУ",
		"0",
		"0",
		"0",
		"0",
		"0",
		"0",
		0,
		0,
		0,
	],
	[
		"Программный комплекс «Гарда БД»",
		"ТУ",
		"0",
		"0",
		"0",
		"0",
		"0",
		"0",
		0,
		0,
		0,
	]
]

const userdata = []
if(JSON.parse(window.localStorage.getItem('userdata'))){
	const _ud = JSON.parse(window.localStorage.getItem('userdata'))
	userdata = [
		..._ud
	]
}
function updatedata() {
	// console.log(data);
	var new_data = []
	new_data.push(...bd)
	new_data.push(...userdata)
	data = new_data
}

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
	updatedata()
	console.log("updating...")
	tbody.innerHTML = ""
	for (var i = 0; i < bd.length; i++) {
		// console.log(data[i]);
		new_item = document.createElement("tr")
		new_item.id = `sz${i + 1}`
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

		new_item.innerHTML = `<td>${
			i + 1
		}</td><td class="td__name">${name}</td><td>${RDV}</td><td class="td__SVT">${SVT}</td><td class="td__NSD">${NSD}</td><td class="td__NDV">${NDV}</td><td class="td__ME">${ME}</td><td class="td__ECP">${ECP}</td><td class="td__PDn">${PDn}</td><td class="td__Q">${Q}</td><td class="td__R">${R}</td><td class="td__other">${other}</td><td>${ous_.toFixed(
			2
		)}</td><td>${(ous_ / ous(data[0])).toFixed(
			2
		)}</td><td class='del' onclick="deltd(${i+1})">&times</td>`
		tbody.appendChild(new_item)
	}
	for (var i = bd.length; i < bd.length+userdata.length; i++) {
		// console.log(data[i]);
		new_item = document.createElement("tr")
		new_item.classList.add('useradded')
		new_item.id = `sz${i + 1}`
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

		new_item.innerHTML = `<td>${
			i + 1
		}</td><td class="td__name">${name}</td><td>${RDV}</td><td class="td__SVT">${SVT}</td><td class="td__NSD">${NSD}</td><td class="td__NDV">${NDV}</td><td class="td__ME">${ME}</td><td class="td__ECP">${ECP}</td><td class="td__PDn">${PDn}</td><td class="td__Q">${Q}</td><td class="td__R">${R}</td><td class="td__other">${other}</td><td>${ous_.toFixed(
			2
		)}</td><td>${(ous_ / ous(data[0])).toFixed(
			2
		)}</td><td class='del' onclick="deltd(${i+1})">&times</td>`
		tbody.appendChild(new_item)
	}
}
updateTree()



btn_sub.addEventListener("click", () => {
	if (inp_name.value) {
		userdata.push([
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
		closeModal()
		
		
		window.localStorage.setItem('userdata', JSON.stringify(userdata))
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

// btn_clr.addEventListener("click", () => {
// 	clrinp()
// })

function refresh() {
	document.querySelectorAll('th').forEach(th => th.classList.remove('th-sort-asc', 'th-sort-desc'))
	document.querySelector('#search').value = ''
	document.querySelector('#filter_SVT').value = ''
	document.querySelector('#filter_NSD').value = ''
	document.querySelector('#filter_NDV').value = ''
	document.querySelector('#filter_ME').value = ''
	document.querySelector('#filter_ECP').value = ''
	document.querySelector('#filter_PDn').value = ''
	document.querySelector('#filter_Q').value = ''
	document.querySelector('#filter_R').value = ''
	document.querySelector('#filter_other').value = ''
	document.querySelector('#filter_useradded').checked = false
	updateTree()
}

function deltd(index) {
	let tr = document.getElementById(`sz${index}`)
	const tr_p = tr.parentNode
	console.log(index);
	if (confirm("Вы уверенны?")) {
		if(tr.classList.contains('useradded')){
			userdata.splice(index-bd.length-1,1)
			console.log(userdata);
			window.localStorage.setItem('userdata', JSON.stringify(userdata))
		}else{
			bd.splice(index-1,1)
		}
		updateTree()
		
	}
}

document.querySelector("#search").oninput = function(){
    let val = this.value.trim().toLowerCase();
    let items = document.querySelectorAll('#tbody tr')
    if (val != ''){
        items.forEach(function(element){
            if(element.querySelector('.td__name').innerText.toLowerCase().search(val) == -1){
                element.classList.add('hide')
            }else{
                element.classList.remove('hide')
            }
        })
    }else{
        items.forEach(function(element){
            element.classList.remove('hide')
        })
    }
}
document.querySelector("#filter_SVT").oninput = function(){
    let val = this.value.trim().toLowerCase();
    let items = document.querySelectorAll('#tbody tr')
    if (val != ''){
        items.forEach(function(element){
            if(element.querySelector('.td__SVT').innerText.toLowerCase().search(val) == -1){
                element.classList.add('hide')
            }else{
                element.classList.remove('hide')
            }
        })
    }else{
        items.forEach(function(element){
            element.classList.remove('hide')
        })
    }
}
document.querySelector("#filter_NSD").oninput = function(){
    let val = this.value.trim().toLowerCase();
    let items = document.querySelectorAll('#tbody tr')
    if (val != ''){
        items.forEach(function(element){
            if(element.querySelector('.td__NSD').innerText.toLowerCase().search(val) == -1){
                element.classList.add('hide')
            }else{
                element.classList.remove('hide')
            }
        })
    }else{
        items.forEach(function(element){
            element.classList.remove('hide')
        })
    }
}
document.querySelector("#filter_NDV").oninput = function(){
    let val = this.value.trim().toLowerCase();
    let items = document.querySelectorAll('#tbody tr')
    if (val != ''){
        items.forEach(function(element){
            if(element.querySelector('.td__NDV').innerText.toLowerCase().search(val) == -1){
                element.classList.add('hide')
            }else{
                element.classList.remove('hide')
            }
        })
    }else{
        items.forEach(function(element){
            element.classList.remove('hide')
        })
    }
}
document.querySelector("#filter_ME").oninput = function(){
    let val = this.value.trim().toLowerCase();
    let items = document.querySelectorAll('#tbody tr')
    if (val != ''){
        items.forEach(function(element){
            if(element.querySelector('.td__ME').innerText.toLowerCase().search(val) == -1){
                element.classList.add('hide')
            }else{
                element.classList.remove('hide')
            }
        })
    }else{
        items.forEach(function(element){
            element.classList.remove('hide')
        })
    }
}
document.querySelector("#filter_ECP").oninput = function(){
    let val = this.value.trim().toLowerCase();
    let items = document.querySelectorAll('#tbody tr')
    if (val != ''){
        items.forEach(function(element){
            if(element.querySelector('.td__ECP').innerText.toLowerCase().search(val) == -1){
                element.classList.add('hide')
            }else{
                element.classList.remove('hide')
            }
        })
    }else{
        items.forEach(function(element){
            element.classList.remove('hide')
        })
    }
}
document.querySelector("#filter_PDn").oninput = function(){
    let val = this.value.trim().toLowerCase();
    let items = document.querySelectorAll('#tbody tr')
    if (val != ''){
        items.forEach(function(element){
            if(element.querySelector('.td__PDn').innerText.toLowerCase().search(val) == -1){
                element.classList.add('hide')
            }else{
                element.classList.remove('hide')
            }
        })
    }else{
        items.forEach(function(element){
            element.classList.remove('hide')
        })
    }
}
document.querySelector("#filter_Q").oninput = function(){
    let val = this.value.trim().toLowerCase();
    let items = document.querySelectorAll('#tbody tr')
    if (val != ''){
        items.forEach(function(element){
            if(element.querySelector('.td__Q').innerText.toLowerCase().search(val) == -1){
                element.classList.add('hide')
            }else{
                element.classList.remove('hide')
            }
        })
    }else{
        items.forEach(function(element){
            element.classList.remove('hide')
        })
    }
}
document.querySelector("#filter_R").oninput = function(){
    let val = this.value.trim().toLowerCase();
    let items = document.querySelectorAll('#tbody tr')
    if (val != ''){
        items.forEach(function(element){
            if(element.querySelector('.td__R').innerText.toLowerCase().search(val) == -1){
                element.classList.add('hide')
            }else{
                element.classList.remove('hide')
            }
        })
    }else{
        items.forEach(function(element){
            element.classList.remove('hide')
        })
    }
}
function filter_uadd(){
	let val = document.querySelector("#filter_useradded")
    let items = document.querySelectorAll('#tbody tr')
    if (val.checked){
        items.forEach(function(element){
            if (!element.classList.contains("useradded")){
				element.classList.add("hide")
			}else{
				element.classList.remove("hide")
			}
        })
    }else{
        items.forEach(function(element){
            element.classList.remove('hide')
        })
    }
}
document.querySelector("#filter_other").oninput = function(){
    let val = this.value.trim();
    let items = document.querySelectorAll('#tbody tr')
    if (val != ''){
        items.forEach(function(element){
            if(element.querySelector('.td__other').innerText.toLowerCase().search(val) == -1){
                element.classList.add('hide')
            }else{
                element.classList.remove('hide')
            }
        })
    }else{
        items.forEach(function(element){
            element.classList.remove('hide')
        })
    }
}


function sortTable(table, column, asc = true){
    const dirMode = asc ? 1 : -1
    const tBody = table.tBodies[0]
    const rows = Array.from(tbody.querySelectorAll('tr'))
    
    const sortedRows = rows.sort((a, b) =>{
        const aColText = a.querySelector(`td:nth-child(${column + 1})`).textContent.trim()
        const bColText = b.querySelector(`td:nth-child(${column + 1})`).textContent.trim()

        return aColText > bColText ? (1 * dirMode) : (-1 * dirMode)
    })

    while (tBody.firstChild) {
        tBody.removeChild(tBody.firstChild)
    }

    tBody.append(...sortedRows)

    table.querySelectorAll('th').forEach(th => th.classList.remove('th-sort-asc', 'th-sort-desc'))
    table.querySelector(`th:nth-child(${column + 1 })`).classList.toggle('th-sort-asc', asc)
    table.querySelector(`th:nth-child(${column + 1 })`).classList.toggle('th-sort-desc', !asc)
}

document.querySelectorAll('.table th').forEach(handlerCell =>{
    handlerCell.addEventListener('click', ()=>{
        if (!handlerCell.classList.contains("no-sort")){
            const tableElement = handlerCell.parentElement.parentElement.parentElement
            const handlerIndex = Array.prototype.indexOf.call(handlerCell.parentElement.children, handlerCell)
            const currentIsAscending = handlerCell.classList.contains('th-sort-desc')
            sortTable(tableElement, handlerIndex, currentIsAscending)
        }
            
    })
})

/// Модальное окно
function showCover(){
	let coverDiv = document.createElement('div');
    coverDiv.id = 'cover-div';
	document.body.style.overflowY = 'hidden';
    document.body.append(coverDiv);
}

function hideCover() {
	document.getElementById('cover-div').remove();
	document.body.style.overflowY = '';
}

function showModal() {
	showCover()
	let container = document.getElementById('modal');

	container.style.display = 'flex';
	document.getElementById('inp_name').focus();
}

function closeModal(){
	hideCover()
	clrinp()
	let container = document.getElementById('modal');
	container.style.display = 'none';
}

function toggleFilter(){
	let btn = document.getElementById('open_filter')
	if (btn.classList.contains('open')){
		btn.classList.remove('open');
		btn.classList.add('close')
		document.querySelector('.filter__group').classList.add('hide')
	}else{
		btn.classList.add('open');
		btn.classList.remove('close')
		document.querySelector('.filter__group').classList.remove('hide')
	}
	
}

const tab_btns = document.querySelectorAll("#tabs_btn_list li")

tab_btns.forEach(btn=> {
	btn.addEventListener("click", ()=>{
		window.location.href = btn.getAttribute('href')
		btn.parentNode.querySelectorAll('li').forEach(btn => btn.classList.remove('active'))
		btn.classList.add('active')
	})
})


function calcnowous(){
	const nowous = document.getElementById("nowous")
	const sel_RDV = document.getElementById("calc_sel_RDV")
	const sel_SVT = document.getElementById("calc_sel_SVT")
	const sel_NSD = document.getElementById("calc_sel_NSD")
	const sel_NDV = document.getElementById("calc_sel_NDV")
	const sel_ME = document.getElementById("calc_sel_ME")
	const sel_ECP = document.getElementById("calc_sel_ECP")
	const sel_PDn = document.getElementById("calc_sel_PDn")
	const inp_Q = document.getElementById("calc_inp_Q")
	const inp_R = document.getElementById("calc_inp_R")
	const inp_oth = document.getElementById("calc_inp_oth")

	// console.log(sel_RDV, sel_SVT, sel_NSD,sel_NDV,sel_ME,sel_ECP,sel_PDn);
	nowous.innerText = ous(['_', sel_RDV.value, sel_SVT.value, sel_NSD.value,sel_NDV.value,sel_ME.value,sel_ECP.value,sel_PDn.value, Number(inp_Q.value),Number(inp_R.value),Number(inp_oth.value)]).toFixed(2)
}
calcnowous()


function addtotable(){
	const sel_RDV = document.getElementById("calc_sel_RDV")
	const sel_SVT = document.getElementById("calc_sel_SVT")
	const sel_NSD = document.getElementById("calc_sel_NSD")
	const sel_NDV = document.getElementById("calc_sel_NDV")
	const sel_ME = document.getElementById("calc_sel_ME")
	const sel_ECP = document.getElementById("calc_sel_ECP")
	const sel_PDn = document.getElementById("calc_sel_PDn")
	const inp_Q = document.getElementById("calc_inp_Q")
	const inp_R = document.getElementById("calc_inp_R")
	const inp_oth = document.getElementById("calc_inp_oth")

	const name = prompt('Введите название')

if (name){
	userdata.push([
		name,
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
	
	window.localStorage.setItem('userdata', JSON.stringify(userdata))
}

}


function screenshot(){
	const canvas = document.createElement('canvas')
	const ctx = canvas.getContext('2d')
	
	const sel_RDV = document.getElementById("calc_sel_RDV")
	const sel_SVT = document.getElementById("calc_sel_SVT")
	const sel_NSD = document.getElementById("calc_sel_NSD")
	const sel_NDV = document.getElementById("calc_sel_NDV")
	const sel_ME = document.getElementById("calc_sel_ME")
	const sel_ECP = document.getElementById("calc_sel_ECP")
	const sel_PDn = document.getElementById("calc_sel_PDn")
	const inp_Q = document.getElementById("calc_inp_Q")
	const inp_R = document.getElementById("calc_inp_R")
	const inp_oth = document.getElementById("calc_inp_oth")

	ctx.beginPath()
	ctx.fillStyle = `#000`
	ctx.rect(0, 0, 1000, 1000)
	ctx.fill()
	ctx.fillStyle ='#fff'
	ctx.font = '20px arial'
	ctx.fillText(`РДВ(ТУ) - ${sel_RDV.value}`, 20, 20)
	ctx.fillText(`СВТ - ${sel_SVT.value}`, 20, 40)
	ctx.fillText(`НСД - ${sel_NSD.value}`, 20, 60)
	ctx.fillText(`НДВ - ${sel_NDV.value}`, 20, 80)
	ctx.fillText(`МЭ - ${sel_ME.value}`, 20, 100)
	ctx.fillText(`ЭЦП - ${sel_ECP.value}`, 150, 20)
	ctx.fillText(`ПДн - ${sel_PDn.value}`, 150, 40)
	ctx.fillText(`Q - ${inp_Q.value}`, 150, 60)
	ctx.fillText(`R - ${inp_R.value}`, 150, 80)
	ctx.fillText(`Другое - ${inp_oth.value}`, 150, 100)
	ctx.fillText(`ОУС - ${ous(['_', sel_RDV.value, sel_SVT.value, sel_NSD.value,sel_NDV.value,sel_ME.value,sel_ECP.value,sel_PDn.value, Number(inp_Q.value),Number(inp_R.value),Number(inp_oth.value)]).toFixed(2)}`, 100, 140)
	
	var link = document.createElement('a');
	link.download = 'filename.jpg';
	link.href = canvas.toDataURL()
	link.click();
	
	
	ctx.closePath()


}