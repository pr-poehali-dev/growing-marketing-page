import Icon from '@/components/ui/icon';

const WhatYouGetSection = () => {
  return (
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
  );
};

export default WhatYouGetSection;