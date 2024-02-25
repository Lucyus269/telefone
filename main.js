const form = document.getElementById('form-contato');
let linhas = '';
form.addEventListener('submit',function(e){
    e.preventDefault();

    const inputContato = document.getElementById('Contato');
    const inputTelefone = document.getElementById('Telefone');


    let linha = '<tr>';
    linha += `<td>${inputContato.value}</td>`;
    linha += `<td>${inputTelefone.value}</td>`;
    linha += `</tr>`;

    linhas += linha;

    const CorpoTabela = document.querySelector('tbody');
    CorpoTabela.innerHTML = linhas;

    
})