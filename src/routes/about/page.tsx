import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

function AboutPage() {
  return (
    <div className="w-full h-full flex justify-center items-center">
      <main className="flex gap-8 flex-col">
        <h1 className="text-8xl font-bold">AboutPage</h1>
        <Button asChild>
          <Link to={"/"}>Go to Home</Link>
        </Button>
      </main>
    </div>
  );
}

export default AboutPage;
