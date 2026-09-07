import { NextRequest, NextResponse } from "next/server";
import clientPromise from "@/lib/mongodb";
import { links } from "@/lib/links";

const COLLECTION = "linkClicks";

export async function GET() {
  const client = await clientPromise;
  const db = client.db();
  const docs = await db
    .collection<{ _id: string; count: number }>(COLLECTION)
    .find({ _id: { $in: links.map((link) => link.id) } })
    .toArray();

  const counts: Record<string, number> = Object.fromEntries(
    links.map((link) => [link.id, 0]),
  );
  for (const doc of docs) {
    counts[doc._id] = doc.count;
  }

  return NextResponse.json(counts);
}

export async function POST(request: NextRequest) {
  const { id } = await request.json();

  if (typeof id !== "string" || !links.some((link) => link.id === id)) {
    return NextResponse.json({ error: "Invalid link id" }, { status: 400 });
  }

  const client = await clientPromise;
  const db = client.db();
  const result = await db
    .collection<{ _id: string; count: number }>(COLLECTION)
    .findOneAndUpdate(
      { _id: id },
      { $inc: { count: 1 } },
      { upsert: true, returnDocument: "after" },
    );

  return NextResponse.json({ id, count: result?.count ?? 1 });
}
