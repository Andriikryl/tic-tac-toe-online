import { sessionService } from "@/entities/user/server";
import { Button } from "@/shared/ui/button";
import { redirect } from "next/navigation";

export default async function PrivateLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { session } = await sessionService.verifySession();
  return (
    <main>
      <header>
        <h1>Tick tck toe online</h1>
      </header>
      <hr />
      <div>
        <p>Login: {session.login}</p>
      </div>
      <form action={
        async () => {
            "use server";
            sessionService.deleteSession()
            redirect("/sign-in")
        }
      }>
        <Button>Sign out</Button>
      </form>
      {children}
    </main>
  );
}
