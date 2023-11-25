import { authMiddleware } from "@clerk/nextjs";

export const middleware = authMiddleware({
  publicRoutes: ["/", "/api/webhook"],
  ignoredRoutes: ["/api/webhook"],
});

console.log("middleware", middleware);
export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};

console.log("config", config);
