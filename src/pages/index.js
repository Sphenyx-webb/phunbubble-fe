import LeftSideBar from '@/components/LeftSideBar';
import Navbar from '@/components/Navbar';
import RightSideBar from '@/components/RightSideBar';
import SocialFeed from '@/components/SocialFeed';

export default function Home() {
  return (
    <>
      <Navbar/>
      <main className="grid grid-cols-12 min-h-screen">
        <LeftSideBar/>
        <div className="col-span-12 md:col-span-9 lg:col-span-7 px-10 py-8 bg-gray-50">
          <SocialFeed/>
        </div>
        <RightSideBar/>
      </main>
    </>
  )
}
