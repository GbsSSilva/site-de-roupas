function consultaCep() {
    var cep = document.getElementById("destinationZip").value.replace(/\D/g, '');
    var url = 'https://viacep.com.br/ws/' + cep + '/json/';
    var request = new XMLHttpRequest();

    request.open('GET', url);
    request.onerror = function (e) {
        document.getElementById('return').innerHTML = 'API OFFLINE OU CEP INVALIDO';
    }
    request.onload = () => {
        var response = JSON.parse(request.responseText);

        if (response.erro === true) {
            document.getElementById('return').innerHTML = 'CEP NAO ENCONTRADO';
        } else {
            document.getElementById('return').innerHTML = 'CEP: ' + response.cep + '<br>' +
                'Endereço: ' + response.logradouro + '<br>' +
                'Frete R$33,40 em até 7 dias úteis ' + '<br>' +
                'Cidade/UF: ' + response.localidade + ' / ' + response.uf;

            document.getElementById('payment-section').style.display = 'block';
        }
    }
    request.send();
}

function payNow() {
    alert('Pagamento realizado com sucesso!');
}
