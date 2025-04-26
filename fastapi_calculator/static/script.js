document.getElementById('calc-form').addEventListener('submit', async function(e) {
    e.preventDefault();

    const num1 = document.getElementById('num1').value;
    const num2 = document.getElementById('num2').value;
    const operation = document.getElementById('operation').value;

    const formData = new FormData();
    formData.append('num1', num1);
    formData.append('num2', num2);
    formData.append('operation', operation);

    const response = await fetch('/calculate', {
        method: 'POST',
        body: formData
    });

    const data = await response.json();

    if (data.result !== undefined) {
        document.getElementById('result').innerText = "Result: " + data.result;
    } else {
        document.getElementById('result').innerText = "Error: " + data.error;
    }
});