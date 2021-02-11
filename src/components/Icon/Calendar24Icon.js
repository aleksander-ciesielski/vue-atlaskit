import IconWrapper from './IconWrapper';
            import { h } from 'vue'

export default {
    name: 'Calendar24Icon',
    props: {
        size: {
            type: String
        },
        primaryColor: {
            type: String
        },
        secondaryColor: {
            type: String
        }
    },
    render() {
        // eslint-disable-next-line max-len
        return h(IconWrapper, { ...this.$props ,  innerHTML: '<svg viewBox="0 0 24 24"><path fill="#FF5630" fill-rule="evenodd" d="M16 6H8V5a1 1 0 10-2 0v1a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V8a2 2 0 00-2-2V5a1 1 0 00-2 0v1zM3 0h18a3 3 0 013 3v18a3 3 0 01-3 3H3a3 3 0 01-3-3V3a3 3 0 013-3zm3 10v8h12v-8H6z"/></svg>'  });
    }
};
