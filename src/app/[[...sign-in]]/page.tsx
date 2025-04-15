"use client";

import * as Clerk from "@clerk/elements/common";
import * as SignIn from "@clerk/elements/sign-in";
import { useUser } from "@clerk/nextjs";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const LoginPage = () => {
  // TODO: REVISAR LAS VARIABLES QUE NO ESTAN EN USO: isLoaded, isSignedIn
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { isLoaded, isSignedIn, user } = useUser();

  // TODO: ELIMINAR
  // console.log(user);

  const router = useRouter();

  useEffect(() => {
    const role = user?.publicMetadata.role;

    if (role) {
      router.push(`/${role}`);
    }
  }, [user, router]);

  return (
    // <div className="h-screen flex items-center justify-center bg-lamaSkyLight">
    <div className="h-screen flex flex-col items-center justify-center gap-4 bg-lamaSkyLight">
      <SignIn.Root>
        <SignIn.Step
          name="start"
          className="bg-white p-12 rounded-md shadow-2xl flex flex-col gap-2"
        >
          <h1 className="text-xl font-bold flex items-center gap-2">
            <Image src="/logo.png" alt="" width={34} height={34} />
            Sistema de Gestión Administrativo - CASIN
          </h1>
          <h2 className="text-gray-400 text-center">
            Inicia sesión con tu cuenta
          </h2>

          <Clerk.GlobalError className="text-sm text-red-400" />
          <Clerk.Field name="identifier" className="flex flex-col gap-2">
            <Clerk.Label className="text-sm text-gray-500">
              Usuario:
            </Clerk.Label>
            <Clerk.Input
              type="text"
              required
              className="p-2 rounded-md ring-1 ring-gray-300"
            />
            <Clerk.FieldError className="text-xs text-red-400" />
          </Clerk.Field>
          <Clerk.Field name="password" className="flex flex-col gap-2">
            <Clerk.Label className="text-sm text-gray-500">
              Contraseña:
            </Clerk.Label>
            <Clerk.Input
              type="password"
              required
              className="p-2 rounded-md ring-1 ring-gray-300 "
            />
            <Clerk.FieldError className="text-xs text-red-400" />
          </Clerk.Field>
          <SignIn.Action
            submit
            className="bg-blue-500 text-white my-1 rounded-md text-sm p-[10px]"
          >
            Ingresar
          </SignIn.Action>
        </SignIn.Step>
      </SignIn.Root>
      <div>
        {/* Botón centrado debajo */}
        <button
          onClick={() => window.location.reload()}
          className="mt-4 bg-gray-300 hover:bg-gray-400 text-gray rounded-md text-xs px-2 py-2"
        >
          Actualizar página
        </button>
      </div>
    </div>
  );
};

export default LoginPage;
