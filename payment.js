const paymentForm = document.querySelector("#payment-form");

if (paymentForm) {
  paymentForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const amount = document.querySelector("#amount").value.trim();
    const method = document.querySelector("#method").value;
    const reference = document.querySelector("#reference").value.trim();
    const studentId = document.querySelector("#student-id")?.value || "STU-UNKNOWN";

    // Validate form fields
    if (!amount || !method || !reference) {
      alert("Please fill in all payment fields");
      return;
    }

    // Validate amount is a positive number
    if (isNaN(amount) || parseFloat(amount) <= 0) {
      alert("Please enter a valid amount");
      return;
    }

    const message = [
      "Hello Scholar EasyPay,",
      "I have submitted a school fee payment.",
      "",
      "Payment details:",
      `Student ID: ${studentId}`,
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
