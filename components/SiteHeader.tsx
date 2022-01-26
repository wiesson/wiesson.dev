const SiteHeader = () => (
  <header className="section space-y-4 text-center">
    <div>
      <img
        src="/assets/arne.jpg"
        alt="Arne Wiese"
        width="96"
        height="96"
        className="rounded-md mx-auto"
      />
    </div>
    <h1 className="text-2xl text-gray-400">Arne Wiese</h1>
    <h2 className="text-3xl leading-snug font-medium">
      Freier Entwickler mit Fokus auf Web-Technologien und APIs
    </h2>
    <h3 className="font-medium text-gray-400 mb-2">
      Fullstack · JavaScript · TypeScript · NodeJS · Python · Golang
    </h3>

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
  </header>
);

export default SiteHeader;

export const config = {
  unstable_runtimeJS: false,
};
