import niel         from '../img/neil.png'
import deadpool     from '../img/deadpool.jpg'
import thanos       from '../img/thanos.png'
import batman       from '../img/batman.png'
import ironman      from "../img/ironman.jpg"
import yoda         from "../img/yoda.jpg"
import groot        from "../img/groot.png"
import spiderman    from "../img/spiderman.png"
import harleyquinn  from "../img/harleyquinn.png"
import catwoman     from "../img/catwoman.png"
import joker        from "../img/joker.png"
import zoro         from "../img/zoro.png"
import loki         from "../img/loki.png"
import wonderwoman  from "../img/wonderwoman.png"
import bigard       from  "../img/bigard.png"

const db = [
    {
        id: 0,
        name: 'Deadpool',
        path: deadpool,
        description: 'Salut, je suis Deadpool, l\'anti-héros le plus sarcastique de l\'univers. Je suis à la recherche d\'une partenaire qui aime les blagues de merde, les soirées costumées et les plats végétariens. Je suis un grand fan de cabrioles et de mots d\'esprit, alors si tu es prêt à te battre pour le dernier kebab et à me faire rire à en perdre la vue, alors tu es la personne que je recherche. Je suis également un grand amoureux de la gâterie, alors si tu es en quête d\'un homme qui te traite comme la reine que tu es, tu as frappé à la bonne porte. Alors, on se fait un câlin ou on se tire une balle dans le pied ?'
    },
    {
        id: 1,
        name: 'Thanos',
        path: thanos,
        description: 'Je suis Thanos, le maître de l\'univers et le détenteur du Gant de l\'Infini. Je suis à la recherche d\'une partenaire qui peut suivre mon rythme effréné et me soutenir dans mes conquêtes galactiques. Si vous êtes audacieuse, indomptable et prête à vivre des aventures incroyables, alors je suis votre homme. Je suis expert en stratégie, en art de la guerre et en laissant mes ennemis trembler à ma simple apparition. Je suis le genre d\'homme qui peut vous faire voyager dans des endroits lointains et vous faire vivre des expériences inoubliables. Je suis un peu cruel parfois, mais c\'est seulement parce que j\'ai une mission à accomplir. Si vous êtes prête à vivre une vie passionnante et excitante, alors envoyez-moi un message. Le temps est compté...'
    },
    {
        id: 2,
        name: 'Batman',
        path: batman,
        description: 'Juste un homme en quête de justice. Entrepreneur milliardaire par jour, protector de Gotham par nuit. Fan de gadgets high-tech et d\'entraînement physique intensif. Recherche une partenaire qui comprenne ma mission de protéger la ville et qui soit prête à affronter les défis de la vie à mes côtés. Swipe right si tu es prête à vivre une aventure excitante avec le chevalier noir.'
    },
    {
        id: 3,
        name: 'Iron Man',
        path: ironman,
        description: 'Je suis Tony Stark, aka Iron Man, un génie milliardaire, playboy et philanthropique. Je suis né pour dominer et je suis un leader incontestable. Mon intelligence et ma détermination sont sans égal, et j\'ai la capacité de conquérir tout ce que je veux. Je n\'ai pas besoin de tinder, les femmes viennent à moi, attirées par ma richesse, mon statut et ma puissance. Cependant, je suis ouvert à rencontrer une femme qui peut tenir la distance et me challenger intellectuellement. Si vous voulez me connaître, soyez prêts à être impressionnés et subjugués. Je ne suis pas un homme ordinaire et je n\'accepte que les meilleurs. Alors, allez-y, swipez vers la droite si vous avez le cran. Mais attention, je ne suis pas à prendre à la légère.'
    },
    {
        id: 4,
        name: 'Neil',
        path: niel,
        description: 'Partisan du re-dump sur arch'
    },
    {
        id: 5,
        name: 'Yoda',
        path: yoda,
        description: 'Hmmm, moi, Maître Yoda je suis. Célibataire, je suis, oui. Esprit jeune et curieux j\'ai. Nombreuses aventures j\'ai vécues, mais encore de nouvelles expériences je cherche. Embrasser la vie, je veux. Énergique et amusant, tu es? Alors, ensemble nous pourrions être. Viens, montre-moi ton côté déjanté. Hmmm?'
    },
    {
        id: 6,
        name: 'Groot',
        path: groot,
        description: 'Je s\'appelle Groot, je s\'appelle Groot, je s\'appelle Groot, je s\'appelle Groot, je s\'appelle Groot, je s\'appelle Groot.'
    },
    {
        id: 7,
        name: 'Spiderman',
        path: spiderman,
        description: 'Héros de la ville à mes heures libres, en quête d\'une complice pour des aventures excitantes. Je suis toujours prêt à escalader les buildings les plus hauts, à attraper les criminels les plus audacieux, et à sauver la ville de New York. J\'aime les câlins, les pizzas et les acrobaties. Si tu es prête à te lancer dans l\'aventure avec moi, prépare-toi à être soulevée de terre.'
    },
    {
        id: 8,
        name: 'Harley Quinn',
        path: harleyquinn,
        description: 'Je suis Harley Quinn, une câline dynamite prête à égayer votre vie. Mes joues roses et mon sourire enjôleur vont vous faire tomber sous mon charme. Je suis un peu folle, un peu sauvage et prête à tout pour faire battre votre cœur plus vite. Mes yeux pétillants de malice et mes formes généreuses vont vous faire perdre la tête. Venez me découvrir et laissons nous embarquer dans une aventure remplie de piquant et de surprises. Prêt à être mon Joker ?'
    },
    {
        id: 9,
        name: 'Catwoman',
        path: catwoman,
        description: 'Je suis plus qu\'une simple chatte dans la nuit, je suis la Catwoman. Mes griffes sont acérées et mon regard envoûtant. Mes aventures sont exotiques et mes sous-entendus sont aussi subtils qu\'un vol de bijoux. Je suis à la recherche de quelqu\'un qui peut me suivre dans mes périples et me caresser le dos en même temps. Es-tu celui qui aura le courage de se mesurer à moi ? Tu ne le regretteras pas, je te le promets.'
    },
    {
        id: 10,
        name: 'Bad Bigard BB',
        path: bigard,
        description: "Boire au réveil pour faire passer la cuite de la veille avant de partir vadrouiller pour effrayer vos super-héros. Me croise pas sur ton chemin quand je dois aller pisser entre deux bières ou après avoir défourailler ta mère. Rah rah raaaaaaah !"
    },
    {
        id: 11,
        name: 'Roronoa Zoro',
        path: zoro,
        description: 'Je suis Roronoa Zoro, le plus grand pirate de tous les temps. Avec mon épée à la main, je suis prêt à affronter les mers les plus dangereuses et à explorer les îles les plus exotiques. J\'aime les défis et les aventures, surtout avec une belle compagne à mes côtés. Je suis expert en arts martiaux et en conquêtes amoureuses, alors préparez-vous pour une expérience inoubliable. Swipe right si vous êtes prête à naviguer vers de nouveaux horizons ensemble.'
    },
    {
        id: 12,
        name: 'Loki',
        path: loki,
        description: 'Je suis Loki, le Dieu de la ruse et de la séduction. Avec mon sourire enjôleur et mon charme irrésistible, je suis capable de vous transporter dans un monde rempli d\'aventures exotiques. Mes histoires captivantes vous laisseront sans souffle, et mon sens de l\'humour vous fera rire jusqu\'aux larmes. Si vous êtes à la recherche de quelqu\'un capable de vous faire vibrer à chaque instant, alors je suis l\'homme qu\'il vous faut.'
    },
    {
        id: 13,
        name: 'Wonder Woman',
        path: wonderwoman,
        description: 'Aventureuse, féministe et toujours prête à sauver le monde (et à vivre des moments inoubliables). Je suis une amazone moderne avec une passion pour les défis et les moments de découverte. En quête de quelqu\'un qui saura me suivre dans mes périples exotiques et mes conquêtes à la Wonder Woman. Viens, montre-moi tes super pouvoirs et peut-être que je partagerai mon lasso de vérité avec toi.'
    },
    {
        id: 14,
        name: 'Joker',
        path: joker,
        description: 'Souvent imité, jamais égalé. Je suis le prince du chaos, l\'as de l\'imprévu et le maître du sous-entendu. Mes blagues noires sont aussi pointues que mes sourires en coin. J\'aime les situations exotiques et les défis qui me sortent de ma zone de confort. Si tu es prête à prendre un risque et à te laisser entraîner dans un monde de folie et de rires, je suis ton Joker.'
    }
  ]

export default db
