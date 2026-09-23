import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Stamp } from "@/components/ui/decor";

export default function NotFound() {
  return (
    <Container className="grid min-h-[70vh] place-items-center py-24 text-center">
      <div>
        <div className="mx-auto h-40 w-40 opacity-90">
          <Stamp tone="maroon" />
        </div>
        <h1 className="mt-8 text-[clamp(40px,6vw,80px)] font-bold leading-none tracking-[-0.035em] text-forest">Off the map.</h1>
        <p className="mx-auto mt-5 max-w-[40ch] text-[18px] leading-relaxed text-muted">
          That page doesn&apos;t exist — but your route abroad does. Let&apos;s get you back on it.
        </p>
        <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
          <Button href="/" variant="forest" size="lg" arrow>
            Back to home
          </Button>
          <Button href="/contact#counselling" variant="outline" size="lg">
            Book free counselling
          </Button>
        </div>
      </div>
    </Container>
  );
}
