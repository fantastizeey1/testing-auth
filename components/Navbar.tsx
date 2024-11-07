import Link from "next/link";
import React from "react";
import { auth, signOut, signIn } from "@/auth";

const Navbar = async () => {
  const session = await auth();
  return (
    <header>
      <nav>
        <Link href="/" className="text-2xl leading-4">
          home
        </Link>

        <div>
          {session && session?.user ? (
            <>
              <form
                action={async () => {
                  "use server";

                  await signOut({ redirectTo: "/" });
                }}
              >
                <button type="submit">
                  <span className="max-sm:hidden">Logout</span>
                </button>
              </form>

              <Link href={`/user/${session?.id}`}>
                {session?.user?.name || ""}
              </Link>
            </>
          ) : (
            <form
              action={async () => {
                "use server";
                await signIn("github");
              }}
            >
              <button type="submit">Login with GitHub</button>
            </form>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
