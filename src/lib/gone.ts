// 410 Gone for WordPress demo/junk URLs with no equity or intent (sunview-redirect-map.xlsx, action "410").
// Served by a function because vercel.json redirects can't return 410.
export const gone = () =>
  new Response('Gone', { status: 410, headers: { 'Content-Type': 'text/plain; charset=utf-8', 'X-Robots-Tag': 'noindex' } });
