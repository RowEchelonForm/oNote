import { mount } from '@vue/test-utils';
import Logo from '@/components/Logo.vue';
require('jsdom-global')();

describe('Logo', () => {
  test('is a Vue instance', () => {
    console.log(Logo == undefined);
    const wrapper = mount(Logo);
    expect(wrapper.isVueInstance()).toBeTruthy();
  });
});
