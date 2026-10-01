// scripts/force-clock-synced.cjs

const mongoose = require("mongoose");
const dns = require("dns");

dns.setServers(["8.8.8.8", "8.8.4.4"]);

// TODO: same Mongo URI as your app
const MONGO_URI = "mongodb://metawork_db_user:TestPass123@ac-zpaazct-shard-00-00.mvwr5sw.mongodb.net:27017,ac-zpaazct-shard-00-01.mvwr5sw.mongodb.net:27017,ac-zpaazct-shard-00-02.mvwr5sw.mongodb.net:27017/secureblue?ssl=true&replicaSet=atlas-k91915-shard-0&authSource=admin";

// TODO: actual DevicePayload collection name
const DEVICE_COLLECTION = "devicepayloads";

async function main() {
  if (!MONGO_URI || MONGO_URI.includes("USER:PASS")) {
    console.error("MONGO_URI is not set correctly. Edit the script.");
    process.exit(1);
  }

  console.log("Connecting to MongoDB...");
  await mongoose.connect(MONGO_URI, {});

  const db = mongoose.connection.db;
  const collection = db.collection(DEVICE_COLLECTION);

  console.log("Setting lastTimeSyncAt = lastSeenAt for all devices with lastSeenAt...");
  const cursor = collection.find({
    lastSeenAt: { $exists: true, $ne: null },
  });

  let count = 0;

  while (await cursor.hasNext()) {
    const doc = await cursor.next();
    const devEui = doc.devEui || doc.dev_eui || "(unknown)";
    const lastSeenAt = doc.lastSeenAt;

    console.log(`Syncing clock for devEui=${devEui}, lastSeenAt=${lastSeenAt}`);

    if (lastSeenAt instanceof Date) {
      await collection.updateOne(
        { _id: doc._id },
        {
          $set: {
            lastTimeSyncAt: lastSeenAt,
          },
          $unset: {
            pendingTimeSync: "",
          },
        }
      );
      count++;
    }
  }

  console.log(`Marked ${count} devices as clock-synced.`);
  await mongoose.disconnect();
  console.log("Done.");
}

main().catch((err) => {
  console.error("Error running force-clock-synced:", err);
  process.exit(1);
});