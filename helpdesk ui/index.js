document.querySelector('#file-input').addEventListener('change', function (e) {
    const fileName = e.target.files[0].name;
    document.querySelector('.custom-label').textContent = `Selected: ${fileName}`;
});
