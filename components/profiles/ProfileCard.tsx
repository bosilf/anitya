import ButtonNav from "../buttons/ButtonNav";
import PillBtn from "../buttons/CookieConsentButtons";

export default function ProfileCard() {
  return (
    <section className="pr-5 w-fill">
      <div className="max-w-200 h-full mx-auto p-3 w-full grid grid-cols-1 sm:grid-cols-5 gap-2 bg-app-color-grey-5-72-percent backdrop-blur-2xl rounded-3xl border-[0.5px] border-white/45">
        <div className="p-2 border shadow-lg bg-site-mid-gray shadow-app-anitya-blue/40 border-app-anitya-blue/70 col-span-5 sm:col-span-1 aspect-square rounded-xl"></div>
        <div className="col-span-5 sm:col-span-4 col-start-1 sm:col-start-2 flex flex-col gap-2">
          <h1 className="font-bold text-3xl">Blue Marten</h1>
          <ul className="text-xs flex gap-2 flex-wrap">
            <li>@userid</li>
            <li>Joined Oct 13</li>
            <li>2 playables</li>
            <li>0 assets</li>
            <li>0 collections</li>
          </ul>
          <div className="mt-auto mb-0.5 flex gap-2 flex-wrap">
            {/* <PillBtn src="#" variant="secondary" label="Change avatar" /> */}
            {/* <PillBtn src="#" variant="secondary" label="Change avatar" /> */}
            {/* <PillBtn src="#" variant="secondary" label="Change avatar" /> */}
            <ButtonNav href="#" label="change avatar" />
            <ButtonNav href="#" label="Edit Profile" />
            <ButtonNav href="#" label="View Public Profile" />
            <ButtonNav href="#" label="Log Out" />
          </div>
        </div>
      </div>
    </section>
  );
}
