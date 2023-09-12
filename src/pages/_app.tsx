import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Prompt } from "next/font/google";

const prompt = Prompt({
  subsets: ["latin"],
  weight: ["300", "500", "600", "700"],
  variable: "--prompt",
});

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <>
      <style jsx global>{`
        html {
          font-family: ${prompt.style.fontFamily};
        }
        :root {
          --prompt: ${prompt.style.fontFamily};
        }
      `}</style>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
