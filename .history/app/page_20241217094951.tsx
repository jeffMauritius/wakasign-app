import { Button } from '@/components/ui/button';
export default function Home() {
  return (
    <div className="grid min-h-screen grid-rows-[20px_1fr_20px] items-center justify-items-center gap-16 p-8 pb-20 font-[family-name:var(--font-geist-sans)] sm:p-20">
      <main className="row-start-2 flex flex-col items-center gap-8 sm:items-start">
        <h1 className="text-4xl">Wakasign-app</h1>
        <div className="flex flex-col items-center gap-4 sm:flex-row sm:gap-8">
          <Button>Se connecter à wakasign</Button>
        </div>
      </main>
    </div>
  );
}
