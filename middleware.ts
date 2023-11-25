import { authMiddleware as clerkAuthMiddleware } from "@clerk/nextjs";

export const authMiddleware = (options: any) => {
  const middleware = clerkAuthMiddleware(options);

  return async (req: any, res: any, next: any) => {
    console.log("Before authMiddleware");
    try {
      await middleware(req, res);
      console.log("After authMiddleware");
      next();
    } catch (error) {
      console.error("Error in authMiddleware", error);
      res.status(500).send("Error in authMiddleware");
    }
  };
};

export default authMiddleware({
  publicRoutes: ["/", "/api/webhook(.*)"],
  ignoredRoutes: ["/api/webhook(.*)"],
});

export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};
