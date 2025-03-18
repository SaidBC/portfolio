import prisma from "@/lib/prisma";
import messageSchema from "@/lib/schemas/messageSchema";
import { NextRequest } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const validatedData = messageSchema.safeParse(body);
    if (!validatedData.success)
      return Response.json({
        success: false,
        errors: validatedData.error.flatten().fieldErrors,
      });
    const { data } = validatedData;
    const message = await prisma.message.create({ data });
    return Response.json({
      success: true,
      data: message,
    });
  } catch (error) {
    return Response.json({
      success: true,
      errors: {
        request: "Unexpected error uccoured",
      },
    });
  }
  return;
}
