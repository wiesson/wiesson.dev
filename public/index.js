import hydrate from "preact-iso/hydrate";
import { LocationProvider, Router } from "preact-iso/router";
import { ErrorBoundary } from "preact-iso/lazy";
import About from "./pages/cv/index";
import NotFound from "./pages/_404.js";

export function App() {
  return (
    <LocationProvider>
      <div class="container">
        <ErrorBoundary>
          <Router>
            <About path="/" />
            <NotFound default />
          </Router>
        </ErrorBoundary>
      </div>
    </LocationProvider>
  );
}

hydrate(<App />);

export async function prerender(data) {
  const { default: prerender } = await import("preact-iso/prerender");
  return await prerender(<App {...data} />);
}
