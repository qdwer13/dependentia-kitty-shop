import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useEffect, useState } from "react";

const Index = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleOpenBot = () => {
    window.open("https://t.me/Dependentia_bot", "_blank");
  };

  return (
    <div className="min-h-screen bg-gradient-primary relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.05)_0%,transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_80%,rgba(255,255,255,0.03)_0%,transparent_50%)]" />
      
      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-4 py-12">
        <div className="max-w-4xl mx-auto text-center space-y-16">
          
          {/* Header */}
          <div className={`space-y-8 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
            <div className="relative">
              <h1 className="text-6xl md:text-8xl lg:text-9xl font-black text-foreground tracking-tight leading-none">
                <span className="bg-gradient-to-br from-white via-gray-200 to-gray-400 bg-clip-text text-transparent animate-glow">
                  DEPENDENTIA
                </span>
              </h1>
              <div className="absolute -inset-1 bg-gradient-to-r from-white/20 to-transparent blur-xl opacity-20 animate-pulse" />
            </div>
            
            <div className="space-y-4">
              <h2 className="text-2xl md:text-4xl font-light text-muted-foreground tracking-wide">
                SHOP
              </h2>
              <div className="h-px w-32 mx-auto bg-gradient-to-r from-transparent via-white/50 to-transparent" />
              <p className="text-lg md:text-xl text-muted-foreground font-mono tracking-wider">
                // магазин котиков
              </p>
            </div>
          </div>

          {/* Bot Button */}
          <div className={`space-y-8 ${isVisible ? 'animate-slide-up' : 'opacity-0'} [animation-delay:0.3s]`}>
            <div className="relative group">
              <Button 
                onClick={handleOpenBot}
                size="lg"
                className="relative px-12 py-6 text-lg font-semibold bg-gradient-card border border-white/20 text-white hover:bg-white/10 transition-all duration-500 hover:scale-105 hover:shadow-glow overflow-hidden group"
              >
                <span className="relative z-10 tracking-wide">
                  ОТКРЫТЬ БОТА @Dependentia_bot
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-white/10 via-white/5 to-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute inset-0 bg-white/5 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 skew-x-12" />
              </Button>
            </div>
          </div>

          {/* Information Cards */}
          <div className={`grid gap-8 md:gap-12 ${isVisible ? 'animate-slide-up' : 'opacity-0'} [animation-delay:0.6s]`}>
            
            <Card className="relative p-8 md:p-12 bg-gradient-card border border-white/10 shadow-card hover:shadow-glow transition-all duration-500 hover:scale-[1.02] group overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative z-10">
                <div className="flex items-center justify-center mb-6">
                  <div className="h-px flex-1 bg-gradient-to-r from-transparent via-white/30 to-white/30" />
                  <span className="px-4 text-sm font-mono text-muted-foreground tracking-wider">
                    COVERAGE
                  </span>
                  <div className="h-px flex-1 bg-gradient-to-l from-transparent via-white/30 to-white/30" />
                </div>
                
                <h3 className="text-3xl md:text-4xl font-bold mb-6 text-card-foreground tracking-tight">
                  Города работы
                </h3>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-lg">
                  {['МОСКВА', 'САНКТ-ПЕТЕРБУРГ', 'КАЗАНЬ'].map((city, index) => (
                    <div 
                      key={city}
                      className="p-4 bg-white/5 rounded-lg border border-white/10 hover:bg-white/10 transition-all duration-300"
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      <span className="font-mono font-medium text-muted-foreground">
                        {city}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </Card>

            <Card className="relative p-8 md:p-12 bg-gradient-card border border-white/10 shadow-card hover:shadow-glow transition-all duration-500 hover:scale-[1.02] group overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative z-10">
                <div className="flex items-center justify-center mb-6">
                  <div className="h-px flex-1 bg-gradient-to-r from-transparent via-white/30 to-white/30" />
                  <span className="px-4 text-sm font-mono text-muted-foreground tracking-wider">
                    SECURITY
                  </span>
                  <div className="h-px flex-1 bg-gradient-to-l from-transparent via-white/30 to-white/30" />
                </div>
                
                <h3 className="text-3xl md:text-4xl font-bold mb-6 text-card-foreground tracking-tight">
                  Прозрачность и анонимность
                </h3>
                
                <div className="space-y-4">
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    Всё проходит прозрачно и анонимно в боте
                  </p>
                  <div className="h-px w-24 bg-gradient-to-r from-white/50 to-transparent" />
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    После оплаты вы получите <span className="font-mono text-white/80">координаты</span>
                  </p>
                </div>
              </div>
            </Card>
          </div>

          {/* Footer accent */}
          <div className={`flex justify-center ${isVisible ? 'animate-float' : 'opacity-0'} [animation-delay:1s]`}>
            <div className="w-2 h-2 bg-white/50 rounded-full animate-pulse" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;