import Navbar from './components/Navbar';
import BannerCarousel from './components/BannerCarousel';
import PopularActivities from './components/PopularActivities';
import PopularHotelsAndLodges from './components/PopularHotelsAndLodges';
import Footer from './components/Footer';
import Welcome from './components/Welcome';




export default function Home() {
  const bannerData = [
    {
      title: "Discover Victoria Falls",
      subtitle: "Experience one of the world's greatest natural wonders, where mist, thunder, and breathtaking views come together for an unforgettable journey.",
      backgroundImage: "/ban.jpg",
      locationTag: "The most popular tourist destination",
      locationName: "The Victoria Falls"
    },
    {
      title: "The Finest Luxury Hotels",
      subtitle: "Indulge in world-class hotels where elegance, comfort, and breathtaking views create an exceptional escape.",
      backgroundImage: "/pal.jpeg",
      locationTag: "The most popular hotel this year ",
      locationName: "Palm River Hotel"
    },

    {
      title: "Wildlife Encounters",
      subtitle: "Authentic game drives led by experienced local guides, offering unforgettable wildlife encounters and deep insight into the African bush.",
      backgroundImage: "/pool.png",
      backgroundVideo: "/vid.mp4",
      locationTag: "Top wildlife safaris",
      locationName: "Wilderness Linkwasha Camp"
    }
  ];

  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      <BannerCarousel banners={bannerData} />
      <Welcome/>
      <PopularActivities />
      <PopularHotelsAndLodges/>
      <Footer/>
      
     
    </div>
  );
}
