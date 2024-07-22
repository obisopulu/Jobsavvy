// http://127.0.0.1:3000/api/wordle-words
export async function GET() {
  try {
    const raw = await fetch("https://api.frontendexpert.io/api/fe/wordle-words");
    const res = await raw.json();
    return Response.json({
      success: true,
      message: 'OK',
      data: res,
    });
  } catch (err) {
    return Response.json({
      success: false,
      message: err,
      data: {},
    });
  }
}, [])
