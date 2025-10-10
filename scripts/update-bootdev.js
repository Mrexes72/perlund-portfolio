import fs from "fs";
import path from "path";
import fetch from "node-fetch";
import { JSDOM } from "jsdom";

const PROFILE_URL = "https://www.boot.dev/u/desertedfail01";

async function scrapeBootDev() {
  console.log("Fetching Boot.dev profile...");
  const response = await fetch(PROFILE_URL);
  const html = await response.text();

  const dom = new JSDOM(html);
  const doc = dom.window.document;

  // Du må kanskje justere disse selektorene etter Boot.dev sin HTML
  const lessonsText = doc.querySelector('[data-testid="lessons-solved"]')?.textContent.trim() || "0";
  const lessons = parseInt(lessonsText, 10) || 0;

  const courses = [...doc.querySelectorAll(".course-title")].map(c => c.textContent.trim());
  const projects = [...doc.querySelectorAll(".project-title")].map(p => p.textContent.trim());

  const data = {
    lessons,
    courses,
    projects,
    lastUpdated: new Date().toISOString()
  };

  const filePath = path.join("_data", "bootdev.json");
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2));

  console.log("✅ Updated _data/bootdev.json");
}

scrapeBootDev().catch(err => {
  console.error("❌ Failed to fetch Boot.dev data:", err);
  process.exit(1);
});
