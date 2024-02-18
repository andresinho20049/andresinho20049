import Script from "next/script";
import type { Graph, Thing, WithContext } from "schema-dts";

export function JsonLd<T extends Thing>(json: WithContext<T>) {
  return (
    <Script
      id={json["@context"] || ""}
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(json),
      }}
    />
  );
}

const date = new Date().toISOString().split('T')[0];

export const GraphSchemaOrg: Graph = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Blog",
      "@id": "https://andresinho20049.com.br/home",
      name: "André Carlos",
      description:
        "Hello, I'm André Carlos, I'm a developer with a bachelor's degree in Computer Science and more than 5 years of experience, I present my portfolio.",
      about: "Introduce me for you",
      copyrightYear: "2024",
      award: ["Developer", "Software engineer", "Full stack"],
      dateCreated: "2024-01-26",
      dateModified: date,
      image: [
        "https://andresinho20049.com.br/Logo.png",
        "https://andresinho20049.com.br/avatar/Me-min.png",
      ],
      headline: "I'm André Carlos",
    },
    {
      "@type": "ContactPage",
      "@id": "https://andresinho20049.com.br/contact",
      name: "Contact | Andresinho20049",
      description:
        "Feel free to contact us (andresinho20049 team), we will get back to you as soon as possible.",
    },
    {
      "@type": "AboutPage",
      "@id": "https://andresinho20049.com.br/about",
      name: "About | Andresinho20049",
      description:
        "A responsive website demonstrating some of my skills linked to its delivery and development.",
      mentions: ["Nextjs", "Tailwind", "Photoshop", "React", "Typescript"],
    },
  ],
};