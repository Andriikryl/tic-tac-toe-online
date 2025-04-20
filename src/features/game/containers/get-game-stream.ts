import { sseStream } from "@/shared/lib/sse/server";
import { NextRequest } from "next/server";

export function getGameStream(res: NextRequest){
   const {
    close, response, addCloseListener, write
   } = sseStream(res)

   let counter = 1;
   const inteval = setInterval(() => {
    write(counter++)
   }, 1000)
   addCloseListener(() => {
    clearInterval(inteval)
   })
   return response
}