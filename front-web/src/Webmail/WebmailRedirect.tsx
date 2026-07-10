import { useEffect } from "react";

export default function WebmailRedirect() {
  // Redirect after 2 secconds.
  setTimeout(() => {
    RedirectMail();
  }, 2000);

  return <p>Redirecionando para <b>Hostinger...</b></p>;
}

function RedirectMail() {
  useEffect(() => {
    window.location.href = "https://mail.hostinger.com";
  }, []);
}
