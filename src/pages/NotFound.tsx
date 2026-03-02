import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { getContent, type Language } from "@/i18n/content";

const NotFound = () => {
  const location = useLocation();
  const langFromPath = location.pathname.startsWith("/tr")
    ? "tr"
    : location.pathname.startsWith("/ru")
      ? "ru"
      : "en";
  const { notFound } = getContent(langFromPath as Language);

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname,
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">404</h1>
        <p className="text-xl text-gray-600 mb-4">{notFound.message}</p>
        <a
          href={`/${langFromPath}`}
          className="text-blue-500 hover:text-blue-700 underline"
        >
          {notFound.action}
        </a>
      </div>
    </div>
  );
};

export default NotFound;
