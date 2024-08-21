document.getElementById('scanBtn').addEventListener('click', function () {
    let html5QrCode = new Html5Qrcode("reader");
    
    const qrCodeSuccessCallback = (decodedText, decodedResult) => {
        // decodedText contendrá el valor escaneado del QR
        document.getElementById('dni').value = decodedText;
        
        // Detener el escaneo
        html5QrCode.stop().then(() => {
            console.log("Escaneo detenido.");
        }).catch(err => {
            console.log("Error al detener el escaneo:", err);
        });

        // Enviar el formulario automáticamente
        document.getElementById('dniForm').submit();
    };

    const config = { fps: 10, qrbox: { width: 250, height: 250 } };

    html5QrCode.start({ facingMode: "environment" }, config, qrCodeSuccessCallback)
    .catch(err => {
        console.log("Error al iniciar el escaneo:", err);
    });
});
