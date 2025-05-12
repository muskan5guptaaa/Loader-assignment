import { NextResponse } from 'next/server';

let emails: string[] = [];
export async function POST(req: Request) {
  try {
    const { email, eventUrl } = await req.json();
    console.log('Received email:', email);
    console.log('Received event URL:', eventUrl);
    if (!email || !eventUrl) {
      return NextResponse.error();
    }

    emails.push(email);

    return NextResponse.json({
         message: 'Email saved successfully!', eventUrl 

        
        },{
        status: 200,
        });

  } catch (error) {
    return NextResponse.error();

  }
}
