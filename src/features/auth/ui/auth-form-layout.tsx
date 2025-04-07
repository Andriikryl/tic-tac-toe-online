import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/shared/ui/card";
export function AuthFormLayout({
  title,
  description,
  filds,
  actions,
  link,
  onSubmit,
  error,
}: {
  title: string;
  description: string;
  filds: React.ReactNode;
  actions: React.ReactNode;
  link: React.ReactNode;
  error: React.ReactNode;
  onSubmit: React.FormEventHandler<HTMLFormElement>;
}) {
  return (
    <Card className="w-full max-w-md">
      <CardHeader className="space-y-1">
        <CardTitle className="text-2xl font-bold text-center">
          {title}
        </CardTitle>
        <CardDescription className="text-center">{description}</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <form action="" onSubmit={onSubmit}>
          {filds}
          {error}
        </form>
      </CardContent>
      <CardFooter className="flex flex-col space-y-4">
        {actions}
        {link}
      </CardFooter>
    </Card>
  );
}
