async function leerTodos(){
    //espera la respuesta
    const respuesta = await fetch
    ('https://jsonplaceholder.typicode.com/todos');
    //procede una vez que ya esta echa
    const datos = await respuesta.json();

    return datos;

}

leerTodos()
    .then(usuarios => console.log(usuarios));