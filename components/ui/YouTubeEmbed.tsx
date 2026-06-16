/**
 * Responzivni YouTube embed (16/9), privacy-friendly (nocookie domen).
 * Čisto prezentaciona; bez klijentske logike — običan iframe.
 */
export function YouTubeEmbed({ id, title }: { id: string; title: string }) {
  return (
    <div className="yt-embed">
      <iframe
        src={`https://www.youtube-nocookie.com/embed/${id}`}
        title={title}
        loading="lazy"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      />
    </div>
  );
}
