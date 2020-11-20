const defaultMessages = {
  Header: {
    main: ["главная", "accueil", "main"],
    activities: ["продукты", "activités", "activities"],
    agency: ["концепт", "agence", "agency"],
    contact: ["контакты", "contact", "contact"]
  },

  Footer: {
    agenda: ["актуальное", "actualités", "agenda"],
    projects: {
      graduation: {
        name: ["Выпускной Вашей Мечты,", "Gala des étudiants,", "Graduation fest,"],
        place: ["Санкт-Петербург август 2020", "Saint Pétersbourg août 2020", "Saint Pétersbourg august 2020"],
      },
      pure: {
        name: ["Pure Meetings&Events,", "Pure Meetings&Events,", "Pure Meetings&Events,"],
        place: ["Париж 21 сентября 2020", "Paris 21 septembre 2020", "Paris 21 september 2020"],
      },
      IFTM: {
        name: ["IFTM,", "IFTM,", "IFTM,"],
        place: ["Париж 22-25 сентября 2020", "Paris 22-25 septembre 2020", "Paris 22-25 september 2020"],
      }
    },
    officeSPb: ["Офис в Санкт-Петербурге", "Bureau Saint Pétersbourg", "Office Saint Petersburg"],
    officeSPbAddress: ["190031 Санкт-Петербург, ул. Малая Морская, 18", "190031 Russie, Saint Pétersbourg, Malaya Morskaya ulitsa, 18", "190000 Russie, Saint Petersburg, Malaya Morskaya ulitsa, 18"],
    officeLyon: ["Представительство в Лионе", "Bureau Lyon", "Office Lyon"],
    officeLyonAddress: ["Rachel Guironnet", "Rachel Guironnet", "Rachel Guironnet"],

    links: {
      tourist: ["https://saintpetersburgcb.com/about/", "https://saintpetersburgcb.com/en/", "https://saintpetersburgcb.com/en/"],
      russia: ["http://russiacb.com/", "http://russiacb.com/en/", "http://russiacb.com/en/"],
      inst: ["https://www.instagram.com/spb_city_guide/", "https://www.instagram.com/petersbourgvoyages/?hl=ru", "https://www.instagram.com/spb_city_guide/"],
      fb: ["https://www.facebook.com/spbcitygroup/", "https://www.facebook.com/petersbourgloisir", "https://www.facebook.com/spbcitygroup/"],
    }
  },

  Main: {
    name: ["Бюро Petersbourg voyages & events", "Bureau Petersbourg voyages & events", "Bureau Petersbourg voyages & events"],
    quotes: ["Создаем мероприятия и события\nв сочетании лучших традиций\nи новаторских решений", "Agence spécialisée dans l’organisation d’évènement d’entreprise, en Russie\nVotre partenaire aux compétences\nmulticulturelles", "Agency dedicated to the organization\nof corporate events, in Russia\nYour partner\nwith multicultural approach"],
    author: ["Европейский подход", "Une équipe franco-russe pour répondre aux exigences du marché francophone", "Russian and European teams to meet requests of the international market"],
  },
  
  Activities: {
    Events: {
      title: ["мероприятия", "events", "events"],
      tagline: ["Наше вдохновение:\nсобытия как произведения искусства.", "Notre passion : la création d’évènements qui s’étendent au-delà de l’ordinaire. Nous fabriquons des moments inédits, révélateurs d’émotions uniques.", "Our passion: creation of events that are stretching on beyond ordinary. We build unpublished moments and let unique emotions arouse."],
      taglineAuthor0: ["Локальный DMС", "DMC francophone en Russie", "Russian DMC"],
      taglineAuthor1: ["продюсер современных и эстетических концепций", "concepteur d’évènements d’entreprise sur-mesure", "with European touch, designer of bespoke corporate events"],

      TeamBuilding: {
        title: ["Командообразующее мероприятие", "Team building", "Team building"],
        tagline: ["Анализ философии компании и погружение в среду\n\nРазработка цельного концепта и оптимальных решений в городском пространстве", "Création et production d’une chasse aux trésors sur-mesure\n\nConception basée sur notre compréhension de la philosophie de l’entreprise\n\nInspiration : histoire et culture russe", "Bespoke treasure hunts and team building events, design and production\n\nConcept related to our deep research and analysis of the company’s philosophy\n\nInspiration: history and Russian culture"],
        text0: ["Чтобы познакомить и сплотить 500 лучших агентов компании из разных уголков Европы, мы провели масштабный квест в центре Петербурга. Участники были разделены на 30 команд, каждой из которых предстояло совершить путешествие по городу, решить интеллектуальные задачи и проявить ловкость в русской игре “Городки”. В качестве координаторов выступили профессиональные гиды, действовавшие по четкому сценарию. Это позволило нам избежать синхронного перевода.", "Afin de faire connaître et unir les 500 meilleurs agents de la société en Europe, nous avons organisé une grande chasse aux trésors au centre de Saint Pétersbourg. Les participants ont été divisés en 30 équipes pour :   faire une visite guidée adaptée à chaque groupe, résoudre des exercices intellectuels et jouer au « Gorodki », jeu sportif traditionnel russe.Nos guides professionnels sont formés pour être coordinateurs de l’évènement et leur maîtrise des langues étrangères est un atout différentiateur.", "To unify the top 500 agents of the company from the whole Europe, we organized a large-scale treasure hunt at the city centre of St. Petersburg. The participants were divided into 30 groups: walking city tour, history quiz, traditional Russian sport game «Gorodki» lay ahead for each of them. The cooperation with professional guides having both, the competence of event coordinators and language skills, is a key advantage of our team."],
        img0: ["0.jpg", "0.jpg", "0.jpg"],
        text1: ["За счет оптимально подобранного маршрута, часть которого пролегала по водным магистралям, мы не задействовали автобусы - миновали пробки и туристические потоки. Квест сопровождался сложной съемкой и завершился флешмобом на 12 теплоходах.", "Grâce à la combinaison équilibrée et originale des parcours à pied et par bateau, nous avons réussi à ne pas utiliser les bus évitant ainsi des embouteillages et les touristes. La chasse aux trésors a été accompagnée d’une séance de vidéo shooting complexe et a terminé par un flashmob, tout cela réparti sur 12 bateaux.", "Due to the carefully adjusted combination of the walking routes and waterways, we managed not to use buses at all avoiding any traffic jams and tourist flows. The whole journey was accompanying with the complex video shooting and ended with the flash mob on 12 boats."],
        img1: ["1.jpg", "1.jpg", "1.jpg"],
        finalImg: ["2.jpg", "2.jpg", "2.jpg"],
      },
      GalaDiner: {
        title: ["Гала-ужин", "Dîner de Gala", "Gala diner"],
        tagline: ["Собственная режиссура и сценография, а не набор готовых номеров\n\nЧуткость к подбору “настоящих” артистов, смысловая наполненность программы\n\nУправление своими силами: логистика, коммуникация, видеопродакшн", "Gestion des évènements dans les moindres détails par nos soins : logistique, communication, réalisation de films et autres supports audiovisuels, étc\n\nSélection d’un lieu exclusif\n\nRéalisation scénographique et mise en scène théâtrale de la soirée, managées par nos équipes, en collaboration étroite avec nos propres artistes", "Event guidance from A to Z: logistics, communication, realisation of filming and other audiovisual support, etc. Focusing on the smallest details and accurate «handicraft»\nExclusive sites selection\n\nScenography and stage direction inspired by a theatre performance. Managed by our teams, in close collaboration with our own artists"],
        text0: ["Гала-ужин со сложным сценарием для 400 гостей из Бельгии был вдохновлен атмосферой исторического царского приема. Вечер начался фотосессией в парке императорской резиденции, а продолжился на уникальной площадке архитектуры 18 века. В торжественную часть программы были лаконично интегрированы фрагмент из балета Мариинского театра “Пахита” и церемония награждения. Динамика была достигнута благодаря концерту: мы решились на необычный шаг и пригласили аутентичную фолк-рок группу. Нам удалось показать, что русская культура жива и выходит за рамки истории.", "Un Dîner de Gala avec un scénario sophistiqué pour 400 invités Belges, inspiré par l’atmosphère de l’accueil digne du Tsar. La soirée a commencé par un photo shooting à Péterhof, résidence d’été des Tsars, et continué dans une salle au décor unique, style architecture du 18ième siècle. Un morceau du ballet « Paquita » du théâtre Mariinsky et une cérémonie de remise des prix ont été harmonieusement intégrés dans la partie officielle de la cérémonie. La musique authentique d’un groupe de folk-rock a apporté une dynamique inattendue à la soirée. Nous avons ainsi réussi à montrer que la culture russe va au-delà des clichés historiques.", "The Gala dinner with the sophisticated scenario for 400 guests from Belgium was inspired by the atmosphere of a Tsar’s reception. The evening started by the photo shooting at the royal summer residence Peterhof and continued at the unique hall with the decor of the 18th-century architecture. A piece of «Paquita» ballet from the Mariinsky theatre and the award ceremony were integrated to the grand program. The concert of the authentic folk-rock band brought new dynamics to the event. As a result, we managed to demonstrate that the Russian culture is going beyond the historical clichés."],
        img0: ["3.jpg", "3.jpg", "3.jpg"],
        finalImg: ["4.jpg", "4.jpg", "4.jpg"],
      },
      YouthFestivals: {
        title: ["Фестиваль", "Festivals pour les jeunes", "Youth festivals"],
        tagline: ["Креативная концепция с опорой на ценности культуры и здорового образа жизни\n\nСпонсорская интеграция в рамках замысла\n\nРекламная кампания и видеопродакшн полного цикла", "Format innovant des festivals\n\nEncadrement stricte et exigeant, adapté aux étudiants (mineurs)\n\nConcept plébiscité par les jeunes. Ambiance et tendances renouvelées tous les ans", "Innovative festival formats\n\nStrict and particular supervise adjusted to the young clientele\n\nConcept approved by the new generation. Ambiance and trends refreshing regularly"],
        text0: ["Ежегодно проводим недельный молодежный фестиваль, задействующий по 3 000 участников. Элементы программы подбираются в соответствии со смыслом и на основе опросов молодых людей 16-25 лет - таким образом нам удалось создать фестиваль, объединяющий культуру Петербурга и актуальные тренды, понятные поколению Z.  В мероприятии приняли участие Александр Гудков, Монеточка, Animal ДжаZ, Дмитрий Хрусталев и другие. Чтобы сделать мероприятие безопасным, нами была разработана эффективная система ограничения алкогольных напитков и запрет в отношении мата и пропаганды наркотиков. Фестиваль доступен для детей с ограниченными возможностями.", "Le Gala annuel des étudiants (fin d’année scolaire), accueillant 3 000 participants en une semaine, unit les traditions de la ville et les dernières tendances compréhensibles pour la génération Z. Afin de sécuriser au maximum l’événement, nous avons élaboré un système exclusif limitant la consommation d’alcool. Le festival est accessible aux handicapés.", "The annual youth festival meaning 3 000 participants in a week mixes the city traditions with the latest trends understandable for the generation Z. To ensure the greater security, we elaborated the special system of alcoholic drinks limitation. The festival is accessible for the handicapped people."],
        img0: ["5.jpg", "5.jpg", "5.jpg"],
        text1: ["Совместно с модными петербургскими художниками был создан мерч, стикер-паки и концептуальные фотозоны, любимой из которых стал VW retro bus как символ свободы и молодости. В нем можно послушать винил,примерить реквизит и сделать крутые снимки.", "Dans le cadre de la coopération avec les artistes locaux en vogue, nous avons créé le branded merch : les sticker packs et les décorations (par exemple, le bus rétro VW, symbole de la liberté et de la jeunesse, où on peut jouer des vinyles, essayer des styles rétro et faire des photos), souvenirs appréciés des jeunes.", "In collaboration with the trendy local artists, we created the branded merch, sticker packs and conceptual decorations (for example, a retro VW bus, as a symbol of freedom and youth, where one can play vinyl, try on some retro looks and make cool photos), souvenirs appreciated by the youngsters."],
        img1: ["6.jpg", "6.jpg", "6.jpg"],
        finalVideo: ["ICCO9WiWKJo", "ICCO9WiWKJo", "ICCO9WiWKJo"],
      },
      SportEvent: {
        title: ["Спортивное событие", "Evènement sportif", "Sport event"],
        tagline: ["Профессиональный “взгляд изнутри” благодаря спортивному прошлому\n\nСоздание околоспортивной программы для болельщиков\n\nПолная техническая поддержка от регламента и мерча до мед.сопровождения", "Organisation complète des évènements sportifs saisonniers, afin de renforcer l’esprit d’équipe et de développer l’efficacité collective\n\nSports d’hiver : hockey sur glace, patin à glace, ski de fonds, luges scandinaves\n\nSports d’été : régate, kayak, triathlon, marathon, formule 1", "Seasonal sport events end-to-end organisation to reinforce team spirit and to develop teamwork\n\nWinter sports: ice hockey, ice skating, cross-country skiing, Scandinavian sledges\n\nSummer sports: regate, kayak, triathlon, marathon, formula 1"],
        text0: ["Организовали турнир в Павловске для футболистов-энтузиастов игрового интернет сообщества из 14 городов России от размещения в отеле до информационной поддержки участников. Вау-эффектами встречи стали вечеринка в честь открытия игр, пробежка в музее под открытым небом, культурная программа для жен спортсменов и заключительный рок-концерт.", "Nous avons organisé la compétition de foot au Pavlovsk, parc de la résidence impériale, pour les membres de la communauté d’Internet de 14 villes Russes : de l’hébergement, au support d’information, toute la logistique a été gérée par nos soins. Les wow-effets du programme étaient : une soirée welcome, jogging au musée à ciel ouvert, des activités culturelles pour les femmes des joueurs, un concert final de rock.", "We organised a football competition in Pavlovsk, royal residence parc, for the participants of the Internet community from 14 Russian cities: from the accommodation to the information support. The wow-effects of the program were: welcome party, jogging at the open-air museum, leisure activities for the wives of the sportsmen, closing rock-concert."],
        img0: ["7.jpg", "7.jpg", "7.jpg"],
        finalImg: ["8.jpg", "8.jpg", "8.jpg"],
      },
      EventOnBoard : {
        title: ["Мероприятие на корабле", "Evènement en bateau", "Event on board"],
        tagline: ["Глубокое знание особенностей петербургской навигации\n\nЭксклюзивные водные мероприятия в дни крупных праздников и согласование специальной разводки мостов\n\nСочетание безопасности и эстетики", "Organisation de voyages et évènements privés en bateau, pendant la saison de navigation\n\nLocation de Riva ou de yachts, de toute capacité\n\nOrganisation de croisière entres les villes russes, avec programme de visites, propres à chaque étape", "Organisation of trips and private events on a boat, within the navigation season\n\nRental of yachts of every capacity\n\nTours by cruise-ship including our own program of visits"],
        text0: ["Регулярно организуем водную перевозку первых лиц государства в рамках Алых Парусов, включающую ответственные задачи: тестирование специальных судов, проработку оптимального маршрута, выбор места для просмотра салюта, безопасный доступ двухсот участников на борт под контролем спецслужб.", "Nous organisons régulièrement le transport par bateau des fonctionnaires d’Etat au sein du festival de la ville « Voiles Ecarlates ». Nous accomplissons les tâches complexes et lourdes de responsabilité pour assurer la sécurité, le confort, le service et le choix du meilleur emplacement pour stationner et voir les feux d’artifice. Nous nous assurons également, par nos choix de parcours de la fluidité du transport fluvial, en collaboration avec les services de sécurité de l’Etat.", "We are organising on a regular basis water transportation for the top public officials, within the annual city festival «Scarlet Sails». In collaboration with the State Security Service, we are fulfilling the responsible tasks to ensure security, comfort and services, to find right waterways and a right place to stop and watch fireworks from the best point of view."],
        img0: ["9.jpg", "9.jpg", "9.jpg"],
        finalImg: ["10.jpg", "10.jpg", "10.jpg"],
      },
      VIPEvent: {
        title: ["Видеопродакшн", "VIP luxe", "VIP event"],
        tagline: ["Собственная команда операторов, режиссеров и авторов музыки\n\nРежиссура и реализация любых видов съемки от рекламы до документального кино\n\nОрганизация онлайн-трансляций и записи выступлений, техническая поддержка", "Faire rêver dans un cadre inattendu et développer les ressources sur-mesure, pour créer un moment privilégié\n\nAnniversaire, weekend, inauguration, soirée, mariage…", "Special moments and exclusive entrances to dream for\n\n\nAnniversary, weekend, inauguration, diner, wedding"],
        text0: ["", "Elaboration d’un voyage exclusif pour célébrer un anniversaire. La reine de la fête, une dame Belge d’origine russe a invité 100 convives à Saint Pétersbourg. Son objectif était de leur faire connaître la Russie et de partager diverses activités culturelles : cuisiner des plats russes lors de master class, visiter en privée l’Ermitage avec accompagnement de l’orchestre symphonique, participer à une soirée géorgienne authentique, fêter l’anniversaire dans une salle de luxe de l’hôtel historique Astoria.  La très haute qualité de nos services, dans ses moindres détails (choix des fleurs, des cadeaux, des menus, des vins, des activités…) a été un élément majeur de la réussite de ce voyage anniversaire de 4 jours.", "The unique trip to celebrate the anniversary. The lady of the hour from Belguim of Russian origins invited 100 guests to St. Petersburg to reveal for them the Russian culture and to experience some special activities together: to cook traditional Russian dishes within the cooking master class, to visit exclusively the empty Hermitage Museum accompanied by a symphony orchestra, to participate at a Georgian authentic dinner, to make the anniversary party at the hall of the historical luxurious Astoria hotel.  The high quality of our services in the finest details (choice of the flowers, menus, vines, activities…) was a major point ensuring the success of this four-day anniversary trip."],
        img0: ["", "11.jpg", "11.jpg"],
        finalImg: ["", "12.jpg", "12.jpg"],
        finalVideo: ["c18oDgh0eBM", "", ""],
      },

      bottomText: ["", "Nos destinations : Saint Pétersbourg et la région de Leningrad, Carélie, Moscou, Sochi", "Our destinations: Saint Petersburg and the Leningrad region, Region of Karelia, Moscow, Sochi"]
    },
    Trips: {
      title: ["поездки", "voyages", "trips"],
      tagline: ["Наше видение:\nтворить путешествия с вами и для вас.", "Notre vision :\ndédier notre perspicacité à l’atteinte de l’objectif du voyage dans le respect de vos exigences, de vos valeurs et de votre budget.", "Our vision:\nto bring our insight and understanding in compliance with your requirements, your corporatevalues and within your budget."],
      taglineAuthor0: ["Локальный DMС", "DMC francophone en Russie", "Russian DMC"],
      taglineAuthor1: ["продюсер современных и эстетических концепций", "concepteur d’évènements d’entreprise sur-mesure", "with European touch, designer of bespoke corporate events"],

      IncentiveTour: {
        title: ["Incentive tour", "Tour incentive", "Incentive tour"],
        tagline: ["Комплексная организация: проживание, логистика, питание,культурная программа\n\nБаланс между задачей заказчика и экспертной оценкой\n\nСоздание специального сайта мероприятия\n\nСобственный видеопродакшн", "Organisation complexe : hébergement, logistique, programme culturel et soirées\n\nPréparation pointue d’un cahier des charges très précis\n\nCréation du site web, page dédiée\n\nFilmographie, Same Day Edit. Réalisation par les spécialistes de notre équipe", "Complex organisation: accommodation, logistics, cultural program and diners\n\nSharp and custom preparation to draw up a detailed specification\n\nDedicated web site creation\n\nFilming, Same Day Edit. Realisation by specialists of our team"],
        text0: ["Четырехдневный Incentive tour для 500 лучших сотрудников европейской ювелирной компании. Чтобы изучить философию заказчика, мы провели 2 дня в офисе в Лилле. Лейтмотивом тура стали франко-русские связи, а знакомство с Северной столицей состоялось в формате экскурсии-квеста в поисках утраченных в революцию драгоценностей французского мастера.", "Le tour incentive de 4 jours pour 500 meilleurs managers de la société française de bijouterie. Afin d’étudier la philosophie du client, nous avons passé 2 jours au siège de la société, à Lille. Le leitmotiv du tour était les : « liens franco-russes ». Par conséquent la rencontre avec la ville a commencé par une chasse aux trésors destinée à retrouver des bijoux d’un artiste français, perdus à Saint Pétersbourg durant la Révolution Russe.", "Four-day incentive tour for the top 500 managers of the French jewelry company. To understand better the company’s philosophy, we spent 2 days at the headquarters in Lille. The leitmotif of the tour was the historical French-Russian context, so the city exploring started with the adventure game, designed to find the French artist’s jewels lost in St. Petersburg during the Russian Revolution."],
        img0: ["0.jpg", "0.jpg", "0.jpg"],
        text1: ["Важно было продумать идеальную логистику и координацию - все мероприятия тура задействовали городское и музейное пространство, а гости проживали в двух отелях в центре Петербурга. За 4 дня мы организовали командный тимбилдинг, 2 гала-ужина, более 100 индивидуальных экскурсий в Петербурге и пригородах. Тур был признан заказчиками лучшим за всю историю компании.", "Par optimisation, tous les évènements ont eu lieu dans les espaces du centre de la ville et des musées; les invités ont été hébergés dans 2 hôtels, situés également au centre. Réalisations pour 4 jours : une chasse aux trésors par sous-groupes, 2 dîners de Gala, plus que 100 visites individuelles autour de Saint Pétersbourg et ses alentours. Le voyage a été élu par le client comme le meilleur dans l’expérience de la société.", "As optimization of the logistics and coordination, all the events were held at the city centre and museum spaces. Also, the guests were accommodated at two hotels at the city centre. Realisations for 4 days: team building by small groups, 2 Gala dinners, more than 100 individual tours around St. Petersburg and its suburbs. The incentive tour in St. Petersburg was valued by the client as the best one throughout their experience."],
        img1: ["1.jpg", "1.jpg", "1.jpg"],
        finalVideo: ["6mm-bOvSP0U", "6mm-bOvSP0U", "6mm-bOvSP0U"],
      },
      SeminarTour: {
        title: ["Деловое мероприятие", "Voyage séminaire", "Seminar tour"],
        tagline: ["Собственное техническое оснащение, обеспечение онлайн-трансляций\n\nГрамотная организация размещения, питания и логистики в соответствии с деловой программой\n\nПерсональный консьерж-сервис и эксклюзивная культурная программа для участников", "Choix d’un lieu singulier, sélection d’un sujet d’inspiration inattendu : éléments indispensables pour personnaliser un séminaire adapté à vos objectifs", "Search for a singular location and an unexpected inspiration: essential elements to make a seminar personalised and adapted to requests"],
        text0: ["Организовали логистику и культурную программу для конференции фармацевтической компании Stada. Мы не только познакомили медиков-хирургов из Германии с Петербургом, но включили в экскурсию медицинские темы, поднятые на конференции. Таким образом мы обеспечили высокую вовлеченность участников и органично связали деловую и культурную части мероприятия.", "La logistique et le programme culturel ont été organisés autour de la conférence de la société pharmaceutique Stada. Nous n’avons pas seulement dévoilé la ville pour les chirurgiens allemands mais avons aussi intégré au tour les thèmes médicaux évoqués durant la conférence. Nous avons donc réussi à obtenir l’engagement actif des participants ainsi à lier les deux programmes : d’affaire et culturel.", "The logistics and the cultural program were organised around the conference of the pharmaceutical company Stada. We not only showed St. Petersburg to the surgeons from Germany but also integrated to the city tour the medical themes touched during the conference. Thus, we provided the greater engagement of the participants and made both, business and cultural, programs coherently connected."],
        img0: ["2.jpg", "2.jpg", "2.jpg"],
        finalImg: ["3.jpg", "3.jpg", "3.jpg"],
      },
      PressTour: {
        title: ["Пресс-тур", "Voyage de presse", "Press tour"],
        tagline: ["Элегантные и нестандартные локации и сервисы, которые произведут впечатление на журналистов, блоггеров или инфлюенсеров\n\nПодбор локаций для кино, фото-съемки", "Savoir vous accompagner par le choix raffiné, luxueux de lieux et de services, afin de séduire journalistes, bloggers, influenceurs", "Refined and elegant selection of locations and services to seduce journalists, bloggers, influencers"],
        text0: ["Приняли команду National Geographic, которая готовила материал о современной российской молодежи. На основе исследования мы предложили подборку знаковых событий, героев и брендов в сфере искусства, спорта, политики и моды. Журналисты провели три эффективных дня, посещая мероприятия и общаясь с петербуржцами в режиме “погружения” - например, координаторами были молодые люди 25-30 лет, которые стали дополнительным неформальным источником для сюжета.", "Nous avons accueilli l’équipe des reporters de « National Geographic » qui a préparé des articles, des photos, des films au sujet de la vie des jeunes russes. Sur la base des recherches internes, nous avons offert une sélection d’évènements, héros, brands locaux dans les domaines de l’art, du sport, de la politique et du fashion. Les journalistes ont passé 3 jours en « plongeant » profondément dans les communications avec les jeunes pétersbourgeois. Les coordinateurs âgés de 25-30 ans sont devenus la source d’information additionnelle pour les reporters.", "We welcomed the team of the National Geographic magazine that was collecting materials about the today’s youth in Russia. According to our research, we offered the selection of the local events, heroes and brands in the area of art, sport, politics and fashion. The journalists spent 3 days in St. Petersburg «plunging» deeply to the communications with the young locals. The 25-30-year-old coordinators of the journey became the additional non-formal resource for the reporters’ story."],
        img0: ["4.jpg", "4.jpg", "4.jpg"],
        finalImg: ["5.jpg", "5.jpg", "5.jpg"],
      },
      ProductLaunch: {
        title: ["Мероприятия В2В", "Lancement produit ", "Product launch"],
        tagline: ["Консалтинг в разработке целевой коммуникации\n\nЦелевое привлечение инфлюенсеров и СМИ\n\nРазработка программы погружения бизнеса в культурную среду ЦА", "Tisser la connexion culturelle entre les auteurs du lancement d’un nouveau produit et les clients en Russie, sans oublier les relayeurs d’informations\n\nConseils pour communiquer auprès des consommateurs ciblés", "Making cultural connections between a new product and the clients in Russia, including editors\n\nTargeting communication consulting services"],
        text0: ["В рамках тренинга-презентации новой коллекции известного бренда женского белья для закрытого клуба клиентов, проводившегося впервые в Петербурге, организовали для представителей марки культурную программу, а также знакомство с известными торговыми домами.", "Au sein du workshop - présentation de la nouvelle collection d’une marque de lingerie qui a eu lieu pour la première fois à Saint Pétersbourg, destiné aux membres du club privé des clients Nous avons organisé pour les représentants de la marque le programme culturel ainsi que les visites aux célèbres maisons de commerce.", "Within the workshop-new collection presentation of the lingerie brand for the private club of clients, held for the first time in St. Petersburg, we organised for the brand’s representatives the cultural program as well as visits to the famous fashion stores."],
        img0: ["6.jpg", "6.jpg", "6.jpg"],
        finalImg: ["7.jpg", "7.jpg", "7.jpg"],
      },
      VIPTour: {
        title: ["Корпоративные экскурсии", "Voyages VIP", "VIP Tour"],
        tagline: ["Небанальные экскурсии-мероприятия с учетом ваших задач\n\nСобственная экспертиза, глубокое знание Петербурга и Ленинградской области\n\nСвоя команда гидов на языках мира", "Dévoilé sur demande", "To be unveiled upon request"],
        text0: ["Объединили классику с брутальностью, предложив участникам легендарного Harley Davidson Days отправиться по воде на экскурсию в Петергоф и доказать свою сплоченность в ходе квеста по фортам Кронштадта.", "", ""],
        img0: ["8.jpg", "9.jpg", "9.jpg"],
        finalImg: ["", "10.jpg", "10.jpg"],
        finalImg1: ["", "11.jpg", "11.jpg"],
        finalVideo: ["cgJ3SbxT7BI", "", ""],
      },

      bottomText: ["", "Nos destinations : Saint Pétersbourg et la région de Leningrad, Carélie, Moscou, Sochi", "Our destinations: Saint Petersburg and the Leningrad region, Region of Karelia, Moscow, Sochi"]
    },
  },

  Agency: {
    quotes: ["Мультиязычная команда и работа на европейский рынок дает нам знание мировых трендов, понимание высоких стандартов и умение слышать клиента.", "Notre singularité réside dans notre capacité d’allier patrimoine culturel et projets innovants.", "Our singularity is reflected in our ability to combine cultural heritage and innovative projects."],
    title: ["Команда Petersbourg voyages & events", "Team Petersbourg voyages & events", "Team Petersbourg voyages & events"],
    text0: ["Создаем корпоративные мероприятия в сочетании ивента и туризма. Культурная традиция, живущая в каждой частичке города, вдохновляет нас на поиск ее современных форм. Нам важно, чтобы наши партнеры воплощали аутентичное видение и истинное гостеприимство, поэтому мы эксклюзивно работаем с локальными брендами.", "Petersbourgevents est spécialisée dans l’organisation d’évènement d’entreprise de qualité supérieure adapté à chaque budget. Nos clients sont accompagnés par une équipe dévouée et dynamique. Nous avons à cœur de leur faire partager notre connaissance intime des lieux, de leur faire découvrir l’âme et l’hospitalité russe. Notre valeur ajoutée passe par notre authenticité. Nous travaillons uniquement avec l’appui de partenaires locaux, minutieusement sélectionnés pour leur sérieux et régulièrement contrôlés.", "Petersbourgevents is specialized in organization of high-quality corporate events adapted to every budget. Our clients are accompanied by a deeply involved and dynamic team. We are committed to sharing the intimate knowledge of our country, we help to discover the Russian soul and hospitality. Our added value is our genuineness. We exclusively work with local partners support, minutely selected for their efficiency and regularly checked."],
    text1: ["Опыт говорит нам, что реальные потребности заказчика – это больше, чем ТЗ", "Notre stimulation : la réalisation unique d'un souhait", "Our stimulation: unique fulfilment of a request"],
    text2: ["Наша цель - увидеть их и на этой основе найти неординарные решения, подкрепленные нашей экспертизой. Мы верим, что “Театр начинается с вешалки”, поэтому персонализированными должны быть не только решения, но и сервис.", "Les composants essentiels de la conception des événements, sont : Une approche interculturelle (équipe russe et française); L’écoute; Les services hautement personnalisés, pour un évènement particulier et exclusif; La qualité des réalisations", "The essential components of events design are: Intercultural approach (Russian and European teams); Listening; Highly personalised services for a special and exclusive event; Quality of the achievements"],
  },

  Contact: {
    addressSPBline0: ["Офис в Санкт-Петербурге 190031", "Bureau Saint Pétersbourg 190031", "Office Saint Petersburg 190031"],
    addressSPBline1: ["Санкт-Петербург, ул. Малая Морская, 18", "Russie, Saint Pétersbourg, Malaya Morskaya ulitsa, 18", "Russia, Saint Petersburg, Malaya Morskaya ulitsa, 18"],
    addressLyon: ["Представительство в Лионе Rachel Guironnet", "Bureau Lyon\nRachel Guironnet", "Office Lyon\nRachel Guironnet"],
    requestButton: ["Отправьте запрос", "Demandez un devis", "Send your request"],
  },

}


export default defaultMessages