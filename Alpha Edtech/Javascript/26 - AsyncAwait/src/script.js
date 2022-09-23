//alert("hey");

$(document).ready(async function (){
    const NAME = [];
    const getName = await getNameById(9);
    console.log(getName);

    NAME.push(getName);
    console.log(NAME);
    //const test = $("#characther").value;
   //console.log(test);
    const chekCharacther = await confirmByName(NAME);
    console.log(chekCharacther);
    
   

});

async function getNameById(id){
   let dataName;
    const promise = await $.ajax({ url: `https://rickandmortyapi.com/api/character/${id}`})
    .done( (data) => {
      //  console.log(data);
       $("#characther").append(data.name);
       dataName = data.name;
    });

    return dataName;
}

async function confirmByName(name){
    let response = false;
 
    await $.ajax({ url: `https://rickandmortyapi.com/api/character/?name=${name[0]}`})
        .done( (data) => {
            console.log(data.results);
            $("#found").append(data.results.length + " " + name + " foram encontrados.");
            response = true;
    });
    
    return response;
    
}