"use client"
import { useContext } from 'react'
import { GlobalStateContext } from './store/context'

export default function Home() {
  const state = useContext(GlobalStateContext);
  console.log(state);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className='text-white'>Count: {state.count}</h1>
    </main>
  )
}
