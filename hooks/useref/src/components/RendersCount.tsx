import { useEffect, useRef } from "react";

export function RendersCount() {
  const rendersCount = useRef(0)

  useEffect(() => {
    rendersCount.current += 1;
  })

  return (
    <h1>Renders Count: {rendersCount.current}</h1>
  )
}