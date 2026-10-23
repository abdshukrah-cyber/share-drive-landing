import type { Metadata } from "next";
import { PaymentCallbackClient } from "./payment-callback-client";

export const metadata: Metadata = {
  title: "Payment Complete",
  description:
    "Return to the ShareDrive app after completing a wallet payment.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function PaymentCallbackPage() {
  return <PaymentCallbackClient />;
}
