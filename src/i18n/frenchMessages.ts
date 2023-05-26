import { Message } from './index';

const frenchMessages: Message = {
  users: {
    hello_name: 'Bonjour %{name}!',
    name: 'Utilisateur ',
    fields: {
      id: 'ID',
      identity: {
        title: 'Identité',
        name: 'Nom',
        username: 'Prénom',
        email: 'Email',
        phone: 'Numéro de téléphone',
        website: 'Site web',
      },

      address: {
        title: 'Adresse',
        street: 'Rue',
        city: 'Ville',
        zipcode: 'Code postal',
      },
      company: {
        title: 'Entreprise',
        name: 'Nom',
        catchPhrase: "Phrase d'accroche",
      },
      pets: {
        title: 'Animal domestique |||| Animaux domestiques',
      },
    },
  },
};

export default frenchMessages;
