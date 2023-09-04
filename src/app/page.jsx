"use client"
import { Card } from "@/components/card/Card";
import { SpotfifyAuth } from "@/helpers/auth";
import { useEffect } from "react";
export default function Home() {
  //const router = useRouter();
  const authenticateUser = async (code) => {
    const res = await SpotfifyAuth(code);
    console.log(res);
  };
  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const spotifyCode = urlParams.get("code");
    console.log(spotifyCode);
    if (spotifyCode) authenticateUser(spotifyCode);
  }, [location.search]);
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
