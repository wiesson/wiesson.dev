/** @jsxImportSource preact */

interface Props {
  name: string;
  title: string;
  location?: string;
  imageUrl: string;
  showEducation?: boolean;
  showIntro?: boolean;
  showEmail?: boolean;
  showWebsite?: boolean;
}

const CvHeader = ({
  name,
  title,
  location,
  imageUrl,
  showEducation = true,
  showIntro = true,
  showEmail = true,
  showWebsite = true,
}: Props) => {
  const education = "M.Sc. Energy Science and Technology";
  const intro =
    "15+ Jahre Erfahrung in der Softwareentwicklung mit Fokus auf Full-Stack-Entwicklung, KI-Integration und technische Architektur";
  const email = "arne@wiese.me";
  const website = "wiesson.dev";

  return (
    <header class="app-grid py-16">
      <div class="app-text-column flex flex-col md:flex-row items-start gap-5 md:gap-6">
        {/* Circular Profile Photo */}
        <img
          src={imageUrl}
          alt={name}
          class="w-24 h-24 rounded-full object-cover shrink-0"
        />

        {/* Text Content */}
        <div class="flex flex-col gap-2">
          {/* Name */}
          <h1 class="text-xl font-normal" style="color: #111;">
            {name}
          </h1>

          {/* Title and Location */}
          <p class="text-sm" style="color: #555;">
            {title}
            {location && ` · ${location}`}
          </p>

          {/* Education */}
          {showEducation && (
            <p class="text-xs" style="color: #6D6D6D;">
              {education}
            </p>
          )}

          {showIntro && (
            <p class="text-sm" style="color: #555;">
              {intro}
            </p>
          )}

          {/* Contact Links */}
          {(showEmail || showWebsite) && (
            <div
              class="flex items-center gap-3 text-sm"
              style="color: #6D6D6D;"
            >
              {showEmail && (
                <>
                  <a href={`mailto:${email}`} class="hover:underline">
                    {email}
                  </a>
                  {showWebsite && <span>·</span>}
                </>
              )}

              {showWebsite && (
                <a
                  href={`https://${website}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  class="hover:underline"
                >
                  {website}
                </a>
              )}
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default CvHeader;
