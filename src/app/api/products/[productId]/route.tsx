import { NextResponse, NextRequest } from "next/server";

export async function GET(
  req: NextRequest,
  props: { params: Promise<{ productId: string }> }
) {
  try {
    const productId = (await props.params).productId;
    const response = await fetch(
      `https://adn.nestortech.io/api/vc/6760306e5bb856bae7716ca8/${productId}/DEV`
    );
    const data = await response.json();
  
    return NextResponse.json({ data }, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ message: error }, { status: 500 });
  }
}
