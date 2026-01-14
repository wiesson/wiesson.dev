<script lang="ts">
  import { getLocalizedPath, type Locale } from "../../i18n";

  interface Props {
    lang?: Locale;
    currentPath?: string;
  }

  let { lang = "de", currentPath = "/" }: Props = $props();

  const basePath = $derived(lang === 'en' ? currentPath.replace(/^\/en/, '') : currentPath);
</script>

<footer class="app-grid py-8 mt-12">
  <div class="app-text-column space-y-4">
    <!-- Profile info -->
    <div class="space-y-1 text-sm cv-text-secondary">
      <p>
        {lang === "de" ? "Freelancer & Consultant" : "Freelancer & Consultant"} · {lang === "de" ? "Meerbusch, Deutschland" : "Meerbusch, Germany"}
      </p>
      <p class="cv-text-meta">
        M.Sc. Energy Science and Technology
      </p>
      <p class="cv-text-meta">
        {lang === "de"
          ? "10+ Jahre Full-Stack-Entwicklung – spezialisiert auf pragmatische Lösungen, schnelle MVPs und System-Architektur"
          : "10+ years full-stack development – specialized in pragmatic solutions, rapid MVPs and system architecture"}
      </p>
    </div>

    <!-- Links -->
    <div class="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm cv-text-meta">
      <a href="mailto:arne@wiese.me" class="hover:text-foreground transition-colors">
        arne@wiese.me
      </a>
      <span>·</span>
      <a href="https://wiesson.dev" class="hover:text-foreground transition-colors">
        wiesson.dev
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
