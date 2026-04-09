// Contact Form Submission Handler
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');
    const formStatus = document.getElementById('formStatus');

    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();

        // Get form values
        const name = document.getElementById('name').value.trim();
        const business = document.getElementById('business').value.trim();
        const message = document.getElementById('message').value.trim();

        // Basic validation
        if (!name || !business || !message) {
            showStatus('Please fill in all fields', 'error');
            return;
        }

        // Show loading state
        showStatus('Sending your message...', '');
        contactForm.querySelector('button[type="submit"]').disabled = true;

        // Prepare data for Resend API
        const emailData = {
            from: "CodeCraft Solutions <onboarding@resend.dev>", // You'll need to verify your domain with Resend
            to: ["deepakmanjunathan33@gmail.com"],
            subject: `New Website Inquiry from ${business}`,
            html: `
                <h2>New Website Inquiry</h2>
                <p><strong>Name:</strong> ${escapeHtml(name)}</p>
                <p><strong>Business:</strong> ${escapeHtml(business)}</p>
                <p><strong>Message:</strong> ${escapeHtml(message.replace(/\n/g, '<br>'))}</p>
                <hr>
                <p><small>Sent from CodeCraft Solutions website contact form</small></p>
            `
        };

        // Send to Resend API (using a proxy or your own backend for security)
        // For production, you should use a backend service to hide your API key
        sendEmailViaResend(emailData);
    });

    function showStatus(message, type) {
        formStatus.textContent = message;
        formStatus.className = type; // 'success', 'error', or ''

        // Clear status after 5 seconds for success/error messages
        if (type === 'success' || type === 'error') {
            setTimeout(() => {
                formStatus.textContent = '';
                formStatus.className = '';
            }, 5000);
        }
    }

    function escapeHtml(text) {
        const map = {
            '&': '&amp;',
            '<': '&lt;',
            '>': '&gt;',
            '"': '&quot;',
            "'": '&#039;'
        };

        return text.replace(/[&<>"']/g, function(m) { return map[m]; });
    }

    function sendEmailViaResend(data) {
        // IMPORTANT: For security, never expose your Resend API key in client-side code
        // This example shows the concept, but you should implement a backend proxy

        // Option 1: Using a backend proxy (recommended for production)
        // fetch('/api/send-email', {
        //     method: 'POST',
        //     headers: {
        //         'Content-Type': 'application/json'
        //     },
        //     body: JSON.stringify(data)
        // })

        // Option 2: Direct Resend API call (NOT recommended for production due to security)
        // Uncomment the following lines ONLY for testing/development
        /*
        fetch('https://api.resend.com/emails', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer re_VtZpLZhQ_ADY3B78G6ofrqvEJGrABn8Px' // YOUR API KEY - KEEP SECRET!
            },
            body: JSON.stringify(data)
        })
        */

        // For demonstration purposes, we'll simulate a successful send
        // In a real implementation, you would use one of the methods above
        simulateEmailSend();
    }

    function simulateEmailSend() {
        // Simulate network delay
        setTimeout(() => {
            // Simulate success
            showStatus('Message sent successfully! I\'ll get back to you soon.', 'success');
            contactForm.reset();
            contactForm.querySelector('button[type="submit"]').disabled = false;

            // In case of error, you would use:
            // showStatus('Failed to send message. Please try again.', 'error');
            // contactForm.querySelector('button[type="submit"]').disabled = false;
        }, 1500);
    }
});