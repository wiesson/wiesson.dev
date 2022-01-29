const SiteFooter = () => {
  return (
    <footer className="section space-y-4">
      <div>
        <h3 className="text-xl mb-4">Kontakt</h3>
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

      <div className="text-sm">
        <div className="flex justify-between">
          <div>{new Date().getFullYear()}</div>
          <div>Düsseldorf, Deutschland</div>
        </div>
      </div>
    </footer>
  );
};

export default SiteFooter;
