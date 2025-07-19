import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Icon from '@/components/ui/icon';
import { Separator } from "@/components/ui/separator";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-orange-500 via-orange-600 to-blue-600 text-white">
        <div className="absolute inset-0 bg-gradient-to-r from-orange-500/80 to-blue-600/80"></div>
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
                  Лекция с практическими инструментами для немедленного применения
                </p>
                
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
                <Button size="lg" className="bg-white text-orange-600 hover:bg-gray-100 text-lg px-8 py-6">
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
              <div className="absolute inset-0 bg-gradient-to-tr from-yellow-400/20 to-pink-400/20 rounded-3xl transform rotate-6"></div>
              <img 
                src="/img/dff445bc-0ca1-45fb-a40d-b84448f67dd7.jpg"
                alt="Игорь Манн"
                className="relative rounded-3xl shadow-2xl w-full max-w-md mx-auto transform hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Program Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Программа лекции</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Практические инструменты маркетинга, которые вы сможете применить уже завтра
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg flex items-center justify-center mb-4">
                  <Icon name="TrendingUp" className="text-white" size={24} />
                </div>
                <CardTitle className="text-xl">Быстрый рост продаж</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  5 техник для увеличения конверсии в 2-3 раза за первый месяц применения
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center mb-4">
                  <Icon name="Target" className="text-white" size={24} />
                </div>
                <CardTitle className="text-xl">Точное попадание</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Как найти свою целевую аудиторию и создать сообщения, которые продают
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-lg flex items-center justify-center mb-4">
                  <Icon name="Zap" className="text-white" size={24} />
                </div>
                <CardTitle className="text-xl">Молниеносные результаты</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Инструменты для получения первых результатов в течение 48 часов
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg flex items-center justify-center mb-4">
                  <Icon name="Brain" className="text-white" size={24} />
                </div>
                <CardTitle className="text-xl">Психология покупателя</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Триггеры и методы влияния, которые заставляют клиентов покупать
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-pink-600 rounded-lg flex items-center justify-center mb-4">
                  <Icon name="Rocket" className="text-white" size={24} />
                </div>
                <CardTitle className="text-xl">Масштабирование</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Как превратить успешную кампанию в систему стабильного роста
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-lg flex items-center justify-center mb-4">
                  <Icon name="BarChart3" className="text-white" size={24} />
                </div>
                <CardTitle className="text-xl">Аналитика результатов</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Метрики и KPI для отслеживания эффективности маркетинговых активностей
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* About Speaker Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-8">Об Игоре Манне</h2>
              
              <div className="space-y-6 text-lg text-gray-700">
                <p>
                  <strong>Игорь Манн</strong> — ведущий российский эксперт по маркетингу, 
                  автор 15 бестселлеров и основатель издательства "Манн, Иванов и Фербер".
                </p>
                
                <p>
                  За 20 лет карьеры помог тысячам компаний увеличить продажи 
                  и построить эффективные маркетинговые системы.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-8 mt-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-orange-600 mb-2">15</div>
                  <div className="text-gray-600">Бестселлеров</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">1000+</div>
                  <div className="text-gray-600">Компаний-клиентов</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-600 mb-2">20</div>
                  <div className="text-gray-600">Лет опыта</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-600 mb-2">500+</div>
                  <div className="text-gray-600">Выступлений</div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-gradient-to-br from-orange-100 to-blue-100 rounded-3xl p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Что получите на лекции:</h3>
                
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mt-1">
                      <Icon name="Check" className="text-white" size={14} />
                    </div>
                    <span>Готовые шаблоны для запуска рекламных кампаний</span>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mt-1">
                      <Icon name="Check" className="text-white" size={14} />
                    </div>
                    <span>Чек-листы для анализа конкурентов</span>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mt-1">
                      <Icon name="Check" className="text-white" size={14} />
                    </div>
                    <span>Рабочие техники повышения конверсии</span>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mt-1">
                      <Icon name="Check" className="text-white" size={14} />
                    </div>
                    <span>Персональную консультацию по вашему проекту</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ticket Purchase Section */}
      <section className="py-20 bg-gradient-to-br from-gray-900 to-blue-900 text-white">
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
                <Button className="w-full bg-orange-600 hover:bg-orange-700 text-white text-lg py-6 mt-6">
                  Выбрать билет
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-orange-500 to-orange-600 border-orange-400 text-white relative overflow-hidden">
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
                <Button className="w-full bg-white text-orange-600 hover:bg-gray-100 text-lg py-6 mt-6">
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

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Контакты</h3>
              <div className="space-y-2">
                <p>📧 info@igormann-perm.ru</p>
                <p>📱 +7 (342) 123-45-67</p>
                <p>📍 г. Пермь, ул. Ленина, 50</p>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-bold mb-4">Следите за нами</h3>
              <div className="flex gap-4">
                <Button variant="outline" size="sm" className="border-white text-white hover:bg-white/10">
                  Telegram
                </Button>
                <Button variant="outline" size="sm" className="border-white text-white hover:bg-white/10">
                  Instagram
                </Button>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-bold mb-4">О событии</h3>
              <p className="text-gray-300">
                Лекция "Growing: маркетинг быстрых результатов" — это уникальная возможность 
                получить практические знания от ведущего эксперта.
              </p>
            </div>
          </div>
          
          <Separator className="my-8 bg-gray-700" />
          
          <div className="text-center text-gray-400">
            <p>&copy; 2024 Igor Mann Growing Lecture. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;