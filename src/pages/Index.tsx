import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const Index = () => {
  const handleOpenBot = () => {
    window.open("https://t.me/Dependentia_bot", "_blank");
  };

  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center px-4">
      <div className="max-w-2xl mx-auto text-center space-y-12">
        {/* Header */}
        <div className="space-y-4">
          <h1 className="text-5xl md:text-7xl font-bold text-foreground tracking-tight">
            Dependentia Shop
          </h1>
          <p className="text-xl text-muted-foreground">
            Магазин котиков
          </p>
        </div>

        {/* Bot Button */}
        <div className="space-y-6">
          <Button 
            onClick={handleOpenBot}
            variant="outline"
            size="lg"
            className="px-8 py-4 text-lg font-medium hover:bg-accent transition-all duration-300"
          >
            Открыть бота @Dependentia_bot
          </Button>
        </div>

        {/* Information Cards */}
        <div className="grid gap-6 md:gap-8">
          <Card className="p-6 md:p-8 bg-card border-border">
            <h2 className="text-2xl font-semibold mb-4 text-card-foreground">
              Города работы
            </h2>
            <p className="text-muted-foreground text-lg">
              Мы работаем в крупных городах: Москва, Санкт-Петербург, Казань
            </p>
          </Card>

          <Card className="p-6 md:p-8 bg-card border-border">
            <h2 className="text-2xl font-semibold mb-4 text-card-foreground">
              Прозрачность и анонимность
            </h2>
            <p className="text-muted-foreground text-lg">
              Всё проходит прозрачно и анонимно в боте. После оплаты вы получите координаты.
            </p>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Index;