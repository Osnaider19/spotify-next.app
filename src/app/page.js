import { Card } from "@/components/card/Card";

export default function Home() {
  return (
    <section>
      <div className="relative p-4 flex flex-col gap-x-4 justify-start items-start w-full h-full flex-wrap gap-y-3 pt-[65px]">
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </section>
  );
}
