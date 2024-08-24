document.getElementById('consultaForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const spinner = document.getElementById('spinner');
    const statusLabel = document.getElementById('statusLabel');
    const paymentDate = document.getElementById('paymentDate');
    const paymentMethod = document.getElementById('paymentMethod');
    statusLabel.innerText = '';
    paymentDate.innerText = '';
    paymentMethod.innerText = '';
    statusLabel.className = '';
    spinner.style.display = 'flex';

    setTimeout(function() {
        const status = Math.random() > 0.5 ? 'em dia' : 'atrasado';
        if (status === 'em dia') {
            const date = new Date();
            const randomDay = Math.floor(Math.random() * 28) + 1;
            const randomMonth = Math.floor(Math.random() * 12);
            const paymentDateObj = new Date(date.getFullYear(), randomMonth, randomDay);
            const formattedDate = paymentDateObj.toLocaleDateString('pt-BR');
            const paymentMethods = ['cartão', 'boleto'];
            const randomMethod = paymentMethods[Math.floor(Math.random() * paymentMethods.length)];
            statusLabel.innerText = 'em dia';
            paymentDate.innerText = `Data do pagamento: ${formattedDate}`;
            paymentMethod.innerText = `Método de pagamento: ${randomMethod}`;
            statusLabel.classList.add('status-em-dia');
        } else {
            statusLabel.innerText = 'atrasado';
            statusLabel.classList.add('status-atrasado');
        }
        spinner.style.display = 'none';
    }, 2000);
});
