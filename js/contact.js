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
            "template_inj4qj5",
            form
        );

        status.innerHTML = `
            <div class="success-message">
                Thank you! Your message has been sent successfully.
            </div>
        `;

        form.reset();

    } catch (error) {

        console.error(error);

        status.innerHTML = `
            <div class="error-message-box">
                Something went wrong. Please try again later.
            </div>
        `;

    }

    button.disabled = false;

    button.innerHTML = `
        <i class="fas fa-paper-plane"></i>
        Send Message
    `;

});