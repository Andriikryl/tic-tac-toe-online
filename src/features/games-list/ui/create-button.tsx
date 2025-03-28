import { Button } from "@/shared/ui/button";


export  function CreateButton({action} : {action: () => Promise<void>}) {
  return (
    <Button onClick={action}>
        craete game
    </Button>
  );
}
