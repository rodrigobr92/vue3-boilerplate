import { mount } from '@vue/test-utils';
import Alerts from './alerts.vue';

import { expect } from 'vitest';

test('Mount Alerts', () => {
  expect(Alerts).toBeTruthy();

  const wrapper = mount(Alerts, {
    props: {
      title: 'Hello world',
    },
  });

  expect(wrapper.text()).toContain('Hello worl');
});
