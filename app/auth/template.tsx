import { getUser } from '@/lib/lucia';
import { Building } from 'lucide-react';
import { redirect } from 'next/navigation';

export default async function AuthTemplate({
  children,
}: {
  children: React.ReactNode;
}) {
  const user = await getUser();
  if (user) return redirect('/home');
  return (
    <div className="grid lg:grid-cols-2">
      <section className="flex flex-col items-center gap-3.5 min-h-dvh justify-center">
        <Building className="size-12" />
        <h1 className="font-semibold text-3xl">App Name</h1>
        {children}
      </section>
      <section className="p-4 hidden lg:block">
        <div className="relative w-full h-full overflow-hidden brightness-75 rounded-lg">
          <iframe
            src="https://api.mapbox.com/styles/v1/srini41/clzepfoyk000h01paav8l4v3k.html?title=false&access_token=pk.eyJ1Ijoic3Jpbmk0MSIsImEiOiJjbHpkb3FmMmkwcGRzMnJvYTkzaDBleHltIn0.xKlqzZg4eski9OSSnUATww&zoomwheel=false#17.67/43.658453/-79.378556/312.1/57"
            title="Monochrome"
            className="border-0 block absolute h-full w-full top-0 left-0"
          ></iframe>
        </div>
      </section>
    </div>
  );
}
