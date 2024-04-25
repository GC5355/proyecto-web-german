import Image from "next/image";
import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 ">
      <div>


        <div className="space-x-20">
          <Button>Español</Button>
          <Button>English</Button>
          <Button>German</Button>
        </div>

      </div>
    </main>
  );
}
