const input = document.getElementById("conteudo");
const select = document.getElementById("options");
const tabela = document.querySelector("table");

const inserir = document.getElementById("Insert");
const procurar = document.getElementById("Search");
let fetchv;
procurar.addEventListener("click", async () => {
    const tipo = select.options[select.selectedIndex].value;
    const texto = input.value;
 
    if (tipo == "mes"){        
       fetchv = await fetch(`http://localhost:3000/aniversariantes/?month=${texto}`)
        .then(res => res.text())
        .catch(error  => error);
        insertTable();

    }else if (tipo == "setor"){
        fetchv  =  await fetch(`http://localhost:3000/setor/?sector=${texto}`)
        .then(res => res.text())
        .catch(error  => error);
        insertTable();
    }else{
        fetchv =  await fetch(`http://localhost:3000/ramal/?ramal=${texto}`)
        .then(res => res.text())
        .catch(error  => error);
        insertTable();
    }
});
	
select.addEventListener("change", () => {
		input.value = "";
});

function  insertTable(){
    const p = JSON.parse(fetchv);
    let textresp = "";
    let size =  p.length;
	if (size == 0 ){
		tabela.innerHTML =  "nada encontrado";
	}
	else{
		textresp += "<tr> <th> Id </th> <th> Nome </th> <th> E-mail </th> <th> Ramal </th> <th> Nascimento </th><th> Setor </th></tr>";

		p.forEach( (p) => {
			textresp += "<tr> <td> " + p.id + " </td> <td> " + p.name + " </td> <td> " + p.email + " </td><td> " + p.extension + " </td><td> " + p.birthDay + " </td><td> " + p.sector + " </td>";
		});

		textresp += " </tr>";

		tabela.innerHTML =  textresp;
	}
}

inserir.addEventListener("click", async () => {
    const id = document.getElementById('numMatricula').value;
    const name = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const extension = document.getElementById('ramal').value;
    const birthDay = document.getElementById('data').value;
    const sector = document.getElementById('setor').value;
   
    const response = await fetch("http://localhost:3000/json", {
            method: 'POST',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            },
            body: `{
                    "id": ${id},
                    "name": "${name}",
                    "email": "${email}",
                    "extension": ${extension},
                    "birthDay": "${birthDay}",
                    "sector": "${sector}"
              }`,
    });
    clearInputs();
});

function clearInputs(){
    document.getElementById('numMatricula').value = "";
    document.getElementById('nome').value = "";
    document.getElementById('email').value = "";
    document.getElementById('ramal').value = "";
    document.getElementById('data').value = "";
    document.getElementById('setor').value = "";
}