import type { APIRoute } from 'astro';
export const prerender = true;

const usernames = ["Sarah", "Chris", "Yan", "Elian"]

export const GET: APIRoute = ({ params, request }) => {
  const id : number = parseInt(params.id ?? "0") ?? 0;
  return new Response(
    JSON.stringify({
      name: usernames[id]
    })
  )
}

export function getStaticPaths() {
  return [
    { params: { id: "0"} },
    { params: { id: "1"} },
    { params: { id: "2"} },
    { params: { id: "3"} }
  ]
}