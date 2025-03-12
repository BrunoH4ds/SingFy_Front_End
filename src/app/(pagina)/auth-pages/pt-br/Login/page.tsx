import AuthLinks from "@/components/comp_loginAndSignUp/AuthLinks";
import ButtonsLinkedList from "@/components/comp_loginAndSignUp/ButtonsLinkedList";
import InputsCadAndLogin from "@/components/comp_loginAndSignUp/InputsCadAndLogin";
import React from "react";
import Layout from "../../../layout";

export default function Login() {
  return (
    <div
      className="flex flex-col min-h-screen bg-cover"
      style={{ backgroundImage: 'url("/background2.png")' }}
    >
      <div className="flex justify-center items-center min-h-screen">
        <div className="flex flex-col lg:w-1/3 justify-center items-center border border-green-600 bg-zinc-700/40 backdrop-blur-sm p-5 m-5 rounded-md">
          <img className="w-32 h-32" src="/Logo.png" />
          <h1 className="font-bold text-2xl">Entre no Singfy</h1>
          <p className="text-1xl">é Bom te ver de volta a familia Sing</p>
          <ButtonsLinkedList />
          <div className="my-2 w-5/6 border-b border-zinc-400"></div>
          <div className="flex flex-col justify-center items-center w-full">
            <InputsCadAndLogin NoUserName={true} NoNumberPhone={true} />
            <button className="mt-2 w-4/5 p-2 border border-green-600 rounded-md bg-green-600 hover:bg-green-500 hover:border-green-500 text-white">
              Entrar
            </button>
            <AuthLinks showLogin={false} />
          </div>
        </div>
      </div>
    </div>
  );
}
