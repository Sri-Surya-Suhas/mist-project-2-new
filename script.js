document.addEventListener('DOMContentLoaded', function () {
    // Initialize Flatpickr for the birthday input
    flatpickr("#birthday", {
        dateFormat: "d/m/Y",
        maxDate: "today",
        onChange: function (selectedDates, dateStr, instance) {
            document.getElementById('displayBirthday').textContent = dateStr;
        }
    });

    const nameInput = document.getElementById('name');
    const regNumberInput = document.getElementById('regNumber');
    const yesBtn = document.getElementById('yes-btn');
    const noBtn = document.getElementById('no-btn');

    const displayName = document.getElementById('displayName');
    const displayRegNumber = document.getElementById('displayRegNumber');

    nameInput.addEventListener('input', function () {
        displayName.textContent = nameInput.value;
    });

    regNumberInput.addEventListener('input', function (e) {
        regNumberInput.value = regNumberInput.value.replace(/\D/g, '');
        if (regNumberInput.value.length > 9) {
            regNumberInput.value = regNumberInput.value.slice(0, 9);
        }
        displayRegNumber.textContent = regNumberInput.value;
    });

    yesBtn.addEventListener('click', function () {
        noBtn.style.display = 'none';
    });

    noBtn.addEventListener('click', function () {
        yesBtn.style.display = 'none';
    });
});