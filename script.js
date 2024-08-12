document.addEventListener('DOMContentLoaded', () => {
    const apiURL = 'https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=brl';

    function buscarPrecoBitcoin() {
        fetch(apiURL)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Erro na resposta da API');
                }
                return response.json();
            })
            .then(data => {
                const preco = data.bitcoin.brl;
                document.getElementById('btc-price').textContent = preco.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
            })
            .catch(error => {
                console.error('Erro ao buscar o preço do Bitcoin:', error);
                document.getElementById('btc-price').textContent = 'Erro ao carregar preço';
            });
    }

    setInterval(buscarPrecoBitcoin, 10000);
    buscarPrecoBitcoin();
});