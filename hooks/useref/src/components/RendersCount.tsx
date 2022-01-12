import { useEffect } from "react";

export function RendersCount() {
  useEffect(() => {
    console.log('oi')
  })

  return (
    <h1>Renders Count: 1</h1>
  )
}