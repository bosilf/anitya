import Link from "next/link";
import CookieConsentButtons from "@/components/buttons/CookieConsentButtons";

type CookieConsentBannerProps = {
  privacyHref?: string;
};

export default function CookieConsentBanner({ privacyHref = "/privacy" }: CookieConsentBannerProps) {
  return (
    <section
      aria-label="Cookie choice"
      className="flex w-full max-w-[var(--site-width-720)] flex-col items-start gap-site-item-spacing-s rounded-site-corner-radius-12 border border-site-color-white-15-percent bg-site-color-grey-9-92-percent px-4 py-3 shadow-[0_8px_32px_rgba(0,0,0,0.37)] md:flex-row md:items-center"
    >
      <p className="min-w-0 flex-1 font-site-font-family-font-1 text-[13px] font-light leading-[var(--site-line-height-18-85)] text-site-mid-gray">
        anitya uses analytics cookies to see how people play and to fix what breaks.
        With essential only, we count your visit without cookies.{" "}
        <Link href={privacyHref} className="text-site-light-gray underline decoration-from-font underline-offset-2 hover:text-site-green focus:text-site-green focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-site-green">
          Privacy Policy
        </Link>
      </p>
      <div className="shrink-0">
        {/* <CookieConsentButtons /> */}
      </div>
    </section>
  );
}
