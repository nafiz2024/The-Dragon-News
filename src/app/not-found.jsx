import Link from "next/link";

const NotFound = () => {
  const wrapperStyle = {
    minHeight: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "64px 16px",
    background:
      "linear-gradient(to bottom, #ffffff 0%, #fafaf9 55%, #fff7ed 100%)",
  };

  const cardStyle = {
    width: "100%",
    maxWidth: "720px",
    textAlign: "center",
    backgroundColor: "rgba(255, 255, 255, 0.92)",
    border: "1px solid #e7e5e4",
    borderRadius: "28px",
    padding: "48px 32px",
    boxShadow: "0 12px 30px rgba(28, 25, 23, 0.08)",
  };

  const primaryButtonStyle = {
    display: "inline-block",
    padding: "12px 24px",
    borderRadius: "9999px",
    backgroundColor: "#1c1917",
    color: "#ffffff",
    fontSize: "14px",
    fontWeight: 600,
    textDecoration: "none",
  };

  const secondaryButtonStyle = {
    display: "inline-block",
    padding: "12px 24px",
    borderRadius: "9999px",
    border: "1px solid #d6d3d1",
    color: "#44403b",
    fontSize: "14px",
    fontWeight: 600,
    textDecoration: "none",
  };

  return (
    <section style={wrapperStyle}>
      <div style={cardStyle}>
        <p
          style={{
            color: "#f05100",
            fontSize: "13px",
            fontWeight: 700,
            letterSpacing: "0.35em",
            textTransform: "uppercase",
          }}
        >
          Error 404
        </p>

        <h1
          style={{
            marginTop: "16px",
            color: "#292524",
            fontSize: "clamp(36px, 7vw, 64px)",
            fontWeight: 900,
            lineHeight: 1,
          }}
        >
          Page not found
        </h1>

        <p
          style={{
            maxWidth: "560px",
            margin: "18px auto 0",
            color: "#78716c",
            fontSize: "16px",
            lineHeight: 1.8,
          }}
        >
          The page you are looking for does not exist or may have been moved.
          Let&apos;s get you back to The Dragon News homepage.
        </p>

        <div
          style={{
            marginTop: "32px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "16px",
            flexWrap: "wrap",
          }}
        >
          <Link href="/" style={primaryButtonStyle}>
            Back to Home
          </Link>
        </div>
      </div>
    </section>
  );
};

export default NotFound;
