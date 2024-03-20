document.querySelector('button').addEventListener('click', function () {
    let select = document.querySelector('select[name="select"]');
    let opcao = select.options[select.selectedIndex].value
    let input = document.querySelector('input').value

    fetch(`https://swapi.dev/api/${opcao}/?search=${input}`)
        .then((resp) => resp.json())
        .then((data) => console.log(data))
    
    
})