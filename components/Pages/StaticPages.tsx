import React from 'react';
import { FadeIn } from '../UI/FadeIn';

interface PageProps {
  title: string;
  children: React.ReactNode;
}

const PageLayout: React.FC<PageProps> = ({ title, children }) => (
  <div className="pt-32 pb-24 px-6 min-h-screen bg-zinc-950">
    <div className="max-w-3xl mx-auto">
      <FadeIn>
        <h1 className="text-4xl md:text-5xl font-serif text-white mb-12">{title}</h1>
        <div className="prose prose-invert prose-zinc max-w-none text-zinc-400 leading-relaxed">
          {children}
        </div>
      </FadeIn>
    </div>
  </div>
);

export const OurStory = () => (
  <PageLayout title="Our Story">
    <p className="mb-6">
      Sanctuary began with a simple idea: that true luxury lies in silence, space, and a deep connection to nature. Founded in 2024 by architects Thomas and Sarah Hale, our estate in the heart of the Lake District was restored from a derelict 18th-century sheep farm into a modern refuge for the weary soul.
    </p>
    <p className="mb-6">
      We believe in "slow hospitality." We don't rush. We don't overcrowd. With only three suites on our 40-acre estate, we offer an exclusivity that is rare in the modern world. Every material used in our restoration—from the Cumbrian slate to the reclaimed oak—tells a story of the land.
    </p>
    <p>
      Today, Sanctuary stands as a testament to the restorative power of the British countryside. Whether you are here to write, to hike the fells, or simply to sleep, we welcome you to our home.
    </p>
  </PageLayout>
);

export const Dining = () => (
  <PageLayout title="Dining">
    <p className="mb-6">
      Food at Sanctuary is a celebration of the seasons. Our kitchen garden provides 80% of the vegetables and herbs used in our daily breakfasts. For everything else, we partner with local farmers within a 20-mile radius of Ambleside.
    </p>
    <h3 className="text-xl text-white mt-8 mb-4">Breakfast</h3>
    <p className="mb-6">
      Included with every stay. Expect sourdough baked fresh each morning, eggs from our own hens, and house-cured bacon. We offer a full Cumbrian breakfast alongside lighter, plant-based options.
    </p>
    <h3 className="text-xl text-white mt-8 mb-4">Dinner</h3>
    <p className="mb-6">
      While we do not serve dinner on-site to maintain the tranquility of the evenings, we have exclusive partnerships with the finest local restaurants, including:
    </p>
    <ul className="list-disc pl-6 space-y-2 mb-6">
      <li>The Old Stamp House (Michelin Star) - 10 min drive</li>
      <li>Lake Road Kitchen - 12 min drive</li>
      <li>The Drunken Duck Inn - 15 min drive</li>
    </ul>
    <p>
      Our concierge can arrange priority reservations and transfers for all guests.
    </p>
  </PageLayout>
);

export const Activities = () => (
  <PageLayout title="Activities">
    <p className="mb-6">
      The Lake District is a playground for explorers. Whether you seek adrenaline or contemplation, the landscape provides.
    </p>
    <div className="grid gap-8 mt-8">
      <div>
        <h3 className="text-xl text-white mb-2">Hiking</h3>
        <p>Direct access to the fells from our doorstep. We provide curated maps for Loughrigg Fell, Wansfell Pike, and the Fairfield Horseshoe.</p>
      </div>
      <div>
        <h3 className="text-xl text-white mb-2">Wild Swimming</h3>
        <p>We are situated near several private tarns suitable for cold water swimming. Wetsuits and tow floats are available to borrow.</p>
      </div>
      <div>
        <h3 className="text-xl text-white mb-2">Cycling</h3>
        <p>Two electric mountain bikes are available for guest use free of charge. Explore the Grizedale Forest trails just a short ride away.</p>
      </div>
    </div>
  </PageLayout>
);

export const FAQ = () => (
  <PageLayout title="Frequently Asked Questions">
    <div className="space-y-8">
      <div>
        <h3 className="text-xl text-white mb-2">What time is check-in and check-out?</h3>
        <p>Check-in is from 3:00 PM to 8:00 PM. Check-out is at 11:00 AM. Late check-out may be available upon request.</p>
      </div>
      <div>
        <h3 className="text-xl text-white mb-2">Do you allow pets?</h3>
        <p>We are dog-friendly in our Garden Suite only, which has direct access to a secure terrace. A small cleaning fee of £30 applies.</p>
      </div>
      <div>
        <h3 className="text-xl text-white mb-2">Is there parking?</h3>
        <p>Yes, we offer complimentary secure parking for all guests, including two EV charging points.</p>
      </div>
      <div>
        <h3 className="text-xl text-white mb-2">Is Sanctuary suitable for children?</h3>
        <p>To maintain a peaceful atmosphere, Sanctuary is an adult-only retreat (16+).</p>
      </div>
    </div>
  </PageLayout>
);

export const Terms = () => (
  <PageLayout title="Terms of Service">
    <p className="mb-4">Last Updated: October 2024</p>
    <p className="mb-4">
      <strong>1. Booking & Payment</strong><br/>
      A deposit of 50% is required to secure your reservation. The remaining balance is due 14 days prior to arrival.
    </p>
    <p className="mb-4">
      <strong>2. Cancellation Policy</strong><br/>
      Cancellations made more than 14 days before arrival will receive a full refund minus a £25 admin fee. Cancellations within 14 days are non-refundable unless we can re-let the room.
    </p>
    <p className="mb-4">
      <strong>3. Damages</strong><br/>
      Guests are responsible for any damage caused to the property or furnishings. We reserve the right to charge the card on file for repairs or replacements.
    </p>
    <p>
      <strong>4. No Smoking</strong><br/>
      Sanctuary is strictly non-smoking indoors. Smoking is permitted in designated outdoor areas only.
    </p>
  </PageLayout>
);

export const Privacy = () => (
  <PageLayout title="Privacy Policy">
    <p className="mb-6">
      Sanctuary B&B respects your privacy and is committed to protecting your personal data. This privacy policy will inform you as to how we look after your personal data when you visit our website (regardless of where you visit it from) and tell you about your privacy rights and how the law protects you.
    </p>
    <h3 className="text-xl text-white mb-2">Data We Collect</h3>
    <p className="mb-4">
      We may collect, use, store and transfer different kinds of personal data about you which we have grouped together follows: Identity Data, Contact Data, Financial Data, and Transaction Data.
    </p>
    <h3 className="text-xl text-white mb-2">How We Use Your Data</h3>
    <p className="mb-4">
      We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances: Where we need to perform the contract we are about to enter into or have entered into with you.
    </p>
  </PageLayout>
);

export const Contact = () => (
  <PageLayout title="Contact Us">
    <div className="grid md:grid-cols-2 gap-12">
      <div>
        <p className="text-lg text-white mb-8">
          We'd love to hear from you. Whether you have a question about a reservation or just want to say hello.
        </p>
        <div className="space-y-4">
          <p><strong className="text-white">Email:</strong><br/> hello@sanctuary-lakes.co.uk</p>
          <p><strong className="text-white">Phone:</strong><br/> +44 (0) 15394 12345</p>
          <p><strong className="text-white">Address:</strong><br/> Forest Side Estate<br/>Ambleside<br/>Cumbria<br/>LA22 9ET</p>
        </div>
      </div>
      <form className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-zinc-400 mb-1">Name</label>
          <input type="text" className="w-full bg-zinc-900 border border-white/10 rounded-lg p-3 text-white focus:outline-none focus:border-white/30" />
        </div>
        <div>
          <label className="block text-sm font-medium text-zinc-400 mb-1">Email</label>
          <input type="email" className="w-full bg-zinc-900 border border-white/10 rounded-lg p-3 text-white focus:outline-none focus:border-white/30" />
        </div>
        <div>
          <label className="block text-sm font-medium text-zinc-400 mb-1">Message</label>
          <textarea rows={4} className="w-full bg-zinc-900 border border-white/10 rounded-lg p-3 text-white focus:outline-none focus:border-white/30"></textarea>
        </div>
        <button className="bg-white text-zinc-950 px-6 py-3 rounded-lg font-medium hover:bg-zinc-200 transition-colors">
          Send Message
        </button>
      </form>
    </div>
  </PageLayout>
);
