import jwt from "jsonwebtoken";

const adminMiddleware = (req, res, next) => {
  try {
    const token = req.cookies.token;

    if (!token) {
      // If coming from form (EJS)
      if (req.accepts("html")) {
        return res.redirect("/"); // Redirect to login page
      }

      // API response
      return res.status(401).json({
        success: false,
        message: "No token found. Please login.",
      });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;

    if (!req.user || !req.user.isAdmin) {
      if (req.accepts("html")) {
        return res.status(403).render("unauthorized.ejs", {
          error: "Admin access only.",
        });
      }

      return res.status(403).json({
        success: false,
        message: "Access denied. Admin privileges required.",
      });
    }

    next();
  } catch (error) {
    console.log("Middleware Error:", error.message);

    if (req.accepts("html")) {
      return res.redirect("/");
    }

    return res.status(401).json({
      success: false,
      message: "Authentication failed. Invalid token.",
    });
  }
};

export default adminMiddleware;
