// Initialize EmailJS
emailjs.init("uC6XtZ3KqAtCBzm0V");

const form = document.getElementById("contact-form");
const status = document.getElementById("form-status");

form.addEventListener("submit", async (e) => {

    e.preventDefault();

    const button = form.querySelector("button[type='submit']");

    button.disabled = true;

    button.innerHTML = `
        <i class="fas fa-spinner fa-spin"></i>
        Sending...
    `;

    try {

        await emailjs.sendForm(
            "service_rclnuxd",
            "template_57pd72g",
            form
        );

        status.innerHTML = `
            <div class="success-message">
                Thank you! Your message has been sent successfully.
            </div>
        `;

        form.reset();

    } catch (error) {
    console.log("FULL ERROR:", error);
    console.log("STATUS:", error.status);
    console.log("TEXT:", error.text);
}

    button.disabled = false;

    button.innerHTML = `
        <i class="fas fa-paper-plane"></i>
        Send Message
    `;
});