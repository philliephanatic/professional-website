// src/server.js
import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import router from "./routes/index.js";

const app = express();
const PORT = process.env.PORT || 3000;

// Health checks
// Liveness: confirms the process + HTTP server respond.
app.get("/health", (req, res) => {
  res.status(200).type("text/plain").send("OK");
});

// Readiness: confirms the app is ready to serve real traffic.
let isReady = false;

app.get("/ready", (req, res) => {
  if (!isReady) return res.status(503).type("text/plain").send("NOT READY");
  return res.status(200).type("text/plain").send("READY");
});

// ESM-friendly __dirname
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// View engine config
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// Static assets
app.use(express.static(path.join(__dirname, "public")));

// Routes
app.use("/", router);

// Start server + graceful shutdown
const server = app.listen(PORT, () => {
  isReady = true;
  console.log(`Listening on ${PORT}`);
});

// Ensure clean restarts
function shutdown(signal) {
  console.log(`${signal} received. Shutting down gracefully...`);
  isReady = false;

  server.close(() => {
    process.exit(0);
  });
}

process.on("SIGTERM", () => shutdown("SIGTERM"));
process.on("SIGINT", () => shutdown("SIGINT"));
