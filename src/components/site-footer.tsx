const SiteFooter = () => {
  return (
    <footer class="app-grid py-16">
      <div class="app-text-column">
        {/* Contact & Social */}
        <div class="grid md:grid-cols-2 gap-8 mb-8">
          <div>
            <h4 class="cv-h2 mb-4">Kontakt</h4>
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
            <h4 class="cv-h2 mb-4">Social</h4>
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

        {/* Copyright */}
        <div class="text-sm cv-text-meta pt-8 border-t" style="border-color: var(--border);">
          <div class="flex flex-col md:flex-row justify-between items-center gap-4">
            <div>
              &copy; {new Date().getFullYear()} Arne Wiese. Alle Rechte
              vorbehalten.
            </div>
            <div>Meerbusch, Deutschland</div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default SiteFooter;
