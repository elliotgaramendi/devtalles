import { Badge } from "@/components/ui/badge";

const BadgePage = () => {
  return (
    <section className="flex flex-wrap items-center gap-2 md:flex-row">
      <Badge capitalize>default</Badge>
      <Badge variant="destructive">destructive</Badge>
      <Badge variant="secondary">secondary</Badge>
      <Badge variant="outline">outline</Badge>
      <Badge capitalize variant="info">
        info
      </Badge>
      <Badge capitalize variant="success">
        success
      </Badge>
    </section>
  );
};

export default BadgePage;
