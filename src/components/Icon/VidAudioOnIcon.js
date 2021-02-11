import IconWrapper from './IconWrapper';
            import { h } from 'vue'

export default {
    name: 'VidAudioOnIcon',
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
        return h(IconWrapper, { ...this.$props ,  innerHTML: '<svg viewBox="0 0 24 24"><g fill="currentColor" fill-rule="evenodd"><rect x="9" y="3" width="6" height="12" rx="3"/><path d="M13 17.917c2.833-.476 5-2.941 5-5.91V9a1 1 0 00-2 0v3.006A4.001 4.001 0 0112 16c-2.205 0-4-1.795-4-3.994V9a1 1 0 10-2 0v3.006c0 2.96 2.162 5.433 5 5.91v2.075a1 1 0 102 0v-2.074z" fill-rule="nonzero"/></g></svg>'  });
    }
};
