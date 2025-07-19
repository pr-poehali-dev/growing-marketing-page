import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Icon from '@/components/ui/icon';

const AboutSpeakerSection = () => {
  return (
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
  );
};

export default AboutSpeakerSection;