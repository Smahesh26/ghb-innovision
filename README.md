This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## Contact Form Email Setup (Vercel + Resend)

The contact form submits to `/api/contact` and sends email to `contact@innovision.co.in`.

### 1) Required environment variables

Add these in Vercel Project Settings → Environment Variables:

- `RESEND_API_KEY`
- `CONTACT_FROM_EMAIL` (example: `noreply@innovision.co.in`)
- `CONTACT_TO_EMAIL` (set to `contact@innovision.co.in`)

For local testing, create `.env.local` in the project root with the same keys.

### 2) Resend domain verification

- Add and verify your domain in Resend.
- Configure required DNS records (SPF/DKIM) in your DNS provider.
- Ensure `CONTACT_FROM_EMAIL` uses a verified sender/domain.

### 3) Deploy

- Push changes to GitHub.
- Deploy on Vercel (Hobby/free plan is enough for starter usage).
- Submit the form from the site and confirm receipt at `contact@innovision.co.in`.
