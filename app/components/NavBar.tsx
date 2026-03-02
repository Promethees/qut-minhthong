"use client";
import { useState, useEffect } from "react";

const links = [
    { label: "About", href: "#hero" },
    { label: "Timeline", href: "#timeline" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Research", href: "#research" },
    { label: "Contact", href: "#contact" },
];

export default function NavBar() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 40);
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return (
        <nav
            style={{
                position: "fixed",
                top: 0,
                left: 0,
                right: 0,
                zIndex: 100,
                transition: "background 0.3s ease, box-shadow 0.3s ease, padding 0.3s ease",
                background: scrolled
                    ? "rgba(5, 12, 26, 0.92)"
                    : "transparent",
                backdropFilter: scrolled ? "blur(16px)" : "none",
                WebkitBackdropFilter: scrolled ? "blur(16px)" : "none",
                borderBottom: scrolled ? "1px solid rgba(255,255,255,0.06)" : "none",
                padding: scrolled ? "14px 0" : "22px 0",
            }}
        >
            <div
                style={{
                    maxWidth: "1100px",
                    margin: "0 auto",
                    padding: "0 24px",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                }}
            >
                {/* Logo / Monogram */}
                <a
                    href="#hero"
                    style={{
                        fontFamily: "var(--font-space-grotesk), system-ui, sans-serif",
                        fontWeight: 700,
                        fontSize: "1.1rem",
                        background: "linear-gradient(135deg, #06b6d4, #7c3aed)",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                        backgroundClip: "text",
                        textDecoration: "none",
                        letterSpacing: "0.02em",
                    }}
                >
                    TQMT
                </a>

                {/* Nav Links - hidden on small screens */}
                <div
                    style={{
                        display: "flex",
                        gap: "32px",
                        alignItems: "center",
                    }}
                    className="hidden-mobile"
                >
                    {links.map((l) => (
                        <a key={l.href} href={l.href} className="nav-link">
                            {l.label}
                        </a>
                    ))}
                </div>

                {/* CTA */}
                <a
                    href="mailto:tqmthong@u.nus.edu"
                    className="btn-primary"
                    style={{ fontSize: "0.8rem", padding: "8px 20px" }}
                >
                    Get in Touch
                </a>
            </div>

            <style>{`
        @media (max-width: 768px) {
          .hidden-mobile { display: none !important; }
        }
      `}</style>
        </nav>
    );
}
