# Next.js GitHub Authentication Example

This project demonstrates how to implement GitHub authentication in a Next.js application using NextAuth.js.

## Getting Started

First, set up your development environment:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open http://localhost:3000 with your browser to see the result.

Implementation

1. Install Dependencies
   Install NextAuth.js and its dependencies:

```bash
npm install next-auth
# or
yarn add next-auth
```

2. Configure NextAuth.js
   Create a file pages/api/auth/[...nextauth].js with the following content:

```javascript
import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";

export default NextAuth({
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
  ],
});
```

3. Set Up Environment Variables
   Create a .env.local file in the root of your project:

```env
GITHUB_ID=your_github_client_id
GITHUB_SECRET=your_github_client_secret
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=your_nextauth_secret
```

Replace your_github_client_id and your_github_client_secret with your actual GitHub OAuth credentials.

4. Implement Authentication in Your App
   Update your pages/\_app.js file:

```javascript
import { SessionProvider } from "next-auth/react";

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  return (
    <SessionProvider session={session}>
      <Component {...pageProps} />
    </SessionProvider>
  );
}

export default MyApp;
```

5. Create Login and Logout Buttons
   In your desired component
   javascript
   Insert Code
   Edit
   Copy code

```javascript
import { signIn, signOut, useSession } from "next-auth/react";

export default function AuthButtons() {
  const { data: session } = useSession();

  if (session) {
    return (
      <>
        Signed in as {session.user.email} <br />
        <button onClick={() => signOut()}>Sign out</button>
      </>
    );
  }
  return (
    <>
      Not signed in <br />
      <button onClick={() => signIn("github")}>Sign in with GitHub</button>
    </>
  );
}
```

6. Use the Authentication Component
   In your pages/index.js or any other page:

```javascript
import AuthButtons from "../components/AuthButtons";

export default function Home() {
  return (
    <div>
      <h1>Next.js GitHub Authentication Example</h1>
      <AuthButtons />
    </div>
  );
}
```

Learn More
To learn more about Next.js and NextAuth.js, check out the following resources:
Next.js Documentation
NextAuth.js Documentation
GitHub OAuth Documentation
Deploy on Vercel
The easiest way to deploy your Next.js app is to use the Vercel Platform from the creators of Next.js.

Check out the Next.js deployment documentation for more details.
