/* 2372039 Khayla B */
// Darkmode
function darkMode() {
    // Memilih element body untuk diganti
    const body = document.body;
    // Menyeleksi element atribute dari element body
    const tema = body.getAttribute("data-bs-theme");

    let temaBaru;

    if (tema === "dark") {
        temaBaru = "light";
    } else {
        temaBaru = "dark";
    }

    body.setAttribute("data-bs-theme", temaBaru);
}

// Email
function sendMail(){
    var params = {
        name: document.getElementById("name").value ,
        email: document.getElementById("email").value ,
        message: document.getElementById("message").value 
    };
    const serviceID = "service_qjh4959";
    const templateID = "template_4gs6pcv";
    
    emailjs.send(serviceID,templateID,params)
    .then(
        (res) =>{
            document.getElementById("name").value = "";
            document.getElementById("email").value = "";
            document.getElementById("message").value = "";
            console.log(res);
            alert("Message sent successfully!");
        })
    .catch((err) => console.log(err));
}
