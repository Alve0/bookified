import Image from "next/image";
import { Plus } from "lucide-react";

export default function Home() {
  return (
    <main className="book-page-container">
      <section className="library-hero-card">
        <div className="library-hero-content">
          {/* Left Side */}
          <div className="library-hero-text">
            <h1 className="library-hero-title">Your Library</h1>
            <p className="library-hero-description">
              Convert your books into interactive AI conversations.
              <br className="hidden sm:block" /> Listen, learn, and discuss your favorite reads.
            </p>
            <button className="library-cta-primary mt-2">
              <Plus className="w-5 h-5" />
              Add new book
            </button>
          </div>

          {/* Center Side */}
          <div className="library-hero-illustration-desktop">
            <Image
              src="/assets/hero-illustration.png"
              alt="Vintage books and globe"
              width={450}
              height={320}
              className="object-contain"
              priority
            />
          </div>
          
          {/* Mobile Illustration */}
          <div className="library-hero-illustration">
            <Image
              src="/assets/hero-illustration.png"
              alt="Vintage books and globe"
              width={250}
              height={200}
              className="object-contain"
            />
          </div>

          {/* Right Side */}
          <ul className="library-steps-card flex flex-col gap-5 w-full lg:w-[300px] shrink-0">
            <li className="library-step-item">
              <span className="library-step-number">1</span>
              <div>
                <h3 className="library-step-title">Upload PDF</h3>
                <p className="library-step-description">Add your book file</p>
              </div>
            </li>
            <li className="library-step-item">
              <span className="library-step-number">2</span>
              <div>
                <h3 className="library-step-title">AI Processing</h3>
                <p className="library-step-description">We analyze the content</p>
              </div>
            </li>
            <li className="library-step-item">
              <span className="library-step-number">3</span>
              <div>
                <h3 className="library-step-title">Voice Chat</h3>
                <p className="library-step-description">Discuss with AI</p>
              </div>
            </li>
          </ul>
        </div>
      </section>
    </main>
  );
}
