import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const GemeenteInfo = () => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="flex items-center gap-4 px-6 sm:px-8 py-4 border-b border-border">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Back
        </Link>
        <h1 className="text-sm font-semibold text-foreground">
          Lokale informatie in jouw gemeente
        </h1>
      </header>

      {/* Embedded form */}
      <div className="flex-1 relative">
        <iframe
          data-tally-src="https://tally.so/r/Np0QAG?transparentBackground=1"
          src="https://tally.so/r/Np0QAG?transparentBackground=1"
          width="100%"
          height="100%"
          frameBorder="0"
          marginHeight={0}
          marginWidth={0}
          title="Lokale informatie in jouw gemeente"
          className="absolute inset-0 w-full h-full"
        />
      </div>
    </div>
  );
};

export default GemeenteInfo;
