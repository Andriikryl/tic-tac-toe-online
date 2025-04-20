import { useEffect, useState } from "react";


export function useEventsSource<T>(url: string, def: T) {
    const [data, setData] = useState<T>(def);
    const [error, setErrror] = useState<unknown | undefined>()

    useEffect(() => {
      const gameEvents = new EventSource(url);
  
      gameEvents.addEventListener('message', (message) => {
        try{
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

    return {dataStream: data, error}
}