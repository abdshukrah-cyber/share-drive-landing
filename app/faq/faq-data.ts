export type FAQCategory = "general" | "riders" | "drivers" | "safety" | "payments";

export const categories: { id: FAQCategory; label: string }[] = [
  { id: "general", label: "General" },
  { id: "riders", label: "For Riders" },
  { id: "drivers", label: "For Drivers" },
  { id: "safety", label: "Safety" },
  { id: "payments", label: "Payments" },
];

export const faqs: Record<FAQCategory, { question: string; answer: string }[]> = {
  general: [
    {
      question: "What is ShareDrive?",
      answer:
        "ShareDrive is a carpooling platform designed specifically for Lagos, Nigeria. We connect drivers heading to work or other destinations with riders going the same way, helping everyone save on fuel costs while reducing traffic congestion.",
    },
    {
      question: "Is ShareDrive live?",
      answer:
        "Yes! ShareDrive is live now. You can sign up and start sharing rides today on our web app at app.sharedrive.ng. Our Android app is coming very soon, and the iOS app is coming soon.",
    },
    {
      question: "Is ShareDrive available outside Lagos?",
      answer:
        "We're starting with Lagos as our primary market. Once we've established a strong presence there, we plan to expand to other major Nigerian cities like Abuja, Port Harcourt, and more.",
    },
    {
      question: "How is ShareDrive different from Uber or Bolt?",
      answer:
        "Unlike ride-hailing services where you pay for a dedicated car and driver, ShareDrive is for carpooling - sharing rides with people already heading your way. This makes it more affordable for riders and helps drivers offset their fuel costs rather than work as professional drivers.",
    },
    {
      question: "How do I access ShareDrive?",
      answer:
        "ShareDrive is available now as a web app at app.sharedrive.ng, which works in the browser on any phone or computer. Our Android app is coming very soon to Google Play, and the iOS app is coming soon to the App Store.",
    },
  ],
  riders: [
    {
      question: "How do I find a ride?",
      answer:
        "Simply enter your pickup location and destination in the app. We'll show you available drivers heading your way along with their profiles, ratings, departure times, and prices. You can then send a ride request to join.",
    },
    {
      question: "Can I book rides in advance?",
      answer:
        "Yes! You can search for rides up to a week in advance. This is especially useful for your daily commute - you can set up recurring rides and match with the same driver regularly.",
    },
    {
      question: "What if my driver cancels?",
      answer:
        "If a driver cancels, you'll be notified immediately and can search for alternative rides. We work to minimize cancellations by encouraging commitment from both riders and drivers.",
    },
    {
      question: "Can I bring luggage?",
      answer:
        "That depends on the driver and available space. When posting rides, drivers indicate how much luggage space is available. You can also message the driver beforehand to confirm.",
    },
    {
      question: "How do I know my pickup point?",
      answer:
        "You'll coordinate the exact pickup point with your driver through in-app messaging. The app also allows you to share your live location so the driver can find you easily.",
    },
  ],
  drivers: [
    {
      question: "What do I need to become a driver?",
      answer:
        "You'll need a valid Nigerian driver's license, vehicle registration documents, proof of insurance, and to pass our verification process. Your vehicle should be in good condition and have passed recent inspection.",
    },
    {
      question: "How do I set my price?",
      answer:
        "You set your own price per seat based on your route and distance. We provide suggested pricing based on fuel costs and similar routes, but you have full control over what you charge.",
    },
    {
      question: "Can I choose who rides with me?",
      answer:
        "Absolutely! You can view rider profiles, ratings, and reviews before accepting any ride request. You always have the final say on who joins your ride.",
    },
    {
      question: "What if a rider doesn't show up?",
      answer:
        "If a rider doesn't show up at the agreed pickup point within a reasonable time, you can mark them as a no-show and proceed with your trip. Repeated no-shows affect a rider's rating.",
    },
    {
      question: "How much can I earn?",
      answer:
        "Earnings depend on your route, how many seats you offer, and how often you drive. Many drivers cover their entire fuel costs and more by filling empty seats on their daily commute.",
    },
  ],
  safety: [
    {
      question: "How does ShareDrive verify users?",
      answer:
        "All users must verify their phone number and upload a valid government-issued ID. Drivers undergo additional checks including license verification and vehicle documentation review. We also use facial recognition to confirm identity.",
    },
    {
      question: "Can I share my trip with someone?",
      answer:
        "Yes! Our live trip sharing feature lets you share your ride details and real-time location with trusted contacts. They can follow your journey until you arrive safely.",
    },
    {
      question: "What if I feel unsafe during a ride?",
      answer:
        "The app has an emergency button that connects you directly to local emergency services. You can also share your live location instantly with your emergency contacts.",
    },
    {
      question: "How does the rating system work?",
      answer:
        "After each ride, both riders and drivers can rate each other and leave reviews. These ratings are visible on profiles and help build trust in our community. Users with consistently low ratings may be removed from the platform.",
    },
    {
      question: "Is my personal information safe?",
      answer:
        "We take data privacy seriously. Your personal information is encrypted and never shared with other users without your consent. Only necessary information (like your first name and profile photo) is visible to matches.",
    },
  ],
  payments: [
    {
      question: "How do payments work?",
      answer:
        "Payments are handled securely through the app. Riders pay when they book a ride, and drivers receive the funds after the trip is completed. We support multiple payment methods including bank cards and mobile money.",
    },
    {
      question: "When do drivers get paid?",
      answer:
        "Drivers can withdraw their earnings to their bank account at any time. Withdrawals are typically processed within 24-48 hours on business days.",
    },
    {
      question: "What fees does ShareDrive charge?",
      answer:
        "ShareDrive charges a small service fee to cover platform operations, payment processing, and user support. You'll always see the full price, including fees, before you confirm a ride.",
    },
    {
      question: "Can I pay with cash?",
      answer:
        "To ensure security and accountability, all payments are processed through the app. This protects both riders and drivers and provides a record of all transactions.",
    },
    {
      question: "What if there's a payment dispute?",
      answer:
        "If there's any issue with a payment, contact our support team through the app. We'll review the trip details and work to resolve the dispute fairly for both parties.",
    },
  ],
};
