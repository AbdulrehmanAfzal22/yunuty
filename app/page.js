import Mainhero from "./page/mainhero/page";
import Mainabout from "../app/about/mainabout/page";
export default function Home() {
  return (
    <>
    <section id="heropage">
      <Mainhero />
    </section>
    <section id="aboutpage">
      <Mainabout />
    </section>
    </>
  );
}
