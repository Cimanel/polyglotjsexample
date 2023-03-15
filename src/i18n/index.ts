import englishMessages from './englishMessages';
import frenchMessages from './frenchMessages';

export interface Message {
  [key: string]: Message | string | undefined;
}

const messages: { [key: string]: Message } = {
  en: englishMessages,
  fr: frenchMessages,
};

export default messages;
