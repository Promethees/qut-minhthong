"use client";
import { useEffect, useRef } from "react";

const socials = [
    {
        label: "LinkedIn",
        href: "https://www.linkedin.com/in/tqmthong/",
        icon: (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z" />
                <circle cx="4" cy="4" r="2" />
            </svg>
        ),
    },
    {
        label: "GitHub",
        href: "https://github.com/Promethees",
        icon: (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
            </svg>
        ),
    },
    {
        label: "Email",
        href: "mailto:tqmthong@u.nus.edu",
        icon: (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                <polyline points="22,6 12,13 2,6" />
            </svg>
        ),
    },
];

export default function ContactSection() {
    const sectionRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) =>
                entries.forEach((e) => {
                    if (e.isIntersecting) e.target.classList.add("visible");
                }),
            { threshold: 0.2 }
        );
        sectionRef.current?.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
        return () => observer.disconnect();
    }, []);

    return (
        <section
            id="contact"
            ref={sectionRef}
            style={{
                padding: "100px 24px 60px",
                background: "var(--bg-secondary)",
            }}
        >
            <div
                style={{ maxWidth: "700px", margin: "0 auto", textAlign: "center" }}
            >
                {/* Header */}
                <div className="reveal">
                    <p className="section-eyebrow">Get in Touch</p>
                    <h2 className="section-title">Let&apos;s Connect</h2>
                    <div className="section-divider" style={{ margin: "16px auto 32px" }} />
                </div>

                <p
                    className="reveal reveal-delay-1"
                    style={{
                        fontSize: "1rem",
                        color: "var(--text-secondary)",
                        lineHeight: 1.75,
                        marginBottom: "40px",
                    }}
                >
                    I am actively seeking a PhD position at QUT and would love to discuss
                    potential research directions with Prof. Yambem&apos;s group. Feel free to
                    reach out via email or connect on LinkedIn.
                </p>

                {/* Social Links */}
                <div
                    className="reveal reveal-delay-2"
                    style={{
                        display: "flex",
                        gap: "16px",
                        justifyContent: "center",
                        flexWrap: "wrap",
                        marginBottom: "60px",
                    }}
                >
                    {socials.map((s) => (
                        <a
                            key={s.label}
                            href={s.href}
                            target={s.href.startsWith("mailto") ? undefined : "_blank"}
                            rel="noopener noreferrer"
                            style={{
                                display: "flex",
                                alignItems: "center",
                                gap: "10px",
                                padding: "14px 24px",
                                borderRadius: "10px",
                                background: "var(--bg-card)",
                                border: "1px solid var(--border-subtle)",
                                color: "var(--text-secondary)",
                                textDecoration: "none",
                                fontSize: "0.9rem",
                                fontWeight: 600,
                                transition: "all 0.25s ease",
                            }}
                            onMouseEnter={(e) => {
                                const el = e.currentTarget;
                                el.style.borderColor = "var(--cyan)";
                                el.style.color = "var(--cyan)";
                                el.style.background = "rgba(6,182,212,0.06)";
                                el.style.transform = "translateY(-3px)";
                            }}
                            onMouseLeave={(e) => {
                                const el = e.currentTarget;
                                el.style.borderColor = "var(--border-subtle)";
                                el.style.color = "var(--text-secondary)";
                                el.style.background = "var(--bg-card)";
                                el.style.transform = "translateY(0)";
                            }}
                        >
                            {s.icon}
                            {s.label}
                        </a>
                    ))}
                </div>

                {/* Divider */}
                <div
                    style={{
                        height: "1px",
                        background:
                            "linear-gradient(to right, transparent, var(--border-subtle), transparent)",
                        marginBottom: "32px",
                    }}
                />

                {/* Footer */}
                <div
                    className="reveal reveal-delay-3"
                    style={{
                        fontSize: "0.78rem",
                        color: "var(--text-muted)",
                        lineHeight: 1.8,
                    }}
                >
                    <p style={{ margin: "0 0 4px" }}>
                        <span className="gradient-text" style={{ fontWeight: 700 }}>
                            Tra Quang Minh Thong
                        </span>
                        {" "} · tqmthong@u.nus.edu · +65 8251 5824
                    </p>
                    <p style={{ margin: 0 }}>
                        © 2026 · Built with Next.js · Presented to Prof. Soniya Yambem, QUT
                    </p>
                </div>
            </div>
        </section>
    );
}
