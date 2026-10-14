import ProfileCard from "@/components/profiles/ProfileCard";

export default function ProfilePage() {
  return (
    <main className="bg-app-lobby-page-bg flex-1 pl-25 pt-20 flex flex-col">
      <ProfileCard />
      <p className="m-auto z-40">profile</p>
    </main>
  )
}