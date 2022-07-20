/** @jsx h */
import { h } from 'preact'
import { PageProps } from '$fresh/server.ts'

export default function GreetPage(props: PageProps) {
  const { name } = props.params;
  return (
    <main>
      <h1>Greet {name}</h1>
    </main>
  )
}