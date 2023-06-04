
// This method will trigger user permissions
Html5Qrcode.getCameras().then(devices => {
    console.log(devices)
    if (devices && devices.length) {
        cameraId = devices[0].id;

        return cameraId;
    }
}).catch(err => {
    // handle err
});

// console.log(cameraId)

const html5QrCode = new Html5Qrcode("qr-reader");

const bStart = document.getElementById("start");
const bStop = document.getElementById("stop");
const end = document.getElementById("end");

const config = { fps: 10, qrbox: { width: 250, height: 250 } };

bStart.addEventListener("click", function () {
    bStart.classList.add('d-none');
    bStop.classList.remove('d-none');
    
    html5QrCode.start(
        { facingMode: "environment" }, config,
        (decodedText, decodedResult) => {
            // do something when code is read
        },
        (errorMessage) => {
            // parse error, ignore it.
        })
})

bStop.addEventListener("click", function () {

    bStart.classList.remove('d-none');
    bStop.classList.add('d-none');

    html5QrCode.stop().then((ignore) => {
        // QR Code scanning is stopped.
    }).catch((err) => {
        // Stop failed, handle it.
    });
})