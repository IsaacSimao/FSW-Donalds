import Link from "next/link";

const HomePage = () => {
  return (
    <main
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "linear-gradient(135deg, #0f172a, #020617)",
        color: "#f8fafc",
        padding: "2rem",
        fontFamily: "system-ui, -apple-system, BlinkMacSystemFont",
      }}
    >
      <section
        style={{
          maxWidth: 720,
          background: "rgba(15, 23, 42, 0.9)",
          borderRadius: 16,
          padding: "2.5rem",
          boxShadow: "0 20px 40px rgba(0,0,0,0.4)",
        }}
      >
        <h1
          style={{
            fontSize: "2.2rem",
            marginBottom: "0.5rem",
            fontWeight: 700,
          }}
        >
          Izaias <span style={{ color: "#38bdf8" }}>{`"Isaac"`}</span> Simão
        </h1>

        <p
          style={{
            color: "#cbd5f5",
            marginBottom: "1.5rem",
            fontSize: "1.1rem",
          }}
        >
          Projeto desenvolvido durante as aulas do{" "}
          <strong>FullStackClub</strong>, com foco em aplicações modernas
          full-stack.
        </p>

        <div style={{ marginBottom: "1.5rem" }}>
          <h2
            style={{
              fontSize: "1.2rem",
              marginBottom: "0.5rem",
              color: "#e2e8f0",
            }}
          >
            Tecnologias utilizadas
          </h2>
          <ul style={{ color: "#94a3b8", lineHeight: 1.6 }}>
            <li>⚡ Next.js / React</li>
            <li>🗄 Prisma ORM</li>
            <li>🐘 PostgreSQL (Neon)</li>
            <li>🔐 TypeScript</li>
          </ul>
        </div>

        <Link
          href="/fsw-donalds"
          style={{
            display: "inline-block",
            marginTop: "1rem",
            padding: "0.75rem 1.5rem",
            background: "#38bdf8",
            color: "#020617",
            borderRadius: 10,
            fontWeight: 600,
            textDecoration: "none",
            transition: "transform 0.2s ease, box-shadow 0.2s ease",
          }}
        >
          Acessar o Projeto 🍔
        </Link>
      </section>
    </main>
  );
};

export default HomePage;
