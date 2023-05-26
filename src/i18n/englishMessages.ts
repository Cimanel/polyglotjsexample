import { Message } from './index';

const englishMessages: Message = {
  users: {
    hello_name: 'Hello %{name}!',
    name: 'User',
    fields: {
      id: 'ID',
      identity: {
        title: 'Identity',
        name: 'Name',
        username: 'Username',
        email: 'Email',
        phone: 'Phone number',
        website: 'Website',
      },

      address: {
        title: 'Address',
        street: 'Street',
        city: 'City',
        zipcode: 'Zip code',
      },
      company: {
        title: 'Company',
        name: 'Name',
        catchPhrase: 'Catch phrase',
      },
      pets: {
        title: 'Pet |||| Pets',
      },
    },
  },
};

export default englishMessages;
