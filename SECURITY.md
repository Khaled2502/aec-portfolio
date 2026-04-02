# Security & Setup Guide

## Environment Variables

This project uses environment variables for sensitive data. **Never commit `.env.local`** to version control.

### Setup

1. Copy `.env.example` to `.env.local`:

```bash
cp .env.example .env.local
```

2. Add your credentials to `.env.local`:

```
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

### Getting EmailJS Credentials

1. Visit [EmailJS](https://www.emailjs.com/)
2. Create a free account
3. Add an Email Service
4. Create an Email Template
5. Get your Service ID, Template ID, and Public Key
6. Add them to `.env.local`

### Security Best Practices

- ✅ All sensitive data in `.env.local`
- ✅ `.env.local` in `.gitignore`
- ✅ Use environment variables for configuration
- ✅ Don't hardcode API keys or credentials
- ✅ Review code before contributing

### Important Files

- `.env.example` - Template for environment variables (safe to commit)
- `.env.local` - Your local credentials (NEVER commit)
- `.gitignore` - Lists files to exclude from version control

### Development

For local development:

```bash
npm run dev
```

### Production Build

Before deploying:

1. Ensure all environment variables are set
2. Build locally: `npm run build`
3. Test the build: `npm run preview`
4. Configure environment variables in your hosting platform
