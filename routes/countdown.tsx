/** @jsx h */
import { h } from "preact";

import Countdown from "../islands/Countdown.tsx";

export default function Page() {
  const date = new Date();
  date.setHours(date.getHours() + 1);
  return (
    <div>
      <p>
        The big event is happening <Countdown target={date.toISOString()} />.
      </p>
    </div>
  );
}