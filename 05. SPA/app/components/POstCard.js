export function PostCard(props) {
  let { title, slug, date, _embedded } = props,
    dateFormat = new Date(date).toLocaleString(),
    urlPost = _embedded["wp:featuredmedia"]
      ? _embedded["wp:featuredmedia"][0].source_url
      : "./app/assets/favicon.svg";

  return `
    <article class="post-card">
    <img src="${urlPost}" alt="${title.rendered}">;
    <h2>${title.rendered}</h2>
    <p>
        <time datetime="${date}">${dateFormat}</time>
        <a href=#/${slug}}>Ver Publicación</a>
    </p>
    </article>
    `;
}
