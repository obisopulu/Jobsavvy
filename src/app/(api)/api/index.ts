// http://127.0.0.1:3000/api
export async function GET() {
  return Response.json({
    data: "Ping!",
    meta: "https://nextjs.org/docs/app/api-reference/file-conventions/route",
  });
}
