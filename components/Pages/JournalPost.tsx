import React from 'react';
import { ArrowLeft, Calendar, User, Share2 } from 'lucide-react';
import { FadeIn } from '../UI/FadeIn';

interface JournalPostProps {
  postId: string;
  onBack: () => void;
}

const posts: Record<string, { title: string; date: string; image: string; content: React.ReactNode }> = {
  "forest-bathing": {
    title: "The Art of Forest Bathing",
    date: "October 12, 2024",
    image: "/images/journal-forest.jpg",
    content: (
      <>
        <p className="lead text-xl text-zinc-300 mb-8">
          Shinrin-yoku, or forest bathing, is not about exercise, or hiking, or jogging. It is simply being in nature, connecting with it through our senses of sight, hearing, taste, smell and touch.
        </p>
        <p className="mb-6">
          At Sanctuary, we are surrounded by ancient woodlands that have stood for centuries. The air here is rich in phytoncides, natural oils within a plant that are part of the tree's defense system. Studies have shown that breathing in this forest air can reduce stress hormone production, improve feelings of happiness and free up creativity.
        </p>
        <h3 className="text-2xl text-white font-serif mt-10 mb-4">How to Practice</h3>
        <p className="mb-6">
          Leave your phone in your suite. Walk slowly. Aimless wandering is recommended. Let your body be your guide. Listen to the birds. Smell the fragrance of the forest and breathe in the natural aromatherapy of phytoncides. Taste the freshness of the air as you take deep breaths.
        </p>
        <p>
          We offer guided forest bathing sessions every Tuesday and Thursday morning, led by our resident naturalist, Thomas.
        </p>
      </>
    )
  },
  "autumn-menu": {
    title: "Autumn Menu Preview",
    date: "October 08, 2024",
    image: "/images/journal-food.jpg",
    content: (
      <>
        <p className="lead text-xl text-zinc-300 mb-8">
          As the leaves turn golden on the fells, our kitchen shifts its focus to the rich, earthy flavors of the harvest season.
        </p>
        <p className="mb-6">
          Head Chef James has spent the last month working closely with our local suppliers to curate a breakfast menu that warms the soul. This season, we are highlighting root vegetables, wild game, and orchard fruits.
        </p>
        <h3 className="text-2xl text-white font-serif mt-10 mb-4">On the Menu</h3>
        <ul className="list-disc pl-6 space-y-4 mb-8 text-zinc-400">
          <li><strong>Wild Mushroom Toast:</strong> Foraged chantrelles on sourdough with thyme butter.</li>
          <li><strong>Spiced Porridge:</strong> Steel-cut oats with cinnamon-stewed plums from the orchard.</li>
          <li><strong>The Cumbrian Skillet:</strong> Local sausage, black pudding, and potato hash with a duck egg.</li>
        </ul>
        <p>
          We believe that breakfast is the most important meal of the day, setting the tone for your exploration of the Lakes.
        </p>
      </>
    )
  },
  "fells-guide": {
    title: "A Guide to the Fells",
    date: "September 24, 2024",
    image: "/images/journal-hike.jpg",
    content: (
      <>
        <p className="lead text-xl text-zinc-300 mb-8">
          Sanctuary is perfectly positioned for hikers of all abilities. You don't need to drive to find a view; you simply need to step outside.
        </p>
        <h3 className="text-2xl text-white font-serif mt-10 mb-4">Loughrigg Fell</h3>
        <p className="mb-6">
          <em>Difficulty: Moderate | Time: 2.5 Hours</em><br/>
          One of the smaller Wainwrights, but offering perhaps the finest view of the Langdale Pikes. The path begins at our gate. It includes some steep sections but rewards you with a panoramic view of Windermere and Grasmere.
        </p>
        <h3 className="text-2xl text-white font-serif mt-10 mb-4">Wansfell Pike</h3>
        <p className="mb-6">
          <em>Difficulty: Hard | Time: 4 Hours</em><br/>
          A more challenging climb that takes you up stone steps to a rocky summit. The descent into Troutbeck offers a chance to visit a classic Lakeland pub before looping back to Sanctuary.
        </p>
        <p>
          Detailed OS maps and packed lunches are available from the concierge desk.
        </p>
      </>
    )
  }
};

export const JournalPost: React.FC<JournalPostProps> = ({ postId, onBack }) => {
  const post = posts[postId];

  if (!post) return <div>Post not found</div>;

  return (
    <div className="bg-zinc-950 min-h-screen pt-24 pb-24 animate-fade-in-up">
      <div className="max-w-3xl mx-auto px-6">
        <button 
          onClick={onBack}
          className="group flex items-center gap-2 text-zinc-400 hover:text-white mb-12 text-sm transition-colors"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          Back to Journal
        </button>

        <FadeIn>
          <div className="mb-8">
             <div className="flex items-center gap-4 text-xs font-medium text-emerald-500 mb-6 uppercase tracking-widest">
                <span className="flex items-center gap-2"><Calendar className="w-3 h-3" /> {post.date}</span>
                <span className="w-1 h-1 rounded-full bg-zinc-700"></span>
                <span className="flex items-center gap-2"><User className="w-3 h-3" /> Editorial Team</span>
             </div>
             <h1 className="text-4xl md:text-6xl font-serif text-white mb-8 leading-tight">{post.title}</h1>
          </div>

          <div className="aspect-video w-full rounded-3xl overflow-hidden mb-12">
            <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
          </div>

          <div className="prose prose-invert prose-lg prose-zinc max-w-none text-zinc-400 leading-relaxed">
            {post.content}
          </div>

          <div className="mt-16 pt-8 border-t border-white/10 flex justify-between items-center">
             <div className="text-sm text-zinc-500">
               Posted in <span className="text-white">Lifestyle</span>
             </div>
             <button className="flex items-center gap-2 text-sm text-white hover:text-emerald-400 transition-colors">
               <Share2 className="w-4 h-4" /> Share Article
             </button>
          </div>
        </FadeIn>
      </div>
    </div>
  );
};