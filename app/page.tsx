import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className="home">
      <h1>Components list</h1>
      <p><a href="/carousel" className="underline-offset-1">Carousel</a></p>
      <p><a href="/modal">Modal</a></p>
      <p><a href="/reactTabs">ReactTabs</a></p>
    </div>
  );
}
