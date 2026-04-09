# CodeCraft Solutions Website

A professional, responsive one-page website for CodeCraft Solutions - a web solutions business focusing on small local businesses.

## Features

- Modern, responsive design
- Hero section with clear value proposition
- Services section highlighting offerings
- Pricing packages with detailed features
- Sample work showcase
- Contact form with Resend API integration
- Mobile-friendly layout

## File Structure

```
codecraft-website/
├── index.html
├── css/
│   └── style.css
├── js/
│   └── script.js
├── images/
│   ├── placeholder1.jpg
│   ├── placeholder2.jpg
│   └── placeholder3.jpg
└── README.md
```

## Setup Instructions

### 1. Replace Sample Images
Replace the placeholder images in the `images/` folder with actual screenshots of your sample websites:
- `placeholder1.jpg` → Screenshot of paradise-restarunt-perundurai.vercel.app
- `placeholder2.jpg` → Screenshot of mayabazzar-restaurant-lr5f.vercel.app
- `placeholder3.jpg` → Screenshot of adventuretrip-drab.vercel.app

### 2. Resend API Integration (Important Security Note)

**For Security Reasons:** Never expose your Resend API key directly in client-side JavaScript. The current implementation includes a simulated send function for demonstration.

**Recommended Implementation Options:**

#### Option A: Backend Proxy (Recommended)
Create a simple backend endpoint to handle the email sending:

1. **Using Netlify Functions** (if deploying to Netlify):
   - Create `netlify/functions/send-email.js`
   - Add your Resend API key as an environment variable
   - Update the fetch URL in script.js to `/.netlify/functions/send-email`

2. **Using Vercel Serverless Functions** (if deploying to Vercel):
   - Create `api/send-email.js`
   - Add your Resend API key as an environment variable
   - Update the fetch URL in script.js to `/api/send-email`

3. **Custom Backend** (Node.js, PHP, Python, etc.):
   - Create an endpoint that receives the form data
   - Uses your Resend API key securely stored on your server
   - Sends the email via Resend API
   - Update script.js to point to your endpoint

#### Option B: Third-Party Integration Services
- **Zapier/Make**: Connect your form to these services which can then use Resend API
- **Formspree/Getform**: Use their forwarding capabilities

#### Option C: Simplified Approach (For Testing Only)
If you're just testing and understand the security implications:
1. Uncomment the direct Resend API call in `js/script.js`
2. Replace the placeholder API key with your actual key: `re_VtZpLZhQ_ADY3B78G6ofrqvEJGrABn8Px`
3. **WARNING**: This exposes your API key to anyone who views your page source

### 3. WhatsApp Integration
To make the WhatsApp number click-to-chat:
- Replace the WhatsApp text with: `<a href="https://wa.me/6382639957">6382639957</a>`
- Or add this to your contact section: `<p><strong>WhatsApp:</strong> <a href="https://wa.me/6382639957">6382639957</a></p>`

### 4. Email Link
To make the email clickable:
- Replace the email text with: `<a href="mailto:deepakmanjunathan33@gmail.com">deepakmanjunathan33@gmail.com</a>`
- Or add this to your contact section: `<p><strong>Email:</strong> <a href="mailto:deepakmanjunathan33@gmail.com">deepakmanjunathan33@gmail.com</a></p>`

## Customization

### Colors
Primary colors are defined in `css/style.css`:
- Primary purple: `#667eea`
- Secondary purple: `#764ba2`
- Accent red: `#ff6b6b`

### Fonts
The website uses system fonts for maximum compatibility:
- 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif

### Content Updates
All text content is in `index.html` and can be easily modified:
- Update hero section text
- Modify service descriptions
- Adjust package details and pricing
- Change sample work descriptions
- Update contact information

## Deployment

This website can be deployed to any static hosting service:
- Netlify (drag & drop or git connect)
- Vercel (git connect)
- GitHub Pages
- Firebase Hosting
- AWS S3 + CloudFront
- Any traditional web hosting

## Browser Support
- Chrome, Firefox, Safari, Edge (latest versions)
- Mobile browsers (iOS Safari, Android Chrome)
- IE11 (with limited CSS features - consider adding fallbacks if needed)

## Security Notes
1. **API Key Security**: Never expose your Resend API key in client-side code
2. **Form Validation**: Always validate and sanitize form data on the server side
3. **CORS**: If using a backend proxy, ensure proper CORS configuration
4. **Rate Limiting**: Consider implementing rate limiting on your email endpoint
5. **Spam Protection**: Consider adding reCAPTCHA or honeypot fields to your form

## Troubleshooting

### Form Not Sending
1. Check browser console for JavaScript errors
2. Verify your backend endpoint is receiving requests
3. Confirm your Resend API key is valid and has sending permissions
4. Check that your domain is verified with Resend (if using verified domain sender)

### Styling Issues
1. Clear browser cache
2. Check for CSS syntax errors
3. Verify mobile responsiveness with browser dev tools

### Image Display
1. Ensure image files are in the correct `images/` folder
2. Verify file names match exactly (case-sensitive)
3. Check file permissions if self-hosting

## Contact
For questions or support, contact:
- WhatsApp: 6382639957
- Email: deepakmanjunathan33@gmail.com