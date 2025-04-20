import { useEffect, useState } from "react";


export function useEventsSource<T>(url: string) {
  const [isPending, setIsPending] = useState(true)
    const [data, setData] = useState<T>();
    const [error, setErrror] = useState<unknown | undefined>()

    useEffect(() => {
      const gameEvents = new EventSource(url);
  
      gameEvents.addEventListener('message', (message) => {
        try{
          setIsPending(false)
          setErrror(undefined)
            setData(JSON.parse(message.data))
        }catch(e){
            setErrror(e)
        }
      })

      gameEvents.addEventListener('error', (e) => {
        setErrror(e)
      })
  
      return () => gameEvents.close();
  
    }, [url])

    return {dataStream: data, error, isPending}
}