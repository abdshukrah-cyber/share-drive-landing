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
        "Yes! You can book rides ahead of time, not just for today. For your daily commute you can also join recurring rides and travel with the same driver regularly.",
    },
    {
      question: "Can I cancel a ride I've booked?",
      answer:
        "Yes, at any time before the trip starts, and it takes effect immediately with no driver approval needed. Cancelling 2 hours or more before departure is free and you get a full refund to your wallet. Within 2 hours of departure, a cancellation fee of 30% of the fare goes to the driver and the other 70% is refunded. Unpaid bookings always cancel free, and if your driver changed the departure time after you booked, you can cancel free right up to departure. The app shows the exact fee and refund before you confirm. For recurring rides and plans, this applies to each day on its own.",
    },
    {
      question: "What happens if I miss my pickup?",
      answer:
        "Your driver can mark you as a no-show only after the departure time has passed and they've waited at the pickup point for at least 10 minutes. A no-show splits the fare: 50% goes to the driver and 50% is refunded to your wallet. If you think you were marked as a no-show by mistake, you can open a dispute in the app within 48 hours.",
    },
    {
      question: "What if my driver cancels?",
      answer:
        "If a driver cancels your seat, removes you at pickup without marking a no-show, or pauses a recurring ride on a day you booked, you'll be notified and the full amount you paid for that day is refunded to your ShareDrive wallet. You can then search for another ride.",
    },
    {
      question: "How do I know my pickup point?",
      answer:
        "You can coordinate the exact pickup point with your driver through in-app chat. Once the trip is under way, you can follow your driver's live location on the map.",
    },
  ],
  drivers: [
    {
      question: "What do I need to become a driver?",
      answer:
        "You'll need a valid driver's licence, a vehicle document, a photo of your vehicle and its details (make, model, colour and plate number). Our team reviews your documents, and you can publish rides once they're approved.",
    },
    {
      question: "How do I set my price?",
      answer:
        "You set your own price per seat based on your route and distance. You have full control over what you charge.",
    },
    {
      question: "Can I choose who rides with me?",
      answer:
        "Yes. Riders send you a request to join, and you can see who is asking before you accept. You always have the final say on who joins your ride.",
    },
    {
      question: "What if I need to cancel or change my ride?",
      answer:
        "You can cancel a seat, edit a ride or pause a recurring ride from the app, and riders are always refunded in full when you cancel. Cancelling a confirmed seat less than 2 hours before departure counts as a strike, and the app tells you before you confirm. Three strikes in 30 days stop you from publishing new rides for 7 days. Once riders have booked, you can move the departure time by up to 30 minutes and add seats, but you can't change the fare or remove booked seats; riders are notified and can cancel for free.",
    },
    {
      question: "What if a rider doesn't show up?",
      answer:
        "Once the departure time has passed and you've waited at the pickup point for 10 minutes, you can mark the rider as a no-show when you start the trip. You receive 50% of their fare and the rider gets 50% back. If a rider cancels less than 2 hours before departure, you receive a 30% cancellation fee.",
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
        "All users verify their phone number or email when they sign up. Drivers must also submit their driver's licence and vehicle documents, which our team reviews before they can publish rides.",
    },
    {
      question: "Can I share my trip with someone?",
      answer:
        "Yes. During a trip you can share your trip details with anyone you trust using your phone's share options, and you can save emergency contacts in the app.",
    },
    {
      question: "What if I feel unsafe during a ride?",
      answer:
        "The app has an emergency button that alerts your emergency contacts and your co-rider with your location, and offers a quick call to 112, Nigeria's emergency number.",
    },
    {
      question: "How does the rating system work?",
      answer:
        "After each ride, both riders and drivers can rate each other and leave reviews. These ratings help build trust in our community, and we may suspend accounts that are repeatedly reported or poorly rated.",
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
        "Payments are handled securely through the app. Riders pay when they book a ride, and drivers receive the funds after the trip is completed. You can fund your wallet with a card, bank transfer or USSD through our payment partners.",
    },
    {
      question: "When do drivers get paid?",
      answer:
        "Drivers can withdraw their withdrawable balance to their bank account on demand, whenever they choose. Recent earnings may be held briefly before they become withdrawable.",
    },
    {
      question: "What fees does ShareDrive charge?",
      answer:
        "ShareDrive charges a small service fee to cover platform operations, payment processing, and user support. You'll always see the price before you confirm a ride.",
    },
    {
      question: "Can I pay with cash?",
      answer:
        "To ensure security and accountability, all payments are processed through the app. This protects both riders and drivers and provides a record of all transactions.",
    },
    {
      question: "What if there's a payment dispute?",
      answer:
        "If there's any issue with a payment, contact our support team at admin@sharedrive.ng. We'll review the trip details and work to resolve the dispute fairly for both parties.",
    },
  ],
};
