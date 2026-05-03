/**
 * Generates the /quiet-hour TTS narration via ElevenLabs.
 *
 *   ELEVENLABS_API_KEY=... npx tsx scripts/tts/generate-quiet-hour.ts
 *
 * Reads scripts/tts/quiet-hour.txt and writes public/audio/quiet-hour.mp3.
 * Re-run only when the script changes — the mp3 is committed to the repo.
 */
import { readFile, writeFile } from "node:fs/promises";
import { resolve } from "node:path";

const VOICE_ID = "21m00Tcm4TlvDq8ikWAM"; // Rachel — warm female, NPR-style
const MODEL_ID = "eleven_multilingual_v2";
const OUTPUT_FORMAT = "mp3_44100_128";

const SCRIPT_PATH = resolve("scripts/tts/quiet-hour.txt");
const OUTPUT_PATH = resolve("public/audio/quiet-hour.mp3");

async function main() {
  const apiKey = process.env.ELEVENLABS_API_KEY;
  if (!apiKey) {
    throw new Error("ELEVENLABS_API_KEY is not set");
  }

  const text = (await readFile(SCRIPT_PATH, "utf8")).trim();
  console.log(`Script: ${text.length} characters`);

  const url = `https://api.elevenlabs.io/v1/text-to-speech/${VOICE_ID}?output_format=${OUTPUT_FORMAT}`;
  const res = await fetch(url, {
    method: "POST",
    headers: {
      "xi-api-key": apiKey,
      "Content-Type": "application/json",
      Accept: "audio/mpeg",
    },
    body: JSON.stringify({
      text,
      model_id: MODEL_ID,
      voice_settings: {
        stability: 0.55,
        similarity_boost: 0.75,
        style: 0.15,
        use_speaker_boost: true,
      },
    }),
  });

  if (!res.ok) {
    const body = await res.text();
    throw new Error(`ElevenLabs ${res.status}: ${body}`);
  }

  const buf = Buffer.from(await res.arrayBuffer());
  await writeFile(OUTPUT_PATH, buf);
  console.log(`Wrote ${OUTPUT_PATH} (${(buf.length / 1024 / 1024).toFixed(2)} MB)`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
