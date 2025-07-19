import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Icon from '@/components/ui/icon';
import { Separator } from "@/components/ui/separator";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
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
                <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-red-600 rounded-lg flex items-center justify-center mb-4">
                  <Icon name="TrendingUp" className="text-white" size={24} />
                </div>
                <CardTitle className="text-xl">Фокус на результат</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Growing-маркетинг нацелен на конкретные измеримые результаты уже в первые 30 дней
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-br from-gray-600 to-gray-700 rounded-lg flex items-center justify-center mb-4">
                  <Icon name="Zap" className="text-white" size={24} />
                </div>
                <CardTitle className="text-xl">Скорость внедрения</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Быстрое тестирование и запуск маркетинговых активностей без длительной подготовки
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-lg flex items-center justify-center mb-4">
                  <Icon name="BarChart3" className="text-white" size={24} />
                </div>
                <CardTitle className="text-xl">Измеримость эффекта</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Каждое действие имеет четкие KPI и метрики для оценки эффективности
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg flex items-center justify-center mb-4">
                  <Icon name="DollarSign" className="text-white" size={24} />
                </div>
                <CardTitle className="text-xl">Минимум затрат</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Максимальная отдача при минимальных вложениях через точечные решения
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center mb-4">
                  <Icon name="Target" className="text-white" size={24} />
                </div>
                <CardTitle className="text-xl">Точность попадания</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Работа с конкретными сегментами и персонализированные предложения
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-lg flex items-center justify-center mb-4">
                  <Icon name="Rocket" className="text-white" size={24} />
                </div>
                <CardTitle className="text-xl">Масштабируемость</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Системы, которые работают и на малом, и на большом объеме продаж
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* About Speaker Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Об Игоре Манне</h2>
            <p className="text-xl text-gray-600">
              Кандидат экономических наук, первый российский почетный профессор бизнес-школы «Синергия»
            </p>
          </div>

          {/* Achievement Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <Card className="bg-gradient-to-br from-[#008FCB]/10 to-[#008FCB]/5 border-[#008FCB]/20 hover:shadow-xl transition-all duration-300">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-br from-[#008FCB] to-blue-600 rounded-lg flex items-center justify-center mb-4">
                  <Icon name="Award" className="text-white" size={24} />
                </div>
                <CardTitle className="text-xl text-[#008FCB]">Кавалер орденского знака</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Российской гильдии маркетологов «За заслуги в маркетинге»
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-[#A60000]/10 to-[#A60000]/5 border-[#A60000]/20 hover:shadow-xl transition-all duration-300">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-br from-[#A60000] to-red-600 rounded-lg flex items-center justify-center mb-4">
                  <Icon name="BookOpen" className="text-white" size={24} />
                </div>
                <CardTitle className="text-xl text-[#A60000]">Автор 50+ книг</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Включая бестселлеры «Номер 1», «Почему вы?», «Планируй!», «Без бюджета», «Гроуинг»
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-green-500/10 to-green-600/5 border-green-500/20 hover:shadow-xl transition-all duration-300">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-lg flex items-center justify-center mb-4">
                  <Icon name="Users" className="text-white" size={24} />
                </div>
                <CardTitle className="text-xl text-green-600">1100+ выступлений</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  В 25 странах мира с 2003 года. Первый российский спикер World Marketing Summit Филипа Котлера
                </CardDescription>
              </CardContent>
            </Card>
          </div>

          {/* Career Journey */}
          <div className="bg-gradient-to-br from-gray-50 to-white rounded-3xl p-8 lg:p-12 mb-16">
            <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">Карьерный путь</h3>
            
            <div className="grid lg:grid-cols-2 gap-12">
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#008FCB] to-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <Icon name="Briefcase" className="text-white" size={20} />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">Маркетер-практик</h4>
                    <p className="text-gray-600">
                      Начал копирайтером в рекламном агентстве. Затем менеджер по маркетинговым коммуникациям в Ciba. 
                      3 года коммерческий директор.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#A60000] to-red-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <Icon name="TrendingUp" className="text-white" size={20} />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">Директор по маркетингу 15+ лет</h4>
                    <p className="text-gray-600">
                      Lucent, Alcatel, АРКТЕЛ, МИАН... 3 года региональный директор Avaya (Вена, Австрия) — 74 страны.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <Icon name="Building" className="text-white" size={20} />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">Издатель</h4>
                    <p className="text-gray-600">
                      Со-основатель МИФ (Манн, Иванов и Фербер) и Книгиум
                    </p>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <Icon name="Lightbulb" className="text-white" size={20} />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">Консультант</h4>
                    <p className="text-gray-600">
                      Со-учредитель агентств «Лидмашина», «Манн, Черемных и Партнеры» и Air Marketing
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <Icon name="Mic" className="text-white" size={20} />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">Бизнес-спикер</h4>
                    <p className="text-gray-600">
                      Автор 20+ программ по маркетингу, личному маркетингу, клиентоориентированности
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <Icon name="Target" className="text-white" size={20} />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">Создатель Growing</h4>
                    <p className="text-gray-600">
                      Авторская методика маркетинга быстрых результатов для современного бизнеса
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-[#008FCB] mb-2">50+</div>
              <div className="text-gray-600">Книг написано</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-[#A60000] mb-2">25</div>
              <div className="text-gray-600">Стран мира</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-green-600 mb-2">20+</div>
              <div className="text-gray-600">Программ обучения</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-600 mb-2">15+</div>
              <div className="text-gray-600">Лет директором</div>
            </div>
          </div>
        </div>
      </section>

      {/* What You Get Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-[#008FCB]/5 to-[#A60000]/5 rounded-3xl p-8 lg:p-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">Что получите на лекции</h3>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mt-1">
                    <Icon name="Check" className="text-white" size={14} />
                  </div>
                  <span className="text-lg">4 принципа Growing-маркетинга с примерами</span>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mt-1">
                    <Icon name="Check" className="text-white" size={14} />
                  </div>
                  <span className="text-lg">Готовые инструменты для быстрого роста</span>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mt-1">
                    <Icon name="Check" className="text-white" size={14} />
                  </div>
                  <span className="text-lg">Методы измерения эффективности за 30 дней</span>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mt-1">
                    <Icon name="Check" className="text-white" size={14} />
                  </div>
                  <span className="text-lg">Персональную консультацию по вашему проекту</span>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mt-1">
                    <Icon name="Check" className="text-white" size={14} />
                  </div>
                  <span className="text-lg">Практические кейсы из опыта 74 стран</span>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mt-1">
                    <Icon name="Check" className="text-white" size={14} />
                  </div>
                  <span className="text-lg">Авторские материалы и шаблоны</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ticket Purchase Section */}
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