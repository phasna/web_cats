import { HelpCircle, ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      category: "Adoption",
      questions: [
        {
          q: "Quels sont les critères pour adopter un chat ?",
          a: "Pour adopter un chat, vous devez remplir notre formulaire d'adoption détaillé. Nous évaluons plusieurs critères : votre expérience avec les chats, votre situation familiale (présence d'enfants, autres animaux), votre type d'habitat (appartement/maison), votre disponibilité, et votre motivation. Notre système de matching vous proposera les chats les plus adaptés à votre profil. Tous les chats doivent être identifiés, vaccinés et stérilisés avant adoption.",
        },
        {
          q: "Combien coûte l'adoption d'un chat ?",
          a: "Les frais d'adoption varient entre 100€ et 200€ selon le chat. Ces frais couvrent les soins vétérinaires (identification par puce électronique, stérilisation, vaccination, vermifuge, anti-parasitaires), ainsi que les soins prodigués pendant le séjour au refuge. C'est un coût bien inférieur aux frais réels engagés pour chaque chat.",
        },
        {
          q: "Puis-je adopter plusieurs chats ?",
          a: "Oui, il est possible d'adopter plusieurs chats, notamment s'ils sont compatibles entre eux. Nous recommandons particulièrement l'adoption en duo pour certains chats qui s'entendent bien. Notre équipe peut vous conseiller sur les combinaisons possibles.",
        },
        {
          q: "Que faire si le chat ne s'adapte pas à mon foyer ?",
          a: "Si malgré tous nos efforts, l'adoption ne fonctionne pas, nous vous offrons la possibilité de ramener le chat au refuge dans les 30 jours suivant l'adoption. Nous préférons que chaque chat trouve le foyer qui lui convient vraiment. Dans certains cas, nous pouvons proposer un autre chat plus adapté.",
        },
        {
          q: "Y a-t-il un suivi après l'adoption ?",
          a: "Oui, nous restons en contact avec vous après l'adoption. Nous proposons des visites de suivi et sommes disponibles pour répondre à vos questions. Nous apprécions également recevoir des nouvelles de nos anciens protégés !",
        },
      ],
    },
    {
      category: "Soins et santé",
      questions: [
        {
          q: "Tous les chats sont-ils vaccinés ?",
          a: "Oui, tous nos chats sont vaccinés avant l'adoption. Ils reçoivent leurs premiers vaccins (typhus, coryza, leucose) et nous fournissons le carnet de santé complet avec les dates de rappel. La vaccination annuelle est essentielle pour la santé de votre chat.",
        },
        {
          q: "Les chats sont-ils stérilisés ?",
          a: "Oui, absolument. Tous nos chats sont stérilisés avant l'adoption, qu'ils soient mâles ou femelles. La stérilisation est obligatoire et est incluse dans les frais d'adoption. C'est essentiel pour leur santé et pour éviter la surpopulation.",
        },
        {
          q: "Comment sont identifiés les chats ?",
          a: "Tous nos chats sont identifiés par puce électronique (ou tatouage pour les plus anciens). Le numéro d'identification est enregistré dans le fichier national d'identification (I-CAD). Vous recevrez tous les documents nécessaires lors de l'adoption.",
        },
        {
          q: "Que faire si mon chat a des problèmes de santé après l'adoption ?",
          a: "Si votre chat présente des problèmes de santé dans les premiers mois après l'adoption, contactez-nous. Nous pouvons vous orienter vers nos vétérinaires partenaires. Les frais médicaux après l'adoption sont à votre charge, mais nous sommes là pour vous conseiller.",
        },
        {
          q: "Les chats handicapés ou avec besoins spéciaux peuvent-ils être adoptés ?",
          a: "Absolument ! Les chats avec besoins spéciaux ou handicaps peuvent mener une vie heureuse et épanouie. Nous fournissons toutes les informations nécessaires sur leurs besoins spécifiques. Ils nécessitent souvent plus d'attention et d'adaptation, mais apportent beaucoup d'amour.",
        },
      ],
    },
    {
      category: "Distribution de croquettes",
      questions: [
        {
          q: "Quand a lieu la distribution de croquettes ?",
          a: "La distribution de croquettes gratuite a lieu tous les vendredis soirs de 18h à 20h à notre siège. C'est réservé aux familles qui ont adopté un chat chez nous. Vous devez présenter votre carte d'adoption.",
        },
        {
          q: "Quelles quantités sont disponibles ?",
          a: "Nous proposons deux tailles de portions : 300g pour les portions individuelles et 900g pour les portions familiales (plusieurs chats). Vous pouvez choisir selon vos besoins lors de chaque distribution.",
        },
        {
          q: "Puis-je venir tous les vendredis ?",
          a: "Oui, vous pouvez venir chaque vendredi soir pendant les horaires de distribution. C'est un service gratuit et illimité pour nos familles adoptantes. C'est notre façon de vous soutenir dans l'adoption responsable.",
        },
        {
          q: "Quels types de croquettes sont distribuées ?",
          a: "Nous distribuons des croquettes de qualité premium adaptées aux chats d'intérieur et d'extérieur. Si votre chat a des besoins alimentaires spécifiques, nous pouvons en discuter avec vous.",
        },
      ],
    },
    {
      category: "Dons",
      questions: [
        {
          q: "Comment faire un don ?",
          a: "Vous pouvez faire un don financier directement sur notre site via notre page dédiée. Nous acceptons les paiements par carte bancaire, PayPal, virement bancaire ou chèque. Vous pouvez également faire des dons matériels (nourriture, litière, jouets, accessoires) que vous pouvez déposer au refuge.",
        },
        {
          q: "Les dons sont-ils déductibles des impôts ?",
          a: "Oui ! Les dons à notre association sont déductibles des impôts à hauteur de 66% dans la limite de 20% du revenu imposable. Nous vous fournirons un reçu fiscal pour votre déclaration.",
        },
        {
          q: "À quoi servent les dons ?",
          a: "100% des dons servent directement aux chats : soins vétérinaires (vaccination, stérilisation, opérations), nourriture, litière, médicaments, équipements pour le refuge. Nous garantissons une transparence totale sur l'utilisation des fonds.",
        },
        {
          q: "Quels types de dons matériels acceptez-vous ?",
          a: "Nous acceptons la nourriture (croquettes, pâtée), la litière, les jouets, les accessoires (gamelles, paniers, griffoirs), les couvertures, les médicaments vétérinaires, et les accessoires de transport. Merci de vérifier les dates de péremption avant le dépôt.",
        },
      ],
    },
    {
      category: "Visites et refuge",
      questions: [
        {
          q: "Quand puis-je visiter le refuge ?",
          a: "Notre refuge est ouvert tous les jours de 10h à 18h (sauf dimanche). Nous recommandons de prendre rendez-vous pour une visite guidée, surtout si vous souhaitez rencontrer un chat en particulier. Vous pouvez également faire une visite virtuelle depuis notre site.",
        },
        {
          q: "Puis-je venir avec mes enfants ?",
          a: "Oui, les enfants sont les bienvenus ! C'est même recommandé si vous envisagez d'adopter un chat compatible avec enfants. Cela permet de voir comment le chat réagit aux enfants et vice versa. Les enfants doivent être accompagnés et surveillés.",
        },
        {
          q: "Puis-je venir avec mon autre animal pour voir s'ils s'entendent ?",
          a: "Oui, pour certains chats compatibles avec d'autres animaux, nous pouvons organiser une rencontre. Contactez-nous à l'avance pour planifier cette rencontre dans de bonnes conditions. Cela se fait généralement dans un espace neutre.",
        },
        {
          q: "Comment fonctionne la visite virtuelle ?",
          a: "Notre visite virtuelle vous permet d'explorer nos refuges en 360° depuis chez vous. Vous pouvez voir les installations et découvrir les chats disponibles. C'est un excellent moyen de faire une première sélection avant de venir sur place.",
        },
      ],
    },
    {
      category: "Général",
      questions: [
        {
          q: "Quelle est la différence entre votre association et d'autres refuges ?",
          a: "Nous nous distinguons par notre système de matching intelligent qui assure une compatibilité optimale, notre suivi post-adoption personnalisé, notre distribution de croquettes hebdomadaire, et notre transparence totale. Tous nos chats sont soignés individuellement et nous connaissons parfaitement leur personnalité.",
        },
        {
          q: "Combien de chats avez-vous actuellement ?",
          a: "Le nombre varie constamment, mais nous accueillons généralement entre 40 et 60 chats à la fois dans nos différents refuges. Consultez notre site pour voir les chats actuellement disponibles à l'adoption.",
        },
        {
          q: "Puis-je devenir bénévole ?",
          a: "Oui ! Nous recherchons toujours des bénévoles pour nous aider avec les soins aux chats, l'entretien du refuge, l'accueil des visiteurs, et d'autres tâches. Contactez-nous pour en savoir plus sur les opportunités de bénévolat.",
        },
        {
          q: "Comment puis-je devenir famille d'accueil ?",
          a: "Les familles d'accueil sont essentielles pour nos chats qui ont besoin d'un environnement plus calme que le refuge. Contactez-nous pour discuter des possibilités. Nous fournissons tout le matériel et les soins vétérinaires nécessaires.",
        },
        {
          q: "Que faire si je trouve un chat errant ou abandonné ?",
          a: "Contactez-nous ! Si nous avons de la place, nous pouvons l'accueillir. Nous vérifierons s'il est identifié pour contacter son propriétaire. Si vous ne pouvez pas l'amener immédiatement, nous vous donnerons des conseils pour le garder en sécurité en attendant.",
        },
      ],
    },
  ];

  const toggleQuestion = (categoryIndex, questionIndex) => {
    const index = `${categoryIndex}-${questionIndex}`;
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl animate-fade-in">
      <div className="text-center mb-12">
        <div className="flex justify-center mb-4">
          <div className="w-20 h-20 bg-primary-100 rounded-full flex items-center justify-center">
            <HelpCircle className="w-10 h-10 text-primary-600" />
          </div>
        </div>
        <h1 className="text-4xl lg:text-5xl font-bold mb-4">
          Questions fréquentes
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Trouvez les réponses aux questions les plus courantes sur l'adoption,
          les soins, et notre association
        </p>
      </div>

      <div className="space-y-8">
        {faqs.map((category, categoryIndex) => (
          <div key={categoryIndex} className="card">
            <h2 className="text-2xl font-bold mb-6 text-primary-600">
              {category.category}
            </h2>
            <div className="space-y-4">
              {category.questions.map((faq, questionIndex) => {
                const index = `${categoryIndex}-${questionIndex}`;
                const isOpen = openIndex === index;
                return (
                  <div
                    key={questionIndex}
                    className="border border-gray-200 rounded-lg overflow-hidden"
                  >
                    <button
                      onClick={() =>
                        toggleQuestion(categoryIndex, questionIndex)
                      }
                      className="w-full flex items-center justify-between p-4 text-left hover:bg-gray-50 transition-colors"
                    >
                      <span className="font-semibold text-gray-900 pr-4">
                        {faq.q}
                      </span>
                      {isOpen ? (
                        <ChevronUp className="w-5 h-5 text-primary-600 flex-shrink-0" />
                      ) : (
                        <ChevronDown className="w-5 h-5 text-gray-400 flex-shrink-0" />
                      )}
                    </button>
                    {isOpen && (
                      <div className="p-4 pt-0 bg-gray-50 animate-slide-up">
                        <p className="text-gray-700 leading-relaxed">{faq.a}</p>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>

      <div className="card bg-primary-50 border-2 border-primary-200 mt-8 text-center">
        <h3 className="text-xl font-bold mb-4">
          Vous avez d'autres questions ?
        </h3>
        <p className="text-gray-700 mb-6">
          N'hésitez pas à nous contacter directement. Nous serons ravis de
          répondre à toutes vos questions.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="tel:+33123456789" className="btn-primary">
            Appeler : 01 23 45 67 89
          </a>
          <a
            href="mailto:contact@association-chats.fr"
            className="btn-secondary"
          >
            Email : contact@association-chats.fr
          </a>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
