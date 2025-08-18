"use client"
import { useTRPC } from "@/trpc/client";

const Page = () => {
  const trpc = useTRPC();
  trpc.hello.queryOptions({ text: "Heyy" })
  return (
    <div>
      Hello World
    </div>
  )
}

export default Page
