import { useEffect } from "react";

export default function WebmailRedirect() {
  useEffect(() => {
    window.location.href = "https://mail.hostinger.com";
  }, []);

  return <p>Redirecionando para Hostinger...</p>;
}