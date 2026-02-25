/* eslint-disable @next/next/no-img-element */
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const getData = async () => {
  await new Promise((resolve) => setTimeout(resolve, 2500));

  return {
    title: "Video destacado",
    description: "Aprende a usar loading.tsx en Next.js",
    thumbnail: "https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=800&auto=format&fit=crop",
  };
};

const SkeletonPage = async () => {
  const data = await getData();

  return (
    <section className="flex justify-center p-6">
      <Card className="w-full max-w-xs">
        <CardHeader>
          <CardTitle className="text-base">{data.title}</CardTitle>
          <CardDescription>{data.description}</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="aspect-video w-full overflow-hidden rounded-md bg-muted">
            <img
              src={data.thumbnail}
              alt="Thumbnail del video"
              className="h-full w-full object-cover"
            />
          </div>
        </CardContent>
      </Card>
    </section>
  );
};

export default SkeletonPage;
