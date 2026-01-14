<script lang="ts">
  import { getLocalizedPath, type Locale } from "../../i18n";

  interface Props {
    lang?: Locale;
  }

  let { lang = "de" }: Props = $props();
</script>

<header class="app-grid py-6">
  <div class="app-text-column-left">
    <!-- Name + Photo only -->
    <a href={getLocalizedPath("/", lang)} class="flex items-center gap-3 group">
      <img
        src="/assets/arne-neu-quadratisch.jpeg"
        alt="Arne Wiese"
        class="w-10 h-10 rounded-full object-cover transition-transform duration-300 group-hover:scale-105"
      />
      <span class="font-medium text-foreground">Arne Wiese</span>
    </a>
  </div>
</header>
