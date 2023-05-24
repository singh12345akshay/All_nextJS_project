import { Box } from "@mui/material";
import { useRouter } from "next/router";
import { enqueueSnackbar } from "notistack";
import React, { ReactComponentElement, useEffect, useState } from "react";

interface AuthproviderProps{
    children: React.ReactNode;
}
export default function AuthProvider({ children }: AuthproviderProps) {
     const [isLoading, setIsLoading] = useState(true);
    const router = useRouter();
    const checkAuthtoken = async () => {
            const authToken = localStorage.getItem("authToken");
            if (!authToken) {
                await router.push("/signin/signin");
                enqueueSnackbar("Please SignIn First", {
                  variant: "error",
                  preventDuplicate: true,
                  anchorOrigin: {
                    vertical: "top",
                    horizontal: "center",
                  },
                });
            }
        };
    useEffect(() => {
        checkAuthtoken();
        setTimeout(() => {
          setIsLoading(false);
        }, 2000);
    }, []);
    if (isLoading) {
      return <div>Loading...</div>;
    }
    
    return (<>{children}</>);
    
}
