import { html } from 'lit';
import '../src/penguin-card.js';

export default {
  title: 'PenguinCard',
  component: 'penguin-card',
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

function Template({ header, backgroundColor }) {
  return html`
    <penguin-card
      style="--penguin-card-background-color: ${backgroundColor || 'white'}"
      .header=${header}
    >
    </penguin-card>
  `;
}

export const App = Template.bind({});
App.args = {
  header: 'My app',
};
