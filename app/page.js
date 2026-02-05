import Mainhero from "./page/mainhero/page";
import Mainabout from "../app/about/mainabout/page";
import Privacy from "./privacy-policy/privacyhero/page";
import Privacybox from "./privacy-policy/privacybox/page";  
export default function Home() {
  return (
    <>
    {/* <section id="heropage">
      <Mainhero />
    </section>
    <section id="aboutpage">
      <Mainabout />
    </section> */}

   <Privacy />


<Privacybox/>

    </>
  );
}
