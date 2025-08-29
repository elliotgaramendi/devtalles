import useFollow from "../../hooks/useFollow";
import BusinessCard from "../components/ProfileCard";
import UserTableSection from "../modules/UserTableSection";
import AuthPage from "../widgets/AuthWidget";

const Home = () => {
  const { followers, increaseFollowersBy } = useFollow({ initialValue: 0 });

  return (
    <>
      <section className="py-16">
        <div className="grid place-items-center place-content-center gap-8 md:grid-cols-2 container mx-auto px-4">
          <AuthPage />
          <BusinessCard followers={followers} onFollowersChange={increaseFollowersBy} />
        </div>
      </section>
      <UserTableSection />
    </>
  );
}

export default Home;