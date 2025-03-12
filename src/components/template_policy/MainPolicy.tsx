import FooterCookies from "./FooterPolicy";
import HeaderCookies from "./HeaderPolicy";
import NavegationCookies from "./NavPolicy";

export interface PropsMainPolicy {
  children: any;
}

export default function MainPolicy(props: PropsMainPolicy) {
  return (
    <div className="flex flex-1 flex-col min-h-screen overflow-x-hidden bg-cover bg-zinc-900">
      <NavegationCookies />
      {/* Your other components */}
      <div className="flex flex-col flex-1 m-5 md:mx-40 my-5">
        <HeaderCookies />
        <div className="custom-section">{props.children}</div>
      </div>
      <FooterCookies />
    </div>
  );
}
