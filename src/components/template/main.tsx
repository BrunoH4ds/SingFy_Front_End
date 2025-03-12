import Header from "./NavBar";
import Footer from "./footer";
import Sidebar from "./sideBar";

export interface MainProps {
  children: any;
  className?: string;
  semCabecalho?: boolean;
  semRodape?: boolean;
}

export default function Main(props: MainProps) {
  return (
    <div
      className="flex flex-col min-h-screen overflow-x-hidden bg-cover"
      style={{ backgroundImage: 'url("/background.jpg")' }}
    >
      {props.semCabecalho ? null : <Header />}

      {/* Restante da página */}
      <div className="flex mx-10">
        <div className="flex h-[calc(100vh-70px)] overflow-x-hidden">
          <Sidebar />
        </div>
        <main className="flex flex-1 content h-[calc(100vh-180px)] overflow-x-hidden">
          {props.children}
        </main>
      </div>
      {/* Rodapé */}
      {props.semRodape ? null : <Footer />}
    </div>
  );
}
