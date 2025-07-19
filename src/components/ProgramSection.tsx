import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Icon from '@/components/ui/icon';

const ProgramSection = () => {
  return (
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
  );
};

export default ProgramSection;