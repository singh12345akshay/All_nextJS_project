import { Box } from "@mui/material";
import { useRouter } from "next/router";
import { enqueueSnackbar } from "notistack";
import React, { ReactComponentElement, useEffect, useState } from "react";

interface AuthproviderProps {
  children: React.ReactNode;
}
export default function AuthProvider({ children }: AuthproviderProps) {
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();

  const checkAuthtoken = async () => {
    const currentPage = router.pathname;
    const authToken = localStorage.getItem("authToken");

    if (!authToken && currentPage !== "/signin") {
      {
        console.log("i'm here:", authToken);
      }
      await router.push("/signin");
      enqueueSnackbar("Please SignIn First", {
        variant: "error",
        preventDuplicate: true,
        anchorOrigin: {
          vertical: "top",
          horizontal: "center",
        },
      });
    } else if (authToken && currentPage === "/signin") {
      router.push("/home");
    }
  };
  useEffect(() => {
    checkAuthtoken();
    setTimeout(() => {
      setIsLoading(false);
    }, 1500);
  }, [router]);
  if (isLoading) {
    return (
      <div>
        
      </div>
    );
  }

  return <>{children}</>;
}
