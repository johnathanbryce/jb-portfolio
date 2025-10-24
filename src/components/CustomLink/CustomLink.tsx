import React from "react";
import styles from "./CustomLink.module.css";
// Next.js
import Link from "next/link";

interface CustomLinkProps {
  title: string;
  href: string;
  disclaimer?: boolean;
}

export default function CustomLink({ href, title, disclaimer }: CustomLinkProps) {
  const mcqMarketsDisclaimer = `*Note: Link is to the primary site; the admin dashboard is private.`;

  return (
    <Link className={styles.link} href={href} target="_blank" rel="noopener noreferrer">
      {title}
      <span className={styles.disclaimer}> {disclaimer ? mcqMarketsDisclaimer : ""} </span>
    </Link>
  );
}
