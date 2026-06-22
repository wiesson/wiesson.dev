/**
 * Typst template loader and compilation utilities
 * Handles loading Typst templates and compiling them to PDF using @myriaddreamin/typst-ts-node-compiler
 * This is a Node.js-native compiler that doesn't require external binaries or temp files
 */

import { readFile } from "fs/promises";
import { join } from "path";
import { fileURLToPath } from "url";
import { dirname } from "path";
import { Readable } from "stream";
import { NodeCompiler } from "@myriaddreamin/typst-ts-node-compiler";
import type { TypstCvData } from "./cv-types.js";

// Get directory of current file
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

/**
 * Load CV Typst template from file system
 */
export async function loadCvTemplate(templatePath?: string): Promise<string> {
  const templateFile = templatePath || join(__dirname, "cv-template.typ");
  try {
    return await readFile(templateFile, "utf-8");
  } catch (error) {
    throw new Error(`Failed to load CV Typst template: ${String(error)}`);
  }
}

/**
 * Compile Typst source to PDF using Node.js-native compiler
 * Returns a readable stream of the PDF
 * No temp files needed - everything is in memory!
 */
export async function compileTypstToPdfStream(
  typstSource: string,
  _options?: { cleanup?: boolean },
): Promise<{ stream: Readable; tempDir: string }> {
  // Create compiler instance with workspace set to typst directory
  const compiler = NodeCompiler.create({
    workspace: __dirname,
  });

  try {
    // Load lib.typ and add it as a source file so imports work
    try {
      const libTypContent = await readFile(join(__dirname, "lib.typ"), "utf-8");
      compiler.addSource("lib.typ", libTypContent);
    } catch {
      // lib.typ not found, but continue - the template might not need it
      console.warn("Warning: lib.typ not found, imports may fail");
    }

    // Compile first to check for errors
    const compileResult = compiler.compile({ mainFileContent: typstSource });

    // Check for compilation errors
    if (compileResult.hasError()) {
      const error = compileResult.takeError();
      const diagnostics = compileResult.takeDiagnostics();

      let errorMessage = "Typst compilation failed";
      if (error) {
        const shortDiag = error.shortDiagnostics;
        if (shortDiag && shortDiag.length > 0) {
          errorMessage += `: ${JSON.stringify(shortDiag)}`;
        }
      }
      if (diagnostics) {
        const diagText = diagnostics.shortDiagnostics;
        if (diagText && diagText.length > 0) {
          errorMessage += `\nDiagnostics: ${JSON.stringify(diagText)}`;
        }
      }

      // In development, include source preview in error
      if (process.env.NODE_ENV === "development") {
        const sourcePreview = typstSource.substring(0, 1500);
        errorMessage += `\n\nGenerated source preview (first 1500 chars):\n${sourcePreview}`;
      }

      throw new Error(errorMessage);
    }

    // Get the compiled document
    const document = compileResult.result;
    if (!document) {
      throw new Error("Compilation succeeded but no document was produced");
    }

    // Generate PDF from compiled document
    const pdfBuffer = compiler.pdf(document);

    // Convert buffer to readable stream
    const stream = Readable.from(pdfBuffer);

    return { stream, tempDir: "" }; // No temp dir needed!
  } catch (error: any) {
    // Enhanced error message
    if (error.message) {
      throw new Error(`Failed to compile Typst to PDF: ${error.message}`);
    }
    throw new Error(`Failed to compile Typst to PDF: ${String(error)}`);
  }
}

/**
 * Compile Typst source to PDF using Node.js-native compiler
 * Returns PDF buffer (for backward compatibility)
 */
export async function compileTypstToPdf(typstSource: string): Promise<Buffer> {
  // Create compiler instance with workspace set to typst directory
  const compiler = NodeCompiler.create({
    workspace: __dirname,
  });

  try {
    // Load lib.typ and add it as a source file so imports work
    try {
      const libTypContent = await readFile(join(__dirname, "lib.typ"), "utf-8");
      compiler.addSource("lib.typ", libTypContent);
    } catch {
      // lib.typ not found, but continue - the template might not need it
      console.warn("Warning: lib.typ not found, imports may fail");
    }

    // Compile first to check for errors
    const compileResult = compiler.compile({ mainFileContent: typstSource });

    // Check for compilation errors
    if (compileResult.hasError()) {
      const error = compileResult.takeError();
      const diagnostics = compileResult.takeDiagnostics();

      let errorMessage = "Typst compilation failed";
      if (error) {
        const shortDiag = error.shortDiagnostics;
        if (shortDiag && shortDiag.length > 0) {
          errorMessage += `: ${JSON.stringify(shortDiag)}`;
        }
      }
      if (diagnostics) {
        const diagText = diagnostics.shortDiagnostics;
        if (diagText && diagText.length > 0) {
          errorMessage += `\nDiagnostics: ${JSON.stringify(diagText)}`;
        }
      }

      // In development, include source preview in error
      if (process.env.NODE_ENV === "development") {
        const sourcePreview = typstSource.substring(0, 1500);
        errorMessage += `\n\nGenerated source preview (first 1500 chars):\n${sourcePreview}`;
      }

      throw new Error(errorMessage);
    }

    // Get the compiled document
    const document = compileResult.result;
    if (!document) {
      throw new Error("Compilation succeeded but no document was produced");
    }

    // Generate PDF from compiled document
    return compiler.pdf(document);
  } catch (error: any) {
    // Enhanced error message
    if (error.message) {
      throw new Error(`Failed to compile Typst to PDF: ${error.message}`);
    }
    throw new Error(`Failed to compile Typst to PDF: ${String(error)}`);
  }
}

/**
 * Generate Typst source code from CV data
 * Now uses direct string generation instead of template + dictionary
 */
export async function generateCvTypstSource(
  data: TypstCvData,
  showBullets: boolean = false,
): Promise<string> {
  // Import the generator function
  const { generateCvTypstSource: generateSource } = await import("./cv-generator.js");

  // Extract language from locale (e.g., 'en-US' -> 'en', 'de-DE' -> 'de')
  const lang = (data.locale ?? "de-DE").split("-")[0];

  // Generate complete Typst source directly with language support
  const typstSource = generateSource(data, showBullets, lang);

  // Debug: write generated source to file in development for inspection
  if (process.env.NODE_ENV === "development") {
    const { writeFile } = await import("fs/promises");
    const debugPath = join(process.cwd(), `debug-cv-source-${lang}.typ`);
    await writeFile(debugPath, typstSource);
    console.log("Generated Typst source written to", debugPath);
  }

  return typstSource;
}

/**
 * Generate PDF from CV data (complete pipeline)
 */
export async function generatePdfFromCvData(
  data: TypstCvData,
  showBullets: boolean = false,
): Promise<Buffer> {
  const typstSource = await generateCvTypstSource(data, showBullets);
  try {
    return await compileTypstToPdf(typstSource);
  } catch (err: any) {
    // In development, include the generated source in error for debugging
    if (process.env.NODE_ENV === "development" && err.message) {
      const sourcePreview = typstSource.substring(0, 2000);
      throw new Error(
        `${err.message}\n\nGenerated Typst source (first 2000 chars):\n${sourcePreview}`,
      );
    }
    throw err;
  }
}
