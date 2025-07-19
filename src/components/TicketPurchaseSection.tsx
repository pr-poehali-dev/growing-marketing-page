import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Icon from '@/components/ui/icon';

const TicketPurchaseSection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 to-red-900 text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-6">Купить билет</h2>
          <p className="text-xl opacity-90">
            Количество мест ограничено. Не упустите возможность!
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          <Card className="bg-white/10 border-white/20 text-white">
            <CardHeader>
              <CardTitle className="text-2xl text-center">Стандартный билет</CardTitle>
              <div className="text-center">
                <div className="text-4xl font-bold">₽ 4,990</div>
                <div className="text-lg opacity-70">вместо ₽ 6,990</div>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center gap-3">
                <Icon name="Check" className="text-green-400" size={20} />
                <span>Участие в лекции (3 часа)</span>
              </div>
              <div className="flex items-center gap-3">
                <Icon name="Check" className="text-green-400" size={20} />
                <span>Материалы и шаблоны</span>
              </div>
              <div className="flex items-center gap-3">
                <Icon name="Check" className="text-green-400" size={20} />
                <span>Сертификат участника</span>
              </div>
              <Button className="w-full bg-red-600 hover:bg-red-700 text-white text-lg py-6 mt-6">
                Выбрать билет
              </Button>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-red-500 to-red-600 border-red-400 text-white relative overflow-hidden">
            <div className="absolute top-4 right-4">
              <Badge className="bg-yellow-400 text-yellow-900">Популярный</Badge>
            </div>
            <CardHeader>
              <CardTitle className="text-2xl text-center">VIP билет</CardTitle>
              <div className="text-center">
                <div className="text-4xl font-bold">₽ 9,990</div>
                <div className="text-lg opacity-70">вместо ₽ 14,990</div>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center gap-3">
                <Icon name="Check" className="text-yellow-300" size={20} />
                <span>Все из стандартного билета</span>
              </div>
              <div className="flex items-center gap-3">
                <Icon name="Check" className="text-yellow-300" size={20} />
                <span>VIP места в первых рядах</span>
              </div>
              <div className="flex items-center gap-3">
                <Icon name="Check" className="text-yellow-300" size={20} />
                <span>Персональная встреча с Игорем</span>
              </div>
              <div className="flex items-center gap-3">
                <Icon name="Check" className="text-yellow-300" size={20} />
                <span>Подписанная книга в подарок</span>
              </div>
              <Button className="w-full bg-white text-red-600 hover:bg-gray-100 text-lg py-6 mt-6">
                Выбрать VIP
              </Button>
            </CardContent>
          </Card>
        </div>
        
        <div className="text-center mt-12">
          <div className="flex items-center justify-center gap-4 mb-6">
            <Icon name="Clock" size={20} />
            <span className="text-lg">До конца раннего бронирования: </span>
            <Badge className="bg-red-500 text-white text-lg px-3 py-1">
              5 дней
            </Badge>
          </div>
          
          <p className="text-lg opacity-80">
            <Icon name="Shield" className="inline mr-2" size={16} />
            100% гарантия возврата средств в течение 14 дней
          </p>
        </div>
      </div>
    </section>
  );
};

export default TicketPurchaseSection;