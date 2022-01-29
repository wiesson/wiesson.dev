import Link from "next/link";

const SiteHeader = () => (
  <header className="section space-y-6 text-center">
    <div>
      <Link href="/">
        <a className="block mx-auto w-32 h-32">
          <img
            src="/assets/arne.jpg"
            alt="Arne Wiese"
            width="128"
            height="128"
            className="rounded-md w-32 h-32 block"
          />
        </a>
      </Link>
    </div>
    <h1 className="text-2xl">Arne Wiese</h1>
    <h2 className="text-3xl leading-snug font-medium">
      Freier Entwickler mit Fokus auf Web-Technologien und APIs
    </h2>
    <h3 className="font-medium mb-2">
      Fullstack · JavaScript · TypeScript · NodeJS · Python · Golang
    </h3>
  </header>
);

export default SiteHeader;

export const config = {
  unstable_runtimeJS: false,
};
