# OWALI ULLAH SHAWON "s PORTFOLIO

## Contact form (EmailJS) setup

1. Create a `.env.local` file in the project root with:

```
REACT_APP_EMAILJS_SERVICE_ID=your_service_id
REACT_APP_EMAILJS_TEMPLATE_ID=your_template_id
REACT_APP_EMAILJS_PUBLIC_KEY=your_public_key
```

2. Restart the dev server after changes. In production, configure these env vars in your host.

3. Ensure your EmailJS template expects fields: `user_name`, `user_email`, `subject`, `phone`, `message`.

## Scripts

- Start: `npm start`
- Build: `npm run build`
- Format: `npm run format`
