<script lang="ts">
  import { getLocalizedPath, type Locale } from "../../i18n";

  interface Props {
    lang?: Locale;
    currentPath?: string;
  }

  let { lang = "de", currentPath = "/" }: Props = $props();

  const basePath = lang === 'en' ? currentPath.replace(/^\/en/, '') : currentPath;
</script>

<footer class="app-grid py-8 mt-12">
  <div class="app-text-column">
    <div class="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm cv-text-meta">
      <a href="mailto:arne@wiese.me" class="hover:text-foreground transition-colors">
        arne@wiese.me
      </a>
      <span>·</span>
      <a
        href="https://www.linkedin.com/in/arnewiese"
        target="_blank"
        rel="noopener noreferrer"
        class="hover:text-foreground transition-colors"
      >
        LinkedIn
      </a>
      <span>·</span>
      <a
        href="https://www.github.com/wiesson"
        target="_blank"
        rel="noopener noreferrer"
        class="hover:text-foreground transition-colors"
      >
        GitHub
      </a>
      <span>·</span>
      <span class="flex items-center gap-1">
        <a
          href={getLocalizedPath(basePath, "de")}
          class={lang === "de" ? "text-foreground" : "hover:text-foreground transition-colors"}
        >
          DE
        </a>
        <span>|</span>
        <a
          href={getLocalizedPath(basePath, "en")}
          class={lang === "en" ? "text-foreground" : "hover:text-foreground transition-colors"}
        >
          EN
        </a>
      </span>
    </div>
  </div>
</footer>
