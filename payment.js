const paymentForm = document.querySelector("#payment-form");

if (paymentForm) {
  paymentForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const amount = document.querySelector("#amount").value.trim();
    const method = document.querySelector("#method").value;
    const reference = document.querySelector("#reference").value.trim();
    const message = [
      "Hello Scholar EasyPay,",
      "I have submitted a school fee payment.",
      "",
      "Payment details:",
      "Student ID: STU-2026-0142",
      `Amount paid: ${amount} FCFA`,
      `Payment method: ${method}`,
      `Transaction/reference: ${reference}`,
      "",
      "Please reply with feedback or confirmation of this payment.",
    ].join("\n");

    const whatsappUrl = `https://wa.me/237651518452?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
  });
}
