document.addEventListener('DOMContentLoaded', function () {
    const numberInput = document.getElementById('numberInput');

    numberInput.addEventListener('input', function () {
        let inputValue = numberInput.value.replace(/\./g, ''); // Remove existing dots
        inputValue = inputValue.replace(/\D/g, ''); // Remove non-numeric characters
        numberInput.value = formatNumber(inputValue);
    });

    function formatNumber(number) {
        return number.replace(/\B(?=(\d{3})+(?!\d))/g, '.');
    }
});