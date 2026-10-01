// scripts/clear-pending-schedules.cjs

const mongoose = require("mongoose");
const dns = require("dns");

// Force Google DNS
dns.setServers(["8.8.8.8", "8.8.4.4"]);

// TODO: PASTE YOUR REAL MONGO URI HERE.
// Use the same URI you have in env.local / connectToDatabase.
const MONGO_URI = "mongodb://metawork_db_user:TestPass123@ac-zpaazct-shard-00-00.mvwr5sw.mongodb.net:27017,ac-zpaazct-shard-00-01.mvwr5sw.mongodb.net:27017,ac-zpaazct-shard-00-02.mvwr5sw.mongodb.net:27017/secureblue?ssl=true&replicaSet=atlas-k91915-shard-0&authSource=admin";

// TODO: SET THIS TO THE ACTUAL COLLECTION NAME FOR DevicePayload.
// Common options: "devicepayloads" or whatever you see in Mongo.
const DEVICE_COLLECTION = "devicepayloads";

async function main() {
  if (!MONGO_URI || MONGO_URI.includes("USER:PASS")) {
    console.error("MONGO_URI is not set correctly. Edit the script and paste your real URI.");
    process.exit(1);
  }

  console.log("Connecting to MongoDB...");
  await mongoose.connect(MONGO_URI, {});

  const db = mongoose.connection.db;
  const collection = db.collection(DEVICE_COLLECTION);

  console.log("Finding devices with pendingSchedule...");
  const cursor = collection.find({
    pendingSchedule: { $exists: true, $ne: null },
  });

  let count = 0;

  while (await cursor.hasNext()) {
    const doc = await cursor.next();
    const devEui = doc.devEui || doc.dev_eui || "(unknown)";
    console.log(`Fixing devEui=${devEui}`);

    const update = {
      $unset: { pendingSchedule: "" },
    };

    if (Array.isArray(doc.irrigationSchedule) && doc.irrigationSchedule.length > 0) {
      update.$set = {
        syncedIrrigationSchedule: doc.irrigationSchedule,
      };
    }

    await collection.updateOne({ _id: doc._id }, update);
    count++;
  }

  console.log(`Updated ${count} devices.`);
  await mongoose.disconnect();
  console.log("Done.");
}

main().catch((err) => {
  console.error("Error running clear-pending-schedules:", err);
  process.exit(1);
});