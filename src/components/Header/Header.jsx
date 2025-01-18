import { useEffect } from "react";
import styles from "./Header.module.css";

function Header() {
  useEffect(() => {
    // Select all sections that have an id
    const sections = document.querySelectorAll("section[id]");
    // Our nav links
    const navLinks = document.querySelectorAll("nav a");

    console.log(sections);
    console.log(navLinks);
    const options = {
      root: null, // use the viewport as the container
      rootMargin: "0px",
      threshold: 0.6, // when 60% of the section is visible
    };

    // Callback fired whenever an observed section enters/exits the viewport
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        // Check if the section is in the viewport (isIntersecting)
        if (entry.isIntersecting) {
          // Get this section's ID
          const sectionId = entry.target.getAttribute("id");

          // Remove "active" class from all links
          navLinks.forEach((link) => link.classList.remove(styles.active));

          // Find the link whose href ends with the matching section ID
          const activeLink = document.querySelector(
            `nav a[href="#${sectionId}"]`
          );
          if (activeLink) {
            activeLink.classList.add(styles.active);
          }
        }
      });
    }, options);

    // Observe each section
    sections.forEach((sec) => observer.observe(sec));

    // Cleanup on unmount
    return () => {
      sections.forEach((sec) => observer.unobserve(sec));
    };
  }, []);

  return (
    <nav className={styles.header}>
      <ul>
        <li>
          <a href="#hero"> Hero</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </nav>
  );
}

export default Header;
