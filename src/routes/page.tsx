import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

function HomePage() {
  return (
    <div className="w-full h-full flex justify-center items-center">
      <main className="flex gap-8 flex-col">
        <h1 className="text-8xl font-bold">HomePage</h1>
        <Button asChild>
          <Link to={"/about"}>Go to About</Link>
        </Button>
      </main>
    </div>
  );
}

export default HomePage;
