console.log(200);

data = [
    ['Пример 1 (требования или конкурент)','ТУ', 'В1','1Д','Н5','М6','Э1','К2',10,50,5],
    ['21.Kaspersky Endpoint Security версии 11.6.0.394. ','ТУ', 'В5','1В','Н3','М4','Э4','К3',67,10,0],
    ['Тест','ТУ', 'В1','0','0','0','0','0',0,100,0],
    
]

tbody = document.getElementById('tbody');
console.log(tbody);

const ous0 = function(){
    let ous = 0.0
    let name = data[0][0]
    let RDV = data[0][1]
    let SVT = data[0][2]
    let NSD = data[0][3]
    let NDV = data[0][4]
    let ME = data[0][5]
    let ECP = data[0][6]
    let PDn = data[0][7]
    let Q = data[0][8]
    let R = data[0][9]
    let other = data[0][10]
    if (RDV==="ТУ"){
        ous+=1.0
    }
    switch (SVT) {
        case "В6":
            ous+=0.17
            break
        case "В5":
            ous+=0.20
            break
        case "В4":
            ous+=0.25
            break
        case "В3":
            ous+=0.33
            break
        case "В2":
            ous+=0.50
            break
        case "В1":
            ous+=1.0
            break
        
    }
    switch (NSD) {
        case "1Д":
            ous+=1.2
            break
        case "1Г":
            ous+=1.25
            break
        case "1В":
            ous+=1.30
            break
        case "1Б":
            ous+=1.50
            break
        case "1А":
            ous+=2.00
            break
        case "2Б":
            ous+=2.50
            break
        case "2А":
            ous+=3.00
            break
        case "3Б":
            ous+=3.50
            break
        case "3А":
            ous+=4.00
            break  
    }
    switch (NDV) {
        case "Н5":
            ous+=0.20
            break
        case "Н4":
            ous+=0.25
            break
        case "Н3":
            ous+=0.33
            break
        case "Н2":
            ous+=0.50
            break
        case "Н1":
            ous+=1.00
            break
    }
    switch (ME) {
        case "М5":
            ous+=0.20
            break
        case "М4":
            ous+=0.25
            break
        case "М3":
            ous+=0.33
            break
        case "М2":
            ous+=0.50
            break
        case "М1":
            ous+=1.00
            break
    }
    switch (ECP) {
        case "Э5":
            ous+=0.20
            break
        case "Э4":
            ous+=0.25
            break
        case "Э3":
            ous+=0.33
            break
        case "Э2":
            ous+=0.50
            break
        case "Э1":
            ous+=1.00
            break
    }
    switch (PDn) {
        case "К4":
            ous+=0.25
            break
        case "К3":
            ous+=0.33
            break
        case "К2":
            ous+=0.50
            break
    }

    ous+=0.5*(Q/10)

    switch(R){
        case 10:
            console.log(`${R}=10`);
            ous+=0
            break
        case 0:
            console.log(`${R}=0`);
            ous+=10
            
            break
        default:
            console.log(`${R}!=10||0`);
            ous+=10/R
            ous+=0.5*(other/10)
            break
    }  

    return ous
}

for (var i = 0; i < data.length; i++) {
    new_item = document.createElement('tr')
    let ous = 0.0
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
    if (RDV==="ТУ"){
        ous+=1.0
    }
    switch (SVT) {
        case "В6":
            ous+=0.17
            break
        case "В5":
            ous+=0.20
            break
        case "В4":
            ous+=0.25
            break
        case "В3":
            ous+=0.33
            break
        case "В2":
            ous+=0.50
            break
        case "В1":
            ous+=1.0
            break
        
    }
    switch (NSD) {
        case "1Д":
            ous+=1.2
            break
        case "1Г":
            ous+=1.25
            break
        case "1В":
            ous+=1.30
            break
        case "1Б":
            ous+=1.50
            break
        case "1А":
            ous+=2.00
            break
        case "2Б":
            ous+=2.50
            break
        case "2А":
            ous+=3.00
            break
        case "3Б":
            ous+=3.50
            break
        case "3А":
            ous+=4.00
            break  
    }
    switch (NDV) {
        case "Н5":
            ous+=0.20
            break
        case "Н4":
            ous+=0.25
            break
        case "Н3":
            ous+=0.33
            break
        case "Н2":
            ous+=0.50
            break
        case "Н1":
            ous+=1.00
            break
    }
    switch (ME) {
        case "М5":
            ous+=0.20
            break
        case "М4":
            ous+=0.25
            break
        case "М3":
            ous+=0.33
            break
        case "М2":
            ous+=0.50
            break
        case "М1":
            ous+=1.00
            break
    }
    switch (ECP) {
        case "Э5":
            ous+=0.20
            break
        case "Э4":
            ous+=0.25
            break
        case "Э3":
            ous+=0.33
            break
        case "Э2":
            ous+=0.50
            break
        case "Э1":
            ous+=1.00
            break
    }
    switch (PDn) {
        case "К4":
            ous+=0.25
            break
        case "К3":
            ous+=0.33
            break
        case "К2":
            ous+=0.50
            break
    }

    ous+=0.5*(Q/10)

    switch(R){
        case 10:
            console.log(`${R}=10`);
            ous+=0
            break
        case 0:
            console.log(`${R}=0`);
            ous+=10
            
            break
        default:
            console.log(`${R}!=10||0`);
            ous+=10/R
            ous+=0.5*(other/10)
            break
    }       
        

    console.log(ous0())
    
    new_item.innerHTML = `<td>${name}</td><td>${RDV}</td><td>${SVT}</td><td>${NSD}</td><td>${NDV}</td><td>${ME}</td><td>${ECP}</td><td>${PDn}</td><td>${Q}</td><td>${R}</td><td>${other}</td><td>${ous.toFixed(2)}</td><td>${(ous/ous0()).toFixed(2)}</td>`
    tbody.appendChild(new_item)
    
}