const volunteerForm = document.getElementById("volunteer-form");
const volunteerStatus = document.getElementById("volunteer-status");

if (volunteerForm) {

    volunteerForm.addEventListener("submit", async (e) => {

        e.preventDefault();

        const button = volunteerForm.querySelector("button[type='submit']");

        button.disabled = true;
        button.textContent = "Submitting...";

        try {

            await emailjs.sendForm(
                "service_rclnuxd",
                "template_mev597u",
                volunteerForm
            );

            volunteerStatus.innerHTML = `
                <div class="success-message">
                    Thank you for registering as a volunteer. We will contact you soon.
                </div>
            `;

            volunteerForm.reset();

        } catch (error) {

            console.error(error);

            volunteerStatus.innerHTML = `
                <div class="error-message-box">
                    Failed to submit your application. Please try again later.
                </div>
            `;
        }

        button.disabled = false;
        button.textContent = "Register as Volunteer";

    });

}