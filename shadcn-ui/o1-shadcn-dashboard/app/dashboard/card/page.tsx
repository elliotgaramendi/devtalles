/* eslint-disable @next/next/no-img-element */
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardAction,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const CardPage = () => {
  const cards = Array(8).fill(null);

  return (
    <section>
      <div className="grid gap-4 grid-cols-[repeat(auto-fit,minmax(256px,1fr))]">
        {cards.map((_, index) => (
          <Card key={index} className="relative w-full pt-0">
            <div className="absolute inset-0 aspect-video bg-black/35" />
            <img
              src={`https://avatar.vercel.sh/shadcn${index}`}
              alt="Event cover"
              className="relative aspect-video w-full object-cover brightness-60 grayscale dark:brightness-40"
            />
            <CardHeader>
              <CardAction>
                <Badge variant="secondary">Featured</Badge>
              </CardAction>
              <CardTitle>Design systems meetup</CardTitle>
              <CardDescription>
                A practical talk on component APIs, accessibility, and shipping
                faster.
              </CardDescription>
            </CardHeader>
            <CardFooter>
              <Button className="w-full">View Event</Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default CardPage;
