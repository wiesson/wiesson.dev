import Link from "next/link";

const SiteHeader = () => (
  <header className="section space-y-6 text-center">
    <div>
      <Link href="/">
        <a className="block mx-auto w-32 h-32">
          <picture>
            <source srcSet="/assets/arne-384.avif" type="image/avif" />
            <source srcSet="/assets/arne-384.webp" type="image/webp" />
            <img
              src="/assets/arne-384.jpg"
              alt="Arne Wiese"
              className="rounded-md w-32 h-32 block"
              width="128"
              height="128"
            />
          </picture>
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
