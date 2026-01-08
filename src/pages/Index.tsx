import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

interface Cathedral {
  id: number;
  name: string;
  image: string;
  shortDescription: string;
  history: string;
  architecture: string;
  yearBuilt: string;
}

const cathedrals: Cathedral[] = [
  {
    id: 1,
    name: 'Спасо-Преображенский собор',
    image: 'https://cdn.poehali.dev/projects/4a5696d3-a9fa-4534-80ae-612f84f60c4f/files/0fd23de2-d366-4481-896e-338050e05cdf.jpg',
    shortDescription: 'Главный собор Коврова с золотыми куполами',
    yearBuilt: '1884',
    history: 'Спасо-Преображенский собор был построен в 1884 году на средства ковровских купцов и фабрикантов. Строительство велось под руководством известного архитектора того времени. Храм стал духовным центром города и символом его процветания в эпоху промышленного развития.',
    architecture: 'Собор выполнен в русско-византийском стиле с характерными золотыми куполами. Пятиглавое завершение символизирует Христа и четырех евангелистов. Фасады украшены арочными окнами, кокошниками и изразцовыми деталями. Внутреннее пространство отличается высокими сводами и богатым иконостасом.'
  },
  {
    id: 2,
    name: 'Христорождественский собор',
    image: 'https://cdn.poehali.dev/projects/4a5696d3-a9fa-4534-80ae-612f84f60c4f/files/64fc5fa5-3e4f-4283-b436-90cc9489a134.jpg',
    shortDescription: 'Белокаменный храм с древней историей',
    yearBuilt: '1778',
    history: 'Христорождественский собор — один из старейших храмов Коврова, основанный в 1778 году. Первоначально был деревянным, но после пожара был отстроен в камне. Собор пережил многие исторические события, включая революцию и войны, сохранив свой первоначальный облик.',
    architecture: 'Архитектура собора сочетает элементы барокко и классицизма. Белокаменные стены создают ощущение легкости и воздушности. Колокольня выполнена в традициях русского зодчества XVIII века. Особое внимание заслуживают резные наличники окон и декоративные элементы фасада.'
  },
  {
    id: 3,
    name: 'Троицкая церковь',
    image: 'https://cdn.poehali.dev/projects/4a5696d3-a9fa-4534-80ae-612f84f60c4f/files/b3d2e3c6-1cd7-4e32-a8cd-cd11cc2e0db0.jpg',
    shortDescription: 'Уютный храм в историческом центре',
    yearBuilt: '1805',
    history: 'Троицкая церковь была возведена в 1805 году на пожертвования местных жителей. Она служила приходским храмом для жителей центральной части города. В советское время здание использовалось под склад, но в 1990-х годах было возвращено церкви и отреставрировано.',
    architecture: 'Церковь представляет собой образец позднего классицизма в церковной архитектуре. Компактный объем увенчан небольшим куполом. Портик с колоннами создает торжественный вход. Интерьер отличается камерностью и уютом, сохранились фрагменты старинной росписи.'
  },
  {
    id: 4,
    name: 'Церковь Иоанна Воина',
    image: 'https://cdn.poehali.dev/projects/4a5696d3-a9fa-4534-80ae-612f84f60c4f/files/d1f56a1d-70a4-4d58-b1db-4876185b20b9.jpg',
    shortDescription: 'Храм с синими куполами в память о воинах',
    yearBuilt: '1825',
    history: 'Церковь Иоанна Воина была основана в 1825 году в память о павших воинах Отечественной войны 1812 года. Строительство храма было инициировано ветеранами войны и поддержано местными благотворителями. Церковь служила местом поминовения погибших защитников отечества и духовной опорой для военных.',
    architecture: 'Храм отличается характерными синими куполами с золотыми звёздами, символизирующими небесное царство. Архитектура выполнена в традициях ампира с элементами военной символики. Белокаменные стены контрастируют с яркими куполами. Внутри сохранились мемориальные доски с именами героев войны 1812 года.'
  },
  {
    id: 5,
    name: 'Церковь в честь Федоровской иконы Божией Матери',
    image: 'https://cdn.poehali.dev/projects/4a5696d3-a9fa-4534-80ae-612f84f60c4f/files/5a5f7490-5dc2-423a-aa3b-f1912694f6a0.jpg',
    shortDescription: 'Храм, посвящённый чудотворной иконе Божией Матери',
    yearBuilt: '1887',
    history: 'Церковь в честь Федоровской иконы Божией Матери была построена в 1887 году по инициативе купеческой семьи Треумовых. Храм возвели в память об избавлении города от эпидемии холеры, которая прекратилась после молебна перед чудотворной Федоровской иконой. Церковь стала местом особого почитания этого образа в Ковровском крае.',
    architecture: 'Архитектура храма выполнена в псевдорусском стиле с элементами XVII века. Белокаменные стены украшены цветными изразцами и кокошниками. Пятиглавое завершение с разноцветными куполами создаёт праздничный облик. Внутри храма сохранился резной иконостас работы владимирских мастеров и копия чудотворной Федоровской иконы.'
  },
  {
    id: 6,
    name: 'Михаило-Архангельская тюремная церковь',
    image: 'https://cdn.poehali.dev/projects/4a5696d3-a9fa-4534-80ae-612f84f60c4f/files/ece003a3-95af-4842-87fe-332fcd0d734e.jpg',
    shortDescription: 'Храм при исправительном учреждении',
    yearBuilt: '1895',
    history: 'Михаило-Архангельская церковь была построена в 1895 году при Ковровской тюрьме для духовного окормления заключённых. Храм возвели по распоряжению губернской администрации в рамках программы тюремной реформы. Служили здесь специально назначенные тюремные священники. После революции церковь была закрыта, в 2000-х годах восстановлена и вновь освящена.',
    architecture: 'Церковь представляет собой скромное одноглавое строение в стиле позднего классицизма. Небольшой размер и строгие формы соответствовали тюремному назначению храма. Фасады лишены излишних украшений, с простыми прямоугольными окнами. Несмотря на аскетичность внешнего вида, внутреннее пространство создаёт атмосферу покаяния и духовного размышления.'
  }
];

export default function Index() {
  const [selectedCathedral, setSelectedCathedral] = useState<Cathedral | null>(null);
  const [activeSection, setActiveSection] = useState<'home' | 'catalog' | 'about'>('home');

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-3xl font-bold text-primary">Соборы Коврова</h1>
            <nav className="flex gap-6">
              <Button
                variant={activeSection === 'home' ? 'default' : 'ghost'}
                onClick={() => {
                  setActiveSection('home');
                  setSelectedCathedral(null);
                }}
                className="font-medium"
              >
                <Icon name="Home" size={18} className="mr-2" />
                Главная
              </Button>
              <Button
                variant={activeSection === 'catalog' ? 'default' : 'ghost'}
                onClick={() => {
                  setActiveSection('catalog');
                  setSelectedCathedral(null);
                }}
                className="font-medium"
              >
                <Icon name="Church" size={18} className="mr-2" />
                Каталог
              </Button>
              <Button
                variant={activeSection === 'about' ? 'default' : 'ghost'}
                onClick={() => {
                  setActiveSection('about');
                  setSelectedCathedral(null);
                }}
                className="font-medium"
              >
                <Icon name="Info" size={18} className="mr-2" />
                О соборах
              </Button>
            </nav>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        {activeSection === 'home' && !selectedCathedral && (
          <div className="animate-fade-in">
            <div className="relative h-[500px] rounded-lg overflow-hidden mb-12 bg-gradient-to-br from-primary/20 to-secondary/20">
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-8">
                <h2 className="text-6xl font-bold mb-4 text-primary">Соборы Коврова</h2>
                <p className="text-xl text-muted-foreground max-w-2xl mb-8">
                  Откройте для себя архитектурное и духовное наследие города
                </p>
                <Button 
                  size="lg" 
                  onClick={() => setActiveSection('catalog')}
                  className="text-lg px-8"
                >
                  Перейти к каталогу
                  <Icon name="ArrowRight" size={20} className="ml-2" />
                </Button>
              </div>
              <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent"></div>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6 text-center">
                  <Icon name="Church" size={48} className="mx-auto mb-4 text-primary" />
                  <h3 className="text-2xl font-bold mb-2">6 соборов</h3>
                  <p className="text-muted-foreground">в нашем каталоге</p>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6 text-center">
                  <Icon name="Clock" size={48} className="mx-auto mb-4 text-primary" />
                  <h3 className="text-2xl font-bold mb-2">200+ лет</h3>
                  <p className="text-muted-foreground">истории</p>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6 text-center">
                  <Icon name="Building2" size={48} className="mx-auto mb-4 text-primary" />
                  <h3 className="text-2xl font-bold mb-2">Архитектура</h3>
                  <p className="text-muted-foreground">русского зодчества</p>
                </CardContent>
              </Card>
            </div>
          </div>
        )}

        {activeSection === 'catalog' && !selectedCathedral && (
          <div className="animate-fade-in">
            <h2 className="text-4xl font-bold mb-8 text-primary">Каталог соборов</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {cathedrals.map((cathedral) => (
                <Card 
                  key={cathedral.id} 
                  className="overflow-hidden hover:shadow-xl transition-all cursor-pointer animate-scale-in"
                  onClick={() => setSelectedCathedral(cathedral)}
                >
                  <div className="aspect-[4/3] overflow-hidden">
                    <img 
                      src={cathedral.image} 
                      alt={cathedral.name}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-2xl font-bold mb-2">{cathedral.name}</h3>
                    <p className="text-sm text-muted-foreground mb-2">
                      <Icon name="Calendar" size={14} className="inline mr-1" />
                      {cathedral.yearBuilt} год
                    </p>
                    <p className="text-muted-foreground mb-4">{cathedral.shortDescription}</p>
                    <Button variant="outline" className="w-full">
                      Подробнее
                      <Icon name="ChevronRight" size={18} className="ml-2" />
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}

        {activeSection === 'about' && (
          <div className="animate-fade-in max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold mb-8 text-primary">О соборах Коврова</h2>
            <Card>
              <CardContent className="p-8 space-y-6">
                <div>
                  <h3 className="text-2xl font-bold mb-3 flex items-center">
                    <Icon name="BookOpen" size={24} className="mr-2 text-primary" />
                    История
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Ковров — город с богатой духовной историей. Первые храмы появились здесь в XVII веке, 
                    когда поселение начало активно развиваться. Соборы города отражают различные эпохи 
                    русской архитектуры — от барокко до русско-византийского стиля.
                  </p>
                </div>

                <div>
                  <h3 className="text-2xl font-bold mb-3 flex items-center">
                    <Icon name="Landmark" size={24} className="mr-2 text-primary" />
                    Архитектурное значение
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Каждый собор Коврова — это уникальный памятник архитектуры. Здания демонстрируют 
                    мастерство русских зодчих, их умение сочетать функциональность с эстетикой. 
                    Декоративные элементы, купола, колокольни — всё это создаёт неповторимый облик города.
                  </p>
                </div>

                <div>
                  <h3 className="text-2xl font-bold mb-3 flex items-center">
                    <Icon name="Heart" size={24} className="mr-2 text-primary" />
                    Культурное наследие
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Соборы Коврова — это не только архитектурные памятники, но и живые центры духовной жизни. 
                    Они сохраняют традиции, объединяют людей и напоминают о важности культурного наследия. 
                    Многие храмы были восстановлены благодаря усилиям местных жителей и меценатов.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {selectedCathedral && (
          <div className="animate-fade-in">
            <Button 
              variant="ghost" 
              onClick={() => setSelectedCathedral(null)}
              className="mb-6"
            >
              <Icon name="ArrowLeft" size={18} className="mr-2" />
              Назад к каталогу
            </Button>

            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <img 
                  src={selectedCathedral.image} 
                  alt={selectedCathedral.name}
                  className="w-full rounded-lg shadow-lg"
                />
              </div>

              <div>
                <h2 className="text-4xl font-bold mb-4">{selectedCathedral.name}</h2>
                <p className="text-muted-foreground mb-6 flex items-center">
                  <Icon name="Calendar" size={18} className="mr-2" />
                  Построен в {selectedCathedral.yearBuilt} году
                </p>

                <Card className="mb-6">
                  <CardContent className="p-6">
                    <h3 className="text-2xl font-bold mb-4 flex items-center">
                      <Icon name="BookOpen" size={22} className="mr-2 text-primary" />
                      История постройки
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {selectedCathedral.history}
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-2xl font-bold mb-4 flex items-center">
                      <Icon name="Building2" size={22} className="mr-2 text-primary" />
                      Архитектурные особенности
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {selectedCathedral.architecture}
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        )}
      </main>

      <footer className="border-t border-border mt-16 py-8 bg-card/50">
        <div className="container mx-auto px-4 text-center text-muted-foreground">
          <p>© 2024 Соборы Коврова. Архитектурное наследие города</p>
        </div>
      </footer>
    </div>
  );
}