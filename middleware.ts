import { authMiddleware as clerkAuthMiddleware } from "@clerk/nextjs";

export const authMiddleware = (options: any) => {
  const middleware = clerkAuthMiddleware(options);

  return async (req, res, next) => {
    console.log("Before authMiddleware");
    await middleware(req, res, () => {
      console.log("After authMiddleware");
      next();
    });
  };
};

export default authMiddleware({
  publicRoutes: ["/", "/api/webhook(.*)"],
  ignoredRoutes: ["/api/webhook(.*)"],
});

export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};
