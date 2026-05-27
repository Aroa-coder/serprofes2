emailjs.init("WWhuw24ku4i7VkBl4");

const form = document.getElementById("contact-form");

let canSend = true;

form.addEventListener("submit", function (e) {
  e.preventDefault();

  if (!canSend) return;

  canSend = false;

  emailjs.sendForm(
    "service_pib4zxs",
    "template_ky3566r",
    this
  )
  .then(() => {

    const msg = document.createElement("p");
    msg.textContent = "Mensaje enviado correctamente 🚀";
    msg.style.color = "#C084FC";
    msg.style.marginTop = "20px";
    msg.style.fontWeight = "500";

    form.appendChild(msg);
    form.reset();

    setTimeout(() => msg.remove(), 3000);

  })
  .catch((error) => {
    console.log(error);
    alert("Error al enviar el mensaje");
  });

  setTimeout(() => {
    canSend = true;
  }, 4000);
});

emailjs.init("WWhuw24ku4i7VkBl4");

const form = document.getElementById("contact-form");
const button = form.querySelector("button");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  // Estado loading
  button.disabled = true;
  button.textContent = "Enviando...";

  emailjs.sendForm(
    "service_pib4zxs",
    "template_ky3566r",
    this
  )
  .then(() => {

    // Mensaje bonito
    const msg = document.createElement("p");
    msg.textContent = "✅ Mensaje enviado correctamente";
    msg.style.color = "#C084FC";
    msg.style.marginTop = "20px";
    msg.style.fontWeight = "500";

    form.appendChild(msg);
    form.reset();

    // Reset botón
    button.textContent = "Enviar mensaje";

    setTimeout(() => msg.remove(), 3000);

  })
  .catch((error) => {
    console.log(error);

    const msg = document.createElement("p");
    msg.textContent = "❌ Error al enviar el mensaje";
    msg.style.color = "red";
    msg.style.marginTop = "20px";

    form.appendChild(msg);

  })
  .finally(() => {
    button.disabled = false;
    button.textContent = "Enviar mensaje";
  });
});