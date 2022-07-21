/** @jsx h */
import { h } from "preact";
import { tw } from "@twind";
import Counter from "../islands/Counter.tsx";

export default function Home() {
  return (
    <div class={tw`p-4 mx-auto max-w-screen-md`}>
      <img
        src="/logo.svg"
        height="100px"
        alt="the fresh logo: a sliced lemon dripping with juice"
      />
      <p class={tw`my-6`}>
        Welcome to `fresh`. Try update this message in the ./routes/index.tsx
        file, and refresh.
      </p>
      <div>
        <span>The Counter</span>
        <Counter start={3} />
      </div>

      <p class={tw`leading-8`}><a class={tw`underline text-blue-400`} href="/about">About Page</a></p>
      <p class={tw`leading-8`}><a class={tw`underline text-blue-400`} href="/countdown">Countdown Page</a></p>
      <p class={tw`leading-8`}><a class={tw`underline text-blue-400`} href="/search">Search Page</a></p>
      <p class={tw`leading-8`}><a class={tw`underline text-blue-400`} href="/jack">Dynamic Name Page (`jack` is the name param)</a></p>
      <p class={tw`leading-8`}><a class={tw`underline text-blue-400`} href="/github/luoyjx">Dynamic Github User Page (`luoyjx` is the username param)</a></p>
      <p class={tw`leading-8`}><a class={tw`underline text-blue-400`} href="/greet/bob">Dynamic Greet To Name Page (`bob` is the name param)</a></p>
      <p class={tw`leading-8`}><a class={tw`underline text-blue-400`} href="/api/joke">The Joke API return random joke</a></p>
      <p class={tw`leading-8`}><a class={tw`underline text-blue-400`} href="/api/random-uuid">The Random uuid API</a></p>
    </div>
  );
}
