import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import Icon from '@/components/ui/icon';

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="min-h-screen bg-gradient-to-br from-[#008FCB] via-blue-600 to-[#A60000] relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute top-20 right-20 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-white/5 rounded-full blur-2xl"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center min-h-screen">
            <div className="text-white space-y-8">
              <div className="space-y-4">
                <Badge className="bg-red-500 text-white text-sm px-4 py-2 mb-4">
                  Эксклюзивная лекция в Перми
                </Badge>
                
                <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                  <span className="text-yellow-300">Growing:</span>
                  <br />
                  Маркетинг быстрых результатов
                </h1>
                
                <p className="text-xl lg:text-2xl text-blue-100 leading-relaxed">
                  Авторская методика от кандидата экономических наук и автора 50+ книг 
                  <span className="font-semibold text-white"> Игоря Манна</span>
                </p>
              </div>
              
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-lg p-4">
                  <Icon name="Calendar" className="text-yellow-300" size={24} />
                  <div>
                    <div className="font-semibold">15 декабря 2024</div>
                    <div className="text-sm text-blue-100">Воскресенье</div>
                  </div>
                </div>
                
                <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-lg p-4">
                  <Icon name="Clock" className="text-yellow-300" size={24} />
                  <div>
                    <div className="font-semibold">14:00 - 17:00</div>
                    <div className="text-sm text-blue-100">3 часа интенсива</div>
                  </div>
                </div>
                
                <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-lg p-4">
                  <Icon name="MapPin" className="text-yellow-300" size={24} />
                  <div>
                    <div className="font-semibold">Конгресс-холл</div>
                    <div className="text-sm text-blue-100">ул. Ленина, 50</div>
                  </div>
                </div>
                
                <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-lg p-4">
                  <Icon name="Users" className="text-yellow-300" size={24} />
                  <div>
                    <div className="font-semibold">200 мест</div>
                    <div className="text-sm text-blue-100">Ограниченное количество</div>
                  </div>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white text-lg px-8 py-4 h-auto">
                  <Icon name="Ticket" className="mr-2" size={20} />
                  Купить билет от ₽4,990
                </Button>
                
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 text-lg px-8 py-4 h-auto">
                  <Icon name="Play" className="mr-2" size={20} />
                  Смотреть программу
                </Button>
              </div>
              
              <div className="flex items-center gap-6 pt-4">
                <div className="text-center">
                  <div className="text-2xl font-bold">1100+</div>
                  <div className="text-sm text-blue-100">выступлений</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold">25</div>
                  <div className="text-sm text-blue-100">стран мира</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold">50+</div>
                  <div className="text-sm text-blue-100">книг написано</div>
                </div>
              </div>
            </div>
            
            <div className="flex justify-center lg:justify-end">
              <div className="relative">
                <div className="w-80 h-80 lg:w-96 lg:h-96 bg-gradient-to-br from-white/20 to-white/5 backdrop-blur-sm rounded-3xl flex items-center justify-center border border-white/20">
                  <div className="text-center space-y-4">
                    <div className="w-24 h-24 bg-yellow-300 rounded-full flex items-center justify-center mx-auto">
                      <Icon name="TrendingUp" className="text-gray-900" size={40} />
                    </div>
                    <div className="text-white">
                      <div className="text-2xl font-bold">Growing</div>
                      <div className="text-lg">методика</div>
                      <div className="text-sm text-blue-100 mt-2">быстрых результатов</div>
                    </div>
                  </div>
                </div>
                
                <div className="absolute -top-4 -right-4 bg-red-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                  Впервые в Перми!
                </div>
                
                <div className="absolute -bottom-4 -left-4 bg-yellow-300 text-gray-900 px-4 py-2 rounded-full text-sm font-semibold">
                  Ранняя цена до 10 дек
                </div>
              </div>
            </div>
          </div>
          
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <Icon name="ChevronDown" className="text-white" size={32} />
          </div>
        </div>
      </section>

      {/* Program Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="bg-[#008FCB] text-white text-sm px-4 py-2 mb-4">
              Программа лекции
            </Badge>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">6 принципов Growing-маркетинга</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Практические инструменты для быстрого роста вашего бизнеса
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="bg-gradient-to-br from-[#008FCB]/10 to-[#008FCB]/5 border-[#008FCB]/20 hover:shadow-xl transition-all duration-300">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-br from-[#008FCB] to-blue-600 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-white font-bold text-xl">1</span>
                </div>
                <CardTitle className="text-xl text-[#008FCB]">Быстрый старт</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Как запустить маркетинговые активности за 24 часа без бюджета
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-[#A60000]/10 to-[#A60000]/5 border-[#A60000]/20 hover:shadow-xl transition-all duration-300">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-br from-[#A60000] to-red-600 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-white font-bold text-xl">2</span>
                </div>
                <CardTitle className="text-xl text-[#A60000]">Точечные удары</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Концентрация усилий на самых прибыльных клиентских сегментах
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-green-500/10 to-green-600/5 border-green-500/20 hover:shadow-xl transition-all duration-300">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-white font-bold text-xl">3</span>
                </div>
                <CardTitle className="text-xl text-green-600">Измерение эффекта</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Система метрик для оценки результатов уже через 30 дней
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-purple-500/10 to-purple-600/5 border-purple-500/20 hover:shadow-xl transition-all duration-300">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-white font-bold text-xl">4</span>
                </div>
                <CardTitle className="text-xl text-purple-600">Эмоциональное попадание</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Создание сильной эмоциональной связи с целевой аудиторией
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-orange-500/10 to-orange-600/5 border-orange-500/20 hover:shadow-xl transition-all duration-300">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-white font-bold text-xl">5</span>
                </div>
                <CardTitle className="text-xl text-orange-600">Мгновенная реакция</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Быстрая адаптация стратегии под изменения рынка
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-indigo-500/10 to-indigo-600/5 border-indigo-500/20 hover:shadow-xl transition-all duration-300">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-white font-bold text-xl">6</span>
                </div>
                <CardTitle className="text-xl text-indigo-600">Масштабирование</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Переход от тактических решений к системному росту
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* About Speaker Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Об Игоре Манне</h2>
            <p className="text-xl text-gray-600">
              Кандидат экономических наук, первый российский почетный профессор бизнес-школы «Синергия»
            </p>
          </div>

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

          <div className="bg-gradient-to-br from-white to-gray-50 rounded-3xl p-8 lg:p-12">
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
              </div>

              <div className="space-y-6">
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
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What You Get Section */}
      <section className="py-20 bg-white">
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