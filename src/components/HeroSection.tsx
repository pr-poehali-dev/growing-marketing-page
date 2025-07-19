import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Icon from '@/components/ui/icon';

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#008FCB] via-[#006BA6] to-[#A60000] text-white">
      <div className="absolute inset-0 bg-gradient-to-r from-[#008FCB]/90 to-[#A60000]/90"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <Badge className="bg-white/20 text-white border-white/30 text-lg px-4 py-2">
              19 сентября 2024 • Пермь
            </Badge>
            
            <div className="space-y-6">
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                GROWING:
                <span className="block text-yellow-300">маркетинг быстрых результатов</span>
              </h1>
              
              <p className="text-xl lg:text-2xl opacity-90 leading-relaxed">
                Авторская методика Игоря Манна для достижения взрывного роста продаж за 30-90 дней
              </p>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 space-y-3">
                <h3 className="text-lg font-semibold text-yellow-300">Что такое Growing маркетинг:</h3>
                <p className="text-base opacity-90">
                  Система быстрого масштабирования бизнеса, основанная на 4 принципах: 
                  фокус на результат, скорость внедрения, измеримость эффекта, минимум затрат.
                </p>
              </div>
              
              <div className="flex flex-wrap gap-4 pt-4">
                <div className="flex items-center gap-2">
                  <Icon name="Clock" size={20} />
                  <span className="text-lg">3 часа интенсива</span>
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="Users" size={20} />
                  <span className="text-lg">До 200 участников</span>
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="MapPin" size={20} />
                  <span className="text-lg">Центр Перми</span>
                </div>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-white text-red-600 hover:bg-gray-100 text-lg px-8 py-6">
                <Icon name="Ticket" className="mr-2" size={20} />
                Купить билет
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 text-lg px-8 py-6">
                <Icon name="Play" className="mr-2" size={20} />
                Смотреть трейлер
              </Button>
            </div>
          </div>
          
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-tr from-yellow-400/20 to-red-400/20 rounded-3xl transform rotate-6"></div>
            <img 
              src="/img/10094207-f73d-4854-ad63-d6c71d23fc6c.jpg"
              alt="Игорь Манн"
              className="relative rounded-3xl shadow-2xl w-full max-w-md mx-auto transform hover:scale-105 transition-transform duration-300"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;