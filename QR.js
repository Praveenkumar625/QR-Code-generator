const container = document.querySelector(".container"),
     qrInput = document.getElementById("qrText"),
      generateQR = document.querySelector(".form button"),
      qrImg = document.querySelector(".Qrcode img")


      generateQR.addEventListener("click", () => {
        qrValue = qrInput.value

        if (!qrInput.checkValidity()) {
          // Input is not valid, display a custom validation message
          qrInput.setCustomValidity("Please enter text for the QR code.");
          qrInput.reportValidity();
          return;
      }
        generateQR.innerText = "Generating QR......."

        qrImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=170x170&data=${qrValue} `

        qrImg.addEventListener("load",()=>{
            container.classList.add("active")
            generateQR.innerText = "Generate QR Code"
        })

      })

      qrInput.addEventListener("input", () => {
        qrInput.setCustomValidity("");
        qrInput.reportValidity();
    });




      qrInput.addEventListener("keyup",()=>{
        if(!qrInput.value){
            container.classList.remove("active")
        }
      })