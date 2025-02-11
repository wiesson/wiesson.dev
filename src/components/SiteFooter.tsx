const SiteFooter = () => {
  return (
    <footer class="section space-y-4">
      <div>
        <h3 class="text-xl mb-4">Kontakt</h3>
        <p>
          <a
            href="https://www.linkedin.com/in/arnewiese"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
          {" · "}
          <a
            href="https://twitter.com/wiesson"
            target="_blank"
            rel="noopener noreferrer"
          >
            Twitter
          </a>
          {" · "}
          <a
            href="https://www.github.com/wiesson"
            target="_blank"
            rel="noopener noreferrer"
          >
            Github
          </a>
          {" · "}
          <a
            href="https://codesandbox.io/u/wiesson"
            target="_blank"
            rel="noopener noreferrer"
          >
            CodeSandbox
          </a>
        </p>
      </div>

      <div class="text-sm">
        <div class="flex justify-between">
          <div>{new Date().getFullYear()}</div>
          <div>Düsseldorf, Deutschland</div>
        </div>
      </div>
    </footer>
  );
};

export default SiteFooter;
