import { authMiddleware } from "@clerk/nextjs/server";

export const middleware = authMiddleware({
  // If you want to use a different redirect path, you can set it here.
  // redirectUrl: "/sign-in",
  // If you want to use a different path for the API route, you can set it here.
  // path: "/api/auth",

  publicRoutes: ["/", "/app/api/webhook"],
  ignoredRoutes: ["/api/webhook"],
});

console.log("Middleware:", middleware);

export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};

console.log("Config", middleware);
