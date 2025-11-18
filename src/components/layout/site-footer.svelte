<script lang="ts">
  import { getTranslations, getLocalizedPath, type Locale } from "../../i18n";
  import Button from "$lib/ui/button/button.svelte";
  import { Download } from "@lucide/svelte";

  interface Props {
    lang?: Locale;
    currentPath?: string;
  }

  let { lang = "de", currentPath = "/" }: Props = $props();
  const t = getTranslations(lang);

  // Get the base path without language prefix for language switching
  const basePath = lang === 'en' ? currentPath.replace(/^\/en/, '') : currentPath;
</script>

<footer class="app-grid py-16">
  <div class="app-text-column">
    <!-- Contact & Social -->
    <div class="grid md:grid-cols-2 gap-8 mb-8">
      <div>
        <h2 class="title mb-4">{t.footer.contact}</h2>
        <div class="space-y-2 cv-text-secondary">
          <p>
            <a
              href="mailto:arne@wiese.me"
              class="hover-foreground transition-colors"
            >
              arne@wiese.me
            </a>
          </p>
          <p>
            <a
              href="tel:+491751109743"
              class="hover-foreground transition-colors"
            >
              +49 175 1109743
            </a>
          </p>
          <p>Heinenkamp 2a, 40670 Meerbusch</p>
        </div>
      </div>

      <div>
        <h2 class="title mb-4">{t.footer.social}</h2>
        <div class="space-y-2">
          <p>
            <a
              href="https://www.linkedin.com/in/arnewiese"
              target="_blank"
              rel="noopener noreferrer"
              class="hover-foreground transition-colors"
            >
              LinkedIn
            </a>
          </p>
          <p>
            <a
              href="https://twitter.com/wiesson"
              target="_blank"
              rel="noopener noreferrer"
              class="hover-foreground transition-colors"
            >
              Twitter
            </a>
          </p>
          <p>
            <a
              href="https://www.github.com/wiesson"
              target="_blank"
              rel="noopener noreferrer"
              class="hover-foreground transition-colors"
            >
              Github
            </a>
          </p>
        </div>
      </div>
    </div>

    <!-- Copyright, Language Switcher & CV Downloads -->
    <div class="text-sm pt-8 border-t" style="border-color: var(--border);">
      <div class="flex flex-col lg:flex-row justify-between items-center gap-6">
        <!-- Language Switcher -->
        <div class="flex gap-2">
          <Button
            href={getLocalizedPath(basePath, "de")}
            variant={lang === "de" ? "default" : "outline"}
            size="sm"
          >
            {t.languages.de}
          </Button>
          <Button
            href={getLocalizedPath(basePath, "en")}
            variant={lang === "en" ? "default" : "outline"}
            size="sm"
          >
            {t.languages.en}
          </Button>
        </div>

        <!-- Copyright -->
        <div class="cv-text-meta text-center">
          &copy; {new Date().getFullYear()} Arne Wiese. {t.footer.allRightsReserved}.
        </div>

        <!-- CV Downloads -->
        <div class="flex gap-2">
          <Button href="/api/cv/pdf?lang=de" variant="outline" size="sm">
            <Download />
            {t.buttons.downloadPdfDe}
          </Button>
          <Button href="/api/cv/pdf?lang=en" variant="outline" size="sm">
            <Download />
            {t.buttons.downloadPdfEn}
          </Button>
        </div>
      </div>
    </div>
  </div>
</footer>
