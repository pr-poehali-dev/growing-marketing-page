import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

const Footer = () => {
  return (
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
  );
};

export default Footer;