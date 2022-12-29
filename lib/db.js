import { MongoClient } from "mongodb";

export async function connectToDatabase() {
  const client = await MongoClient.connect(
    "mongodb+srv://mehalwiam07:E6fqb9cUVJ9XrXQS@cluster0.lvgzrxw.mongodb.net/auth?retryWrites=true&w=majority"
  );
  return client;
}
