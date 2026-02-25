'use client';

import { Button } from '@/components/ui/button';
import { ChevronRightIcon, LoaderCircle, User } from "lucide-react";

const ButtonPage = () => {
  return (
    <section className="flex flex-wrap items-center gap-2 md:flex-row">
      <Button>default</Button>
      <Button variant="destructive">destructive</Button>
      <Button variant="ghost">ghost</Button>
      <Button variant="link">link</Button>
      <Button variant="outline">outline</Button>
      <Button variant="secondary">secondary</Button>
      <Button disabled>disabled</Button>
      <Button onClick={() => console.log("Hola Mundo")}>Click Me</Button>
      <Button variant="success">success</Button>
      <Button capitalize>capitalize false</Button>

      <Button variant="outline" size="icon">
        <ChevronRightIcon className="h-4 w-4" />
      </Button>

      <Button>
        <User /> Login with Email
      </Button>

      <Button disabled>
        <LoaderCircle className="animate-spin" />
        Please wait
      </Button>
    </section>
  );
};

export default ButtonPage;
