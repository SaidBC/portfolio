import Link from "next/link";
import { DetailedHTMLProps, HTMLAttributes } from "react";

export default function Links(
  props: DetailedHTMLProps<HTMLAttributes<HTMLUListElement>, HTMLUListElement>
) {
  return (
    <ul {...props}>
      <li>
        <Link href="/#home">HOME</Link>
      </li>
      <li>
        <Link href="#collection">COLLECTIONS</Link>
      </li>
      <li>
        <Link href="#reviews">REVIEWS</Link>
      </li>
      <li>
        <Link href="#contact">CONTACT</Link>
      </li>
    </ul>
  );
}
