import styles from "./page.module.css";

export const metadata = {
  title: "About | The Postmortem",
  description: "Learn about our mission and journalistic standards.",
};

export default function AboutPage() {
  return (
    <main className={styles.container}>
      <header className={styles.header}>
        <h1 className={styles.title}>About The Postmortem</h1>
      </header>
      <section className={styles.content}>
        <p>
          The Postmortem is an independent investigative journalism platform dedicated to exposing corruption, analyzing evidence, and holding power accountable in India.
        </p>
        <p>
          We operate without political affiliations or corporate interference. Our only employer is the Constitution of India, and our only clients are the people of India. We follow the evidence wherever it leads, verifying facts rigorously before publication.
        </p>
        <p>
          If you have secure tips or evidence of wrongdoing, please use our <a href="/submit" style={{ color: "var(--accent)" }}>Secure Submission</a> portal.
        </p>
      </section>
    </main>
  );
}
