<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

## Site architecture
- Keep shared navigation and footer in the root shell and each public content URL in a dedicated route with its own metadata, so navigation and indexing remain consistent.
- Keep factual office data and area definitions in the shared site-data module, so all contact links and pages agree.
- Serve authentic office media from public/media with editorial monogram fallbacks when absent; never substitute fabricated office or attorney photos.
- Keep contact actions as direct external links rather than simulated forms, so the site never implies a message was sent.
