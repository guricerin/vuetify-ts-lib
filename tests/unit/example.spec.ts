import { shallowMount } from '@vue/test-utils';
import DemoDialog from '@/components/DemoDialog.vue';

describe('HelloWorld.vue', () => {
  it('renders props.msg when passed', () => {
    const msg = 'new message';
    const wrapper = shallowMount(DemoDialog, {
      propsData: { msg },
    });
    expect(wrapper.text()).toMatch(msg);
  });
});
