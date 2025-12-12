/* eslint-disable @typescript-eslint/no-explicit-any */
"use server";
import {
  getDefaultDashboardRoute,
  validRedirectForRole,
} from "@/lib/auth.util";

import verifiedAccessToken from "@/lib/jwtHandlers";

import { serverFetch } from "@/lib/serverFetch";
import { setCookie } from "@/lib/tokenHandlers";
import zodValidator from "@/lib/zodValidator";

import { loginValidationSchema } from "@/zod/auth.validation";
import { JwtPayload } from "jsonwebtoken";

import { redirect } from "next/navigation";

const loginUser = async (_currentState: any, formData: FormData) => {
  try {
    const redirectTo = formData.get("redirect") || null;

    const payload = {
      email: formData.get("email"),
      password: formData.get("password"),
    };
    console.log(payload);
    if (zodValidator(payload, loginValidationSchema).success === false) {
      return zodValidator(payload, loginValidationSchema);
    }
    const validatedPayload = zodValidator(payload, loginValidationSchema).data;
    const res = await serverFetch.post(`/auth/login`, {
      body: JSON.stringify(validatedPayload),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const result = await res.json();
    console.log(result);
    const accessToken = result?.data?.accessToken;
    const refreshToken = result?.data?.refreshToken;
    console.log("from login user", accessToken, refreshToken);
    if (!accessToken) {
      throw new Error(
        `${
          result.message === "Incorrect Password!"
            ? "Incorrect Password!"
            : result.message === "Invalid user or email"
            ? "Invalid user or email"
            : "Something went wrong"
        }`
      );
    }
    if (!refreshToken) {
      throw new Error(
        `${
          result.message === "Incorrect Password!"
            ? "Incorrect Password!"
            : result.message === "Invalid user or email"
            ? "Invalid user or email"
            : "Something went wrong"
        }`
      );
    }
    await setCookie("accessToken", accessToken, {
      httpOnly: true,
      secure: true,
      maxAge: 1000 * 60 * 60 * 24,
      sameSite: "none",
    });
    await setCookie("refreshToken", refreshToken, {
      httpOnly: true,
      secure: true,
      maxAge: 1000 * 60 * 60 * 24 * 30,
      sameSite: "none",
    });

    const verifiedToken: JwtPayload | string = await verifiedAccessToken(
      accessToken
    );
    console.log("verifiedToken from loginUser", verifiedToken);
    if (!verifiedToken.success) {
      throw new Error("You are not verified");
    }
    const userRole: any = verifiedToken?.payload.role;
    console.log("userRole from login user", userRole);

    if (!result.success) {
      throw new Error(result.message || "Login failed");
    }
    if (redirectTo) {
      const redirectPath = redirectTo.toString();
      if (validRedirectForRole(redirectPath, userRole)) {
        redirect(`${redirectPath}?loggedIn=true`);
      } else {
        redirect(`${getDefaultDashboardRoute(userRole)}?loggedIn=true`);
      }
    } else {
      redirect(`${getDefaultDashboardRoute(userRole)}?loggedIn=true`);
    }
  } catch (err: any) {
    console.log(err);
    if (err?.digest?.startsWith("NEXT_REDIRECT")) {
      throw err;
    }
    return {
      success: false,
      message: `${
        process.env.NODE_ENV === "development" ? err.message : "Login failed"
      }`,
    };
  }
};

export default loginUser;
