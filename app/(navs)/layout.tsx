import Header from "../components/common/Header";
import NavBar from "../components/common/NavBar";

export default function NavLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="pt-16 w-full pb-20">
      <Header />
      {children}
      <NavBar />
    </div>
  );
}
