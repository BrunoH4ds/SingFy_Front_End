import HeaderPolicyButtons from "../comp_policy/HeaderPolicyButtons";

export default function HeaderPolicy() {
  return (
    <div className="flex flex-col py-5 items-center">
      <h1 className="text-white font-bold text-xl m-5">Legal:</h1>
      <div className="flex items-center justify-center">
        <HeaderPolicyButtons />
      </div>
    </div>
  );
}
