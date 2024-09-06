import Image from "next/image";
import styles from "../styles/About.module.css";
export default function About() {
  return (
    <div className={styles.about}>
      <h1>Sobre o Projeto</h1>
      <p>
        Nisi laboris voluptate culpa anim Lorem fugiat deserunt non aute quis ex
        culpa est esse. Tempor et id ullamco voluptate proident nisi commodo
        enim. Officia deserunt magna qui aute sint eiusmod est ex. Dolor ad
        incididunt ad amet nulla ex minim mollit pariatur fugiat tempor do.
        Ipsum non deserunt cupidatat laborum minim ad aliqua laborum velit Lorem
        adipisicing.
      </p>
      <Image
        src="/images/charizard.png"
        width="300"
        height="300"
        alt="charizard"
      />
    </div>
  );
}
