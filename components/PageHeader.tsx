import styles from "./PageHeader.module.css";
import Badge from "./Badge";

const PageHeader = () => (
  <header className={styles.pageHeader}>
    <div className="grid grid-layout">
      <div>
        <img
          className={styles.image}
          src="/assets/arne.jpg"
          alt="Arne Wiese"
          width="96"
          height="96"
        />
      </div>
      <div>
        <div>
          <h1 className="text-2xl mb-0">Arne Wiese</h1>
          <h2 className="text-xl mb-0">
            Freier Entwickler mit Fokus auf Web-Technologien und APIs
          </h2>
          <h3 className="font-medium text-gray-500 mb-2">
            Fullstack · JavaScript · TypeScript · NodeJS · Python · Golang
          </h3>
        </div>
        <div className="text-sm">
          <p>
            <a className="link" href="tel:+491751109743">
              +491751109743
            </a>{" "}
            · arne@wiese.me <br />
            Niederkasseler Str. 55, 40547 Düsseldorf <br />
            Deutsch (Muttersprache), Englisch (fließend)
          </p>
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
      </div>
    </div>
    <dl className="grid grid-layout">
      <dt className="text-gray-500 text-right">Frontend</dt>
      <dd>
        <Badge>JavaScript</Badge>
        <Badge>React.js</Badge>
        <Badge>Next.js</Badge>
        <Badge>Preact</Badge>
        <Badge>TypeScript</Badge>
        <Badge>Svelte</Badge>
        <Badge>Vue.js</Badge>
        <Badge>SVG</Badge>
        <Badge>HTML5</Badge>
        <Badge>CSS3</Badge>
        <Badge>Sass</Badge>
        <Badge>Responsive Design</Badge>
        <Badge>D3</Badge>
        <Badge>Highcharts.js</Badge>
        <Badge>Framer Motion</Badge>
      </dd>
    </dl>
    <dl className="grid grid-layout">
      <dt className="text-gray-500 text-right">Backend</dt>
      <dd>
        <Badge>Node.js</Badge>
        <Badge>Django</Badge>
        <Badge>Python</Badge>
        <Badge>GraphQL</Badge>
        <Badge>REST</Badge>
        <Badge>TypeScript</Badge>
        <Badge>Golang</Badge>
      </dd>
    </dl>
    <dl className="grid grid-layout">
      <dt className="text-gray-500 text-right">Datenbanken</dt>
      <dd>
        <Badge>Firebase</Badge>
        <Badge>Cloud Firestore</Badge>
        <Badge>PostgreSQL</Badge>
        <Badge>MySQL</Badge>
        <Badge>MongoDB</Badge>
      </dd>
    </dl>
    <dl className="grid grid-layout">
      <dt className="text-gray-500 text-right">etc</dt>
      <dd>
        <Badge>Agile</Badge>
        <Badge>Docker</Badge>
        <Badge>Git</Badge>
        <Badge>TDD</Badge>
        <Badge>CI</Badge>
        <Badge>Scrum</Badge>
        <Badge>Kanban</Badge>
        <Badge>Figma</Badge>
        <Badge>Sentry</Badge>
        <Badge>GraphCMS</Badge>
      </dd>
    </dl>
  </header>
);

export default PageHeader;

export const config = {
  unstable_runtimeJS: false
};
