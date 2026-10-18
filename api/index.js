// api/index.js

export default function handler(req, res) {
  // Vercel parses the body automatically for JSON and form data.
  const rawBody = JSON.stringify(req.body || {}, null, 2);
  const ts = new Date().toISOString();

  console.log("\n" + "=".repeat(72));
  console.log(`[${ts}]  ${req.method} ${req.url}`);
  console.log("-- headers --");
  for (const [k, v] of Object.entries(req.headers)) {
    console.log(`  ${k}: ${v}`);
  }
  console.log("-- body --");
  console.log(rawBody);
  console.log("=".repeat(72));

  // Respond with success
  res.status(200).json({ ok: true, received: true });
}
